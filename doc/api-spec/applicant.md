# Applicant



### `/applicant/:id`

Creates a new application party role and sets up all its links in crumbs

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `PUT`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the write:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the application party role |
|                 | Body             |  Y  | application/json                  | |

###### Body

```
{
  "acId": int,
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
| `400`       | The input data from the body will be missing or incorrect  or the application party role id is incorrect                                                            |

The following schema is the typical output that a caller should expect.

```
{
  "ApplicationPartyRoleID":int,
  "CrumbsPartyRoleID":int,
  "CrumbsPartyID":int
}
```

### `/applicant/:id`

Deletes an applicant and all related data

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `DELETE`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the delete:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the application party role |

### Outputs

In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The application party role id is incorrect                                                            |
| `204`       | The employment was deleted                                                 |

### `/applicant/:id/ancillary`

Updates or creates the applicant ancillary data

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `PUT`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the write:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the application party role |
|                 | Body             |  Y  | application/json                  | |

###### Body

```
{
  "identifyElectronically" : boolean,
  "consentToVerify" : boolean
}
```


#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The input data from the body will be missing or incorrect  or the application party role id is incorrect                                                            |
| `201`       | The record was created                                                     |
| `200`       | The record was updated                                                     |

The following schema is the typical output that a caller should expect.

```
{
  "applicationPartyRoleID" : int,
  "identifyElectronically" : boolean,
  "consentToVerify" : boolean
}
```
