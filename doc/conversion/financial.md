# Financial


### List households for an application container

| Route | Method | Fill in Response Document |
|---|---|---|
| `/application/:id/households` | GET | No |

#### Conversion

Param :id is required integer

Use sequelize where id is for the application container id

### List living expenses for a household

| Route | Method | Fill in Response Document |
|---|---|---|
| `/financial/:id/living` | Get | No |

#### Conversion

Param :id is required integer

use sequalize to retrieve a liability where housholdid = id and liability category type id = 2.

### Create living expense

| Route | Method | Fill in Response Document |
|---|---|---|
| `/financial/:id/living` | POST | No |

#### Conversion

Param :id is required integer

use sequalize to create a liability.

See api doc for fields to have defaults.

Created, CreatedByPartyRoleID, LastUpdated, LastUpdatedByPartyRoleID to be set in api.

HouseholdID is from the route.

### Update living expense

| Route | Method | Fill in Response Document |
|---|---|---|
| `/financial/:id/living` | PUT | No |

#### Conversion

Param :id is required integer

use sequalize to create a liability.

See api doc for fields to have defaults.

LastUpdated, LastUpdatedByPartyRoleID to be set in api.

Created, CreatedByPartyRoleID, HouseholdID not to be overriden

### Delete living expense

| Route | Method | Fill in Response Document |
|---|---|---|
| `/financial/:id/living` | DELETE | No |

#### Conversion

Param :id is required integer

Use Function:

LivingExpense_Delete

Definition:
CREATE OR REPLACE FUNCTION "LivingExpense_Delete"(
    "@LivingExpenseID" integer,
    "@UserPartyRoleID" integer)
  RETURNS void AS

Returns: VOID

### List liabilities for a household

| Route | Method | Fill in Response Document |
|---|---|---|
| `/financial/:id/liability` | Get | No |

#### Conversion

Param :id is required integer

use sequalize to retrieve a liability where householdid = id  and liability category type id = 1.

### Create liability

| Route | Method | Fill in Response Document |
|---|---|---|
| `/financial/:id/liability` | POST | No |

#### Conversion

Param :id is required integer

use sequalize to create a liability.

See api doc for fields to have defaults.

Created, CreatedByPartyRoleID, LastUpdated, LastUpdatedByPartyRoleID to be set in api.

HouseholdID is from the route.

### Update liability

| Route | Method | Fill in Response Document |
|---|---|---|
| `/financial/:id/liability` | PUT | No |

#### Conversion

Param :id is required integer

use sequalize to create a liability.

See api doc for fields to have defaults.

LastUpdated, LastUpdatedByPartyRoleID to be set in api.

Created, CreatedByPartyRoleID, HouseholdID not to be overriden

### Delete liability

| Route | Method | Fill in Response Document |
|---|---|---|
| `/financial/:id/living` | DELETE | No |

#### Conversion

Param :id is required integer

Use Function:

Liability_Delete

Definition:

CREATE OR REPLACE FUNCTION "Liability_Delete"(
    "@LiabilityID" integer,
    "@UserPartyRoleID" integer)
  RETURNS void AS

Returns: VOID

### List assets for a household

| Route | Method | Fill in Response Document |
|---|---|---|
| `/financial/:id/asset` | Get | No |

#### Conversion

Param :id is required integer

use sequalize to retrieve a asset where housholdid = id.

### Create asset

| Route | Method | Fill in Response Document |
|---|---|---|
| `/financial/:id/asset` | POST | No |

#### Conversion

Param :id is required integer

use sequalize to create a asset.

See api doc for fields to have defaults.

Created, CreatedByPartyRoleID, LastUpdated, LastUpdatedByPartyRoleID to be set in api.

HouseholdID is from the route.

### Update asset

| Route | Method | Fill in Response Document |
|---|---|---|
| `/financial/:id/asset` | PUT | No |

#### Conversion

Param :id is required integer

use sequalize to create a asset.

See api doc for fields to have defaults.

LastUpdated, LastUpdatedByPartyRoleID to be set in api.

Created, CreatedByPartyRoleID, HouseholdID not to be overriden

### Delete asset

| Route | Method | Fill in Response Document |
|---|---|---|
| `/financial/:id/asset` | DELETE | No |

#### Conversion

Param :id is required integer

Use Function:

Asset_Delete

Definition:

CREATE OR REPLACE FUNCTION "Asset_Delete"(
    "@AssetID" integer,
    "@UserPartyRoleID" integer)
  RETURNS void AS

Returns: VOID
