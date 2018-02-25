# Motor Vehicle  Conversion

### Save Dealer Tax Invoice

| Route | Method | Fill in Response Document |
|---|---|---|
| `/motorvehicle/:acid/dealer/:asid/:invid` | POST | No |

#### Conversion

Param :id is required integer, the rest are optional

USE function:

MotorVehicleDealerTaxInvoice_CreateUpdate

Definition:
CREATE OR REPLACE FUNCTION "MotorVehicleDealerTaxInvoice_CreateUpdate"(
    IN "@ApplicationContainerID" integer,
    IN "@ApplicationSecurityID" integer DEFAULT NULL::integer,
    IN "@ExistingMotorVehicleDealerTaxInvoiceID" integer DEFAULT NULL::integer,
    IN "@CrumbsSupplierPartyRoleID" integer DEFAULT 1,
    IN "@InvoiceNumber" character varying DEFAULT NULL::character varying,
    IN "@InvoiceAmount" numeric DEFAULT NULL::numeric(18,4),
    IN "@InvoiceDate" date DEFAULT NULL::date,
    IN "@GSTAmount" numeric DEFAULT NULL::numeric(18,4),
    IN "@RetailSecurityTypeID" integer DEFAULT NULL::integer,
    IN "@RetailEngineTypeID" integer DEFAULT NULL::integer,
    IN "@NumberOfDoors" integer DEFAULT NULL::integer,
    IN "@VINChassisNumber" character varying DEFAULT NULL::character varying,
    IN "@EngineNumber" character varying DEFAULT NULL::character varying,
    IN "@RegistrationNumber" character varying DEFAULT NULL::character varying,
    IN "@RegistrationStateID" integer DEFAULT NULL::integer,
    IN "@OdometerReading" bigint DEFAULT NULL::bigint,
    IN "@PurchasePrice" numeric DEFAULT NULL::numeric(18,4),
    IN "@UserPartyRoleID" integer DEFAULT 1,
    OUT "@NewMotorVehicleDealerTaxInvoiceID" integer)
  RETURNS integer AS

Returns: INTEGER