# Final Approval


### `/application/:id/finalapprovals`

Lists the final approvals for a application container

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
    finalApprovalProcessTypeID: int,
    created: date,
    createdByPartyRoleID: int,
    completed: date,
    completedByPartyRoleID: int,
    finalApprovalProcessType: {
      iD: int,
      name: string,
      active: boolean,
      justiceID: int
    }
  }
]
```


### `/application/:id/finalapproval`

Gets the latest final approval record for an application

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
| `400`       | The application container id requested by the :id parameter was not found                                          |

The following schema is the typical output that a caller should expect.

```
TBA - Single response which will also be used in list
```


### `/finalapproval/:id`

Gets a single final approval record by id

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `GET`                                                                                |
| Authentication | This route does require authentication                                                   |
| Authorization  | This route should assert the read:entity permissions                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the final approval record |


#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | Input values set to required above are invalid |
| `500`       | The input application container id was not found |


The following schema is the typical output that a caller should expect.


```
TBA - Single response which will also be used in list
```


### `/finalapproval/:id`

Creates or Updates a final approval record

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `PUT`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the write:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the application container id |
|                 | Body             |  Y  | application/json                  | |

###### Body

```
{
   iD: int,
   applicationContainerID: int,
   finalApprovalProcessTypeID: int,
   created: date,
   createdByPartyRoleID: int,
   completed: date,
   completedByPartyRoleID: int,
   finalApprovalProcessType: {
     iD: int,
     name: string,
     active: boolean,
     justiceID: int
   }
 }
```

#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The application container requested by the :id parameter was not a valid number                                          |


The following schema is the typical output that a caller should expect.


```
TBA - Single response which will also be used in list
```


### `/finalapproval/:id/reset`

Resets the final approval process for an application container.

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `PUT`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the write:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the application container |

#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The condition requested by the :id parameter was not a valid number                                          |


The following schema is the typical output that a caller should expect.


```
{
  iD: int,
  applicationContainerID: int,
  finalApprovalProcessTypeID: int,
  created: date,
  createdByPartyRoleID: int,
  completed: date,
  completedByPartyRoleID: int,
  finalApprovalProcessType: {
    iD: int,
    name: string,
    active: boolean,
    justiceID: int
  }
}
```


### `/finalapproval/:id/next`

Gets the next type of process for the application container

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `PUT`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the write:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the application container |

#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The condition requested by the :id parameter was not a valid number                                          |

The following schema is the typical output that a caller should expect.


```
integer
```
