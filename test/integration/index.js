"use strict";
/**
 * @module test/integration
 */


const server = require('../../server'),
      logger = require('fm-common').logger,
      sinon = require("sinon"),
      chai    = require("chai"),
      expect  = chai.expect,
      Q = require("q");

require('./common');

describe('api route tests', (done) => {

  before((done) => {

      server.listen(3000, () => {
        logger.info(`${server.name} listening at ${server.url}`);
        done();
      });


    var sandbox = null;

    beforeEach(() => {
      sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
      sandbox.restore();
    });

  });

  //include the other tests
  require("./application");
  require("./applicant");
  require("./application-history");
  require("./credit-report");
  require("./final-approval");
  require("./direct-debit");
  require("./security");
  require("./disbursement");
  require("./deposit");
  require("./condition");
  require("./fees");
  require("./pool");
  require("./final-approval");
  require("./third-party");
  require("./financial");
});
