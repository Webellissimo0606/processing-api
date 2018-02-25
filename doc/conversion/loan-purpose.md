# Loan Purpose Conversion

### List Loan Purposes for a loan

| Route | Method | Fill in Response Document |
|---|---|---|
| `/loan/:id/loanpurposes` | GET | Yes |

#### Conversion

Param :id is required integer

Convert to sequelize code and return where loan id = the input.

### Get the Loan Purpose

| Route | Method | Fill in Response Document |
|---|---|---|
| `/loanpurpose/:id` | Get | Yes |

#### Conversion

Param :id is required integer

Convert to sequelize code.

### Loan Purpose Create

| Route | Method | Fill in Response Document |
|---|---|---|
| `/loan/:id/loanpurpose` | POST | No |

#### Conversion


Param :id is required integer

Param input to be set on body as the loan id

Created, CreatedByPartyRoleID, LastUpdated and LastUpdatedPartyRoleID will be auto filled during the save.

### Loan Purpose Update

| Route | Method | Fill in Response Document |
|---|---|---|
| `/loanpurpose/:id` | PUT | No |

#### Conversion


Param :id is required integer

Param input to be set on body as the id of the Loan Purpose

LastUpdated and LastUpdatedPartyRoleID will be auto filled during the save.

Created, CreatedByPartyRoleID must not be set.

### Loan Purpose Delete

| Route | Method | Fill in Response Document |
|---|---|---|
| `/loanpurpose/:id` | DELETE | No |

#### Conversion

All inputs are required integers.

Use function:

LoanPurpose_ProcessingDelete

Definition:
CREATE OR REPLACE FUNCTION "LoanPurpose_ProcessingDelete"(
    "@LoanPurposeID" integer,
    "@CreateUpdatePartyRoleID" integer)
  RETURNS void AS

Returns: VOID

