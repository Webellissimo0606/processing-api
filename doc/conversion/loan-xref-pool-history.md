# Loan Xref Pool History  Conversion

### List Loan Xref Pool Histories for an application container

| Route | Method | Fill in Response Document |
|---|---|---|
| `/application/:id/loanxrefpoolhistory` | GET | YES |

#### Conversion

Param :id is required integer

Convert to sequelize code.

Pull back all loan xref pool history records for an application.
Ensure the pool record and any transfers are also returned

A reference but do not mimic is function:

```
OPEN csr1 FOR

          SELECT lxph."ID",
          lxph."LoanXrefHistoryID",
          lxph."PoolID",
          lxph."EffectiveDate",
          lxph."Created",
          lxph."CreatedByPartyRoleID",
          "PartyName_ByPartyRoleID"(lxph."CreatedByPartyRoleID") AS "CreatedByPartyRoleName",
          lxph."LastUpdated",
          lxph."LastUpdatedByPartyRoleID",
          "PartyName_ByPartyRoleID"(lxph."LastUpdatedByPartyRoleID") AS "LastUpdatedByPartyRoleName",
          lxph."TontoID",
          lxph."JusticeID",
          lxph."AccountsNotified",
          p."Name" AS "PoolName",
          p."Active",
          p."IsDefault",
          p."Name" AS "PoolName",
          p."ShortName",
          p."UltracsName"
          FROM
          "Loan" l
          INNER JOIN  "LoanXrefHistory" lxh on lxh."LoanID" = l."ID"
          INNER JOIN "LoanXrefPoolHistory" lxph on lxph."LoanXrefHistoryID" = lxh."ID"
          INNER JOIN "Pool" p on p."ID" = lxph."PoolID"
          WHERE l."ApplicationContainerID" = "@ApplicationContainerID"
          ORDER BY l."ID", lxh."EffectiveDate" DESC, lxph."EffectiveDate" DESC;
          
          
    RETURN NEXT csr1;

    OPEN csr2 FOR

    SELECT 
          s."ID",
          s."LoanXrefPoolHistoryID",
          s."LoanXrefPoolHistoryStatusTypeID",
          st."Name" AS "LoanXrefPoolHistoryStatusTypeName",
          s."Comments",
          s."Created",
          s."CreatedByPartyRoleID",       
          "PartyName_ByPartyRoleID"(s."CreatedByPartyRoleID") AS "CreatedByPartyRoleName",
          s."Active"
          FROM
           "Loan" l
          INNER JOIN  "LoanXrefHistory" lxh on lxh."LoanID" = l."ID"
          INNER JOIN "LoanXrefPoolHistory" lxph on lxph."LoanXrefHistoryID" = lxh."ID"        
          INNER JOIN "LoanXrefPoolHistoryStatus" s on s."LoanXrefPoolHistoryID" = lxph."ID"
          INNER JOIN "LoanXrefPoolHistoryStatusType" st on st."ID" = s."LoanXrefPoolHistoryStatusTypeID"
          WHERE l."ApplicationContainerID" = "@ApplicationContainerID"
          ORDER BY l."ID", lxh."EffectiveDate" DESC, lxph."EffectiveDate" DESC;
    
    
    RETURN NEXT csr2;

```


### List Loan Xref Pool Histories for a loan

| Route | Method | Fill in Response Document |
|---|---|---|
| `/loan/:id/loanxrefpoolhistories` | GET | YES |

#### Conversion

Param :id is required integer

Convert to sequelize code.

Pull back all loan xref pool history records for an particular loan.
Ensure the pool record and any transfers are also returned

A reference but do not mimic is function:

