# Valuation 


### `/applicationsecurity/:id/valuations`

Lists the Valuations for an application security

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
| `400`       | The application security requested by the :id parameter was not found                                          |

The following schema is the typical output that a caller should expect.

```
[
    {
      "id": int,
      "applicationSecurityId": int,
      "valuationType": IdValue,
      "active": boolean,
      "created": UserDate,
      "lastUpdated": UserDate,
      "motorVehicle": [
        {
          "id": int,
          "valuationId": int,
          "valuationDescription": string,
          "isOdometerDiscrepency": boolean,
          "isEncumberanceReported": boolean,
          "isWrittenOffStatus": boolean,
          "isStolenStatus": boolean
        }
      ]
    }
  ]
```


### `/valuation/:id`

Gets the valuation item.

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `GET`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the read:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the valuation |

#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The application security requested by the :id parameter was not found                                          |

The following schema is the typical output that a caller should expect.

```
    {
      "id": int,
      "applicationSecurityId": int,
      "valuationType": IdValue,
      "active": boolean,
      "created": UserDate,
      "lastUpdated": UserDate,
      "motorVehicle": [
        {
          "id": int,
          "valuationId": int,
          "valuationDescription": string,
          "isOdometerDiscrepency": boolean,
          "isEncumberanceReported": boolean,
          "isWrittenOffStatus": boolean,
          "isStolenStatus": boolean
        }
      ]
    }

```



### `/Valuation/:id/Valuation`

Creates a new Valuation  on a Valuation

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `POST`                                                                                |
| Authentication | This route does require authentication                                                   |
| Authorization  | This route should assert the write:entity permissions                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the Valuation |
|                 | Body             |  Y  | application/json                  | |

###### Body

```
   {
      "id": int,
      "applicationSecurityId": int,
      "valuationType": IdValue,
      "active": boolean,
      "created": UserDate,
      "lastUpdated": UserDate,
      "motorVehicle": [
        {
          "id": int,
          "valuationId": int,
          "valuationDescription": string,
          "isOdometerDiscrepency": boolean,
          "isEncumberanceReported": boolean,
          "isWrittenOffStatus": boolean,
          "isStolenStatus": boolean
        }
      ]
    }

```

##### Notes

There is no need to pass the Valuation id in the body here as it is passed via the route.

Created, CreatedByPartyRoleID, LastUpdated and LastUpdatedPartyRoleID will be auto filled during the save.


#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `201`       | The Valuation  was created successfully |
| `400`       | Input values set to required above are invalid |
| `500`       | The input Valuation id was not found |


The following schema is the typical output that a caller should expect.

```
{
    "iD" : int
}
```


### `/Valuation/:id`

Updates a Valuation .

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `PUT`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the write:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the Valuation  |
|                 | Body             |  Y  | application/json                  | |

###### Body

```
   {
      "id": int,
      "applicationSecurityId": int,
      "valuationType": IdValue,
      "active": boolean,
      "created": UserDate,
      "lastUpdated": UserDate,
      "motorVehicle": [
        {
          "id": int,
          "valuationId": int,
          "valuationDescription": string,
          "isOdometerDiscrepency": boolean,
          "isEncumberanceReported": boolean,
          "isWrittenOffStatus": boolean,
          "isStolenStatus": boolean
        }
      ]
    }

```

##### Notes

There is no need to pass the Valuation  id in the body here as it is passed via the route.

LastUpdated and LastUpdatedPartyRoleID will be auto filled during the save.

Created, CreatedByPartyRoleID must not be set as it will override.

#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The application security requested by the :id parameter was not a valid number                                          |



### `/valuation/:id`

Deletes a valuation.

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `DELETE`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the delete:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  |  id of the valuation
#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `204`       | The loan purpose was successfully deleted                                          |
| `400`       | The security requested by the :id parameter was not a valid number                                          |
