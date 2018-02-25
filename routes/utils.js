"use strict";

/** common utility data */
const  Q                    = require("q"),
       _                    = require("lodash");

const dao                   = require("../dao");


/** Converts or nullifies an integer
    Uses Number not parseInt to ensure it does not try and grab numbers should a guid or other start with numbers
    @func _si
    @param val {Object} Incoming object to cast
  
*/
function _si(val) {
    
    let i = Number(val);    
    if (isNaN(i)) { return null; }    
    return i;
    
}

/** Converts or nullifies a boolean
    @func _si
    @param val {Object} Incoming object to cast
  
*/
function _sb(val) {
    
    if(val == "true")
        return true;
    else if(val == "false")
        return false;
    else
        return null;
    
}

/** Checks if an integer is valid    
    @func _si
    @param val {Object} Incoming object to cast
  
*/
function _ci(val) {
    
    if(!val)
        return false;
    else{
        let i = _si(val);
        if (!i || isNaN(i)) { return false; }    
    }
    return true;
    
}

/** Forces a conversion to an integer other wise returns Nan
    Uses Number not parseInt to ensure it does not try and grab numbers should a guid or other start with numbers
    @func _si
    @param val {Object} Incoming object to cast
  
*/
function _fi(val) {
   
    let i = Number(val);    
    return i;
    
}

/** Ensures the V8 Party Role Id is an integer
    @func _GetV8UserPartyRole
    @param req {Object} Incoming request object
*/
function _getV8UserPartyRole(req) {
    return _si(req.userAdapter.getV8PartyRoleId());
}

/** Ensures an attribute is in the json
    @func _DataHasKey
    @param data {Object} Incoming data object
    @param key {string} the key to look for
*/
function _dataHasKey(data, key) {
    return data && (key in data);
}


/** Executes a function that contains a cursor and returns the results as an array of data
    @func _FetchResultsFromCursor
    @param data {Object} Incoming data object
    @param key {string} the key to look for
*/
function _fetchResultsFromCursor(funcName, funcParams, paramFilters) {
    
    return dao.sequelize.transaction(tran => {

            //execute the sequelize query
            return dao.sequelize.query(
                'SELECT * FROM "' + funcName + '"(' + funcParams + ');',
                {
                    replacements: paramFilters,
                    type: dao.sequelize.QueryTypes.SELECT,
                    transaction: tran
                }
            )
            //once complete we need to get all the data
            .then(funcData => {
                    //we need an empty array so we can push all the data into
                    let data = [];
                    //do fetch will get the cursor results
                    let doFetch = (d) => {
                         //execute the sequelize query
                        return dao.sequelize.query(
                            'FETCH ALL FROM "' + d + '"',
                            {
                                type: dao.sequelize.QueryTypes.SELECT,
                                transaction: tran
                            }
                        );/*.then(fetch => {
                            //push the data into the array
                            data.push(fetch);
                        });*/

                    };
                    //create the promise array
                    let promises = [];
                     //loop through each bit of data to collect the cursor results
                    _.forEach(funcData, function(value) {
                        promises.push(doFetch(value[funcName]));
                    });

                    //return the promise of all the data
                    return Q.all(promises);

            })
        });

}


module.exports = {
    si:                        _si,
    sb:                        _sb,
    ci:                        _ci,
    fi:                        _fi,
    v8PartyRole:               _getV8UserPartyRole,
    dataHasKey:                _dataHasKey,
    fetchResultsFromCursor:    _fetchResultsFromCursor
};
