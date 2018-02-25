-- Function: "Assessment_RetrieveSummaryResults"(integer)

-- DROP FUNCTION "Assessment_RetrieveSummaryResults"(integer);

CREATE OR REPLACE FUNCTION "Assessment_RetrieveSummaryResults"("@ApplicationContainerID" integer)
  RETURNS SETOF refcursor AS
$BODY$
 DECLARE
	"@WorkbookHistoryID"	INT ;
	csr1					refcursor;
	csr2					refcursor;
	csr3					refcursor;
	csr4					refcursor;

	
BEGIN

	

	-- first grab the latest workbookhistory results for application container ID
    select "Assessment_RetrieveLatestWorkbookHistoryIDByAppContainerID"("@ApplicationContainerID")
    INTO "@WorkbookHistoryID";

    -- Table 1 - last assessment workbook history ID for application container
    OPEN csr1 FOR
    select "@WorkbookHistoryID" as "WorkbookHistoryID";
    RETURN NEXT csr1;

	-- Table 2 - Summary of failed or overriden values by category
	OPEN csr2 FOR
	select	"ID",
			"Name",
			case when "ReferCnt" > 0
				then cast('TRUE' as bool)
				else cast('FALSE' as bool)
			end "ISRefer",
			case when "OverideCnt" > 0
				then cast('TRUE' as bool)
				else cast('FALSE' as bool)
			end "ISOverride"
	from (
		 select		wrc."ID",
					wrc."Name",
					SUM(case when wvh."Value" in ('Decline','Refer')
							then 1
							else 0
						end) as "ReferCnt",
					SUM(case when wro."OverrideValue" is not null
							then 1
							else 0
						end) as "OverideCnt"
		from		"WorkbookValueHistory" as wvh
		inner join	"WorkbookRuleType" as wrt on wvh."WorkbookParameterTypeID" = wrt."WorkbookParameterTypeID"
		inner join	"WorkbookRuleCategory" as wrc on wrt."WorkbookRuleCategoryID" = wrc."ID"
		left join	"WorkbookRuleOverrideValue" as wro on wro."WorkbookRuleTypeID" = wrt."ID" and wro."ApplicationContainerID" = "@ApplicationContainerID"
		where		wvh."WorkbookHistoryID" = "@WorkbookHistoryID"
		and			(COALESCE(wvh."Value",'x') <> 'Pass' OR wro."OverrideValue" is not null)
		and			wrt."Active" = TRUE
		group by 	wrc."ID", wrc."Name") as x
	order by	"ID";
	RETURN NEXT csr2;

	-- Table 3 - Messages for any failed rules (overriden not required)
	OPEN csr3 FOR
	select		wrt."ID",
				wrt."Name",
				case when wvh."Value" = 'Decline'
						then wrt."FailureMessage"
						else wrt."ReferMessage"
				end as "Message"
	from		"WorkbookValueHistory" as wvh
	inner join	"WorkbookRuleType" as wrt on wvh."WorkbookParameterTypeID" = wrt."WorkbookParameterTypeID"
	inner join	"WorkbookRuleCategory" as wrc on wrt."WorkbookRuleCategoryID" = wrc."ID"
	inner join	"WorkbookHistory" as wh on wh."ID" = wvh."WorkbookHistoryID"
	left join	"WorkbookRuleOverrideValue" as wro on wro."WorkbookRuleTypeID" = wrt."ID" and wro."ApplicationContainerID" = wh."ApplicationContainerID"
	where		wvh."WorkbookHistoryID" = "@WorkbookHistoryID"
	and			COALESCE(wvh."Value",'x') <> 'Pass'
	and			wro."OverrideValue" is null
	and			wrt."Active" = TRUE
	order by	wrt."ID";
	RETURN NEXT csr3;


	OPEN csr4 FOR
	Select * from "Application_RetrieveApplicationFirstmacCreditScore"("@ApplicationContainerID");
	RETURN NEXT csr4;
	
END
$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100
  ROWS 1000;
ALTER FUNCTION "Assessment_RetrieveSummaryResults"(integer)
  OWNER TO admsql;
