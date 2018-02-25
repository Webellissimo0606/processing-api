# Application Applicant

### `/application/:id/applicants`

Gets a summary of the applicants for an application container

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `GET`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the read:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the application container |


#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The application container requested by the :id parameter was not found                                          |
| `500`       | No data was found                                          |


The following schema is the typical output that a caller should expect.

```
[
  {
    "ApplicationPartyRoleID": int,
    "PartyTypeID": int,
    "DisplayName": string,
    "VedaScore": decimal,
    "FMScore": decimal,
    "EstimatedFMScore": decimal,
    "FMCScoreTypeID": int,
    "FMCScoreTypeName": string,
    "TelephoneNumber": string,
    "EmailAddress": string,
    "EmployerName": string,
    "BasisType": string,
    "LengthYears": int,
    "LengthMonths": int,
    "CrumbsPartyID": int,
    "NonResident": boolean,
    "IdentifyElectronically" boolean,
    "ConsentToVerify" boolean
  }
]
```


### `/application/:id/applicant`

Creates a new application party role on an application and sets up all its links in crumbs

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `POST`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the write:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the application container |
|                 | Body             |  Y  | application/json                  | |

###### Body

```
{
  "borrowerRoleType": {
    "id": int
  },
  "nominatedBorrower": boolean,
  "partyType": {
    "id": int
  }
}
```

#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The input data from the body will be missing or incorrect                   |
| `201`       | Was successfully created and the new ids will be presented                                                    |

The following schema is the typical output that a caller should expect.

```
{
  "ApplicationPartyRoleID":int,
  "CrumbsPartyRoleID":int,
  "CrumbsPartyID":int
}
```




