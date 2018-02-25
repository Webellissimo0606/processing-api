# Application Staus


### `/application/:id/status`

Gets the application status summary for an application container

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
| `404`       | There was no data found for the application container                                          |

The following schema is the typical output that a caller should expect.

```
TBA as close to .net sample as possible
```

#Current .Net output sample#

```
{
    "applicationContainerId": int,
    "primaryBorrower": IdValue,
    "currentStatus": DateValue,
    "primaryProductType": string,
    "primaryProductTypeId": int,
    "parties": [
      {
        "partyId": int,
        "partyRoleId": int,
        "applicationPartyRoleId": null,
        "name": string,
        "partyRoleType": IdValue,
        "partyRoleSuite": IdValue
      }
    ],
    "links": [
      int
    ]
  }
```

##### References

See [Common Structures](common-structures.md)

### `/application/:id/statusgrouped`

Gets the application status summary grouped for an application container

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
| `404`       | There was no data found for the application container                                          |

The following schema is the typical output that a caller should expect.

```
TBA
```

#Current .Net output sample#

```
[
    {
      "name": string,
      "dates": [DateValue]
    }
]
```


##### References

See [Common Structures](common-structures.md)

### `/application/:id/status`

Sets an application status for the application container

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `POST`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the write:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the application container |
| `:tid`                | Route             |  Y  | Integer                  | the id of the application  status type |
| `:ctid`                | Route             |  N  | Integer                  | the id of the crash type |

#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The input parameters defined above as required were invalid                                          |
| `201`       | The application status creation was successful                                          |

### `/application/:id/statusdate/:tid/:when`

Sets an application status for the application container with a specific date

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `POST`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the write:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the application container |
| `:tid`                | Route             |  Y  | Integer                  | the id of the application  status type |
| `:when`                | Route             |  Y  | Date Time                  | the id of the crash type |

#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The input parameters defined above as required were invalid                                          |
| `201`       | The application status date was set                                          |


### `/application/:id/statusdate/:tid/:when`

Sets an application status for the application container with a specific date

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `POST`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the write:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the application container |
| `:tid`                | Route             |  Y  | Integer                  | the id of the application  status type |
| `:when`                | Route             |  Y  | Date Time                  | the id of the crash type |

#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The input parameters defined above as required were invalid                                          |
| `201`       | The application status date was set                                          |


### `/application/:id/status/:tid`

Deletes an application status by application and application status type

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `DELETE`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the delete:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the application container |
| `:tid`                | Route             |  Y  | Integer                  | the id of the application  status type |


#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The input parameters defined above as required were invalid                                          |
| `204`       | The application status date was deleted                                        |

### `/application/:id/crash`

Crashes and application

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `PUT`                                                                                |
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
   "type": IdValue,
   "reason": IdValue,
   "notes": string
}
```


#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | the route value is undefined or the body components are missing values                                  |


### `/application/:id/reset`

Resets an application

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `DELETE`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the delete:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the application container |


#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `204`       | The application was successfully reset                                  |
| `400`       | The :id parameter is invalid                                  |

