# processing-api conversion document

In this folder you will see notes on how to convert each API required.

Please ensure as converting an api you check the related "conversion" document equivalent for any notes on how to convert.

The document will outline if for example to use basic sequelize, to use a function or to even clone a function with slightly differences.

### General Notes

#### Sequelize

When using sequelize, the following notes should occur...

*The id should be passed in the url and accessed by req.params.
*The id will then be set on the body for an object in sequelize.
*The PartyRoleID of the user will be accessed from utils.v8PartyRole() (you need to require utils) which is a short cut method to the claim and enuring it is an integer. This stops writing parseInt(user.userAdapter.getV8PartyRoleID()) - just simplifies.
*The following standard fields will need to be overridden...
    *Created/LastUpdated - use a local variable of the current date
    *CreatedByPartyRoleID/LastUpdatedPartyRoleID - user the utils.v8PartyRole()
*When updating an entity ensure you delete the Created/CreatedByPartyRoleID fields to ensure nothing is overriden.

#### Functions

Where applicable the output type of the function is either provided under the functions folder to give you and idea of the out put so you can mock your samples.

Where it is a simple type of void or a singular value the function will not be provided but rather described in the conversion files. This may also be the case if a Table is returned and it is simple, i will just put the table in the returns section.

#### Processing Function outputs

_Functions with single response type_

Where a functions output is a single type such as  a integer, boolean etc. The output will be an array and the response data will be the first item in the array.

So the response checking should be something like:

```
 .then(result => {
        //do we have data?
        if(!result || (result && result.length == 0))
            //no data send out a 500
            return next(new restifyErrors.InternalServerError());
        else
            //send out the first item
            res.send(200,result[0]);
        //return the promise
        return next();
    })
```

_Functions with output variables_

These are similar to the single outputs but with each output variable being an item in the array.

So the response checking should be something like:

```
 .then(result => {
        //do we have data?
        if(!result || (result && result.length == 0))
            //no data send out a 500
            return next(new restifyErrors.InternalServerError());
        else
            //send out the first item
            res.send(200,{
                            "output1": result[0],
                            "output2": result[1]
                });
        //return the promise
        return next();
    })
```


_Functions that return a void_

These function will return the number of rows affected and should be able to just access the length to be > 0 as such...

```
 .then(result => {
        //do we have data?
        if(!result || (result && result.length == 0))
            //no data send out a 500
            return next(new restifyErrors.InternalServerError());
        else
            //send out the first item
            res.send(204);
        //return the promise
        return next();
    })
```

_Functions that return a table_

These are by far the easiest type, it will return an array as defined by the table structure in the function.

```
 .then(summary => {

            if (!summary || (summary && summary.length == 0)) {
                return next(new restifyErrors.InternalServerError());
            }
            //send the data down the response
            res.send(summary);
            //return to the next action
            return next();
})
```

_Functions that return JSON_

These are a little more complex in that if it is a SETOF JSON  or just JSON. What the output does is returns an array of rows with the column name being the name of the function.

If it is a SETOF JSON you will need to iterate over the items you want and assign them as required.

*Simple*

```
 .then(result => {
        //test the data
        if(result && result.length > 0)
            //send the data down the response
            res.send(result[0]["This is the name of the function"]);
        else
            return next(new restifyErrors.InternalServerError());
        //return to the next action
        return next();
    })
```

*Multiple with SETOF JSON*

```
 .then(result => {
        //test the data
        if(result && result.length > 0)
            //send the data down the response
            res.send({
                      "data1" : result[0]["This is the name of the function"],
                      "data2" : result[1]["This is the name of the function"]
                    });

        else
            return next(new restifyErrors.InternalServerError());
        //return to the next action
        return next();
    })
```

_Functions that return SETOF REFCURSOR_

These are similar to what happens with SETOF JSON, in that it will return a list of rows in a column of the function name.

You need to use the cursor helper function as described below in #FetchResultsFromCursor# as this will help actually collect the data.

So you should be able to do the following...

```
 return utils.FetchResultsFromCursor("function_name", ":param1, :param2", "{ 'param1' : 1, 'param2' : 2}")
 .then(result => {
        //test the data
        if(result && result.length > 0)
            //send the data down the response
            res.send({
                      "data1" : result[0]["This is the name of the function"],
                      "data2" : result[1]["This is the name of the function"]
                    });

        else
            return next(new restifyErrors.InternalServerError());
        //return to the next action
        return next();
    })
```

#### Sequelize function helpers

Although the preference is to convert all that is possible to sequelize queries, some of this may just not be feasible.

Under utils.js in the routes folder there is some useful functions which may get expanded:

_Cursors_

If your function returns a cursor and its not a simple conversion to sequelize using Q.spread with multiple queries then you can use this function.

#FetchResultsFromCursor#

This will return a promise to with you can then do as required with the results. All the data will come back in an array with each item representing essentially a dataset.

_Usage_

```
//get the cursor results
        return utils.FetchResultsFromCursor("ApplicationHistory_Retrieve", ":id, :p, :ps, :ht", filters)
        //once completed, process the data to the next action
        .then(notes => {
            //send the data down the response
            res.send(notes);
            //return to the next action
            return next();
        })
        //catch the exception for processing on the next item
        .catch(function(e){
            console.log("error = " + e);
            next(e);
        })
        //mark the promise as done
        .done();
```

