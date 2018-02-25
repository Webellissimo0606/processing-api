# Application Party Role Conversion


### Add a party role to an application

| Route | Method | Fill in Response Document |
|---|---|---|
| `/application/:id/partyrole/:prId` | POST | No |

#### Conversion

Both params required as integers.

Use function:

Application_InsertCrumbsPartyRole

Definition:

CREATE OR REPLACE FUNCTION "Application_InsertCrumbsPartyRole"(
    IN "@ApplicationContainerID" integer,
    IN "@CrumbsPartyRoleID" integer,
    IN "@UserPartyRoleID" integer,
    OUT "@NewApplicationPartyRoleID" integer)
  RETURNS integer AS

Response Type: INT

Function Notes:

Returns an integer so code will look for an array and this item being the first. So need to cover to fail on null and empty array.


### Update a party role to an application

| Route | Method | Fill in Response Document |
|---|---|---|
| `/application/:id/partyrole/:prId` | PUT | No |

#### Conversion

Both params required as integers.

Use function:

ApplicationPartyRole_Modify

Definition:

CREATE OR REPLACE FUNCTION "ApplicationPartyRole_Modify"(
    "@ApplicationContainerID" integer,
    "@PartyRoleID" integer,
    "@UserPartyRoleID" integer)
  RETURNS integer AS

Response Type: INT

Returns an integer so code will look for an array and this item being the first. So need to cover to fail on null and empty array.

### Delete a party role from an application

| Route | Method | Fill in Response Document |
|---|---|---|
| `/application/:id/partyrole/:prId` | DELETE | No |

#### Conversion

Both params required as integers.

Use function:

Application_DeleteCrumbsPartyRole

CREATE OR REPLACE FUNCTION "Application_DeleteCrumbsPartyRole"(
    "@ApplicationContainerID" integer,
    "@PartyRoleID" integer,
    "@UserPartyRoleID" integer)
  RETURNS integer AS

Response Type: BOOLEAN

Returns an boolean so code will look for an array and this item being the first. So need to cover to fail on null and empty array.



