# Application Container


### `/application/:id`

Gets an application container and its product category

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
{
    dao.v8.ApplicationContainer,
    dao.v8.ProductCategory
}
```


### `/application/`

Creates a new application container

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `POST`                                                                                |
| Authentication | This route does require authentication                                                   |
| Authorization  | This route should assert the write:entity permissions                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
|                 | Body             |  Y  | application/json                  | |

###### Body

```
dao.v8.ApplicationContainer
```


###### Defaults

| Property       | Default                                                                                | Type | Notes |
|----------------|----------|--------|-----|
| IsStaffApplication | false | Boolean | If not being supplied as true |

#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The body was not in a compatible format to what the route was expecting. The `message` attribute contains invalid field names |
| `201`       | An Application Container was created                                       |

The following schema is the typical output that a caller should expect.

```
{
    "iD" : int
}
```

### `/application/:id/relationshipkeys`

Gets the key pair relationsip data

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
| `400`       | The application container requested by the :id parameter was not a valid number                                          |


The following schema is the typical output that a caller should expect.

```
  "product":{
            "category": {
                        "id" : int,
                        "name" : string
                        },
            "subCategory": {
                        "id" : int,
                        "name" : string
                        },
            },
 "applicationPartyRoles": [{
                                "id" : int,
                                "name" : string
                           }]
```



### `/application/:id/identity`

Gets the identity information

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
TBA
```

### `/application/:id/:tid`

Searches for an application by key and type

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `GET`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the read:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the entity to search on |
| `:tid`                | Route             |  Y  | string                  | the type of entity to search on |

#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The :id or :tid params where invalid                                   |

The following schema is the typical output that a caller should expect.

```
integer
```
