# Applicant Employment


### `/applicant/:id/employments`

Gets the employments for an application party role

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
  dao.v8.Employment
]
```

### `/applicant/:id/employment`

Creates an employment for the application party role

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
  dao.v8.Employment
}
```

##### Notes

There is no need to pass the application party role in the body here as it is passed via the route.

Created, CreatedByPartyRoleID, LastUpdated and LastUpdatedPartyRoleID will be auto filled during the save.

#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The application party role requested by the :id parameter was not a valid number                                          |
| `201`       | The employment creation was successful                                          |


The following schema is the typical output that a caller should expect.

```
iD: int
```

### `/employment/:id`

Update an employment for the application party role

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `PUT`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the write:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the employment |
|                 | Body             |  Y  | application/json                  | |

###### Body

```
{
  dao.v8.Employment
}
```

##### Notes

There is no need to pass the employment id in the body here as it is passed via the route.

LastUpdated and LastUpdatedPartyRoleID will be auto filled during the save.

Application Party Role will already exist on the current and no need to pass.

#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The application party role requested by the :id parameter was not a valid number                                          |


### `/employment/:id`

Deletes an employment for the application party role

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `DELETE`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the delete:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the employment |
|                 | Body             |  Y  | application/json                  | |

#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The employment requested by the :id parameter was not a valid number                                          |
| `204`       | The employment was successfully deleted                                          |

