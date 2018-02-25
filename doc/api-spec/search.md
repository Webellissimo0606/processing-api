# Search


### `/application/search/:q/:p/:ps`

Auto generate pooling for an application

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `POST`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the read:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:q`                | Route             |  Y  | Integer                  | the search query |
| `:p`                | Route             |  Y  | Integer                  | the page number |
| `:ps`                | Route             |  Y  | Integer                  | the page size |


#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The required inputs above are invalid                                          |
| `500`       | No valid search results                                 |


The following schema is the typical output that a caller should expect.

```
[
    {
         "applicationContainerId" : int,
         "applicationId" int,
         "borrowerName" : string,
         "productTypeName" : string
    }
]
```
