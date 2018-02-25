"use strict";

/** Data connection module
  * @module dao/conn */

const config  = require('config'),
    _     = require('lodash'),
    Sequelize = require('sequelize'),
    logger  = require('fm-common').logger;

let v8Db = config.get('v8Db');

let staticOptions = {

  "logging": function (x) {
    logger.info(x);
  }

};

const sequelize = new Sequelize(
  v8Db.connectionString,
  _.merge(v8Db.options, staticOptions)
);

module.exports = {
  sequelize: sequelize,
  v8: require('./model/index.js').init(sequelize)
};