# Application Conversion

### List conditions for an application

| Route | Method | Fill in Response Document |
|---|---|---|
| `/application/:id/conditions` | GET | Yes |

#### Conversion

Param :id is required integer

Use function:

ApplicationCondition_RetrieveForApplicationContainerID

Defintion:

CREATE OR REPLACE FUNCTION "ApplicationCondition_RetrieveForApplicationContainerID"(
    IN "@ApplicationContainerID" integer,
    IN "@UserPartyRoleID" integer)

RETURNS TABLE(applicationconditionid integer, loanid integer, applicationsecurityid integer, applicationcontainerid integer, applicationpartyroleid integer, applicantname character varying, conditiondisplaytypeid integer, conditiondisplaytypename character varying, created timestamp without time zone, createdbypartyroleid integer, createdbyname character varying, statusdate timestamp without time zone, statuspartyroleid integer, statusname character varying, conditionverificationstatustypeid integer, conditionverificationstatustypename character varying, conditiontext character varying, conditiontypeid integer, conditiontypename character varying, requiredbeforetext character varying, "ApplicationStatusTypeID" integer, "ApplicationStatusTypeName" character varying)

### Get the condition

| Route | Method | Fill in Response Document |
|---|---|---|
| `/condition/:id` | GET | Yes |

#### Conversion

Using the below function as a base for the data, return the sequelized version.

The PartyName is to be replaced by the crumbsPartyRoleId on the PartyRole Table.

ApplicationCondition_Retrieve

Definition:

CREATE OR REPLACE FUNCTION "ApplicationCondition_Retrieve"(
    IN "@ApplicationConditionID" integer,
    IN "@UserPartyRoleID" integer)

Returns: TABLE("ApplicationConditionID" integer, "ApplicationContainerID" integer, "ApplicationPartyRoleID" integer, "ConditionDisplayTypeID" integer, "ConditionDisplayTypeName" character varying, "Created" timestamp without time zone, "CreatedByPartyRoleID" integer, "CreatedByName" character varying, "StatusDate" timestamp without time zone, "StatusPartyRoleID" integer, "StatusName" character varying, "ConditionVerificationStatusTypeID" integer, "ConditionVerificationStatusTypeName" character varying, "ConditionText" character varying, "ConditionTypeID" integer, "ConditionTypeName" character varying, "RequiredBeforeText" character varying, "ApplicationStatusTypeID" integer, "ApplicationStatusTypeName" character varying)

### Condition Create

| Route | Method | Fill in Response Document |
|---|---|---|
| `/application/:id/condition` | POST | No |

#### Conversion

Convert to sequelize entity code.

See route description on required fields.

### Condition Update

| Route | Method | Fill in Response Document |
|---|---|---|
| `/condition:/:id` | PUT | No |

#### Conversion

Convert to sequelize entity code.

See route description on required fields.

### Condition Stage Met

| Route | Method | Fill in Response Document |
|---|---|---|
| `/condition/:id/stagemet/:astid` | GET | Yes |

#### Conversion

All inputs are required integers.

stageMet = 0 rows.

Use function:

ApplicationCondition_StageConditionsMet

Definition:

CREATE OR REPLACE FUNCTION "ApplicationCondition_StageConditionsMet"(
    IN "@ApplicationContainerID" integer,
    IN "@ApplicationStatusTypeID" integer,
    IN "@UserPartyRoleID" integer)

Returns Table: TABLE("ApplicationConditionID" integer, "ConditionTypeName" character varying, "ConditionTypeID" integer, "ConditionVerificationStatusTypeID" integer, "ConditionVerificationStatusTypeName" character varying)

#Sample .Net Output#


```
{
    "stageMet": boolean,
    "outstandings": [
                        {
                            "id": int,
                            "status": IdValue,
                            "type" :IdValue
                        }
                    ]
}
```


### Condition Stage Met Flag Only

| Route | Method | Fill in Response Document |
|---|---|---|
| `/condition/:id/stagemetflag/:astid` | GET | Yes |

#### Conversion

All inputs are required integers.

Use function:

ApplicationCondition_StageConditionsMetFlag

Returns: BOOLEAN

### Process auto conditions by application status

| Route | Method | Fill in Response Document |
|---|---|---|
| `/condition/:id/status/:astid` | POST | No |

#### Conversion

All inputs are required integers.

Use function:

Condition_CreateAutoConditionsForApplicationStatus

Definition:

CREATE OR REPLACE FUNCTION "ApplicationCondition_StageConditionsMetFlag"(
    "@ApplicationContainerID" integer,
    "@ApplicationStatusTypeID" integer,
    "@UserPartyRoleID" integer)
  RETURNS boolean AS

Returns: VOID

### Process auto conditions by application condition

| Route | Method | Fill in Response Document |
|---|---|---|
| `/condition/:id/process/:acid` | POST | No |

#### Conversion

All inputs are required integers.

Use function:

Condition_AutoProcessByApplicationConditionID

Definition:
CREATE OR REPLACE FUNCTION "Condition_AutoProcessByApplicationConditionID"(
    "@ApplicationContainerID" integer,
    "@ApplicationConditionID" integer,
    "@UserPartyRoleID" integer)
  RETURNS void AS

Returns: VOID