```
OPEN csr1 FOR

          SELECT lxph."ID",
          lxph."LoanXrefHistoryID",
          lxph."PoolID",
          lxph."EffectiveDate",
          lxph."Created",
          lxph."CreatedByPartyRoleID",
          "PartyName_ByPartyRoleID"(lxph."CreatedByPartyRoleID") AS "CreatedByPartyRoleName",
          lxph."LastUpdated",
          lxph."LastUpdatedByPartyRoleID",
          "PartyName_ByPartyRoleID"(lxph."LastUpdatedByPartyRoleID") AS "LastUpdatedByPartyRoleName",
          lxph."TontoID",
          lxph."JusticeID",
          lxph."AccountsNotified",
          p."Name" AS "PoolName",
          p."Active",
          p."IsDefault",
          p."Name" AS "PoolName",
          p."ShortName",
          p."UltracsName"
          FROM
          "LoanXrefHistory" lxh
          INNER JOIN "LoanXrefPoolHistory" lxph on lxph."LoanXrefHistoryID" = lxh."ID"
          INNER JOIN "Pool" p on p."ID" = lxph."PoolID"
          WHERE lxh."LoanID" = "@LoanID"
          ORDER BY lxh."EffectiveDate" DESC, lxph."EffectiveDate" DESC;
          
          
    RETURN NEXT csr1;

    OPEN csr2 FOR

    SELECT 
          s."ID",
          s."LoanXrefPoolHistoryID",
          s."LoanXrefPoolHistoryStatusTypeID",
          st."Name" AS "LoanXrefPoolHistoryStatusTypeName",
          s."Comments",
          s."Created",
          s."CreatedByPartyRoleID",       
          "PartyName_ByPartyRoleID"(s."CreatedByPartyRoleID") AS "CreatedByPartyRoleName",
          s."Active"
          FROM
          "LoanXrefHistory" lxh
          INNER JOIN "LoanXrefPoolHistory" lxph on lxph."LoanXrefHistoryID" = lxh."ID"        
          INNER JOIN "LoanXrefPoolHistoryStatus" s on s."LoanXrefPoolHistoryID" = lxph."ID"
          INNER JOIN "LoanXrefPoolHistoryStatusType" st on st."ID" = s."LoanXrefPoolHistoryStatusTypeID"
          WHERE lxh."LoanID" = "@LoanID"
          ORDER BY lxh."EffectiveDate" DESC, lxph."EffectiveDate" DESC;
    
    
    RETURN NEXT csr2;

```

### List Loan Xref Pool Histories for a xref

| Route | Method | Fill in Response Document |
|---|---|---|
| `/xref/:id/loanxrefpoolhistories` | GET | YES |

#### Conversion

Param :id is required integer

Convert to sequelize code.

Pull back all loan xref pool history records for an particular xref.
Ensure the pool record and any transfers are also returned

A reference but do not mimic is function:

```
OPEN csr1 FOR

          SELECT lxph."ID",
          lxph."LoanXrefHistoryID",
          lxph."PoolID",
          lxph."EffectiveDate",
          lxph."Created",
          lxph."CreatedByPartyRoleID",
          "PartyName_ByPartyRoleID"(lxph."CreatedByPartyRoleID") AS "CreatedByPartyRoleName",
          lxph."LastUpdated",
          lxph."LastUpdatedByPartyRoleID",
          "PartyName_ByPartyRoleID"(lxph."LastUpdatedByPartyRoleID") AS "LastUpdatedByPartyRoleName",
          lxph."TontoID",
          lxph."JusticeID",
          lxph."AccountsNotified",
          p."Name" AS "PoolName",
          p."Active",
          p."IsDefault",
          p."Name" AS "PoolName",
          p."ShortName",
          p."UltracsName"
          FROM
          "LoanXrefHistory" lxh
          INNER JOIN "LoanXrefPoolHistory" lxph on lxph."LoanXrefHistoryID" = lxh."ID"
          INNER JOIN "Pool" p on p."ID" = lxph."PoolID"
          WHERE lxh."Xref" = "@Xref"
          ORDER BY lxh."EffectiveDate" DESC, lxph."EffectiveDate" DESC;
          
          
    RETURN NEXT csr1;

    OPEN csr2 FOR

    SELECT 
          s."ID",
          s."LoanXrefPoolHistoryID",
          s."LoanXrefPoolHistoryStatusTypeID",
          st."Name" AS "LoanXrefPoolHistoryStatusTypeName",
          s."Comments",
          s."Created",
          s."CreatedByPartyRoleID",       
          "PartyName_ByPartyRoleID"(s."CreatedByPartyRoleID") AS "CreatedByPartyRoleName",
          s."Active"
          FROM
          "LoanXrefHistory" lxh
          INNER JOIN "LoanXrefPoolHistory" lxph on lxph."LoanXrefHistoryID" = lxh."ID"        
          INNER JOIN "LoanXrefPoolHistoryStatus" s on s."LoanXrefPoolHistoryID" = lxph."ID"
          INNER JOIN "LoanXrefPoolHistoryStatusType" st on st."ID" = s."LoanXrefPoolHistoryStatusTypeID"
          WHERE lxh."Xref" = "@Xref"
          ORDER BY lxh."EffectiveDate" DESC, lxph."EffectiveDate" DESC;
    
    
    RETURN NEXT csr2;

```


### Retrieve

| Route | Method | Fill in Response Document |
|---|---|---|
| `/loanxrefpoolhistory/:id` | GET | No |

