"use strict";
/**
 * @module test/integration
 */

const sinon = require("sinon"),
      chai    = require("chai"),
      expect  = chai.expect;

describe('unit tests', (done) => {
  describe('services', (done) => {
    require("./applicant");
    require("./application");
    require("./application-history");
  })
});

