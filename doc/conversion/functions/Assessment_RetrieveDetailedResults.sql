-- Function: "Assessment_RetrieveDetailedResults"(integer)

-- DROP FUNCTION "Assessment_RetrieveDetailedResults"(integer);

CREATE OR REPLACE FUNCTION "Assessment_RetrieveDetailedResults"("@ApplicationContainerID" integer)
  RETURNS SETOF refcursor AS
$BODY$
 DECLARE
	"@WorkbookHistoryID"		INT;
	csr1 refcursor;
	csr2 refcursor;
	csr3 refcursor;
BEGIN
	-- first grab the latest workbookhistory results for application container ID
	select "Assessment_RetrieveLatestWorkbookHistoryIDByAppContainerID"("@ApplicationContainerID")
	INTO	"@WorkbookHistoryID";

	OPEN csr1 FOR
	-- Table 1 - Workbook Histotry
	select "@WorkbookHistoryID" as "WorkbookHistoryID";
	RETURN NEXT csr1;

	OPEN csr2 FOR
	-- Table 2 - Retrieve result of all assessment by category
	select		"ID",
				"Name",
				case when "ReferCnt" > 0
					then TRUE -- cast('TRUE' as bool)
					else FALSE -- cast('FALSE' as bool)
				end "ISRefer",
				case when "OverideCnt" > 0
					then TRUE -- cast('TRUE' as bool)
					else FALSE --cast('FALSE' as bool)
				end "ISOverride"
	from 	(select		wrc."ID",
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
			and			wrt."Active" = TRUE
			group by	wrc."ID", wrc."Name") as x
	order by	"ID";
	RETURN NEXT csr2;

	-- Table 3 - Messages all rules
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
	and			wrt."Active" = TRUE
	order by	wrt."ID";
	RETURN NEXT csr3;
END
$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100
  ROWS 1000;
ALTER FUNCTION "Assessment_RetrieveDetailedResults"(integer)
  OWNER TO admsql;
