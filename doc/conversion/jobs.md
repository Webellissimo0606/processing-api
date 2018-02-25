# Jobs Conversion

### Job Type By Application and Status

| Route | Method | Fill in Response Document |
|---|---|---|
| `/jobs/:id/:astid` | GET | No |

#### Conversion

Param :id, :astid are required integer

Use function:

ApplicationStatusTraxJob_RetrieveByApplicationAndStatus

Definition:

CREATE OR REPLACE FUNCTION "ApplicationStatusTraxJob_RetrieveByApplicationAndStatus"(
    IN "@ApplicationContainerID" integer,
    IN "@ApplicationStatusTypeID" integer)

Returns: TABLE("TraxJobTypeID" integer, "Title" character varying, "Description" character varying)

### Retrieve Job Type By Application

| Route | Method | Fill in Response Document |
|---|---|---|
| `/fee/:id` | Get | No |

#### Conversion

Param :id is required integer

Use function:

TraxJob_RetrieveTraxJobTypeIDByApplicationContainerID

Definition:

CREATE OR REPLACE FUNCTION "TraxJob_RetrieveTraxJobTypeIDByApplicationContainerID"(IN "@ApplicationContainerID" integer)
  RETURNS TABLE("JobTypeID" integer, "Title" character varying) AS

Returns: TABLE("JobTypeID" integer, "Title" character varying)


### Retrieve Rollback Job Types for Application Status

| Route | Method | Fill in Response Document |
|---|---|---|
| `/jobs/:id/:astid/rollback` | Get | No |

#### Conversion

Param :id is required integer

Use function:

TraxJob_RollbackJobsForApplicationStatus

Definition:

CREATE OR REPLACE FUNCTION "TraxJob_RollbackJobsForApplicationStatus"(
    IN "@ApplicationContainerID" integer,
    IN "@ApplicationStatusTypeID" integer,
    IN "@UserPartyRoleID" integer)
  RETURNS TABLE("JobTypeID" integer) AS

Returns: TABLE("JobTypeID" integer)