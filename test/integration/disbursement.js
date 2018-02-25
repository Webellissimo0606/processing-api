"use strict";
/**
 * @module test/application
 */

const   sinon   = require("sinon"),
        chai    = require("chai"),
        expect  = chai.expect,
        Q       = require("q"),
        _       = require("lodash");

const dao = require('../../dao');
const sequelizeStub = dao.sequelize;

const services = require("../../services"),
      applicationService = services.application,
      applicationHistoryService = services.applicationHistory,
      appsFormatted = applicationService.determineProductCategoriesFormatted;


var api = require("./common").api;
var userMock = "standard";

describe("/disbursment", () => {

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

    describe("Disbursements Auto Tests", () => {
      describe("PUT /application/:id/autodisburse", () => {
      
          //variable for the findAll method to be stubbed
          let _query;
          let _prettyFormat;
          let _determinePCFormatted;
          let _createHistory;
          //before each test we need to replace functions
          beforeEach(() => {
            //stub the find all method
              _query = sandbox.stub(sequelizeStub, 'query', (query, filters) => {
                 var data = 1;
                  switch(filters.replacements.id){
                    case 99999 :
                      data = 0;
                    break;
                    case 77777 :
                      data = null;
                    break;
                    case 55555 :
                    case 66666 :
                      return Q.reject(new Error("Something bad happened in auto disbursements"));
                    break;
                    default: 
                      data = 1;
                    break;
                  }
                  return Q(data);
              });
                    //stub the find all method
              _determinePCFormatted = sandbox.stub(applicationService, 'determineProductCategoriesFormatted', (id, user) => {
                  //return a promise of the filtered data
                  var data = null;
                  switch(id){
                    case 11111 :
                    case 55555 :
                    case 66666 :
                      data = "2";
                    break;
                    case 22222 :
                      data =  "17";
                    break;
                    case 33333 :
                      data =  "17_2";
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
              _prettyFormat = sandbox.stub(applicationHistoryService, 'prettyFormatPostGres', (e) => {
                  //return a promise of the filtered data
                  return Q("pretty " + e);
              });
              _createHistory = sandbox.stub(applicationHistoryService, 'create', (id, user) => {
                  //return a promise of the filtered data
                  var data;
                  switch(id){
                    case 66666 :
                      return Q.reject(new Error("Something really bad happened"));
                    break;
                    default:
                      data = 124345;
                    break;
                  }
                  return Q(data);
              });
          });

          //after each test we need to restore each function for the next iteration
          afterEach(() => {
              _query.restore();
              _determinePCFormatted.restore();
              _prettyFormat.restore();
              _createHistory.restore();
          });


        it("Should return a bad request when invalid params", (done) => {

            api(userMock)
            .put(`/application/jhgjhg6586876/autodisburse`)
            .expectStatus(400)
            .end((err, res, body) => {
              sinon.assert.callCount(_query,0);
              sinon.assert.callCount(_determinePCFormatted,0);
              sinon.assert.callCount(_prettyFormat,0);
              sinon.assert.callCount(_createHistory,0);
              if (err) return done(err);
              done(); 
            });
        });


        it("Should return a internal server error when there is multiple exceptions", (done) => {

            api(userMock)
            .put(`/application/jhgjhg6586876/autodisburse`)
            .expectStatus(400)
            .end((err, res, body) => {
              sinon.assert.callCount(_query,0);
              sinon.assert.callCount(_determinePCFormatted,0);
              sinon.assert.callCount(_prettyFormat,0);
              sinon.assert.callCount(_createHistory,0);
              if (err) return done(err);
              done(); 
            });
        });

        it("Should return a internal server error when it can not find product categories", (done) => {
              api(userMock)
            .put(`/application/44444/autodisburse`)
            .expectStatus(500)
            .end((err, res, body) => {
              sinon.assert.callCount(_query,0);
              sinon.assert.calledOnce(_determinePCFormatted);
              sinon.assert.callCount(_prettyFormat,0);
              sinon.assert.callCount(_createHistory,0);
              if (err) return done(err);
              done(); 
            });
        });

        it("Should return a success with a fail shaped data when the main disbursement function fails", (done) => {
             api(userMock)
            .put(`/application/55555/autodisburse`)
            .expectStatus(200)
            .end((err, res, body) => {
              sinon.assert.calledOnce(_query);
              sinon.assert.calledOnce(_determinePCFormatted);
              sinon.assert.calledOnce(_prettyFormat);
              sinon.assert.calledOnce(_createHistory);
              expect(body).to.deep.equal({
                    "autoDisbursementsResult": false,
                    "autoDisbursementsMessages":  "pretty Error: Something bad happened in auto disbursements",
                    "traxJobTypeByConfigs": ("Trax.Disbursements.AutoFail_2")
                });
              if (err) return done(err);
              done(); 
            });
        });


        it("Should return a success with a fail shaped data when the main disbursement function fails and the history note fails", (done) => {
             api(userMock)
            .put(`/application/66666/autodisburse`)
            .expectStatus(200)
            .end((err, res, body) => {
              sinon.assert.calledOnce(_query);
              sinon.assert.calledOnce(_determinePCFormatted);
              sinon.assert.calledOnce(_prettyFormat);
              sinon.assert.calledOnce(_createHistory);
                expect(body).to.deep.equal({
                    "autoDisbursementsResult": false,
                    "autoDisbursementsMessages": "Error: Something really bad happened pretty Error: Something bad happened in auto disbursements",
                    "traxJobTypeByConfigs": "Trax.Disbursements.AutoFail_2"
                  });
              if (err) return done(err);
              done(); 
            });
        });

         it("Should return a success with a success shaped data when all functions work", (done) => {
             api(userMock)
            .put(`/application/11111/autodisburse`)
            .expectStatus(200)
            .end((err, res, body) => {
              sinon.assert.calledOnce(_query);
              sinon.assert.calledOnce(_determinePCFormatted);
              sinon.assert.callCount(_prettyFormat,0);
              sinon.assert.callCount(_createHistory, 0);
                expect(body).to.deep.equal({
                    "autoDisbursementsResult": true,
                    "autoDisbursementsMessages": "",
                    "traxJobTypeByConfigs": "Trax.Disbursements.AutoFail_2"
                  });
              if (err) return done(err);
              done(); 
            });
        });


      });

    });



});
