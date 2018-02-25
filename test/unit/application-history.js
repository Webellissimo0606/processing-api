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
      applicationHistoryService = services.applicationHistory;

describe("applicationHistory", () => {

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

/*
describe("#create", () => {
 
      //variable for the findAll method to be stubbed
      let _query;
      //before each test we need to replace functions
      beforeEach(() => {
          //stub the find all method
          _query = sandbox.stub(sequelizeStub, 'query', (query, filters) => {
              //return a promise of the filtered data
              let data = null;
              switch(filters.replacements.id){
                case 11111:
                  data = {"ProductCategoryID" : 2 }
                break;
                case 22222:
                  data = {"ProductCategoryID" : 17 }
                break;
                case 33333:
                  data = {"ProductCategoryID" : 17, "SubProductCategoryID" : 2 }
                break;
                case 44444 :
                      return Q.reject(new Error("Something bad happened"));
                break;
                default: 
                  data = null;
                break;
              }
              return Q(data);
          });
      });

      //after each test we need to restore each function for the next iteration
      afterEach(() => {
          _query.restore();
      });

    it("should state the id when successfully created", (done) => {
    });


    it("should throw an exception when not successful", (done) => {
    });


  });
*/
describe("#prettyFormatPostGres", () => {

    it("should replace all postgres error wording", (done) => {


      applicationHistoryService.prettyFormatPostGres("P0001: { 'Some Error has Occured' }")
        .then(res => {
          expect(res).to.equal("Some Error has Occured");
        })
        .done(done);
    });


    it("should replace nothing when no postgres error", (done) => {


      applicationHistoryService.prettyFormatPostGres("Some Error has Occured")
        .then(res => {
          expect(res).to.equal("Some Error has Occured");
        })
        .done(done);
    });

  });


});
