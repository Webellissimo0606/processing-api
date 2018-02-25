# Credit Report

### `/application/:id/creditreportsrequired`

Gets a list of applicants for an application if they require a credit report.

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `GET`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the read:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the application container id |

#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The application container requested by the :id parameter was not found                                          |

The following schema is the typical output that a caller should expect.

```
[
    {
        "ApplicationPartyRoleID" : int,
        "BureauReference" : string
    }
]
```

### `/applicant/:id/creditreportlatest`

Gets the latest credit report data for the application party role

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `GET`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the read:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the application party role |

#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The application party role requested by the :id parameter was not found                                          |

The following schema is the typical output that a caller should expect.

#NOTE#

This summary is for an individual and a basic sample, the data will change with company and product types.

```
[
  [
    {
      "CreditReportType": string,
      "BureauReference": string,
      "EnquiryID": string,
      "PrimaryMatchType": string,
      "DatetimeRequested": datetime,
      "DatetimeGenerated": datetime,
      "ClientReference": string,
      "OperatorID": string,
      "OperatorName": string,
      "ProductName": string,
      "PermissionTypeCode": string,
      "PermissionType": string,
      "ProductDataLevel": string,
      "ProductDataLevelCode": string,
      "ProductVersion": string,
      "FirstReportedDate": datetime,
      "LastReportedDate": datetime,
      "LastCreditEnquiryDate": datetime,
      "PrimaryMatchIDIndex": string,
      "FamilyName": string,
      "GivenName": string,
      "OtherName": string,
      "GenderType": string,
      "GenderCode": string,
      "DateOfBirth": datetime,
      "DateOfBirthLastReported": datetime,
      "DriversLicenceNumber": string,
      "ScorecardID": string,
      "ScorecardName": string,
      "ScorecardVersion": string,
      "ScorecardType": string,
      "ScorecardDataLevelCode": string,
      "ScorecardDataLevel": string,
      "RiskOdds": string,
      "Score": string,
      "TraxRequestFileID": string,
      "TraxResponseFileID": string,
      "Created": datetime
    }
  ],
  [
    {
      "IDIndex": string,
      "LatestUpdateDate": datetime,
      "AccountDataLevel": int,
      "AccountID": string,
      "OriginalCreditProvider": string,
      "OriginalCreditProviderIsLicensee": string,
      "LatestCreditProvider": string,
      "LatestCreditProviderIsLicensee": string,
      "TransferDate": datetime,
      "AccountTypeCode": string,
      "AccountType": string,
      "RelationshipCode": string,
      "Relationship": string,
      "AccountHolderCount": string,
      "AccountOpenDate": string,
      "AccountClosedDate": string,
      "AccountReopenDate": string,
      "LoanPaymentMethodCode": string,
      "LoanPaymentMethod": string,
      "TermTypeCode": string,
      "TermType": string,
      "SecuredCreditCode": string,
      "SecuredCredit": string,
      "TermOfLoan": string,
      "OriginalMaximumAmountOfCredit": string,
      "OriginalCurrencyCode": string,
      "LatestMaximumAmountOfCredit": string,
      "LatestCurrencyCode": string,
      "DateLastChanged": datetime,
      "IsUnlimitedCredit": string
    }
  ],
  [
    {
      "IDIndex": string,
      "AddressType": string,
      "FirstReportedDate": datetime,
      "LastReportedDate": datetime,
      "StreetNumber": string,
      "StreetName": string,
      "StreetTypeCode": string,
      "Suburb": string,
      "State": string,
      "Postcode": string,
      "CountryCode": string
    }
  ],
  [
    {
      "IDIndex": string,
      "LatestStartDate": datetime,
      "LatestCeasedDate": datetime,
      "IsSeriousCreditInfringement": string,
      "SCIDate": datetime,
      "DefaultAssociationStartDate": datetime,
      "DefaultAssociationCeaseDate": datetime
    }
  ],
  [],
  [],
  [
    {
      "IDIndex": string,
      "EnquiryDate": datetime,
      "EnquiryType": string,
      "AccountTypeCode": string,
      "AccountType": string,
      "EnquiryAmount": string,
      "RelationshipCode": string,
      "Relationship": string,
      "CoBorrower": string,
      "CreditEnquirer": string,
      "ClientReference": string
    }
  ],
  [
    {
      "IDIndex": string,
      "StatusCode": string,
      "Status": string,
      "StatusDate": datetime,
      "OriginalDefaultDateRecorded": datetime,
      "OriginalDefaultAmount": string,
      "OriginalDefaultReasonToReportCode": string,
      "OriginalDefaultReasonToReport": string,
      "CurrentDefaultDateRecorded": datetime,
      "CurrentDefaultAmount": string,
      "CurrentDefaultReasonToReportCode": string,
      "CurrentDefaultReasonToReport": string
    }
  ],
  [
    {
      "IDIndex": string,
      "DirectorshipType": string,
      "LastExtractDate": datetime,
      "LastExtractTime": datetime,
      "LastUpdateDate": datetime,
      "LastUpdateTime": datetime,
      "DateAppointed": datetime,
      "DateCeased": datetime,
      "DateLastKnownAsDirector": datetime,
      "OrganisationBureauReference": string,
      "OrganisationName": string,
      "OrganisationNameStartDate": datetime,
      "OrganisationTypeCode": string,
      "OrganisationType": string,
      "OrganisationStatusCode": string,
      "OrganisationStatus": string,
      "OrganisationNumber": string,
      "ABN": string
    }
  ],
  [],
  [
    {
      "IDIndex": string,
      "FirstReportedDate": datetime,
      "LastReportedDate": datetime,
      "Employer": string,
      "Occupation": string
    }
  ],
  [],
  [
    {
      "IDIndex": string,
      "BureauReference": string,
      "FirstReportedDate": string,
      "LastReportedDate": string,
      "LastCreditEnquiryDate": string,
      "FamilyName": string,
      "GivenName": string,
      "OtherGivenName": string,
      "GenderCode": string,
      "GenderType": string,
      "DateOfBirth": string,
      "DriversLicenceNumber": string
    }
  ],
  [
    {
      "Message": string,
      "MessageCode": string
    }
  ],
  [],
  [],
  [
    {
      "ID": string,
      "Name": string,
      "Description": string,
      "Impactor": string
    }
  ],
  [
    {
      "DataBlockType": string,
      "DataBlockName": string,
      "CharacteristicID": string,
      "KeyCharacteristic": boolean,
      "VariableName": string,
      "Description": string,
      "Value": string,
      "ValueUnitOfMeasure": string,
      "DataLevelCode": string,
      "DataLevel": string
    }
  ]
]
```


