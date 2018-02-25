# Loan  Conversion

### List Loans for an application container

| Route | Method | Fill in Response Document |
|---|---|---|
| `/application/:id/loans` | GET | Yes |

#### Conversion

Param :id is required integer

Convert to sequelize code and return where application container id = the input.

### List Loan amounts for an application container

| Route | Method | Fill in Response Document |
|---|---|---|
| `/application/:id/loanamounts` | GET | No |

#### Conversion

Param :id is required integer

USE function:

Loan_RetrieveAmountSummary

Definition:
CREATE OR REPLACE FUNCTION "Loan_RetrieveAmountSummary"(
    IN "@ApplicationContainerID" integer,
    IN "@UserPartyRoleID" integer)


#Note#

Existing code for the total

```

                Func<decimal?, decimal> nz = (v) => {
                    return !v.HasValue ? 0M : v.Value;
                };

                var total = nz(price) - nz(gstAmount) - nz(deposit) + nz(fees) + nz(externalBrokerageAmount);
```

#Sample .Net Response#

```
{
    "id": 7783,
    "purpose": "Purchase New Personal Car",
    "asset": "2016 HONDA CIVIC",
    "product": "Car Loan Fixed for 4 years @5.1900%",
    "price": 35000.0,
    "deposit": null,
    "fees": 400.0,
    "total": 35400.0,
    "externalBrokerageAmount": 0.0,
    "gstAmount": null
  }
```

### Retrieve Balloon Percentages

| Route | Method | Fill in Response Document |
|---|---|---|
| `/loan/:id/baloons` | GET | No |

#### Conversion

Param :id is required integer

USE function:
BalloonPercentage_RetrieveAvailableByLoanID

Definition:

CREATE OR REPLACE FUNCTION "BalloonPercentage_RetrieveAvailableByLoanID"(IN "@LoanID" integer)
  RETURNS TABLE("ID" numeric, "Value" numeric) AS

### Retrieve Product Types

| Route | Method | Fill in Response Document |
|---|---|---|
| `/loan/:id/products` | GET | No |

#### Conversion

Param :id is required integer

USE function:

ProductType_RetrieveAvailableByLoanID

Definition:

CREATE OR REPLACE FUNCTION "ProductType_RetrieveAvailableByLoanID"(IN "@LoanID" integer)
  RETURNS TABLE("ID" integer, "Name" character varying) AS

Returns: TABLE("ID" integer, "Name" character varying)


### Retrieve Term rates

| Route | Method | Fill in Response Document |
|---|---|---|
| `/loan/:id/termrates` | GET | No |

#### Conversion

Param :id is required integer

USE function:

TermAndRate_RetrieveAvailableByLoanID

Returns: TABLE("ProgramProductPricingID" integer, "ProgramProductID" integer, "LoanTermCode" integer, "LoanTermID" integer, "RateToBorrower" numeric, "Description" character varying, "MaximumBrokerage" numeric, "MaximumBalloon" numeric)


### Retrieve Repayment Types

| Route | Method | Fill in Response Document |
|---|---|---|
| `/loan/:id/repayments` | GET | No |

#### Conversion

Param :id is required integer

USE function:

RepaymentType_RetrieveAvailableByLoanID

Definition:

CREATE OR REPLACE FUNCTION "TermAndRate_RetrieveAvailableByLoanID"(
    IN "@LoanID" integer,
    IN "@LoanAmount" numeric)

Returns: TABLE("RepaymentFrequencyTypeID" integer, "RepaymentFrequencyTypeName" character varying)


### Get the Loan

| Route | Method | Fill in Response Document |
|---|---|---|
| `/loan/:id` | Get | No |

#### Conversion

Param :id is required integer

Convert to sequelize code.

### Loan  Create

| Route | Method | Fill in Response Document |
|---|---|---|
| `/loan/:id/loan` | POST | No |

#### Conversion


Param :id is required integer

Param input to be set on body as the loan id

Created, CreatedByPartyRoleID, LastUpdated and LastUpdatedPartyRoleID will be auto filled during the save.

### Loan  Update

| Route | Method | Fill in Response Document |
|---|---|---|
| `/loan/:id` | PUT | No |

#### Conversion


Param :id is required integer

Param input to be set on body as the id of the Loan 

LastUpdated and LastUpdatedPartyRoleID will be auto filled during the save.

Created, CreatedByPartyRoleID must not be set.

