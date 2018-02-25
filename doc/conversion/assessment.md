# Assessment Conversion

### Get the assessment summary

| Route | Method | Fill in Response Document |
|---|---|---|
| `/assessment/:id` | GET | Yes |

#### Conversion

Param :id is required integer

Use function:

Assessment_RetrieveSummaryResults

Definition:

CREATE OR REPLACE FUNCTION "Assessment_RetrieveSummaryResults"("@ApplicationContainerID" integer)
  RETURNS SETOF refcursor AS

#Current .Net Sample output#

```
{
    "items": [
      {
        "id": int,
        "name": string,
        "refer": boolean,
        "overide": boolean
      }
    ],
    "messages": [
      {
        "id": int,
        "name": string,
        "message": string
      }
    ],
    "score": {
      "score": int,
      "estimatedScore": int,
      "type": IdValue
    }
  }
```

### Get the detailed assessment summary

| Route | Method | Fill in Response Document |
|---|---|---|
| `/assessment/:id/detailed` | GET | Yes |

#### Conversion

Param :id is required integer

Use function:

Assessment_RetrieveDetailedResults

Definition:

CREATE OR REPLACE FUNCTION "Assessment_RetrieveDetailedResults"("@ApplicationContainerID" integer)
  RETURNS SETOF refcursor AS

#Current .Net Sample output#

```
{
    "items": [
      {
        "id": int,
        "name": string,
        "refer": boolean,
        "overide": boolean
      }
    ],
    "messages": [
      {
        "id": int,
        "name": string,
        "message": string
      }
    ]
  }
```

### Check the overall pass of an application

| Route | Method | Fill in Response Document |
|---|---|---|
| `/assessment/:id/check` | GET | No |

#### Conversion

Param :id is required integer

Use function:

Assessment_CheckOverallPass

Definition:

CREATE OR REPLACE FUNCTION "Assessment_CheckOverallPass"("@ApplicationContainerID" integer)
  RETURNS boolean AS

Returns: BOOLEAN

### Get the latest workbook

| Route | Method | Fill in Response Document |
|---|---|---|
| `/assessment/:id/workbook` | GET | No |

#### Conversion

Param :id is required integer

Use function:

Assessment_RetrieveLatestWorkbookHistoryIDByApplicationContainerID

Definition:
CREATE OR REPLACE FUNCTION "Assessment_RetrieveLatestWorkbookHistoryIDByAppContainerID"(
    IN "@ApplicationContainerID" integer,
    OUT "@WorkbookHistoryID" integer)
  RETURNS integer AS

Returns: INTEGER

### Execute Auto conditions for triggers

| Route | Method | Fill in Response Document |
|---|---|---|
| `/assessment/:id/triggerconditions/:tid` | PUT | No |

#### Conversion

Param :id is required integer
Param :tid is required integer

Use function:

ApplicationCondition_AutoCreateByApplicationContainerAndStageType

Definition:

CREATE OR REPLACE FUNCTION "ApplicationCondition_AutoCreateByApplicationContainerID"("@ApplicationContainerID" integer)
  RETURNS void AS

Returns: VOID

### Execute Auto conditions for docusign status

| Route | Method | Fill in Response Document |
|---|---|---|
| `/assessment/:id/docusignconditions` | PUT | No |

#### Conversion

Param :id is required integer

Use function:

DocumentSignStatus_AutoConditions

CREATE OR REPLACE FUNCTION "DocumentSignStatus_AutoConditions"("@DocumentOrderID" integer)
  RETURNS void AS

Returns: VOID