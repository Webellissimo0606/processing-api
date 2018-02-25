# Security  Conversion

### List securities for an application container

| Route | Method | Fill in Response Document |
|---|---|---|
| `/application/:id/securities` | GET | Yes |

#### Conversion

Param :id is required integer

Use Function:

Security_RetrieveListByApplicationContainerID

Definition:

CREATE OR REPLACE FUNCTION "Security_RetrieveListByApplicationContainerID"(
    IN "@ApplicationContainerID" integer,
    IN "@UserPartyRoleID" integer)

Returns: TABLE("ID" integer, "SecurityTypeID" integer, "SecurityTypeName" character varying, "Description" character varying, "DisplayName" character varying, "UltracsID" integer)

### Security Delete

| Route | Method | Fill in Response Document |
|---|---|---|
| `/security/:id` | DELETE | No |

#### Conversion


Param :id is required integer

Use Function:

Security_Delete

Definition:

CREATE OR REPLACE FUNCTION "Security_Delete"(
    "@ApplicationSecurityID" integer,
    "@UserPartyRoleID" integer)
  RETURNS void AS

Returns: VOID

### Retrieve Accessory Category Types

| Route | Method | Fill in Response Document |
|---|---|---|
| `/security/:pcid/accessorycats` | GET | No |

#### Conversion

Convert the following in to sequelize...

```
    SELECT act.*
    FROM "AccessoryCategoryTypeProductCategory" actpc
    INNER JOIN "AccessoryCategoryType" act on act."ID" = actpc."AccessoryCategoryTypeID"
    WHERE actpc."ProductCategoryTypeID" = "@ProductCategoryID"
    ORDER BY actpc."SortOrder";
```


### Retrieve Accessory Types

| Route | Method | Fill in Response Document |
|---|---|---|
| `/security/:pcid/accessories/:actid` | GET | No |

#### Conversion

Convert the following in to sequelize...

```
    RETURN QUERY
    SELECT att.*
    FROM "AccessoryCategoryTypeProductCategory" actpc
    INNER JOIN "AccessoryCategoryProductCategoryAccessoryType" acpcat ON acpcat."AccessoryCategoryProductCategoryTypeID" = actpc."ID"
    INNER JOIN "AccessoryType" att on att."ID" = acpcat."AccessoryTypeID"
    WHERE actpc."ProductCategoryTypeID" = "@ProductCategoryID"
    AND actpc."AccessoryCategoryTypeID" = "@AccessoryCategoryID"
    ORDER BY acpcat."SortOrder";
    
```