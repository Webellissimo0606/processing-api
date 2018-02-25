-- Function: "BalloonPercentage_RetrieveAvailableByLoanID"(integer)

-- DROP FUNCTION "BalloonPercentage_RetrieveAvailableByLoanID"(integer);

CREATE OR REPLACE FUNCTION "BalloonPercentage_RetrieveAvailableByLoanID"(IN "@LoanID" integer)
  RETURNS TABLE("ID" numeric, "Value" numeric) AS
$BODY$
 DECLARE
	"@ProductCategoryID" int;
	"@EquipmentFinanceProductCategoryID" int;
	"@EquipmentFinanceProductTypeID" int;
	"@LoanPurposeTypeID" int;
	"@TermTypeID" int;
	"@MotorVehicleYear" int;
	"@LoanTermLengthCategoryID" int = 1;
	"@YearNow" int = Date_Part('year',now());
	"@MotorVehicleLoanCount" int = (select count(*) from "MotorVehicleLoanApplication" where "LoanID" = "@LoanID");
	"@EquipmentFinanceLoanCount" int = (select count(*) from "EquipmentFinanceLoanApplication" where "LoanID" = "@LoanID");
	
BEGIN
	-- get the loan purpose type id ... could be multiple, so get the dominant based on amount
	with "CTE_LoanPurpose" as(
		select	row_number() over (partition by "LoanID" order by "Amount" desc) as "loan_purpose_row",
				"LoanPurposeTypeID"
		from	"LoanPurpose"
		where	"LoanID" = "@LoanID"
	)
	select		"LoanPurposeTypeID"
	from		"CTE_LoanPurpose"
	where		"loan_purpose_row" = 1
	into		"@LoanPurposeTypeID";

	-- it could be a motor vehicle loan or an equipment finance loan ... if it is equipment finance, it could be an
	-- equipment finance motor vehicle loan ... we need to determine which one in order to know which stored procedure
	-- we need to run to get the available balloons and what variables need to be passed to it

	select		a."ProductCategoryID"
	from		"ApplicationContainer" a
	inner join	"Loan" l on l."ApplicationContainerID" = a."ID"
	where		l."ID" = "@LoanID"
	into		"@ProductCategoryID";

	if "@ProductCategoryID" = 2 THEN
		-- it is a consumer motor vehicle loan
		-- get the motor vehicle year ... could be many, so get the first by most recently modified
		with "CTE_MotorVehicles" as(
			select	row_number() over (partition by "LoanID" order by "LastUpdated" desc) as "motor_vehicle_row",
					"MotorVehicleYear"
			from	"MotorVehicleSecurity"
			where	"LoanID" = "@LoanID"
		)
		select	"MotorVehicleYear"
		from	"CTE_MotorVehicles"
		where	"motor_vehicle_row" = 1
		INTO	"@MotorVehicleYear";

		--Raise notice 'EquipmentFinanceProductTypeID%',"@EquipmentFinanceProductTypeID";
			--Raise notice 'LoanPurposeTypeID%',"@LoanPurposeTypeID";
			--Raise notice 'TermTypeID%',"@TermTypeID";
			--Raise notice 'MotorVehicleYear%',"@MotorVehicleYear";

		-- get the available balloons
      
	elsif "@ProductCategoryID" = 17 THEN
		-- it is an equipment finance loan
		-- check to see which type of equipment finance loan it is
		if "@MotorVehicleLoanCount" > 0 THEN
			-- it is an equipment finance motor vehicle loan
			-- get the motor vehicle year ... could be many, so get the first by most recently modified
			with "CTE_MotorVehicles" as(
				select	row_number() over (partition by "LoanID" order by "LastUpdated" desc) as "motor_vehicle_row",
						"MotorVehicleYear"
				from	"MotorVehicleSecurity"
				where	"LoanID" = "@LoanID"
			)
			select	"MotorVehicleYear"
			from	"CTE_MotorVehicles"
			where	"motor_vehicle_row" = 1
			INTO	"@MotorVehicleYear";

			-- get the equipment finance product type id and term type id
			select	"PMSEquipmentFinanceProductTypeID",
					"LoanTermTypeID"
			from	"MotorVehicleLoanApplication"
			where	"LoanID" = "@LoanID"
			INTO "@EquipmentFinanceProductTypeID","@TermTypeID";

			--Raise notice 'EquipmentFinanceProductTypeID%',"@EquipmentFinanceProductTypeID";
			--Raise notice 'LoanPurposeTypeID%',"@LoanPurposeTypeID";
			--Raise notice 'TermTypeID%',"@TermTypeID";
			--Raise notice 'MotorVehicleYear%',"@MotorVehicleYear";


		elsif "@EquipmentFinanceLoanCount" > 0 THEN
			-- it is an equipment finance loan
			-- get the equipment finance product category id ... bit of a hack as we do not appear to store it against the company
			select eflppp."EquipmentFinanceProductCategoryID"
			from "EquipmentFinanceLoanApplication" efla
			inner join "pms_EquipmentFinanceLoanProgramProductPricing" eflppp on eflppp."ID" = efla."PMSEquipmentFinanceLoanProgramProductPricingID"
			where efla."LoanID" = "@LoanID"
			INTO "@EquipmentFinanceProductCategoryID";

			-- get the equipment finance product type id and term type id
			select "PMSEquipmentFinanceProductTypeID"
			, "LoanTermTypeID"
			from "EquipmentFinanceLoanApplication"
			where "LoanID" = "@LoanID"
            INTO "@EquipmentFinanceProductTypeID", "@TermTypeID";

			--Raise notice 'EquipmentFinanceProductTypeID%',"@EquipmentFinanceProductTypeID";
			--Raise notice 'LoanPurposeTypeID%',"@LoanPurposeTypeID";
			--Raise notice 'TermTypeID%',"@TermTypeID";
			--Raise notice 'MotorVehicleYear%',"@MotorVehicleYear";

			
		end if;
	end if;

	RETURN QUERY
	select * from dblink('pms', format('select * from "BalloonPercent_RetrieveByProductTypeLoanPurposeTypeAndTermType"(%s, %s, %s, %s)',                               
                quote_nullable("@TermTypeID"),
                quote_nullable("@EquipmentFinanceProductTypeID"),
                quote_nullable("@LoanPurposeTypeID"),
                quote_nullable("@MotorVehicleYear")
            ))
            as t1(
				"ID" numeric(8,4),
				 "Value" numeric(8,4));

END
$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100
  ROWS 1000;
ALTER FUNCTION "BalloonPercentage_RetrieveAvailableByLoanID"(integer)
  OWNER TO admsql;
