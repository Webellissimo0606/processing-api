# Applicant Relationships


### `/applicant/:id/relationships`

Gets the relationships for an application party role

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
  {
    RelatedApplicationPartyRoleID: int,
    RelatedPartyName: string,
    RelationshipTypeID: int,
    RelationshipTypeName: string
  }
]
```

### `/applicant/:id/relationships`

Updates the relationships for an application party role

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
   "relationships" :
   [
    {
      "fptId": int,
      "tptId": int,
      "id": int,
      "name": string,
      "type": {
        "id": int,
        "name": string
      }
    }
  ]
}
```


#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The application party role requested by the :id parameter was not a valid number                                          |


The following schema is the typical output that a caller should expect.

```
[
  {
    RelatedApplicationPartyRoleID: int,
    RelatedPartyName: string,
    RelationshipTypeID: int,
    RelationshipTypeName: string
  }
]
```


### `/applicant/:fid/relationships/:tid`

Gets the possible relationship types from a party role type, to another party role type

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `GET`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the read:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:fid`                | Route             |  Y  | Integer                  | the from party role type |
| `:tid`                | Route             |  Y  | Integer                  | the to party role type |

#### Output

In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | Parameters fid or tid are missing                                          |


The following schema is the typical output that a caller should expect.

```
[
  {
    "ID": int,
    "Name": string,
    "ConsideredSameHousehold": boolean
  }
]
```
