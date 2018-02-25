# Third Party


### `/thirdparty/track/:oprid`

Returns the track my application report

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `POST`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the read:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:oprid`                | Route             |  N  | Integer                  | the id of a party role the report will execute on behalf off |


#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `500`       | No report data was found                                   |

The following schema is the typical output that a caller should expect.

```
{
    id int,
    name string,
    created date,
    amount string,
    elid int,
    pcid int,
    raid int,
    applicationStatusTypeName string
}
```
