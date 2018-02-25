# Motor Vehicle


### `/motorvehicle/:acid/dealer/:asid/:invid`

Saves a motor Vehicle invoice

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `POST`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the read:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:acid`                | Route             |  Y  | Integer                  | the id of the application container |
| `:asid`                | Route             |  N  | Integer                  | the id of the application security id |
| `:invid`                | Route             |  N  | Integer                  | the id of the current invoice |
|                 | Body             |  Y  | application/json                  | |

###### Body

```
    {
        "invoiceDate": datetime,
        "invoiceNumber" : string,
        "invoiceTotal" : decimal,
        "gst" : decimal,
        "securityType" : IdValue,
        "engineType" : IdValue,
        "doors" : int,
        "vinChassis" : string,
        "engineNumber" : string,
        "registrationNumber" : string,
        "registrationState" : IdValue,
        "odometerReading" : long,
        "purchasePrice" : decimal,
        "crumbsSupplierPartyRoleID" : int
    }
```


#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The application container requested by the :id parameter was not found                                          |

The following schema is the typical output that a caller should expect.

```
{ "id"  : int }
```

