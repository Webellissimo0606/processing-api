# Application History


### `/application/:id/history/:p/:ps/:ht`

Gets application history notes based off the parameters

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `GET`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the read:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the application container |
| `:p`                 | Route             |  Y  | Integer                  | the current page number of history notes  |
| `:ps`                | Route             |  Y  | Integer                  | the page size for history notes  |
| `:ht`                | Route             |  N  | Integer                  | the filtered type of history notes to collect  |


#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The required input types as per the table above are not found                                    |

The following schema is the typical output that a caller should expect.

```
TODO - FILL IN
Must be something like:
{
    "total" : int,
    "notes" :[ {
                dao.v8.applicationhistory,
                "aprCpr": int (representing the CrumbsPartyRoleID from v8.dao.PartyRole)
                "createdCpr" : int (representing the CrumbsPartyRoleID from v8.dao.PartyRole),
                "lastUpdated" : int (representing the CrumbsPartyRoleID from v8.dao.PartyRole)
        }]
}
```


### `/application/:id/history`

Creates a new application history note for an application

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `POST`                                                                                |
| Authentication | This route does require authentication                                                   |
| Authorization  | This route should assert the write:entity permissions                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the application container |
|                 | Body             |  Y  | application/json                  | |

###### Body

```
#dao.v8.ApplicationHistory#
{
    "applicationHistoryTypeID" : int,
    "applicationHistoryPublicationTypeID" : int,
    "title" : string,
    "comments" : string,
    "followUpDate" : Date
}
```

###### Body Defaults

| Parameter | Default |
|---|---|
| applicationHistoryTypeID | 3 |
| applicationHistoryPublicationTypeID | 1 |

#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The body was not in a compatible format to what the route was expecting. The `message` attribute contains invalid field names |
| `201`       | An Application History Note was created                                       |

The following schema is the typical output that a caller should expect.

```
{ 
    "iD" : int 
}
```

