# Application Conversion

### Get application identity information

| Route | Method | Fill in Response Document |
|---|---|---|
| `/application/:id/identity` | GET | Yes |

#### Conversion

Param :id is required integer

Use function:

Application_RetrieveIdentityInformation

Definition:

CREATE OR REPLACE FUNCTION "Application_RetrieveIdentityInformation"(
    IN "@ApplicationContainerID" integer,
    IN "@UserPartyRoleID" integer)
  RETURNS TABLE("ApplicationPartyRoleID" integer, "CrumbsPartyID" integer, "PartyName" text, "ConsentToVerify" boolean, "ConditionVerified" boolean) AS

Returns:  TABLE("ApplicationPartyRoleID" integer, "CrumbsPartyID" integer, "PartyName" text, "ConsentToVerify" boolean, "ConditionVerified" boolean)

### Search for application container id

| Route | Method | Fill in Response Document |
|---|---|---|
| `/application/:id/:tid` | GET | Yes |

#### Conversion

Param :id is required integer, :tid is required string

Use function:

ApplicationContainerID_RetrieveByIdentifierValueAndType

Definition:

CREATE OR REPLACE FUNCTION "ApplicationContainerID_RetrieveByIdentifierValueAndType"(
    "@IdentifierValue" integer,
    "@IdentifierType" character varying)
  RETURNS integer AS

Returns: INT