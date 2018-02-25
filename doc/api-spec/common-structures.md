# Common Structures

The following outlines specific common structures that maybe returned from larger data sets of information.

#### DateValue

Used when date information along with user information and type is required

```
{
    "id": Number,
    "name": String,
    "status": DateTime,
    "user": IdValue
}
```


#### UserDate

Used when date information along with user information and type is required

```
{
    "date": DateTime,
    "user": IdValue
}
```


#### IdValue

A common structure for key value pairs of information

```
{
    "id": Number,
    "name": String
}
```
