-- Function: "ApplicationStatus_RetrieveSummaryByApplicationContainerID"(integer, integer)

-- DROP FUNCTION "ApplicationStatus_RetrieveSummaryByApplicationContainerID"(integer, integer);

CREATE OR REPLACE FUNCTION "ApplicationStatus_RetrieveSummaryByApplicationContainerID"(
    "@ApplicationContainerID" integer,
    "@UserPartyRoleID" integer)
  RETURNS SETOF refcursor AS
$BODY$
	declare v_ConditionVerificationStatusType_NotVerified int = 2;
	declare v_ApplicationPartyRoleType_Borrower int = 1;
	declare v_PartyRoleType_Applicant int = 11;
	declare v_EmploymentType_Current int = 1;
	declare refcrs1 refcursor;
	declare refcrs2 refcursor;
	declare refcrs3 refcursor;

BEGIN

--  RETURN QUERY
	open refcrs1 for
	with CTE_primaryBorrower as
	(
		select row_number() over (partition by apr."ApplicationContainerID" order by apr."ID") as "borrower_row"
		, apr."ApplicationContainerID", apr."ID" as "ApplicationPartyRoleID", "PartyName_ByPartyID"(p."ID") as "ApplicantName"
		, pc."Name" as "LoanType", pc."ID" as "ProductCategoryID"
		from "ApplicationPartyRole" apr
		inner join "PartyRole" pr on pr."ID" = apr."PartyRoleID"
		inner join "crumbs_PartyRole" cpr ON cpr."ID" = pr."CrumbsPartyRoleID"
		inner join "crumbs_Party" p on p."ID" = cpr."PartyID"
		inner join "ApplicationContainer" ac on ac."ID" = apr."ApplicationContainerID"
		inner join "ProductCategory" pc on pc."ID" = ac."ProductCategoryID"
		where apr."ApplicationContainerID" = "@ApplicationContainerID"
		and apr."ApplicationPartyRoleTypeID" = v_ApplicationPartyRoleType_Borrower
		and cpr."PartyRoleTypeID" = v_PartyRoleType_Applicant
	),
	CTE_CurrentStatus as
	(
		select row_number() over (partition by ash."ApplicationContainerID" order by ash."StatusDate" desc) as "status_row"
		, ash."ApplicationContainerID", ast."Name" as "CurrentStatus", ash."StatusDate" as "CurrentStatusDate"
		from "ApplicationStatusHistory" ash
		inner join "ApplicationStatusType" ast on ash."ApplicationStatusTypeID" = ast."ID"
		where ash."ApplicationContainerID" = "@ApplicationContainerID"
		and ash."Active" = TRUE
	)
	select pb."ApplicationContainerID", pb."ApplicationPartyRoleID", pb."ApplicantName" as "PrimaryBorrower", "CurrentStatus"
	, pb."LoanType" as "PrimaryProductType", "CurrentStatusDate", pb."ProductCategoryID" as "PrimaryProductTypeID"
	from CTE_primaryBorrower pb
	left join CTE_CurrentStatus cs on cs."ApplicationContainerID" = pb."ApplicationContainerID"
	where pb."borrower_row" = 1
	and (cs."status_row" = 1 or cs."status_row" is null);

	return next refcrs1;

	open refcrs2 for
	with CTE_PartyRoleSuit as
	(
		select cprs."ID" as "PartyRoleSuiteID", cprs."Name" as "PartyRoleSuiteName"
		from "crumbs_PartyRoleSuite" cprs
		where cprs."ID" in (1, 2, 19, 8) -- originator, broker, sales support
	),
	CTE_PartyRoles as
	(
		select cprt."Name" as "PartyRoleTypeName", cprt."ID" as "PartyRoleTypeID", "PartyName_ByPartyID"(cp."ID") as "PartyName"
		, apr."ApplicationPartyRoleTypeID", cprt."PartyRoleSuiteID" as "PartyRoleSuite", cprs."Name" as "SuiteTypeName", cpr."PartyID"
		, cpr."ID" as "PartyRoleID"
		from "ApplicationPartyRole" apr
		inner join "PartyRole" pr on pr."ID" = apr."PartyRoleID"
		inner join "crumbs_PartyRole" cpr on cpr."ID" = pr."CrumbsPartyRoleID"
		inner join "crumbs_PartyRoleType" cprt on cpr."PartyRoleTypeID" = cprt."ID"
		inner join "crumbs_Party" cp on cp."ID" = cpr."PartyID"
		inner join "crumbs_PartyRoleSuite" cprs on cprs."ID" = cprt."PartyRoleSuiteID"
		where apr."ApplicationContainerID" = "@ApplicationContainerID"
		and cpr."PartyRoleTypeID" <> 11
	)
	select coalesce(cpr."PartyRoleTypeName", 'Not Selected') as "PartyRoleTypeName"
	,coalesce(cpr."PartyRoleTypeID", 0) as "PartyRoleTypeID", coalesce(cpr."PartyName", 'Not Selected') as "PartyName"
	,coalesce(cpr."ApplicationPartyRoleTypeID", 0) as "ApplicationPartyRoleTypeID", cte."PartyRoleSuiteID" as "PartyRoleSuite"
	,cte."PartyRoleSuiteName" as "SuiteTypeName", coalesce(cpr."PartyID", 0) as "PartyID", coalesce(cpr."PartyRoleID", 0) as "PartyRoleID"
	from CTE_PartyRoleSuit cte
	left join CTE_PartyRoles cpr on cpr."PartyRoleSuite" = cte."PartyRoleSuiteID";

	return next refcrs2;

	open refcrs3 for
	-- linked applications
	-- hard code as linked apps not setup in V8 yet
	select "@ApplicationContainerID" as "ApplicationContainerID";

	return next refcrs3;

END
$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100
  ROWS 1000;
ALTER FUNCTION "ApplicationStatus_RetrieveSummaryByApplicationContainerID"(integer, integer)
  OWNER TO admsql;
