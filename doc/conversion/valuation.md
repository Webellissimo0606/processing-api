# Valuation  Conversion

### Response for valuation

Ensure this is a reusable type.

### List Valuations for an application security

| Route | Method | Fill in Response Document |
|---|---|---|
| `/applicationsecurity/:id/valuations` | GET | Yes |

#### Conversion

Param :id is required integer

Function:

Valuation_RetrieveAll

Definition:
CREATE OR REPLACE FUNCTION "Valuation_RetrieveAll"("@ApplicationSecurityID" integer)
  RETURNS SETOF refcursor AS

Response:

SETOF REFCURSOR

### Retrieve a valuation

| Route | Method | Fill in Response Document |
|---|---|---|
| `/valuation/:id` | GET | Yes |

#### Conversion

Param :id is required integer

USE function:

Valuation_RetrieveByID

Definition:

CREATE OR REPLACE FUNCTION "Valuation_RetrieveByID"("@ValuationID" integer)
  RETURNS SETOF refcursor AS

Returns:  SETOF refcursor

### Valuation  Delete

| Route | Method | Fill in Response Document |
|---|---|---|
| `/valuation/:id` | DELETE | No |

#### Conversion

Conver to sequelize

Param :id is required integer

Set flag of active to false where id = input variable

LastUpdated and LastUpdatedPartyRoleID will be auto filled during the save.

Created, CreatedByPartyRoleID must not be set.

