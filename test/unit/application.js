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
      applicationService = services.application;

describe("application", () => {

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

describe("#determineProductCategories", () => {
 
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

    it("should state be product category type 2", (done) => {


      applicationService.determineProductCategories(11111)
        .then(relationships => {
          sinon.assert.calledOnce(_query);
          expect(relationships).to.deep.equal( {"ProductCategoryID" : 2 });
        })
        .done(done);
    });


    it("should state be product category type 17", (done) => {


      applicationService.determineProductCategories(22222)
        .then(relationships => {
          sinon.assert.calledOnce(_query);
          expect(relationships).to.deep.equal( {"ProductCategoryID" : 17 });
        })
        .done(done);
    });


    it("should state be product category type 17 and sub category of 2", (done) => {


      applicationService.determineProductCategories(33333)
        .then(relationships => {
          sinon.assert.calledOnce(_query);
          expect(relationships).to.deep.equal( {"ProductCategoryID" : 17, "SubProductCategoryID" : 2 });
        })
        .done(done);
    });

    it("should return null data when not found", (done) => {

        applicationService.determineProductCategories(55555)
        .then(relationships => {
          sinon.assert.calledOnce(_query);
          expect(relationships).to.be.null;
        })
        .done(done);

    });

     it("should throw an error when bad input", (done) => {

        applicationService.determineProductCategories(44444)
        .then(relationships => {
          sinon.assert.calledOnce(_query);
          expect(relationships).to.be.null;
        })
        .catch(function(e){
          sinon.assert.calledOnce(_query);
        })
        .done(done);

    });

  });

describe("#determineProductCategoriesFormatted", () => {
 
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

    it("should state be product category type 2", (done) => {


      applicationService.determineProductCategoriesFormatted(11111,1)
        .then(relationships => {
          sinon.assert.calledOnce(_query);
          expect(relationships).to.equal("2");
        })
        .done(done);
    });


    it("should state be product category type 17", (done) => {


      applicationService.determineProductCategoriesFormatted(22222)
        .then(relationships => {
          sinon.assert.calledOnce(_query);
          expect(relationships).to.equal("17");
        })
        .done(done);
    });


    it("should state be product category type 17 and sub category of 2", (done) => {


      applicationService.determineProductCategoriesFormatted(33333)
        .then(relationships => {
          sinon.assert.calledOnce(_query);
          expect(relationships).to.equal("17_2");
        })
        .done(done);
    });

    it("should return null data when not found", (done) => {

        applicationService.determineProductCategoriesFormatted(55555)
        .then(relationships => {
          sinon.assert.calledOnce(_query);
          expect(relationships).to.be.null;
        })
        .done(done);

    });

     it("should throw an error when bad input", (done) => {

        applicationService.determineProductCategoriesFormatted(44444)
        .then(relationships => {
          sinon.assert.calledOnce(_query);
          expect(relationships).to.be.null;
        })
        .catch(function(e){
          sinon.assert.calledOnce(_query);
        })
        .done(done);

    });

  });


});
