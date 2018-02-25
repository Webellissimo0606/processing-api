# processing-api API Specification

This document aims to describe all of the .NET service actions that need to be migrated into this node.js project. Each route that is expected, will be detailed in this document here. Some actions in the original .NET projects will be bundled into the one API route.

## Example

The following is an example of a route that you'd typically see that will form the basis of a migration.

### `/path/to/route/:id`

CHANGETHIS: A small description of the route will be written here that will detail what its purpose is at a top level. If there is anything about the route itself that is particular (the implementation), it will also be outlined in this description. 

| Property       | Notes                                                                                |
|----------------|--------------------------------------------------------------------------------------|
| Method         | `GET`                                                                                |
| Authentication | This route requires authentication                                                   |
| Authorization  | This route shouldn't need to assert any permissions                                  |

#### Sources

REMOVETHIS: The following table will outline the existing function(s) that will be re-implemented into this API.

| Namespace                         | Class              |Method             | Notes                |
|-----------------------------------|--------------------|-------------------|----------------------|
| `Firstmac.Original.SomeNamespace` | `SomeClass`        | `SomeMethod`      | Anything particular to this implementation |

#### Inputs

REMOVETHIS: Scalar values that are normally applied to the request can be represented in this following table. 
REMOVETHIS: Complex body-type parameters are just as a single entry in the table with a delivery of `body`. An example of the JSON shape to accept should follow.

| Name                 | Delivery          | Req | Type                     | Notes                           |
|----------------------|-------------------|-----|--------------------------|---------------------------------|
| `:id`                | Route             |  Y  | Integer                  | An example of a route parameter |
| `q`                  | Query             |  N  | String                   | An example of a query string parameter |
| `x-val`              | Header            |  N  | Boolean                  | An example of a custom header value |
|                      | Body              |  Y  | `application/json`       | An example of a json body |

```
{
  "person": {
    "firstName": String,
    "otherNames": [String],
    "lastName": String,
    "age": Number
  }
}
```

#### Output

When an error is thrown by the framework, you'll be returned a message that looks as follows. It's very important that clients take note of the status codes returned by the request as this is the indicator of success or failure.


```
{
  error: String,
  message: String
}
```

In cases where errors have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `404`       | The record requested for update was not found                                           |
| `400`       | The body was not in a compatible format to what the route was expecting. The `message` attribute contains invalid field names |

The following schema is the typical output that a caller should expect.

```
Number
```

In cases where creation codes have a special meaning to the route, a table detailing the status code should be included:

| Status Code | Notes                                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| `201`       | Indicates that a resource has been successfully created                                 |

