# Direct Debit Conversion

### List Direct Debits for an application

| Route | Method | Fill in Response Document |
|---|---|---|
| `/application/:id/directdebits` | GET | Yes |

#### Conversion

Param :id is required integer

Convert to sequelize code and return where application container id = the input and active = true

### Direct Debit Create

| Route | Method | Fill in Response Document |
|---|---|---|
| `/application/:id/directdebit` | POST | No |

#### Conversion

Param :id is required integer

Param input to be set on body as the application container id

Created, CreatedByPartyRoleID, LastUpdated and LastUpdatedPartyRoleID will be auto filled during the save.

### Direct Debit Update

| Route | Method | Fill in Response Document |
|---|---|---|
| `/directdebit/:id` | PUT | No |

#### Conversion


Param :id is required integer

Param input to be set on body as the id of the direct debit

LastUpdated and LastUpdatedPartyRoleID will be auto filled during the save.

Created, CreatedByPartyRoleID must not be set.

### Direct Debit Delete

| Route | Method | Fill in Response Document |
|---|---|---|
| `/directdebit/:id` | DELETE | No |

#### Conversion

All inputs are required integers.

Param input to be set on body as the id of the directdebit

LastUpdated and LastUpdatedPartyRoleID will be auto filled during the save.

Created, CreatedByPartyRoleID must not be set.

Set Active = false.