#### Conversion

Param :id is required integer

Convert to sequelize code.

Pull back the latest LoanXrefPoolHistory for a specific id.
Ensure the pool record and any transfers are also returned

A reference but do not mimic is function:

```
OPEN csr1 FOR

          SELECT lxph."ID",
          lxph."LoanXrefHistoryID",
          lxph."PoolID",
          lxph."EffectiveDate",
          lxph."Created",
          lxph."CreatedByPartyRoleID",
          "PartyName_ByPartyRoleID"(lxph."CreatedByPartyRoleID") AS "CreatedByPartyRoleName",
          lxph."LastUpdated",
          lxph."LastUpdatedByPartyRoleID",
          "PartyName_ByPartyRoleID"(lxph."LastUpdatedByPartyRoleID") AS "LastUpdatedByPartyRoleName",
          lxph."TontoID",
          lxph."JusticeID",
          lxph."AccountsNotified",
          p."Name" AS "PoolName",
          p."Active",
          p."IsDefault",
          p."Name" AS "PoolName",
          p."ShortName",
          p."UltracsName"
          FROM
          "LoanXrefPoolHistory" lxph
          INNER JOIN "Pool" p on p."ID" = lxph."PoolID"
          WHERE lxph."ID" = "@ID";
          
    RETURN NEXT csr1;

    OPEN csr2 FOR

    SELECT 
          s."ID",
          s."LoanXrefPoolHistoryID",
          s."LoanXrefPoolHistoryStatusTypeID",
          st."Name" AS "LoanXrefPoolHistoryStatusTypeName",
          s."Comments",
          s."Created",
          s."CreatedByPartyRoleID",
          "PartyName_ByPartyRoleID"(s."CreatedByPartyRoleID") AS "CreatedByPartyRoleName",
          s."Active"
          FROM
          "LoanXrefPoolHistory" lxph
          INNER JOIN "LoanXrefPoolHistoryStatus" s on s."LoanXrefPoolHistoryID" = lxph."ID"
          INNER JOIN "LoanXrefPoolHistoryStatusType" st on st."ID" = s."LoanXrefPoolHistoryStatusTypeID"
          WHERE lxph."ID" = "@ID";
    
    
    RETURN NEXT csr2;
```

### Retrieve Latest by loan

| Route | Method | Fill in Response Document |
|---|---|---|
| `/loan/:id/loanxrefhistory` | GET | No |

#### Conversion

Param :id is required integer

Convert to sequelize code.


Pull back the latest LoanXrefPoolHistory for a specific loan id.
Ensure the pool record and any transfers are also returned

A reference but do not mimic is function:

```
SELECT lxph."ID"
    FROM
    "LoanXrefHistory" lxh
    INNER JOIN  "LoanXrefPoolHistory" lxph on lxph."LoanXrefHistoryID" = lxh."ID"
    WHERE lxh."LoanID" = "@LoanID"
    ORDER BY lxh."EffectiveDate" DESC, lxph."EffectiveDate" DESC
    LIMIT 1
    INTO latest_loan_xref_pool_history_id;

    OPEN csr1 FOR

          SELECT lxph."ID",
          lxph."LoanXrefHistoryID",
          lxph."PoolID",
          lxph."EffectiveDate",
          lxph."Created",
          lxph."CreatedByPartyRoleID",
          "PartyName_ByPartyRoleID"(lxph."CreatedByPartyRoleID") AS "CreatedByPartyRoleName",
          lxph."LastUpdated",
          lxph."LastUpdatedByPartyRoleID",
          "PartyName_ByPartyRoleID"(lxph."LastUpdatedByPartyRoleID") AS "LastUpdatedByPartyRoleName",
          lxph."TontoID",
          lxph."JusticeID",
          lxph."AccountsNotified",
          p."Name" AS "PoolName",
          p."Active",
          p."IsDefault",
          p."Name" AS "PoolName",
          p."ShortName",
          p."UltracsName"
          FROM
          "LoanXrefPoolHistory" lxph
          INNER JOIN "Pool" p on p."ID" = lxph."PoolID"
          WHERE lxph."ID" = latest_loan_xref_pool_history_id;
          
          
    RETURN NEXT csr1;

    OPEN csr2 FOR

    SELECT 
          s."ID",
          s."LoanXrefPoolHistoryID",
          s."LoanXrefPoolHistoryStatusTypeID",
          st."Name" AS "LoanXrefPoolHistoryStatusTypeName",
          s."Comments",
          s."Created",
          s."CreatedByPartyRoleID",       
          "PartyName_ByPartyRoleID"(s."CreatedByPartyRoleID") AS "CreatedByPartyRoleName",
          s."Active"
          FROM
          "LoanXrefPoolHistory" lxph
          INNER JOIN "LoanXrefPoolHistoryStatus" s on s."LoanXrefPoolHistoryID" = lxph."ID"
          INNER JOIN "LoanXrefPoolHistoryStatusType" st on st."ID" = s."LoanXrefPoolHistoryStatusTypeID"
          WHERE lxph."ID" = latest_loan_xref_pool_history_id;
    
    
    RETURN NEXT csr2;


```