### `/applicant/:id/creditreport`

Gets the credit report summary for the application party role

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `GET`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the read:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the application party role |

#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The application party role requested by the :id parameter was not found                                          |

The following schema is the typical output that a caller should expect.

#NOTE#

This summary is for an individual and a basic sample, the data will change with company and product types.

```
[
  [
    {
      "client-reference": int,
      "title": string,
      "first-given-name": string,
      "other-given-name": string,
      "family-name": string,
      "date-of-birth": dateTime,
      "gender-code": string,
      "drivers-licence-number": string,
      "relationship-code": int
    }
  ],
  [
    {
      "employment-name": string,
      "employment-employer-type": string
    }
  ],
  [
    {
      "property": string,
      "unit-number": string,
      "street-number": string,
      "street-name": string,
      "street-type": string,
      "suburb": string,
      "state": string,
      "post-code": string,
      "country-code": string,
      "address-type": string
    }
  ],
  [
    {
      "enquiry-amount": decimal,
      "account-type-code": string,
      "enquiry-amount-currency-code": string
    }
  ]
]
```

### `/applicant/:id/creditreportcompany`

Gets the credit report trading history summary for the application party role

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `GET`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the read:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the application party role |

#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The application party role requested by the :id parameter was not found                                          |

The following schema is the typical output that a caller should expect.

