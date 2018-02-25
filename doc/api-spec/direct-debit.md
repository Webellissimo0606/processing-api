# Direct Debit


### `/application/:id/directdebits`

Lists the direct debits for an application container

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
| `400`       | The directdebit requested by the :id parameter was not found                                          |

The following schema is the typical output that a caller should expect.

```
[dao.v8.DirectDebit]
```


### `/application/:id/directdebit`

Creates a new direct debit on an application

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
  dao.v8.DirectDebit
}
```

##### Notes

There is no need to pass the application container id in the body here as it is passed via the route.

Created, CreatedByPartyRoleID, LastUpdated and LastUpdatedPartyRoleID will be auto filled during the save.


#### Output

In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `201`       | The directdebit was created successfully |
| `400`       | Input values set to required above are invalid |
| `500`       | The input loan id was not found |


The following schema is the typical output that a caller should expect.

```
{
    "iD" : int
}
```


### `/directdebit/:id`

Updates a direct debit.

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `PUT`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the write:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the direct debit |
|                 | Body             |  Y  | application/json                  | |

###### Body

```
{
  dao.v8.DirectDebit
}
```

##### Notes

There is no need to pass the direct debit id in the body here as it is passed via the route.

LastUpdated and LastUpdatedPartyRoleID will be auto filled during the save.

Created, CreatedByPartyRoleID must not be set as it will override.

#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The application container requested by the :id parameter was not a valid number                                          |


### `/directdebit/:id`

Deletes a direct debit.

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `DELETE`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the delete:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the directdebit |
|                 | Body             |  Y  | application/json                  | |

##### Notes

There is no need to pass the direct debit id in the body here as it is passed via the route.

LastUpdated and LastUpdatedPartyRoleID will be auto filled during the save.

Created, CreatedByPartyRoleID must not be set as it will override.

Application Container will already exist on the current and no need to pass.

#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `204`       | The direct debit was successfully deleted                                          |
| `400`       | The condition requested by the :id parameter was not a valid number                                          |