### Retrieve Latest by Xref

| Route | Method | Fill in Response Document |
|---|---|---|
| `/xref/:id/loanxrefhistory` | GET | No |

#### Conversion

Param :id is required integer

Convert to sequelize code.

Pull back the latest LoanXrefPoolHistory for a specific xref.
Ensure the pool record and any transfers are also returned

A reference but do not mimic is function:

```

    SELECT lxph."ID"
    FROM
    "LoanXrefHistory" lxh
    INNER JOIN  "LoanXrefPoolHistory" lxph on lxph."LoanXrefHistoryID" = lxh."ID"
    WHERE lxh."Xref" = "@Xref"
    ORDER BY lxh."EffectiveDate" DESC, lxph."EffectiveDate" DESC
    LIMIT 1
    INTO latest_loan_xref_pool_history_id;

    OPEN csr1 FOR

          SELECT lxph."ID",
          lxph."LoanXrefHistoryID",
          lxph."PoolID",
          lxph."EffectiveDate",
          lxph."Created",
          lxph."CreatedByPartyRoleID",
          "PartyName_ByPartyRoleID"(lxph."CreatedByPartyRoleID") AS "CreatedByPartyRoleName",
          lxph."LastUpdated",
          lxph."LastUpdatedByPartyRoleID",
          "PartyName_ByPartyRoleID"(lxph."LastUpdatedByPartyRoleID") AS "LastUpdatedByPartyRoleName",
          lxph."TontoID",
          lxph."JusticeID",
          lxph."AccountsNotified",
          p."Name" AS "PoolName",
          p."Active",
          p."IsDefault",
          p."Name" AS "PoolName",
          p."ShortName",
          p."UltracsName"
          FROM
          "LoanXrefPoolHistory" lxph
          INNER JOIN "Pool" p on p."ID" = lxph."PoolID"
          WHERE lxph."ID" = latest_loan_xref_pool_history_id;
          
          
    RETURN NEXT csr1;

    OPEN csr2 FOR

    SELECT 
          s."ID",
          s."LoanXrefPoolHistoryID",
          s."LoanXrefPoolHistoryStatusTypeID",
          st."Name" AS "LoanXrefPoolHistoryStatusTypeName",
          s."Comments",
          s."Created",
          s."CreatedByPartyRoleID",
          "PartyName_ByPartyRoleID"(s."CreatedByPartyRoleID") AS "CreatedByPartyRoleName",
          s."Active"
          FROM
          "LoanXrefPoolHistory" lxph
          INNER JOIN "LoanXrefPoolHistoryStatus" s on s."LoanXrefPoolHistoryID" = lxph."ID"
          INNER JOIN "LoanXrefPoolHistoryStatusType" st on st."ID" = s."LoanXrefPoolHistoryStatusTypeID"
          WHERE lxph."ID" = latest_loan_xref_pool_history_id;
    
    
    RETURN NEXT csr2;

```


### Save

| Route | Method | Fill in Response Document |
|---|---|---|
| `/loanxrefhistory/:id` | POST | No |

#### Conversion

Param :id is required integer

Refer to function below for optional params
When an id is returned use the identity to return the new record

Call function:

LoanXrefPoolHistory_CreateUpdate

Definition:
CREATE OR REPLACE FUNCTION "LoanXrefPoolHistory_CreateUpdate"(
    IN "@LoanXrefHistoryID" integer,
    IN "@PoolID" integer,
    IN "@CreatedByPartyRoleID" integer,
    IN "@LoanXrefPoolHistoryID" integer DEFAULT NULL::integer,
    IN "@EffectiveDate" date DEFAULT NULL::date,
    IN "@StatusTypeID" integer DEFAULT NULL::integer,
    IN "@Comments" character varying DEFAULT NULL::character varying,
    IN "@AccountsNotified" boolean DEFAULT NULL::boolean)
  RETURNS TABLE("ID" integer) AS

Returns: TABLE("ID" integer)