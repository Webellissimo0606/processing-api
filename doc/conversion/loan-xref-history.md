# Loan Xref History  Conversion

### List Loan Xref Histories for an application container

| Route | Method | Fill in Response Document |
|---|---|---|
| `/application/:id/loanxrefhistory` | GET | No |

#### Conversion

Param :id is required integer

Convert to sequelize code.

Pull back the LoanXrefHistory for each loan where the record is the latest for the loan.

Convert to sequelize code, ensuring reference tables. No need for PartyName function, the PartyRole table needs to be returned in the references.

A reference but do not mimic is function:

```
RETURN QUERY
    WITH RECURSIVE CTE_LoanXrefHistories
            as
            (
                select row_number() over (partition by lxh."LoanID" order by lxh."EffectiveDate") as lsxh_row
                , lxh."ID" AS "LoanXrefHistoryID"
                from "Loan" L
                LEFT JOIN "LoanXrefHistory" lxh on lxh."LoanID" = L."ID"
                WHERE L."ApplicationContainerID" = "@ApplicationContainerID"
            )
    SELECT 
      lxh."ID",
      lxh."LoanID",
      lxh."Xref",
      lxh."EffectiveDate",
      lxh."Created",
      lxh."CreatedByPartyRoleID",
      "PartyName_ByPartyRoleID"(lxh."CreatedByPartyRoleID") AS "CreatedByPartyRoleName",
      lxh."LastUpdated",
      lxh."LastUpdatedByPartyRoleID",
      "PartyName_ByPartyRoleID"(lxh."LastUpdatedByPartyRoleID") AS "LastUpdatedByPartyRoleName",
      lxh."TontoID",
      lxh."JusticeID"
    FROM CTE_LoanXrefHistories clxh
    LEFT JOIN "LoanXrefHistory" lxh on lxh."ID" = clxh."LoanXrefHistoryID" AND clxh.lsxh_row = 1;
```


### Retrieve

| Route | Method | Fill in Response Document |
|---|---|---|
| `/loanxrefhistory/:id` | GET | No |

#### Conversion

Param :id is required integer

Convert to sequelize code.

Pull back the latest LoanXrefHistory for a specific id.


### Retrieve by loan

| Route | Method | Fill in Response Document |
|---|---|---|
| `/loan/:id/loanxrefhistory` | GET | No |

#### Conversion

Param :id is required integer

Convert to sequelize code.

Pull back the latest LoanXrefHistory for a specific loan.

A reference but do not mimic is function:

```
 RETURN QUERY
  SELECT lxh."ID",
  lxh."LoanID",
  lxh."Xref",
  lxh."EffectiveDate",
  lxh."Created",
  lxh."CreatedByPartyRoleID",
  "PartyName_ByPartyRoleID"(lxh."CreatedByPartyRoleID") AS "CreatedByPartyRoleName",
  lxh."LastUpdated",
  lxh."LastUpdatedByPartyRoleID",
  "PartyName_ByPartyRoleID"(lxh."LastUpdatedByPartyRoleID") AS "LastUpdatedByPartyRoleName",
  lxh."TontoID",
  lxh."JusticeID"
  FROM
  "LoanXrefHistory" lxh  
  WHERE lxh."LoanID" = "@LoanID"  
  ORDER BY lxh."EffectiveDate" DESC;
```



### Retrieve by Xref

| Route | Method | Fill in Response Document |
|---|---|---|
| `/xref/:id/loanxrefhistory` | GET | No |

#### Conversion

Param :id is required integer

Convert to sequelize code.

Pull back the latest LoanXrefHistory for a specific xref.

A reference but do not mimic is function:

```
RETURN QUERY
  SELECT lxh."ID",
  lxh."LoanID",
  lxh."Xref",
  lxh."EffectiveDate",
  lxh."Created",
  lxh."CreatedByPartyRoleID",
  "PartyName_ByPartyRoleID"(lxh."CreatedByPartyRoleID") AS "CreatedByPartyRoleName",
  lxh."LastUpdated",
  lxh."LastUpdatedByPartyRoleID",
  "PartyName_ByPartyRoleID"(lxh."LastUpdatedByPartyRoleID") AS "LastUpdatedByPartyRoleName",
  lxh."TontoID",
  lxh."JusticeID"
  FROM
  "LoanXrefHistory" lxh
  WHERE lxh."Xref" = "@Xref";
```


### Save

| Route | Method | Fill in Response Document |
|---|---|---|
| `/loanxrefhistory/:id` | POST | No |

#### Conversion

Param :id is required integer

Both body params are optional

use the new id to return the record.

Call function:

LoanXrefHistory_CreateUpdate

Definition:

CREATE OR REPLACE FUNCTION "LoanXrefHistory_CreateUpdate"(
    IN "@LoanID" integer,
    IN "@CreatedByPartyRoleID" integer,
    IN "@Xref" integer DEFAULT NULL::integer,
    IN "@EffectiveDate" date DEFAULT NULL::date)

Returns: TABLE("ID" integer)