#NOTE#

This summary is for an individual and a basic sample, the data will change with company and product types.

```
[
      [
        {
          "client-reference": int,
          "request-type": string,
          "bureau-reference": string,
          "subject-role": string,
          "australian-company-number": string,
          "current-historic-flag": string,
          "enquiry-type": string,
          "account-type-code": string,
          "account-type": string,
          "enquiry-amount": decimal,
          "enquiry-amount-currency-code": string,
          "credit-type": string,
          "ppsr-required": string
        }
      ],
      [
        {
          "privacy-consent": string,
          "title": string,
          "first-given-name": string,
          "other-given-name": string,
          "family-name": string,
          "date-of-birth": datetime,
          "gender": string,
          "drivers-licence-number": string,
          "property": string,
          "unit-number": string,
          "street-number": string,
          "street-name": string,
          "street-type": string,
          "suburb": string,
          "state": string,
          "post-code": string,
          "country-code": string,
          "address-type": string
        }
      ]
    ]
```

### `/applicant/:id/creditreporttype`

Gets the credit report type for the application party role

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `GET`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the read:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the application party role |

#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The application party role requested by the :id parameter was not found                                          |

The following schema is the typical output that a caller should expect.

#NOTE#

This summary is for an individual and a basic sample, the data will change with company and product types.

```
string
```

### `/creditreport/:id/enquiry`

Gets the credit report enquiry data for an id

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `GET`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the read:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the credit report |

#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The application party role requested by the :id parameter was not found                                          |

The following schema is the typical output that a caller should expect.

#NOTE#

This summary is for an individual and a basic sample, the data will change with company and product types.

```
      {
        "EnquiryID": string,
        "ApplicantName": string,
        "ApplicationContainerID": int,
        "ApplicationPartyRoleID": int
      }
```


### `/applicant/:id/creditreportrequired`

Gets if a credit report is required for the application party role

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `GET`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the read:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the application party role |

#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The application party role requested by the :id parameter was not found                                          |

The following schema is the typical output that a caller should expect.

```
boolean
```


### `/applicant/:id/creditreportapply`

Creates a credit report from the response data

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `POST`                                                                                |
| Authentication | This route does require authentication                                                   |
| Authorization  | This route should assert the write:entity permissions                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the application party role |
|                 | Body             |  Y  | application/json                  | |

###### Body

```
{
    'report' : string (xml),
    'requestFileId' : string,
    'responseFileId' : string,
    'requestedReportType': string
}
```


#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The body was not in a compatible format to what the route was expecting. The `message` attribute contains invalid field names |
| `201`       | An Credit Report was created                                       |

The following schema is the typical output that a caller should expect.

```
{
    "iD" : int
}
```

### `/applicant/:id/creditreportenqueue`

Creates a credit report required record

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `POST`                                                                                |
| Authentication | This route does require authentication                                                   |
| Authorization  | This route should assert the write:entity permissions                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the application party role |
|                 | Body             |  Y  | application/json                  | |

###### Body

```
{
    'bureauRef'
}
```


#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The body was not in a compatible format to what the route was expecting. The `message` attribute contains invalid field names |
| `201`       | An Credit Report Required was created                                       |

The following schema is the typical output that a caller should expect.

```
int
```


### `/creditreport/:id/filename`

Updates the credit report file name

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `PUT`                                                                                |
| Authentication | This route does require authentication                                                   |
| Authorization  | This route should assert the write:entity permissions                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the credit report |
|                 | Body             |  Y  | application/json                  | |

###### Body

```
{
    'fileName' : string
}
```


#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The body was not in a compatible format to what the route was expecting. The `message` attribute contains invalid field names |
| `404`       | The credit report was not found |
