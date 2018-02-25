'use strict';

/**
 * Data access object module
 * @module dao
 */

const conn 		= require("./conn");

module.exports = {
  sequelize: 	conn.sequelize,  
  v8: 		conn.v8
};
