-- Function: "Loan_RetrieveAmountSummary"(integer, integer)

-- DROP FUNCTION "Loan_RetrieveAmountSummary"(integer, integer);

CREATE OR REPLACE FUNCTION "Loan_RetrieveAmountSummary"(
    IN "@ApplicationContainerID" integer,
    IN "@UserPartyRoleID" integer)
  RETURNS TABLE("LoanID" integer, "Purpose" character varying, "Product" character varying, "Asset" character varying, "Price" numeric, "Deposit" numeric, "Fees" numeric, "ExternalBrokerageAmount" numeric, "GSTAmount" numeric) AS
$BODY$
	declare "@ProductCategoryID" int;
	declare "@MotorVehicleLoanCount" int := 0;
BEGIN
	SELECT "ProductCategoryID"
	INTO "@ProductCategoryID"
	FROM "ApplicationContainer"
	WHERE "ID" = "@ApplicationContainerID";

	IF "@ProductCategoryID" not in (2, 17)
	-- @ProductCategoryID not in (2, 17)
		THEN RAISE EXCEPTION 'This stored procedure is not implemented for the product category specified by the ApplicationContainerID on input';
	END IF;
	-- @ProductCategoryID not in (2, 17)

	-- Check for EquipmentFinance Car Loans
	IF "@ProductCategoryID" = 17
		THEN SELECT count(*) FROM "MotorVehicleLoanApplication"
		INTO "@MotorVehicleLoanCount"
		WHERE "ApplicationContainerID" = "@ApplicationContainerID";
	END IF;

	CREATE TEMP TABLE "temp_table_Loan_RetrieveAmountSummary" (
		"LoanID" INTEGER
		, "Purpose" CHARACTER VARYING
		, "Product" CHARACTER VARYING
		, "Asset" CHARACTER VARYING
		, "Price" NUMERIC(18,4)
		, "Deposit" NUMERIC(18,4)
		, "Fees" NUMERIC(18,4)
		, "ExternalBrokerageAmount" NUMERIC(18,4)
		, "GSTAmount" NUMERIC(18,4)
	);

	IF "@ProductCategoryID" = 2 OR "@MotorVehicleLoanCount" > 0
	-- @ProductCategoryID = 2
		THEN
			
			WITH "CTE_MotorVehicleLoan"
			as
			(
				select l."ID" as "LoanID", lpt."Name" as "LoanPurpose", mvla."LoanAmount", p."Name" AS "LoanProduct"
				, (coalesce(mvla."MDR", 0) + coalesce(mvla."Margin", 0)) as "Rate", "LoanDescriptionByLoanID"(l."ID") as "LoanDescription"
				, (mvla."ExternalBrokeragePercentage" / 100) as "ExternalBrokeragePercentage", mvla."GSTAmount", lp."Amount" as "LoanPurposeAmount", mvla."GSTNotFinanced"
				, (case when coalesce(mvla."GSTNotFinanced",false) = true then mvla."GSTAmount" else 0 end) as "GSTNotFinancedAmount"
				from "Loan" l
				inner join "MotorVehicleLoanApplication" mvla on mvla."LoanID" = l."ID"
				inner join "LoanPurpose" lp on lp."LoanID" = l."ID"
				inner join "LoanPurposeType" lpt on lpt."ID" = lp."LoanPurposeTypeID"
				left join "pms_MotorVehicleLoanProgramProductPricing" pms on pms."ID" = mvla."PMSMotorVehicleLoanProgramProductPricingID" --and pms."Type" = 'M'
                left join "pms_ProgramProduct" pp on pp."ID" = pms."ProgramProductID"
				left join "pms_MotorVehicleLoanProduct" mvlp on mvlp."ProductID" = pp."ProductID"
				left join "pms_Product" p on p."ID" = mvlp."ProductID"
				where l."Active" = true
				and l."ApplicationContainerID" = "@ApplicationContainerID"
			),
			"CTE_MotorVehicleSecurity"
			as
			(
				select row_number() over (partition by mvs."LoanID" order by mvs."SecurityID") as "motor_vehicle_security_row"
				, mvs."LoanID", mvs."MotorVehicleYear", mvm."MotorVehicleMakeName", mvmo."MotorVehicleModelName", mvs."PurchasePrice"
				from "CTE_MotorVehicleLoan" cte
				inner join "MotorVehicleSecurity" mvs on mvs."LoanID" = cte."LoanID"
				left join "retail_MotorVehicleMake" mvm on mvm."MotorVehicleMakeID" = mvs."RetailMakeID"
				left join "retail_MotorVehicleModel" mvmo on mvmo."MotorVehicleModelID" = mvs."RetailModelID"
			),
			"CTE_Deposits"
			as
			(
				select sum(coalesce(mvla."LoanAmount", 0)) as "Price", sum(coalesce(d."Amount", 0)) as "Deposit"
				from "MotorVehicleLoanApplication" mvla
				inner join "Loan" l on l."ID" = mvla."LoanID"
				inner join "Deposit" d on d."LoanID" = l."ID"
				where l."ApplicationContainerID" = "@ApplicationContainerID"
			),
			"CTE_Fees"
			as
			(
				select sum(coalesce(acf."Amount", 0)) as "Fees"
				from "MotorVehicleLoanApplication" mvla
				inner join "Loan" l on l."ID" = mvla."LoanID"
				inner join "ApplicationContainerFee" acf on acf."ApplicationContainerID" = l."ApplicationContainerID"
				where l."ApplicationContainerID" = "@ApplicationContainerID"
			)
			INSERT INTO "temp_table_Loan_RetrieveAmountSummary"
			--("LoanID", "Purpose", "Product", "Asset", "Price", "Deposit", "Fees", "ExternalBrokerageAmount", "GSTAmount")
			select mvl."LoanID", mvl."LoanPurpose" as "Purpose", mvl."LoanDescription" as "Product", coalesce(coalesce(cast(mvs."MotorVehicleYear" as varchar(10)), '') || ' ' ||
			coalesce(mvs."MotorVehicleMakeName", '') || ' ' || coalesce(mvs."MotorVehicleModelName", ''), 'No Car Selected') as "Asset"
			, mvl."LoanPurposeAmount" as "Price" , amt."Deposit", cf."Fees"
			, (case when mvl."ExternalBrokeragePercentage" is not null and mvl."ExternalBrokeragePercentage" <> 0
				then cast((coalesce(mvl."LoanPurposeAmount", 0) - coalesce(mvl."GSTNotFinancedAmount", 0) - coalesce(amt."Deposit", 0)) * coalesce(mvl."ExternalBrokeragePercentage", 0) as numeric(18,4)) else 0 end) as "ExternalBrokerageAmount"
			, mvl."GSTAmount"
			from "CTE_MotorVehicleLoan" mvl
			left join "CTE_MotorVehicleSecurity" mvs on mvs."LoanID" = mvl."LoanID" and mvs."motor_vehicle_security_row" = 1
			cross join "CTE_Deposits" amt
			cross join "CTE_Fees" cf;
	-- @ProductCategoryID = 2

	ELSIF "@ProductCategoryID" = 17
	-- @ProductCategoryID = 17
		THEN
			
			WITH "CTE_EquipmentFinanceLoan"
			as
			(
				select l."ID" as "LoanID", lpt."Name" as "LoanPurpose", efla."LoanAmount", p."Name" AS "LoanProduct"
				, (coalesce(efla."MDR", 0) + coalesce(efla."Margin", 0)) as "Rate", "LoanDescriptionByLoanID"(l."ID") as "LoanDescription"
				, (efla."ExternalBrokeragePercentage" / 100) as "ExternalBrokeragePercentage", efla."GSTAmount", lp."Amount" as "LoanPurposeAmount", efla."GSTNotFinanced"
				, (case when coalesce(efla."GSTNotFinanced",false) = true then efla."GSTAmount" else 0 end) as "GSTNotFinancedAmount"
				from "Loan" l
				inner join "EquipmentFinanceLoanApplication" efla on efla."LoanID" = l."ID"
				inner join "LoanPurpose" lp on lp."LoanID" = l."ID"
				inner join "LoanPurposeType" lpt on lpt."ID" = lp."LoanPurposeTypeID"
				left join "pms_EquipmentFinanceLoanProgramProductPricing" pms on pms."ID" = efla."PMSEquipmentFinanceLoanProgramProductPricingID" --and pms."Type" = 'M'
                left join "pms_ProgramProduct" pp on pp."ID" = pms."ProgramProductID"
				left join "pms_MotorVehicleLoanProduct" mvlp on mvlp."ProductID" = pp."ProductID"
				left join "pms_Product" p on p."ID" = mvlp."ProductID"
				where l."Active" = true
				and l."ApplicationContainerID" = "@ApplicationContainerID"
			),
			"CTE_EquipmentFinanceSecurity"
			as
			(
				select row_number() over (partition by efs."LoanID" order by efs."SecurityID") as "equipment_finance_security_row"
				, efs."LoanID", efs."Description", efs."PurchasePrice"
				from "CTE_EquipmentFinanceLoan" cte
				inner join "EquipmentFinanceSecurity" efs on efs."LoanID" = cte."LoanID"
			),
			"CTE_Deposits"
			as
			(
				select sum(coalesce(efla."LoanAmount", 0)) as "Price", sum(coalesce(d."Amount", 0)) as "Deposit"
				from "EquipmentFinanceLoanApplication" efla
				inner join "Loan" l on l."ID" = efla."LoanID"
				inner join "Deposit" d on d."LoanID" = l."ID"
				where l."ApplicationContainerID" = "@ApplicationContainerID"
			),
			"CTE_Fees"
			as
			(
				select sum(COALESCE(acf."Amount", 0)) as "Fees"
				from "EquipmentFinanceLoanApplication" efla
				inner join "Loan" l on l."ID" = efla."LoanID"
				inner join "ApplicationContainerFee" acf on acf."ApplicationContainerID" = l."ApplicationContainerID"
				where l."ApplicationContainerID" = "@ApplicationContainerID"
			)
			INSERT INTO "temp_table_Loan_RetrieveAmountSummary"
			--("LoanID", "Purpose", "Product", "Asset", "Price", "Deposit", "Fees", "ExternalBrokerageAmount", "GSTAmount"
			select efl."LoanID", efl."LoanPurpose" as "Purpose", efl."LoanDescription" as "Product", coalesce(efs."Description", 'No Equipment Selected') as "Asset"
			--, efs."PurchasePrice" as "Price"
			, efl."LoanPurposeAmount" as "Price", amt."Deposit", cf."Fees"

			, (case when efl."ExternalBrokeragePercentage" is not null and efl."ExternalBrokeragePercentage" <> 0
			then cast((coalesce(efl."LoanPurposeAmount", 0) - coalesce(efl."GSTNotFinancedAmount", 0) - coalesce(amt."Deposit", 0)) * coalesce(efl."ExternalBrokeragePercentage", 0) as numeric(18,4)) else 0 end) as "ExternalBrokerageAmount"
			, efl."GSTAmount"
			from "CTE_EquipmentFinanceLoan" efl
			left join "CTE_EquipmentFinanceSecurity" efs on efs."LoanID" = efl."LoanID" and efs."equipment_finance_security_row" = 1
			cross join "CTE_Deposits" amt
			cross join "CTE_Fees" cf;

	END IF; -- @ProductCategoryID = 17
 
 RETURN QUERY
 
 SELECT * from "temp_table_Loan_RetrieveAmountSummary";
 
 DROP TABLE "temp_table_Loan_RetrieveAmountSummary";

END
$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100
  ROWS 1000;
ALTER FUNCTION "Loan_RetrieveAmountSummary"(integer, integer)
  OWNER TO admsql;
