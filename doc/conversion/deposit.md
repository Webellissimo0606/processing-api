# Deposit Conversion

### List deposits for a loan

| Route | Method | Fill in Response Document |
|---|---|---|
| `/loan/:id/deposits` | GET | Yes |

#### Conversion

Param :id is required integer

Convert to sequelize code and return where loan id = the input.

### Get the deposit

| Route | Method | Fill in Response Document |
|---|---|---|
| `/deposit/:id` | Get | Yes |

#### Conversion

Param :id is required integer

Convert to sequelize code.

### Deposit Create

| Route | Method | Fill in Response Document |
|---|---|---|
| `/loan/:id/deposit` | POST | No |

#### Conversion


Param :id is required integer

Param input to be set on body as the loan id

Created, CreatedByPartyRoleID, LastUpdated and LastUpdatedPartyRoleID will be auto filled during the save.

### Deposit Update

| Route | Method | Fill in Response Document |
|---|---|---|
| `/deposit/:id` | PUT | No |

#### Conversion


Param :id is required integer

Param input to be set on body as the id of the deposit

LastUpdated and LastUpdatedPartyRoleID will be auto filled during the save.

Created, CreatedByPartyRoleID must not be set.

### Deposit Delete

| Route | Method | Fill in Response Document |
|---|---|---|
| `/deposit/:id` | DELETE | No |

#### Conversion

All inputs are required integers.

Use function:

LoanDeposit_Delete

Definition:

CREATE OR REPLACE FUNCTION "LoanDeposit_Delete"(
    "@DepositID" integer,
    "@DeletePartyRoleID" integer)
  RETURNS void AS

Returns: VOID
