# Loan Xref Pool History


### `/application/:id/loanxrefpoolhistory`

Lists the Loan Xref Pool Histories and any transfers for an application container

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
[
    dao.v8.LoanXrefPoolHistory
    dao.v8.Pool
    [dao.v8.LoanXrefPoolHistoryStatus]
]
```


### `/loan/:id/loanxrefpoolhistories`

Lists the Loan Xref Pool Histories and any transfers for a loan

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `GET`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the read:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the loan |

#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The loan requested by the :id parameter was not found                                          |

The following schema is the typical output that a caller should expect.

```
TBA
[
    dao.v8.LoanXrefPoolHistory
    dao.v8.Pool
    [dao.v8.LoanXrefPoolHistoryStatus]
]
```



### `/xref/:id/loanxrefpoolhistories`

Lists the Loan Xref Pool Histories and any transfers for a xref

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `GET`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the read:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the xref |

#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The xref requested by the :id parameter was not found                                          |

The following schema is the typical output that a caller should expect.

```
TBA
[
    dao.v8.LoanXrefPoolHistory
    dao.v8.Pool
    [dao.v8.LoanXrefPoolHistoryStatus]
]
```


### `/loanxrefpoolhistory/:id`

Gets the loan Xref Pool history record by an id

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `GET`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the read:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the loan Xref Pool history record |

#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The id requested by the :id parameter was not found                                          |

The following schema is the typical output that a caller should expect.

```
TBA
    dao.v8.LoanXrefPoolHistory
    dao.v8.Pool
    [dao.v8.LoanXrefPoolHistoryStatus]
```


### `/loan/:id/loanxrefpoolhistory`

Gets the latest loan Xref Pool history record by a loan

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `GET`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the read:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the loan |

#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The loan id requested by the :id parameter was not found                                          |

The following schema is the typical output that a caller should expect.

```
TBA
 dao.v8.LoanXrefPoolHistory
    dao.v8.Pool
    [dao.v8.LoanXrefPoolHistoryStatus]
```


### `/xref/:id/loanxrefpoolhistory`

Gets the latest loan Xref Pool history record by an Xref

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `GET`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route should assert the read:entity permission                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the Xref identity |

#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | The Xref requested by the :id parameter was not found                                          |

The following schema is the typical output that a caller should expect.

```
TBA
 dao.v8.LoanXrefPoolHistory
    dao.v8.Pool
    [dao.v8.LoanXrefPoolHistoryStatus]
```




### `/loanxrefpoolhistory/:id`

Creates a new Loan Xref Pool History  on a Loan

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `POST`                                                                                |
| Authentication | This route does require authentication                                                   |
| Authorization  | This route should assert the write:entity permissions                                  |


#### Inputs

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | the id of the Loan  |
|                 | Body             |  Y  | application/json                  | |

###### Body

```
{
  "Xref Pool" : int,
  "effective" : datettime
}
```

##### Notes

Xref Pool and Effective date are optional


#### Output


In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `400`       | Input values set to required above are invalid |
| `500`       | The input Loan Xref Pool History id was not found |


The following schema is the typical output that a caller should expect.

```
dao.v8.LoanXref PoolHistory
```
