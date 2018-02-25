# Motor Vehicle  Conversion

### Run auto pooling for an application

| Route | Method | Fill in Response Document |
|---|---|---|
| `/application/:id/autopool` | POST | No |

#### Conversion

Param :id is required integer as is the user

USE function:

Pool_AutoForApplication

Definition:

CREATE OR REPLACE FUNCTION "Pool_AutoForApplication"(
    IN "@ApplicationContainerID" integer,
    IN "@UserPartyRoleID" integer)

Returns: TABLE(loan_id integer, loan_xref_history_id integer, loan_xref_pool_history_id integer, existing_pool_id integer, existing_pool_name character varying)
