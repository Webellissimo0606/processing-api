# Financial


### `/application/:id/households`

Gets the households for an application container

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
[v8.dao.Household]
```


### `/financial/:id/living`

Gets the list of living expenses for a houshold

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `GET`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the read:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the household |

#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The application container id requested by the :id parameter was not found                                          |

The following schema is the typical output that a caller should expect.

```
[
    v8.dao.Liability
]
```


### `/financial/:id/living`

Creates a living expense

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `POST`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the write:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the household id |
|                 | Body             |  Y  | application/json                  | |

###### Body

```
v8.dao.Liability
```

##### Body Notes

The following are not required when passing as a living expense...

| Column | Default |
|---|---|
| CreditProviderID | NULL |
| AmountOwing | 0 |
| RepaymentTypeID | 1 |


#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `201`       | The living expense was created                                          |
| `400`       | The household id requested by the :id parameter was not a valid number                                          |


The following schema is the typical output that a caller should expect.


```
{ "iD" : int }
```


### `/financial/:id/living`

Updates a living expense

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
v8.dao.Liability
```

##### Body Notes

The following are not required when passing as a living expense...

| Column | Default |
|---|---|
| CreditProviderID | NULL |
| AmountOwing | 0 |
| RepaymentTypeID | 1 |

There is no need to update the household id as this will already be set.


#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The living expense id requested by the :id parameter was not a valid number                                          |

### `/financial/:id/living`

Deletes a living expense

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `DELETE`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the delete:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the living expense |



#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `201`       | the living expense was successfully deleted                                          |
| `400`       | The living expense id requested by the :id parameter was not a valid number                                          |



### `/financial/:id/liability`

Gets the list of liabilities for a household

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `GET`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the read:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the household |

#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The application container id requested by the :id parameter was not found                                          |

The following schema is the typical output that a caller should expect.

```
[
    v8.dao.Liability
]
```


### `/financial/:id/liability`

Creates a liability

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `POST`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the write:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the household id |
|                 | Body             |  Y  | application/json                  | |

###### Body

```
v8.dao.Liability
```


#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `201`       | The liability was created                                          |
| `400`       | The household id requested by the :id parameter was not a valid number                                          |


The following schema is the typical output that a caller should expect.


```
{ "iD" : int }
```


### `/financial/:id/liability`

Updates a liability

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
v8.dao.Liability
```

#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The liability id requested by the :id parameter was not a valid number                                          |

### `/financial/:id/liability`

Deletes a liability

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `DELETE`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the delete:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the liability |



#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `201`       | the liability was successfully deleted                                          |
| `400`       | The liability id requested by the :id parameter was not a valid number                                          |


### `/financial/:id/asset`

Gets the list of assets for a houshold

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `GET`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the read:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the household |

#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The application container id requested by the :id parameter was not found                                          |

The following schema is the typical output that a caller should expect.

```
[
    v8.dao.Asset
]
```


### `/financial/:id/asset`

Creates a asset

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `POST`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the write:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the household id |
|                 | Body             |  Y  | application/json                  | |

###### Body

```
v8.dao.Asset
```


#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `201`       | The asset was created                                          |
| `400`       | The household id requested by the :id parameter was not a valid number                                          |


The following schema is the typical output that a caller should expect.


```
{ "iD" : int }
```


### `/financial/:id/asset`

Updates an asset

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `PUT`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the write:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the asset |
|                 | Body             |  Y  | application/json                  | |

###### Body

```
v8.dao.Asset
```

#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The asset id requested by the :id parameter was not a valid number                                          |

### `/financial/:id/asset`

Deletes an asset

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `DELETE`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the delete:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the asset |


#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `201`       | the asset was successfully deleted                                          |
| `400`       | The asset id requested by the :id parameter was not a valid number                                          |
