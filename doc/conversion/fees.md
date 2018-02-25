# Fee Conversion

### List Fees for an application

| Route | Method | Fill in Response Document |
|---|---|---|
| `/application/:id/fees` | GET | Yes |

#### Conversion

Param :id is required integer

Convert to sequelize code and return where application container id = the input.

Ensure the CrumbsPartyRoleID from PartyRole relationship is returned

### Get the Fee

| Route | Method | Fill in Response Document |
|---|---|---|
| `/fee/:id` | Get | Yes |

#### Conversion

Param :id is required integer

Convert to sequelize code.

Ensure the CrumbsPartyRoleID from PartyRole relationship is returned

### Fee Create

| Route | Method | Fill in Response Document |
|---|---|---|
| `/application/:id/fee` | POST | No |

#### Conversion


Param :id is required integer

Param input to be set on body as the application container id

Created, CreatedByPartyRoleID, LastUpdated and LastUpdatedPartyRoleID will be auto filled during the save.

### Fee Update

| Route | Method | Fill in Response Document |
|---|---|---|
| `/fee/:id` | PUT | No |

#### Conversion


Param :id is required integer

Param input to be set on body as the id of the Fee

LastUpdated and LastUpdatedPartyRoleID will be auto filled during the save.

Created, CreatedByPartyRoleID must not be set.

### Fee Delete

| Route | Method | Fill in Response Document |
|---|---|---|
| `/fee/:id` | DELETE | No |

#### Conversion

All inputs are required integers.

Use function:

ApplicationContainerFee_Delete

Definition:

CREATE OR REPLACE FUNCTION "ApplicationContainerFee_Delete"(
    "@ApplicationContainerFeeID" integer,
    "@DeletePartyRoleID" integer)
  RETURNS void AS

Returns: VOID
