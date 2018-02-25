# Search

### Search for an application

| Route | Method | Fill in Response Document |
|---|---|---|
| `/application/search/:q/:p/:ps` | POST | No |

#### Conversion

All inputs are required

USE function:

Application_RetrieveBySearchString

Definition:

CREATE OR REPLACE FUNCTION "Application_RetrieveBySearchString"(
    IN "@SearchString" character varying,
    IN "@SearcherPartyRoleID" integer,
    IN "@IdentifierTypeID" integer DEFAULT NULL::integer)

Returns: TABLE("ApplicationContainerID" integer, "ApplicantName" character varying, "ProductCategory" character varying)

NOTES:

q = searchstring
p and ps not required
identifier type can be  = null