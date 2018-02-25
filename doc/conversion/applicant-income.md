# Applicant Income Conversion

### Income Create

| Route | Method | Fill in Response Document |
|---|---|---|
| `/applicant/:id/income` | POST | No |

#### Conversion

Convert to sequelize entity code, ensure that after the income is successfully saved that the income employment reference is created if not null, else it returns the promise.

### Income Update

| Route | Method | Fill in Response Document |
|---|---|---|
| `/income:/:id` | PUT | No |

#### Conversion

Convert to sequelize entity code.

### Income Delete

| Route | Method | Fill in Response Document |
|---|---|---|
| `/income:/:id` | DELETE | No |

#### Conversion

Delete by using Income_Delete and BULKDELETE. if rows are deleted return a 204 otherwise 500.

Inputs: 
CREATE OR REPLACE FUNCTION "Income_Delete"(
    "@IncomeID" integer,
    "@DeletePartyRoleID" integer)
  RETURNS void AS





