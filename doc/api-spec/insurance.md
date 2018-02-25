# Insurance

### `/applicationsecurity/:id/insurance`

Gets the insurance records for an application security

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `GET`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the read:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the application security |


#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The application security id requested by the :id parameter was not a valid number                                          |


The following schema is the typical output that a caller should expect.


```
[dao.v8.Insurance]
```

### `/applicationsecurity/:id/insurance`

Creates an insurance record against an application security

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `POST`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the write:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the application security |
|                 | Body             |  Y  | application/json                  | |

###### Body

```
v8.dao.Insurance
```

#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `201`       | The insurance was created                                          |
| `400`       | The application security id requested by the :id parameter was not a valid number                                          |


The following schema is the typical output that a caller should expect.


```
{ "iD" : int }
```


### `/insurance/:id/`

Updates an insurance

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `PUT`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the write:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the living expense |
|                 | Body             |  Y  | application/json                  | |

###### Body

```
v8.dao.Insurance
```

#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The application security id requested by the :id parameter was not a valid number                                          |

### `/insurance/:id/`

Deletes an insurance

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `DELETE`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the write:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the living expense |
|                 | Body             |  Y  | application/json                  | |

###### Body

```
v8.dao.Insurance
```

#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The application security id requested by the :id parameter was not a valid number                                          |
| `204`       | Insurance was deleted                                          |
