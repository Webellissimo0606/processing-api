# Financial


### List insurance for an application security

| Route | Method | Fill in Response Document |
|---|---|---|
| `/applicationsecurity/:id/insurance` | GET | No |

#### Conversion

Param :id is required integer

Use sequelize where id is for the application security id

### Create insurance

| Route | Method | Fill in Response Document |
|---|---|---|
| `/applicationsecurity/:id/insurance` | POST | No |

#### Conversion

Param :id is required integer

use sequalize to create a insurance against the application security.

See api doc for fields to have defaults.

Created, CreatedByPartyRoleID, LastUpdated, LastUpdatedByPartyRoleID to be set in api.

ApplicationSecurityID is from the route.

### Update insurance

| Route | Method | Fill in Response Document |
|---|---|---|
| `/insurance/:id` | PUT | No |

#### Conversion

Param :id is required integer

use sequalize to create a insurance.

See api doc for fields to have defaults.

LastUpdated, LastUpdatedByPartyRoleID to be set in api.

Created, CreatedByPartyRoleID, ApplicationSecurityID not to be overriden


### Delete insurance

| Route | Method | Fill in Response Document |
|---|---|---|
| `/insurance/:id` | Delete | No |

#### Conversion

Param :id is required integer

use sequalize to delete an insurance

