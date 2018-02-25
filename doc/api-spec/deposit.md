# Deposit


### `/loan/:id/deposits`

Lists the deposits for a loan

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `GET`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the read:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the loan |

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
    loanID: int,
    depositTypeID: int,
    amount: string,
    description: string,
    created: date,
    createdByPartyRoleID: int,
    lastUpdated: date,
    lastUpdatedByPartyRoleID: int,
    active: boolean
  }
]
```


### `/deposit/:id`

Gets a specific deposit

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `GET`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the read:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the deposit |

#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The deposit requested by the :id parameter was not found                                          |

The following schema is the typical output that a caller should expect.

```
{
  iD: int,
  loanID: int,
  depositTypeID: int,
  amount: string,
  description: string,
  created: date,
  createdByPartyRoleID: int,
  lastUpdated: date,
  lastUpdatedByPartyRoleID: int,
  active: boolean
}
```


### `/loan/:id/deposit`

Creates a new deposit on a loan

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `POST`                                                                                |
| Authentication | This route does require authentication                                                   |
| Authorization  | This route should assert the write:entity permissions                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the loan |
|                 | Body             |  Y  | application/json                  | |

###### Body

```
{
  dao.v8.Deposit
}
```

##### Notes

There is no need to pass the loan id in the body here as it is passed via the route.

Created, CreatedByPartyRoleID, LastUpdated and LastUpdatedPartyRoleID will be auto filled during the save.


#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `201`       | The deposit was created successfully |
| `400`       | Input values set to required above are invalid |
| `500`       | The input loan id was not found |


The following schema is the typical output that a caller should expect.

```
{
    "iD" : int
}
```


### `/deposit/:id`

Updates a deposit.

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `PUT`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the write:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the deposit |
|                 | Body             |  Y  | application/json                  | |

###### Body

```
{
  dao.v8.Deposit
}
```

##### Notes

There is no need to pass the deposit id in the body here as it is passed via the route.

LastUpdated and LastUpdatedPartyRoleID will be auto filled during the save.

Created, CreatedByPartyRoleID must not be set as it will override.

#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The application container requested by the :id parameter was not a valid number                                          |


### `/deposit/:id`

Deletes a deposit.

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `DELETE`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the delete:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  |
#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `204`       | The deposit was successfully deleted                                          |
| `400`       | The condition requested by the :id parameter was not a valid number                                          |
