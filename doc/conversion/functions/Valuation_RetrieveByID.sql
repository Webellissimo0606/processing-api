-- Function: "Valuation_RetrieveByID"(integer)

-- DROP FUNCTION "Valuation_RetrieveByID"(integer);

CREATE OR REPLACE FUNCTION "Valuation_RetrieveByID"("@ValuationID" integer)
  RETURNS SETOF refcursor AS
$BODY$
DECLARE
    csr1            refcursor;
    csr2            refcursor;
BEGIN
    
	-- first the general valuation detail record
    OPEN csr1 FOR
    SELECT  "ApplicationSecurityID", 
            "ValuationType"."ID" AS "ValuationTypeID", "ValuationType"."Name" AS "ValuationTypeName",
            "Active",
            "Created", "CreatedByPartyRoleID", "PartyName_ByPartyRoleID"("CreatedByPartyRoleID") AS "CreatedBy",
            "LastUpdated", "LastUpdatedByPartyRoleID", "PartyName_ByPartyRoleID"("LastUpdatedByPartyRoleID") AS "LastUpdatedBy"
    FROM    "Valuation"
    WHERE   "ID" = "@ValuationID";
    RETURN NEXT csr1;
    
    -- second, specialty motor vehicle valuation data
    OPEN csr2 FOR
    SELECT  *
    FROM    "MotorVehicleSecurityValuation"
    WHERE   "ValuationID" = "@ValuationID";
    RETURN NEXT csr2;	

    
END $BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100
  ROWS 1000;
ALTER FUNCTION "Valuation_RetrieveByID"(integer)
  OWNER TO admsql;
