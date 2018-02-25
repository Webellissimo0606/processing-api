"use strict";
/**
 * @module test/unit/applicant
 */

const   sinon   = require("sinon"),
        chai    = require("chai"),
        expect  = chai.expect,
        Q       = require("q"),
        _       = require("lodash");

const dao = require('../../dao');
const sequelizeStub = dao.sequelize;

const services = require("../../services"),
      applicantService = services.applicant;

describe("applicant", () => {

  before(function(done) {
    done();
  });

   let sandbox = null;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

describe("#relationships", () => {
 
      //get the suite of filtered data
      let queryData = require('../integration/api-mocks/database/functions/ApplicationPartyRole_KeySummary_JSON.json');

      let getData = (id) => {
          //use lodash to filter out the data to mimic the where clause
          let data = _.filter(queryData, { 'ApplicationContainerID': id });
          //return a promise of the filtered data
          return data && data.length > 0 ? data[0].data : null;
      };

      //variable for the findAll method to be stubbed
      let _query;
      //before each test we need to replace functions
      beforeEach(() => {
          //stub the find all method
          _query = sandbox.stub(sequelizeStub, 'query', (query, filters) => {
              //return a promise of the filtered data
              return Q(getData(filters.replacements.id));
          });
      });

      //after each test we need to restore each function for the next iteration
      afterEach(() => {
          _query.restore();
      });

    it("should state a success when found", (done) => {


      applicantService.relationships(19001, 1)
        .then(relationships => {
          sinon.assert.calledOnce(_query);
          expect(relationships).to.deep.equal(getData(19001));
        })
        .done(done);
    });

    it("should return null data when not found", (done) => {
        
        applicantService.relationships(3333, 1)
        .then(relationships => {
          sinon.assert.calledOnce(_query);
          expect(relationships).to.be.null;
        })
        .done(done);

    });

  });


});
