# Applicant Income


### `/applicant/:id/incomes`

Gets the incomes for an application party role

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
| `400`       | The application party role requested by the :id parameter was not a valid number                                          |


The following schema is the typical output that a caller should expect.

```
[
  dao.v8.Income,
  "EmploymentIncomeFks" : dao.v8.EmploymentIncome
]
```


### `/applicant/:id/income`

Creates an income for the application party role

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `POST`                                                                                |
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
  dao.v8.Income,
  employmentId : int
}
```

##### Notes

employmentId should be nullable and if so then is not associated to the income

There is no need to pass the application party role in the body here as it is passed via the route.

Created, CreatedByPartyRoleID, LastUpdated and LastUpdatedPartyRoleID will be auto filled during the save.

#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The application party role requested by the :id parameter was not a valid number                                          |
| `201`       | The income creation was successful                                          |


The following schema is the typical output that a caller should expect.

```
iD: int
```

### `/income/:id`

Update an income for the application party role

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `PUT`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the write:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the income |
|                 | Body             |  Y  | application/json                  | |

###### Body

```
{
  dao.v8.Income
}
```

##### Notes

Employment link will already be defined and this is purely updating the incoem details.

There is no need to pass the income id in the body here as it is passed via the route.

LastUpdated and LastUpdatedPartyRoleID will be auto filled during the save.

Application Party Role will already exist on the current and no need to pass.

#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The application party role requested by the :id parameter was not a valid number                                          |

### `/income/:id`

Deletes an income for the application party role

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `DELETE`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the delete:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the income |
|                 | Body             |  Y  | application/json                  | |

#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The income requested by the :id parameter was not a valid number                                          |
| `204`       | The income was successfully deleted                                          |

