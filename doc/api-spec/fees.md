# fee


### `/application/:id/fees`

Lists the fees for a application container

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

The following schema is the typical output that a caller should expect.

```
[
  {
    iD: int,
    applicationContainerID: int,
    feeTypeID: int,
    amount: string,
    frequencyTypeID: int,
    created: date,
    createdByPartyRoleID: int,
    lastUpdated: date,
    lastUpdatedByPartyRoleID: int,
    PartyRole: {
      iD: int,
      crumbsPartyRoleID: int
    }
  }
]
```


### `/fee/:id`

Gets a specific fee

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `GET`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the read:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the fee |

#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The fee requested by the :id parameter was not found                                          |

The following schema is the typical output that a caller should expect.

```
  {
    iD: int,
    applicationContainerID: int,
    feeTypeID: int,
    amount: string,
    frequencyTypeID: int,
    created: date,
    createdByPartyRoleID: int,
    lastUpdated: date,
    lastUpdatedByPartyRoleID: int,
    PartyRole: {
      iD: int,
      crumbsPartyRoleID: int
    }
  }
```


### `/application/:id/desposit`

Creates a new fee on a application container

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `POST`                                                                                |
| Authentication | This route does require authentication                                                   |
| Authorization  | This route should assert the write:entity permissions                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the application container |
|                 | Body             |  Y  | application/json                  | |

###### Body

```
{
  dao.v8.ApplicationContainerFee
}
```

##### Notes

There is no need to pass the application container id in the body here as it is passed via the route.

Created, CreatedByPartyRoleID, LastUpdated and LastUpdatedPartyRoleID will be auto filled during the save.


#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `201`       | The fee was created successfully |
| `400`       | Input values set to required above are invalid |
| `500`       | The input application container id was not found |


The following schema is the typical output that a caller should expect.

```
{
    "iD" : int
}
```


### `/fee/:id`

Updates a fee.

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `PUT`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the write:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the fee |
|                 | Body             |  Y  | application/json                  | |

###### Body

```
{
  dao.v8.ApplicationContainerFee
}
```

##### Notes

There is no need to pass the fee id in the body here as it is passed via the route.

LastUpdated and LastUpdatedPartyRoleID will be auto filled during the save.

Created, CreatedByPartyRoleID must not be set as it will override.

#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The application container requested by the :id parameter was not a valid number                                          |


### `/fee/:id`

Deletes a fee.

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `DELETE`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the delete:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the fee |
|                 | Body             |  Y  | application/json                  | |

##### Notes

There is no need to pass the fee id in the body here as it is passed via the route.

LastUpdated and LastUpdatedPartyRoleID will be auto filled during the save.

Created, CreatedByPartyRoleID must not be set as it will override.

Application Container will already exist on the current and no need to pass.

#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `204`       | The fee was successfully deleted                                          |
| `400`       | The condition requested by the :id parameter was not a valid number                                          |
