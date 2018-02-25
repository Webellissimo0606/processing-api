# Application Status Conversion

### Get status summary

| Route | Method | Fill in Response Document |
|---|---|---|
| `/application/:id/status` | GET | Yes |

#### Conversion

Param :id is required integer

Use function:

ApplicationStatus_RetrieveSummaryByApplicationContainerID


### Get status grouped summary

| Route | Method | Fill in Response Document |
|---|---|---|
| `/application/:id/statusgrouped` | GET | Yes |

#### Conversion

Param :id is required integer

Return a grouped set of dates, convert to sequelize referencing the tables.
Ensure the PartyRole record comes back in place of the function call to PartyName.

Reference function:

ApplicationStatusHistory_RetrieveList

Definition:

CREATE OR REPLACE FUNCTION "ApplicationStatus_RetrieveSummaryByApplicationContainerID"(
    "@ApplicationContainerID" integer,
    "@UserPartyRoleID" integer)
  RETURNS SETOF refcursor AS

### Set the application status

| Route | Method | Fill in Response Document |
|---|---|---|
| `/application/:id/status/:tid/:ctid` | POST | No |

#### Conversion

Param :id is required integer
Param :tid is a required integer
Param :ctid is an optional integer

Use function:

ApplicationStatusHistory_Create

Definition:

CREATE OR REPLACE FUNCTION "ApplicationStatusHistory_Create"(
    "@ApplicationContainerID" integer,
    "@ApplicationStatusTypeID" integer,
    "@UserPartyRoleID" integer,
    "@CrashReasonTypeID" integer DEFAULT NULL::integer)
  RETURNS void AS

Returns: VOID

### Set the application status with date

| Route | Method | Fill in Response Document |
|---|---|---|
| `/application/:id/statusdate/:tid/:when` | POST | No |

#### Conversion

Param :id is required integer
Param :tid is a required integer
Param :when is a required datetime

Use function:

ApplicationStatusHistory_SetSpecific

Definition:

CREATE OR REPLACE FUNCTION "ApplicationStatusHistory_SetSpecific"(
    "@ApplicationContainerID" integer,
    "@ApplicationStatusTypeID" integer,
    "@StatusDate" timestamp with time zone,
    "@UserPartyRoleID" integer)
  RETURNS void AS

Returns: Void

### Clear the application status

| Route | Method | Fill in Response Document |
|---|---|---|
| `/application/:id/status/:tid` | DELETE | No |

#### Conversion

Param :id is required integer
Param :tid is a required integer

Use function:

ApplicationStatusHistory_Clear

Definition:

CREATE OR REPLACE FUNCTION "ApplicationStatusHistory_Clear"(
    "@ApplicationContainerID" integer,
    "@ApplicationStatusTypeID" integer,
    "@UserPartyRoleID" integer)
  RETURNS void AS

Returns: Void


### Reset the application

| Route | Method | Fill in Response Document |
|---|---|---|
| `/application/:id/reset/` | DELETE | No |

#### Conversion

Param :id is required integer

Use function:

ApplicationStatus_Reset

Definition:

CREATE OR REPLACE FUNCTION "ApplicationStatus_Reset"(
    IN "@ApplicationContainerID" integer,
    IN "@UserPartyRoleID" integer,
    IN "@Source" character varying DEFAULT NULL::character varying)

Returns:  TABLE("IsPastFinal" boolean, "IsPastPrelim" boolean, "HasBeenSettled" boolean)

### Crash the application

| Route | Method | Fill in Response Document |
|---|---|---|
| `/application/:id/crash` | DELETE | No |

#### Conversion

Param :id is required integer
Body is required

Call create method with body params and application container id
Then with a promise create a history note.

#Current .Net#

Call the create method!

```
Set(applicationContainerId, crash.type.id.Value, crash.reason.id.Value, loginId);
```

Call the history note service which should be done, if not complete that conversion task.
You will need to use claims for the users display name req.userAdapter.commonName() should do the trick.

```
applicationHistoryService.Save(applicationContainerId, new Contracts.Entities.ApplicationHistory.Note() {
                    publication = new IdValue() { id = ReferenceTypes.ApplicationHistoryPublicationType.ServiceCentre },
                    title = "Application Crashed",
                    type = new IdValue() { id = ReferenceTypes.ApplicationHistoryType.Underwriting },
                    comments = String.Format("Application crash has been invoked by {0}. Reason given: {1}", user.DisplayName, crash.notes)
                }, loginId);
```