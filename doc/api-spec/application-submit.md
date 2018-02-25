# Application Submit


### `/application/submit`

Submits and application

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `POST`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the read:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
|                 | Body             |  Y  | application/json                  | |


###### Body

```
TBA
```


#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The required input types as per the table above are not found                                    |

The following schema is the typical output that a caller should expect.

```
{
    "iD" : integer
}
```

