# Final Approval Conversion

#### Notes

This api will use a common response throughout many of its apis. Please ensure this is consistent.

### List final approvals for an application container

| Route | Method | Fill in Response Document |
|---|---|---|
| `/application/:id/finalapprovals` | GET | Yes |

#### Conversion

Param :id is required integer

Convert to sequelize code, ensuring reference tables. No need for PartyName function, the PartyRole table needs to be returned in the references.

Return all data, not just columns in function. This would be FinalApprovalProcessHistory and related FinalApprovalProcessType and party role tables as above.

Reference function code

```
RETURN QUERY
    SELECT faph."ID",  faph."FinalApprovalProcessTypeID", fapt."Name" AS "FinalApprovalProcessTypeName",
    faph."Created", faph."CreatedByPartyRoleID"
    faph."Completed", faph."CompletedByPartyRoleID"
    FROM "FinalApprovalProcessHistory" faph
    INNER JOIN "FinalApprovalProcessType" fapt  on fapt."ID" = faph."FinalApprovalProcessTypeID"
    WHERE faph."ApplicationContainerID" = "@ApplicationContainerID"
    ORDER BY faph."Created";
```



### Get the latest final approval for an application container

| Route | Method | Fill in Response Document |
|---|---|---|
| `/application/:id/finalapproval` | Get | Yes |

#### Conversion

Param :id is required integer

Convert to sequelize code, ensuring reference tables. No need for PartyName function, the PartyRole table needs to be returned in the references.

Note: this will get the latest id then call the same function as #Get final approval process item#

Return all data, not just columns in function. This would be FinalApprovalProcessHistory and related FinalApprovalProcessType and party role tables as above.

*RECOMMENDATION*

Call the retrieve service as created below.

Reference function code

```
    SELECT faph."ID"
    FROM "FinalApprovalProcessHistory" faph
    WHERE faph."ApplicationContainerID" = "@ApplicationContainerID"
    ORDER BY faph."Created" DESC
    LIMIT 1
    INTO final_approval_history_id;

    RETURN QUERY SELECT * FROM "FinalApprovalProcess_Retrieve"(final_approval_history_id, "@UserPartyRoleID");
```



### Get final approval process item

| Route | Method | Fill in Response Document |
|---|---|---|
| `/finalapproval/:id` | GET | No |

#### Conversion


Param :id is required integer

Convert to sequelize code, ensuring reference tables. No need for PartyName function, the PartyRole table needs to be returned in the references.

Return all data, not just columns in function. This would be FinalApprovalProcessHistory and related FinalApprovalProcessType and party role tables as above.

*RECOMMENDATION*

Convert to a service so it is reuseable and unit testable.

Reference function code

```

    RETURN QUERY
    SELECT faph."ID",  faph."FinalApprovalProcessTypeID", fapt."Name" AS "FinalApprovalProcessTypeName",
    faph."Created", faph."CreatedByPartyRoleID",
    faph."Completed", faph."CompletedByPartyRoleID"
    FROM "FinalApprovalProcessHistory" faph
    INNER JOIN "FinalApprovalProcessType" fapt  on fapt."ID" = faph."FinalApprovalProcessTypeID"
    WHERE faph."ID" = "@ID";
```

### Save final approval process

| Route | Method | Fill in Response Document |
|---|---|---|
| `/finalapproval/:id` | PUT | Yes |

#### Conversion


Param :id is required integer

Use Function:

FinalApprovalProcess_UpdateCreate

Definition:

CREATE OR REPLACE FUNCTION "FinalApprovalProcess_UpdateCreate"(
    IN "@ApplicationContainerID" integer,
    IN "@UserPartyRoleID" integer,
    IN "@FinalApprovalProcessTypeID" integer DEFAULT NULL::integer,
    IN "@FinalApprovalProcessHistoryID" integer DEFAULT NULL::integer)

*RECOMMENDATION*

Use the Id from the response only and return the retrieve output to keep consistent item as per the retrieve section above.

Returns:

TABLE("ID" integer, "FinalApprovalProcessTypeID" integer, "FinalApprovalProcessTypeName" character varying, "Created" timestamp without time zone, "CreatedByPartyRoleID" integer, "CreatedByPartyRoleName" character varying, "Completed" timestamp without time zone, "CompletedByPartyRoleID" integer, "CompletedByPartyRoleName" character varying)

### Reset the final approval process for an application container

| Route | Method | Fill in Response Document |
|---|---|---|
| `/finalapproval/:id/reset` | PUT | Yes |

#### Conversion

All inputs are required integers.

Use function:

FinalApprovalProcess_Reset

Definition:
CREATE OR REPLACE FUNCTION "FinalApprovalProcess_Reset"(
    IN "@ApplicationContainerID" integer,
    IN "@UserPartyRoleID" integer)

Returns: VOID

### Get the next job type for an application container

| Route | Method | Fill in Response Document |
|---|---|---|
| `/finalapproval/:id/next` | GET | No |

#### Conversion

All inputs are required integers.

Use function:

FinalApprovalProcess_DetermineNext

Definition:

CREATE OR REPLACE FUNCTION "FinalApprovalProcess_DetermineNext"(
    IN "@ApplicationContainerID" integer,
    IN "@UserPartyRoleID" integer,
    IN "@FinalApprovalProcessTypeID" integer DEFAULT NULL::integer)

Returns: INT
