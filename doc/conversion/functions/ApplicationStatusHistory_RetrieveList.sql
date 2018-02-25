-- Function: "ApplicationStatusHistory_RetrieveList"(integer, integer)

-- DROP FUNCTION "ApplicationStatusHistory_RetrieveList"(integer, integer);

CREATE OR REPLACE FUNCTION "ApplicationStatusHistory_RetrieveList"(
    IN "@ApplicationContainerID" integer,
    IN "@UserPartyRoleID" integer)
  RETURNS TABLE(statusgroupname character varying, applicationstatushistorytypeid integer, applicationstatushistorytypename character varying, statusdate timestamp without time zone, userpartyroleid integer, statususer character varying) AS
$BODY$
 
DECLARE 
		"@Active" BOOLEAN := TRUE;

		"@ProductCategoryID" int;
        
BEGIN
 
	select "ProductCategoryID" INTO "@ProductCategoryID"
    from "ApplicationContainer" where "ID" = "@ApplicationContainerID";
    
	RETURN QUERY
    
	WITH CTE_StatusDates AS
			(
				select row_number() over (partition by ash."ApplicationContainerID", ast."ID" order by ash."LastUpdatedByPartyRoleID" desc) as "status_row"
				, asct."Name" as "StatusGroupName", ast."ID" as "ApplicationStatusHistoryTypeID", ast."Name" as "ApplicationStatusHistoryTypeName"
				, ash."StatusDate", ash."LastUpdatedByPartyRoleID" as "UserPartyRoleID", astpc."SortOrder"
				, "PartyName_ByPartyRoleID"(ash."LastUpdatedByPartyRoleID") as "StatusUser"
				from "ApplicationStatusType" ast
				inner join "ApplicationStatusTypeProductCategory" astpc on astpc."ApplicationStatusTypeID" = ast."ID" and astpc."ProductCategoryID" = "@ProductCategoryID"
				inner join "ApplicationStatusCategoryType" asct on asct."ID" = ast."QuickDisplayCategoryTypeID"
				left join "ApplicationStatusHistory" ash on ash."ApplicationStatusTypeID" = ast."ID" 
				and ash."ApplicationContainerID" = "@ApplicationContainerID" 
				and ash."Active" = "@Active"
			)
			select "StatusGroupName", "ApplicationStatusHistoryTypeID", "ApplicationStatusHistoryTypeName", "StatusDate", "UserPartyRoleID", "StatusUser"
			from CTE_StatusDates
			where ("status_row" = 1 or "status_row" is null)
			order by "SortOrder" asc;

END;
$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100
  ROWS 1000;
ALTER FUNCTION "ApplicationStatusHistory_RetrieveList"(integer, integer)
  OWNER TO admsql;
