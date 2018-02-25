"use strict";
/**
  * @module test/credit-report
 */

const   sinon   = require("sinon"),
        chai    = require("chai"),
        expect  = chai.expect,
        Q       = require("q"),
        _       = require("lodash");

const dao = require('../../dao');
const sequelizeStub = dao.sequelize;
const CreditReportDbStub = dao.v8.CreditReport;
const utils = require('../../routes/utils');


var api = require("./common").api;
var userMock = "standard";
var userMockPower = "power";
var userMockAdmin = "administrator";

//var creditReportStub = { };

describe("/creditreport", () => {

 let sandbox = null;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  before(function(done) {
    done();
  });


    describe("Credit Reports Required for Application", () => {

      let goodResponse =  require('./api-mocks/credit-report/application-required-data.json');


      describe("GET /application/:id/creditreportsrequired", () => {

        it("Should return a bad request when invalid params", (done) => {

            api(userMock)
            .get(`/application/bad/creditreportsrequired`)
            .expectStatus(400)
            .end((err, res, body) => {
              if (err) return done(err);
              done(); 
            });
        });

        it("Should return a 200 successful with an empty array if no data", (done) => {

            let _required = sandbox.stub(sequelizeStub, 'query', () => Q(null));

            api(userMock)
            .get(`/application/7008394/creditreportsrequired`)
            .expectStatus(200)
            .end((err, res, body) => {
               sinon.assert.calledOnce(_required);
               expect(body).to.be.empty;
               //restore the function for use in unit tests and other locations
               _required.restore();
              if (err) return done(err);
              done(); 
            });
        });

        it("Should return a 200 successful", (done) => {

            let _required = sandbox.stub(sequelizeStub, 'query', () => Q(goodResponse));

            api(userMock)
            .get(`/application/7008394/creditreportsrequired`)
            .expectStatus(200)
            .end((err, res, body) => {
               sinon.assert.calledOnce(_required);
               expect(body).to.deep.equal(goodResponse);
              //restore the function for use in unit tests and other locations
              if (err) return done(err);
              done(); 
            });
        });
      });

    });


    describe("Credit Report Summary for Applicant", () => {


      describe("GET /applicant/:id/creditreport", () => {

             //get the suite of filtered data
          let queryData = require('./api-mocks/credit-report/credit-report-summary.json');

          let getData = (id) => {
              //use lodash to filter out the data to mimic the where clause
              let data = _.find(queryData, { 'applicationPartyRoleId': id });
              //return a promise of the filtered data
              return data && data.data ? data.data : null;
          };

          //variable for the findAll method to be stubbed
          let _query;
          //before each test we need to replace functions
          beforeEach(() => {
              //stub the find all method
              _query = sandbox.stub(utils, 'fetchResultsFromCursor', (funcName, funcParams, paramFilters) => {
                  //return a promise of the filtered data
                  return Q(getData(paramFilters.id));
              });
          });

          //after each test we need to restore each function for the next iteration
          afterEach(() => {
              _query.restore();
          });


        it("should return a bad request when invalid params", (done) => {

            api(userMock)
            .get(`/applicant/jhgjhg6586876/creditreport`)
            .expectStatus(400)
            .end((err, res, body) => {
              if (err) return done(err);
              done();
            });
        });

        it("should return a internal server error when there is no data", (done) => {

            api(userMock)
            .get(`/applicant/11111/creditreport`)
            .expectStatus(500)
            .end((err, res, body) => {
               sinon.assert.calledOnce(_query);
               //restore the function for use in unit tests and other locations
              if (err) return done(err);
              done();
            });
        });


        it("Should return a internal server error when the data is an empty array", (done) => {

            api(userMock)
            .get(`/applicant/22222/creditreport`)
            .expectStatus(500)
            .end((err, res, body) => {
               sinon.assert.calledOnce(_query);
               //restore the function for use in unit tests and other locations
              if (err) return done(err);
              done();
            });
        });

        it("Should return a 200 successful", (done) => {

            api(userMock)
            .get(`/applicant/19148/creditreport`)
            .expectStatus(200)
            .end((err, res, body) => {
               sinon.assert.calledOnce(_query);
               expect(body).to.deep.equal(getData(19148));
              if (err) return done(err);
              done();
            });
        });
      });

    });


    describe("Credit Report Summary for Company Applicant", () => {


      describe("GET /applicant/:id/creditreportcompany", () => {
             //get the suite of filtered data
          let queryData = require('./api-mocks/credit-report/credit-report-trading-summary.json');

          let getData = (id) => {
              //use lodash to filter out the data to mimic the where clause
              let data = _.find(queryData, { 'applicationPartyRoleId': id });
              //return a promise of the filtered data
              return data && data.data ? data.data : null;
          };

          //variable for the findAll method to be stubbed
          let _query;
          //before each test we need to replace functions
          beforeEach(() => {
              //stub the find all method
              _query = sandbox.stub(utils, 'fetchResultsFromCursor', (funcName, funcParams, paramFilters) => {
                  //return a promise of the filtered data
                  return Q(getData(paramFilters.id));
              });
          });

          //after each test we need to restore each function for the next iteration
          afterEach(() => {
              _query.restore();
          });


        it("should return a bad request when invalid params", (done) => {

            api(userMock)
            .get(`/applicant/jhgjhg6586876/creditreportcompany`)
            .expectStatus(400)
            .end((err, res, body) => {
              if (err) return done(err);
              done();
            });
        });

        it("should return a internal server error when there is no data", (done) => {

            api(userMock)
            .get(`/applicant/11111/creditreportcompany`)
            .expectStatus(500)
            .end((err, res, body) => {
               sinon.assert.calledOnce(_query);
               //restore the function for use in unit tests and other locations
              if (err) return done(err);
              done();
            });
        });


        it("Should return a internal server error when the data is an empty array", (done) => {

            api(userMock)
            .get(`/applicant/22222/creditreportcompany`)
            .expectStatus(500)
            .end((err, res, body) => {
               sinon.assert.calledOnce(_query);
               //restore the function for use in unit tests and other locations
              if (err) return done(err);
              done();
            });
        });

        it("Should return a 200 successful", (done) => {

            api(userMock)
            .get(`/applicant/17368/creditreportcompany`)
            .expectStatus(200)
            .end((err, res, body) => {
               sinon.assert.calledOnce(_query);
               expect(body).to.deep.equal(getData(17368));
              if (err) return done(err);
              done();
            });
        });
      });

    });


    describe("Credit Report Latest for Applicant", () => {


      describe("GET /applicant/:id/creditreportlatest", () => {
        
             //get the suite of filtered data
          let queryData = require('./api-mocks/credit-report/credit-report-latest-summary.json');

          let getData = (id) => {
              //use lodash to filter out the data to mimic the where clause
              let data = _.find(queryData, { 'applicationPartyRoleId': id });
              //return a promise of the filtered data
              return data && data.data ? data.data : null;
          };

          //variable for the findAll method to be stubbed
          let _query;
          //before each test we need to replace functions
          beforeEach(() => {
              //stub the find all method
              _query = sandbox.stub(utils, 'fetchResultsFromCursor', (funcName, funcParams, paramFilters) => {
                  //return a promise of the filtered data
                  return Q(getData(paramFilters.id));
              });
          });

          //after each test we need to restore each function for the next iteration
          afterEach(() => {
              _query.restore();
          });

        it("should return a bad request when invalid params", (done) => {

            api(userMock)
            .get(`/applicant/jhgjhg6586876/creditreportlatest`)
            .expectStatus(400)
            .end((err, res, body) => {
              if (err) return done(err);
              done();
            });
        });

        it("should return a internal server error when there is no data", (done) => {

            api(userMock)
            .get(`/applicant/11111/creditreportlatest`)
            .expectStatus(500)
            .end((err, res, body) => {
               sinon.assert.calledOnce(_query);
               //restore the function for use in unit tests and other locations
              if (err) return done(err);
              done();
            });
        });


        it("Should return a internal server error when the data is an empty array", (done) => {

            api(userMock)
            .get(`/applicant/22222/creditreportlatest`)
            .expectStatus(500)
            .end((err, res, body) => {
               sinon.assert.calledOnce(_query);
               //restore the function for use in unit tests and other locations
              if (err) return done(err);
              done();
            });
        });

        it("Should return a 200 successful", (done) => {

            api(userMock)
            .get(`/applicant/17687/creditreportlatest`)
            .expectStatus(200)
            .end((err, res, body) => {
               sinon.assert.calledOnce(_query);
               expect(body).to.deep.equal(getData(17687));
              if (err) return done(err);
              done();
            });
        });
      });

    });

     describe("Credit Report Update File Name", () => {

      describe("PUT /creditreport/:id/filename", () => {

          //get the suite of filtered data
          let creditReportData = require('./api-mocks/database/credit-reports.json');

          let getData = (id) => {
            let data = _.find(creditReportData, { "iD": parseInt(id) });
            //return the filtered data
            return data ? data : null;
          };
          //variable for the findAll method to be stubbed
          let _query;
          //before each test we need to replace functions
          beforeEach(() => {
              //stub the find all method
              _query =  sandbox.stub(CreditReportDbStub, 'findById', (id) => {
                //hack for throwing
                if(id == 33333)
                  return Q.reject(new Error("Something bad happened"));
                let rBody = getData(id);
                if(rBody != null){
                  //return that it was successful
                  rBody.save = () => {

                    return Q(rBody ? rBody : null);
                  };
                  rBody.updateAttributes = (body) => {

                  };
                }
                return Q(rBody);
               });
          });

          //after each test we need to restore each function for the next iteration
          afterEach(() => {
              _query.restore();
          });

        it("Should return a bad request when invalid params", (done) => {

            api(userMock)
            .put(`/creditreport/jhgjhg6586876/filename`)
            .expectStatus(400)
            .end((err, res, body) => {
              sinon.assert.callCount(_query,0);
              if (err) return done(err);
              done(); 
            });
        });


        it("Should return a bad request when body is null", (done) => {

            api(userMock)
            .put(`/creditreport/11111/filename`)
            .send(null)
            .expectStatus(400)
            .end((err, res, body) => {
              sinon.assert.callCount(_query,0);
              if (err) return done(err);
              done(); 
            });
        });

        it("Should return a internal server error when query throws", (done) => {

            api(userMock)
            .put(`/creditreport/33333/filename`)
            .send({
                    "fileName": "someName"
                  })
            .expectStatus(500)
            .end((err, res, body) => {
              sinon.assert.calledOnce(_query);
              if (err) return done(err);
              done();
            });
        });


        it("Should return a internal server error when query returns null", (done) => {

           api(userMock)
            .put(`/creditreport/44444/filename`)
            .send({
                    "fileName": "someName"
                  })
            .expectStatus(404)
            .end((err, res, body) => {
              sinon.assert.calledOnce(_query);
              if (err) return done(err);
              done();
            });
        });

        it("Should return a 200 successful when updated", (done) => {


            api(userMock)
            .put(`/creditreport/11111/filename`)
            .send({
                    "fileName": "someOtherName"
                  })
            .expectStatus(200)
            .end((err, res, body) => {
               //sinon.assert.calledOnce(_query);
              if (err) return done(err);
              done(); 
            });
        });

      });

    });

      describe("Credit Report Enqueue Applicant", () => {

      describe("POST /applicant/:id/creditreportenqueue", () => {
        
          //variable for the findAll method to be stubbed
          let _query;
          //before each test we need to replace functions
          beforeEach(() => {
              //stub the find all method
              _query = sandbox.stub(sequelizeStub, 'query', (query, filters) => {
                  //return a promise of the filtered data
                  let res = null;
                  //based off data do an action
                  switch(filters.replacements.id){
                    case 11111 :
                     res = [{ "CreditReportRequired_Enqueue" :12345 }];
                    break;
                    case 22222 :
                     res = [];
                    break;
                    case 33333 :
                      return Q.reject(new Error("Something bad happened"));
                    default:
                      res = null;
                    break;
                  }
                  return Q(res);
              });
          });

          //after each test we need to restore each function for the next iteration
          afterEach(() => {
              _query.restore();
          });

        it("Should return a bad request when invalid params", (done) => {

            api(userMock)
            .post(`/applicant/jhgjhg6586876/creditreportenqueue`)
            .expectStatus(400)
            .end((err, res, body) => {
              sinon.assert.callCount(_query,0);
              if (err) return done(err);
              done(); 
            });
        });

        it("Should return a internal server error when query throws", (done) => {

            api(userMock)
            .post(`/applicant/33333/creditreportenqueue`)
            .send({
                    "bureauRef": "someRef"
                  })
            .expectStatus(500)
            .end((err, res, body) => {
              sinon.assert.calledOnce(_query);
              if (err) return done(err);
              done();
            });
        });


        it("Should return a internal server error when query returns null", (done) => {

           api(userMock)
            .post(`/applicant/44444/creditreportenqueue`)
            .send({
                    "bureauRef": "someRef"
                  })
            .expectStatus(500)
            .end((err, res, body) => {
              sinon.assert.calledOnce(_query);
              if (err) return done(err);
              done();
            });
        });


        it("Should return a internal server error when query returns empty array", (done) => {

           api(userMock)
            .post(`/applicant/22222/creditreportenqueue`)
            .send({
                    "bureauRef": "someRef"
                  })
            .expectStatus(500)
            .end((err, res, body) => {
              sinon.assert.calledOnce(_query);
              if (err) return done(err);
              done();
            });
        });

        it("Should return a 201 successful when added", (done) => {


            api(userMock)
            .post(`/applicant/11111/creditreportenqueue`)
            .send({
                    "bureauRef": null
                  })
            .expectStatus(201)
            .end((err, res, body) => {
              sinon.assert.calledOnce(_query);
              if (err) return done(err);
              done(); 
            });
        });


        it("Should return a 201 successful when added even with no bureau ref", (done) => {


            api(userMock)
            .post(`/applicant/11111/creditreportenqueue`)
            .send({
                    "bureauRef": null
                  })
            .expectStatus(201)
            .end((err, res, body) => {
               sinon.assert.calledOnce(_query);
              if (err) return done(err);
              done(); 
            });
        });


        it("Should return a 201 successful when added even with no body", (done) => {


            api(userMock)
            .post(`/applicant/11111/creditreportenqueue`)
            .expectStatus(201)
            .end((err, res, body) => {
               sinon.assert.calledOnce(_query);
              if (err) return done(err);
              done(); 
            });
        });


      });

    });

     describe("Credit Report Enquiry Data for Applicant", () => {


      describe("GET /creditreport/:id/enquiry", () => {
             //get the suite of filtered data
          let queryData = require('./api-mocks/credit-report/credit-report-enquiry.json');

          let getData = (id) => {
              //use lodash to filter out the data to mimic the where clause
              let data = _.find(queryData, { 'creditReportId': id });
              //return a promise of the filtered data
              return data && data.data ? data.data : null;
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

        it("should return a bad request when invalid params", (done) => {

            api(userMock)
            .get(`/creditreport/jhgjhg6586876/enquiry`)
            .expectStatus(400)
            .end((err, res, body) => {
              sinon.assert.callCount(_query,0);
              if (err) return done(err);
              done();
            });
        });

        it("should return a internal server error when there is no data", (done) => {

            api(userMock)
            .get(`/creditreport/11111/enquiry`)
            .expectStatus(500)
            .end((err, res, body) => {
               sinon.assert.calledOnce(_query);
               //restore the function for use in unit tests and other locations
              if (err) return done(err);
              done();
            });
        });


        it("Should return a internal server error when the data is an empty array", (done) => {

            api(userMock)
            .get(`/creditreport/22222/enquiry`)
            .expectStatus(500)
            .end((err, res, body) => {
               sinon.assert.calledOnce(_query);
               //restore the function for use in unit tests and other locations
              if (err) return done(err);
              done();
            });
        });

        it("Should return a 200 successful", (done) => {

            api(userMock)
            .get(`/creditreport/2550/enquiry`)
            .expectStatus(200)
            .end((err, res, body) => {
               sinon.assert.calledOnce(_query);
               expect(body).to.deep.equal(getData(2550)[0]);
              if (err) return done(err);
              done();
            });
        });
      });

    });

     describe("Credit Report Type For Applicant", () => {


      describe("GET /applicant/:id/creditreporttype", () => {

          //variable for the findAll method to be stubbed
          let _query;
          //before each test we need to replace functions
          beforeEach(() => {
              //stub the find all method
              _query = sandbox.stub(sequelizeStub, 'query', (query, filters) => {
                  //return a promise of the filtered data
                  let value = null;
                  //return some mock values
                  switch(filters.replacements.id){
                    case 22222:
                      value = '';
                    break;
                     case 17368:
                      value = 'Company';
                    break;
                     case 19148:
                      value = 'Consumer';
                    break;
                    default: 
                      value  = null;
                    break;
                  }
                  return Q(value);
              });
          });

          //after each test we need to restore each function for the next iteration
          afterEach(() => {
              _query.restore();
          });


        it("should return a bad request when invalid params", (done) => {

            api(userMock)
            .get(`/applicant/jhgjhg6586876/creditreporttype`)
            .expectStatus(400)
            .end((err, res, body) => {
              sinon.assert.callCount(_query,0);
              if (err) return done(err);
              done();
            });
        });

        it("should return a internal server error when there is no data", (done) => {

            api(userMock)
            .get(`/applicant/11111/creditreporttype`)
            .expectStatus(500)
            .end((err, res, body) => {
               sinon.assert.calledOnce(_query);
               //restore the function for use in unit tests and other locations
              if (err) return done(err);
              done();
            });
        });


        it("Should return a internal server error when the data is an empty array", (done) => {

            api(userMock)
            .get(`/applicant/22222/creditreporttype`)
            .expectStatus(500)
            .end((err, res, body) => {
               sinon.assert.calledOnce(_query);
               //restore the function for use in unit tests and other locations
              if (err) return done(err);
              done();
            });
        });

        it("Should return a 200 successful and Consumer ", (done) => {

            api(userMock)
            .get(`/applicant/19148/creditreporttype`)
            .expectStatus(200)
            .end((err, res, body) => {
               sinon.assert.calledOnce(_query);
               expect(body).to.equal("Consumer");
              if (err) return done(err);
              done();
            });
        });


        it("Should return a 200 successful and Company ", (done) => {

            api(userMock)
            .get(`/applicant/17368/creditreporttype`)
            .expectStatus(200)
            .end((err, res, body) => {
               sinon.assert.calledOnce(_query);
               expect(body).to.equal("Company");
              if (err) return done(err);
              done();
            });
        });
      });

    });

     describe("Credit Report Required for Applicant", () => {


      describe("GET /applicant/:id/creditreportrequired", () => {

        it("Should return a bad request when invalid params", (done) => {

            api(userMock)
            .get(`/applicant/jhgjhg6586876/creditreportrequired`)
            .expectStatus(400)
            .end((err, res, body) => {
              if (err) return done(err);
              done(); 
            });
        });

        it("Should return a 200 successful", (done) => {

            let _required = sandbox.stub(sequelizeStub, 'query', () => Q( [{"CreditReport_RequiredByApplicationPartyRoleID":false}]));

            api(userMock)
            .get(`/applicant/19148/creditreportrequired`)
            .expectStatus(200)
            .end((err, res, body) => {
               sinon.assert.calledOnce(_required);
               expect(body).to.be.false;
               //restore the function for use in unit tests and other locations
               _required.restore();
              if (err) return done(err);
              done(); 
            });
        });
      });

    });


    describe("Apply Credit Report", () => {

      describe("POST /applicant/:id/creditreportapply", () => {

                //get the suite of filtered data
          let bodyData = require('./api-mocks/credit-report/apply-request.json');

          let getData = (id) => {
               let data = _.find(bodyData, { 'applicationPartyRoleId': id });
              //return a promise of the filtered data
              return data && data.data ? data.data : null;
          };

          //variable for the findAll method to be stubbed
          let _query;
          //before each test we need to replace functions
          beforeEach(() => {
              //stub the find all method
              _query = sandbox.stub(sequelizeStub, 'query', (query, filters) => {
                 let id = filters.replacements.id;
                  //do some fakes to simulate throw and bad response
                  if(id == 33333){
                     return Q.reject(new Error("Something bad happened"));
                  }else if(id == 44444){
                    return Q(null);
                  }else if(id == 55555){
                    return Q(["bad"]);
                  }else
                    return Q([12345]);
              });
          });

          //after each test we need to restore each function for the next iteration
          afterEach(() => {
              _query.restore();
          });


        it("Should return a bad request when invalid params", (done) => {

            api(userMock)
            .post(`/applicant/jhgjhg6586876/creditreportapply`)
            .expectStatus(400)
            .end((err, res, body) => {
              sinon.assert.callCount(_query,0);
              if (err) return done(err);
              done(); 
            });
        });

        it("Should return a bad request when body is null", (done) => {

            api(userMock)
            .post(`/applicant/11111/creditreportapply`)
            .send(null)
            .expectStatus(400)
            .end((err, res, body) => {
              sinon.assert.callCount(_query,0);
              if (err) return done(err);
              done(); 
            });
        });

        it("Should return a bad request when body parameters are missing", (done) => {

            api(userMock)
            .post(`/applicant/11111/creditreportapply`)
            .send(getData(11111))
            .expectStatus(400)
            .end((err, res, body) => {
              sinon.assert.callCount(_query,0);
              if (err) return done(err);
              done();
            });
        });


        it("Should return a internal server error when query throws", (done) => {

            api(userMock)
            .post(`/applicant/33333/creditreportapply`)
            .send(getData(33333))
            .expectStatus(500)
            .end((err, res, body) => {
              sinon.assert.calledOnce(_query);
              if (err) return done(err);
              done();
            });
        });


        it("Should return a internal server error when query returns null", (done) => {

           api(userMock)
            .post(`/applicant/44444/creditreportapply`)
            .send(getData(44444))
            .expectStatus(500)
            .end((err, res, body) => {
              sinon.assert.calledOnce(_query);
              if (err) return done(err);
              done();
            });
        });

        it("Should return a internal server error when query returns a non integer", (done) => {

            api(userMock)
            .post(`/applicant/55555/creditreportapply`)
            .send(getData(55555))
            .expectStatus(500)
            .end((err, res, body) => {
              sinon.assert.calledOnce(_query);
              if (err) return done(err);
              done();
            });
        });


        it("Should return a 201 successful when all data is passed", (done) => {


            api(userMock)
            .post(`/applicant/19148/creditreportapply`)
            .send(getData(19148))
            .expectStatus(201)
            .end((err, res, body) => {
               sinon.assert.calledOnce(_query);
               expect(body).to.deep.equal({ "iD": 12345 });
              if (err) return done(err);
              done(); 
            });
        });
      });
  });

});