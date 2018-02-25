"use strict";

/** Authentication middleware module
  * @module auth */

const fs          = require('fs'),
      common      = require('fm-common'),
      jwt         = require('restify-jwt'),
      UserAdapter = common.user.UserAdapter;

const signingCertificate = fs.readFileSync('./secrets/signing.cer');

/** Sets up the user adapter to operate on incoming user data
  * @func _setupAdapter
  * @param req {Object} Incoming request object
  * @param res {Object} Outgoing response object
  * @param next {Function} Next function in middleware chain */
function _setupAdapter(req, res, next) {
  req.userAdapter = new UserAdapter(req.user);  
  return next();
}

/** Asserts application defined permissions against user assinged ones
  * @func _assertPerm
  * @param perms {String|Array} A string or array of permission names to test
  * @returns {Promise} Permission assertion */
function _assertPerm(perms) {
  return (req, res, next) => {

    return req.userAdapter.assertPermission(perms)
      .then(ok => {
        return next();
      })
      .catch(next)
      .done();

  };
}

let _auth = [ jwt({ secret: signingCertificate }), _setupAdapter ];
let _anon = [ _setupAdapter ];


module.exports = {
  auth:       _auth,
  anon:       _anon,
  assertPerm: _assertPerm
};