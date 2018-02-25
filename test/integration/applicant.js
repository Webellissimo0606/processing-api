"use strict";
/**
 * @module test/applicant
 */

const   sinon   = require("sinon"),
        chai    = require("chai"),
        expect  = chai.expect,
        Q       = require("q"),
        _       = require("lodash");

const dao = require('../../dao');
const sequelizeStub = dao.sequelize;
const ApplicationPartyRoleAncillaryMock = dao.v8.ApplicationPartyRoleAncillary;
const EmploymentDbStub = dao.v8.Employment;
const IncomeDbStub = dao.v8.Income;

const services = require("../../services"),
      applicantService = services.applicant;


var api = require("./common").api;

var userMock = "standard";
var userMockPower = "power";
var userMockAdmin = "administrator";

describe("/applicant", () => {

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

  /*
    APPLICANT GET LIST TEST

   */
describe("Applicant Retreive Tests", () => {

  describe("GET /application/:id/applicants", () => {

      //get the suite of filtered data
      let queryData = require('./api-mocks/database/functions/Applicant_RetreiveShortSummary.json');

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
              return Q(getData(filters.replacements.acId));
          });
      });

      //after each test we need to restore each function for the next iteration
      afterEach(() => {
          _query.restore();
      });


    it("should send internal server error when given an invalid application container id", (done) => {

      api(userMock)
        .get(`/application/111111/applicants`)
        .expectStatus(500)
        .end((err, res, body) => {
          sinon.assert.calledOnce(_query);
          if (err) return done(err);
          done();
        });

    });

    it("should send bad request when given an valid a non integer based application container id", (done) => {

      api(userMock)
        .get(`/application/0123456789ABCD0123456789/applicants`)
        .expectStatus(400)
        .end((err, res, body) => {
          sinon.assert.callCount(_query,0);
          if (err) return done(err);
          done(); 
        });

    });


    it("should state a success when found", (done) => {

      api(userMock)
        .get(`/application/7008394/applicants`)
        .expectStatus(200)
        .end((err, res, body) => {
          sinon.assert.calledOnce(_query);
          expect(body).to.deep.equal(getData(7008394));
          if (err) return done(err);
          done();
        });

    });


  });
});

  /*
    Relationship Get Tests
   */
describe("Applicant Retrieve Relationships", () => {
    describe("GET applicant/:id/relationships", () => {

      //get the suite of filtered data
      let queryData = require('./api-mocks/database/functions/Applicant_RetrieveRelationships.json');

      let getData = (id) => {
          //use lodash to filter out the data to mimic the where clause
          let data = _.filter(queryData, { 'ApplicationPartyRoleID': id });
          //return a promise of the filtered data
          return data && data.length > 0 ? data[0].data : null;
      };

      //variable for the findAll method to be stubbed
      let _query;
      //before each test we need to replace functions
      beforeEach(() => {
          //stub the find all method
          _query = sandbox.stub(applicantService, 'relationships', (id, user) => {
              //return a promise of the filtered data
              return Q(getData(id));
          });
      });

      //after each test we need to restore each function for the next iteration
      afterEach(() => {
          _query.restore();
      });

    it("should send bad request when given an valid a non integer based application party role id", (done) => {

      api(userMock)
        .get(`/applicant/0123456789ABCD0123456789/relationships`)
        .expectStatus(400)
        .end((err, res, body) => {
          sinon.assert.callCount(_query,0);
          if (err) return done(err);
          done();
        });

    });


    it("should send internal server errror when given an invalid application party role id", (done) => {

      api(userMock)
        .get(`/applicant/111111/relationships`)
        .expectStatus(500)
        .end((err, res, body) => {
          sinon.assert.calledOnce(_query);
          if (err) return done(err);
          done();
        });

    });

    it("should state a success when found", (done) => {

      api(userMock)
        .get(`/applicant/19001/relationships`)
        .expectStatus(200)
        .end((err, res, body) => {
          sinon.assert.calledOnce(_query);
          expect(body).to.deep.equal(getData(19001));
          if (err) return done(err);
          done(); 
        });

    });


  });

});

  /*
    Relationship Type Tests
   */
describe("Applicant Retrieve Relationship Types", () => {
    describe("GET /applicant/:fid/relationshipTypes/:tid", () => {

      //get the suite of filtered data
      let queryData = require('./api-mocks/database/functions/ApplicationPartyRoleRelationshipType_PartyTypeFromTo.json');

      let getData = (fid, tid) => {
          //use lodash to filter out the data to mimic the where clause
          let data = _.filter(queryData, { 'from': fid, 'to': tid });
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
              return Q(getData(filters.replacements.fid, filters.replacements.tid));
          });
      });

      //after each test we need to restore each function for the next iteration
      afterEach(() => {
          _query.restore();
      });


    it("should return internal server error when the from and to identities do not find relationship types", (done) => {


      api(userMock)
        .get(`/applicant/333/relationshipTypes/444`)
        .expectStatus(500)
        .end((err, res, body) => {
          sinon.assert.calledOnce(_query);
          if (err) return done(err);
          done(); 
        });

    });

     it("should return internal server error when the from and to identities do find relationship types but the data is empty", (done) => {

      api(userMock)
        .get(`/applicant/111/relationshipTypes/222`)
        .expectStatus(500)
        .end((err, res, body) => { 
          sinon.assert.calledOnce(_query);
          if (err) return done(err);
          done(); 
        });

    });


     it("should return bad request error when the from and to identities are not valid", (done) => {

      api(userMock)
        .get(`/applicant/from/relationshipTypes/to`)
        .expectStatus(400)
        .end((err, res, body) => { 
          sinon.assert.callCount(_query,0);
          if (err) return done(err);
          done(); 
        });

    });

    it("should state a success when we have possible relationship types", (done) => {

      api(userMock)
        .get(`/applicant/1/relationshipTypes/1`)
        .expectStatus(200)
        .end((err, res, body) => { 
          sinon.assert.calledOnce(_query);
          expect(body).to.deep.equal(getData(1,1));
          if (err) return done(err);
          done(); 
        });

    });

  });
});

    /*
    Relationship Save Tests
   */
describe("Applicant Relationship Save", () => {
    describe("PUT /applicant/:id/relationships", () => {

      //get the suite of filtered data
      let queryData = require('./api-mocks/database/functions/Applicant_RetrieveRelationships.json');
      let rBody = require('./api-mocks/applicant-relationships/valid-request');

      let getData = (id) => {
          //use lodash to filter out the data to mimic the where clause
          let data = _.filter(queryData, { 'ApplicationPartyRoleID': id });
          //return a promise of the filtered data
          return data && data.length > 0 ? data[0].data : null;
      };

      //variable for the findAll method to be stubbed
      let serviceMock;

      //before each test we need to replace functions
      beforeEach(() => {
          //stub the find all method
          serviceMock = sandbox.stub(applicantService, 'relationships', (id, user) => {
              //return a promise of the filtered data
              return Q(getData(id));
          });
      });

      //after each test we need to restore each function for the next iteration
      afterEach(() => {
          serviceMock.restore();
      });


    it("should fail with bad request when an incorrect body is posted", (done) => {


      api(userMock)
        .put(`/applicant/11111/relationships`)
        .send({"bad" : "body"})
        .expectStatus(400)
        .end((err, res, body) => {
          if (err) return done(err);
          return done();
        });

    });


    it("should send bad request when given an valid a non integer based application party role", (done) => {

      api(userMock)
        .put(`/applicant/0123456789ABCD0123456789/relationships`)
        .send(rBody)
        .expectStatus(400)
        .end((err, res, body) => { 
          if (err) return done(err); 
          return done(); 
        });

    });

   
    

    it("should state a success and return data when updated ok", (done) => {

      let _query =  sandbox.stub(sequelizeStub, 'query', () => {
              //return that it was successful
              return Q(1);
          });

      api(userMock)
        .put(`/applicant/19001/relationships`)
        .send(rBody)
        .expectStatus(200)
        .end((err, res, body) => {
          sinon.assert.calledOnce(_query);
          expect(body).to.deep.equal(getData(19001));
          if (err) return done(err); 
          return done(); 
        });

    });

     it("should state an internal server error when the save function does not work and should not call to fetch the data", (done) => {


      let _query =  sandbox.stub(sequelizeStub, 'query', () => {
              //return that it was successful
              return Q(0);
          });

      api(userMock)
        .put(`/applicant/19001/relationships`)
        .send(rBody)
        .expectStatus(500)
        .end((err, res, body) => {
          sinon.assert.callCount(serviceMock,0);
          sinon.assert.calledOnce(_query);
          if (err) return done(err); 
          return done(); 
        });

    });


  });

});

     /*
    Applicant Create Tests
   */
describe("Applicant Save Tests", () => {
    describe("POST /applicant", () => {


    it("should fail when an incorrect body is posted", (done) => {

        var rBody = require('./api-mocks/applicant-save/new-applicant-error');


      api(userMock)
        .post(`application/111111/applicant`)
        .send(rBody)
        .expectStatus(400)
        .end((err, res, body) => { 
          if (err) return done(err); 
          return done(); 
        });

    });

     it("should fail when an application container id not valid", (done) => {

        var rBody = require('./api-mocks/applicant-save/new-applicant-error');


      api(userMock)
        .post(`application/fred/applicant`)
        .send(rBody)
        .expectStatus(400)
        .end((err, res, body) => { 
          if (err) return done(err); 
          return done(); 
        });

    });

    it("should state a success when created ok", (done) => {

      var rBody = require('./api-mocks/applicant-save/new-applicant');


      let _query =  sandbox.stub(sequelizeStub, 'query', () => {
              //return that it was successful
              return Q([123]);
          });

      api(userMock)
        .post(`application/7008394/applicant`)
        .send(rBody)
        .expectStatus(201)
        .end((err, res, body) => {
          sinon.assert.calledOnce(_query);
          if (err) return done(err);
          return done();
        });

    });

      it("should state an internal server error when not created", (done) => {

      var rBody = require('./api-mocks/applicant-save/new-applicant');


      let _query =  sandbox.stub(sequelizeStub, 'query', () => {
              //return that it was successful
              return Q(null);
          });

      api(userMock)
        .post(`application/7008394/applicant`)
        .send(rBody)
        .expectStatus(500)
        .end((err, res, body) => {
          sinon.assert.calledOnce(_query);
          if (err) return done(err); 
          return done(); 
        });

    });


  });
});
      /*
    Applicant Update Tests
   */
describe("Applicant Update Tests", () => {
    describe("PUT /applicant", () => {

    it("should fail when an incorrect body is posted", (done) => {

        var rBody = require('./api-mocks/applicant-save/update-applicant-error');


      api(userMock)
        .put(`/applicant/11111`)
        .send(rBody)
        .expectStatus(400)
        .end((err, res, body) => { 
          if (err) return done(err); 
          return done(); 
        });

    });


    it("should send bad request when given an valid a non integer based application party role", (done) => {

      var rBody = require('./api-mocks/applicant-save/update-applicant-error');

      api(userMock)
        .put(`/applicant/0123456789ABCD0123456789`)
        .expectStatus(400)
        .send(rBody)
        .end((err, res, body) => { 
          if (err) return done(err); 
          return done(); 
        });

    });

    it("should state a success when updated ok", (done) => {

      var rBody = require('./api-mocks/applicant-save/update-applicant');


      let _query =  sandbox.stub(sequelizeStub, 'query', () => {
              //return that it was successful
              return Q([19161]);
          });

      api(userMock)
        .put(`/applicant/19161`)
        .send(rBody)
        .expectStatus(200)
        .end((err, res, body) => {
          sinon.assert.calledOnce(_query);
          if (err) return done(err); 
          return done(); 
        });

    });

    it("should state an internal server error when not updated", (done) => {

      var rBody = require('./api-mocks/applicant-save/update-applicant');


      let _query =  sandbox.stub(sequelizeStub, 'query', () => {
              //return that it was successful
              return Q(null);
          });

      api(userMock)
        .put(`/applicant/19161`)
        .send(rBody)
        .expectStatus(500)
        .end((err, res, body) => {
          sinon.assert.calledOnce(_query);
          if (err) return done(err); 
          return done(); 
        });

    });


  });

});

       /*
    Applicant Delete tests
   */
describe("Applicant Delete Tests", () => {
    describe("DEL /applicant", () => {

    it("should send bad request when given an valid a non integer based application party role", (done) => {

      api(userMock)
        .del(`/applicant/0123456789ABCD0123456789`)
        .expectStatus(400)
        .end((err, res, body) => { 
          if (err) return done(err); 
          return done(); 
        });

    });

    it("should state a success when deleted ok", (done) => {

       let _query =  sandbox.stub(sequelizeStub, 'query', () => {
              //return that it was successful
              return Q([19163]);
          });

      api(userMock)
        .del(`/applicant/19163`)
        .expectStatus(204)
        .end((err, res, body) => {
        sinon.assert.calledOnce(_query);
          if (err) return done(err);
          return done();
        });

    });


    it("should state an internal server error when not deleted", (done) => {

       let _query =  sandbox.stub(sequelizeStub, 'query', () => {
              //return that it was successful
              return Q(null);
          });

        api(userMock)
          .del(`/applicant/19163`)
          .expectStatus(500)
          .end((err, res, body) => {  
          sinon.assert.calledOnce(_query);
            if (err) return done(err);
            return done();
          });

    });

  });

});

      /*
    Applicant Ancillary tests
   */
describe("Applicant Ancillary Tests", () => {
    describe("PUT /applicant/:id/ancillary", () => {

    it("should state a success when created ok", (done) => {

       let _query =  sandbox.stub(ApplicationPartyRoleAncillaryMock, 'upsert', () => {
              //return that it was successful
              return Q(1);
          });

      api(userMock)
        .put(`/applicant/19167/ancillary`)
        .send({
          "identifyElectronically" : false,
          "consentToVerify" : false
        })
        .expectStatus(201)
        .end((err, res, body) => {
        sinon.assert.calledOnce(_query);
          if (err) return done(err);
          return done();
        });

    });


    it("should state a success when updated ok", (done) => {

       let _query =  sandbox.stub(ApplicationPartyRoleAncillaryMock, 'upsert', () => {
              //return that it was successful
              return Q(2);
          });

      api(userMock)
        .put(`/applicant/19167/ancillary`)
        .send({
          "identifyElectronically" : false,
          "consentToVerify" : false
        })
        .expectStatus(200)
        .end((err, res, body) => {
          sinon.assert.calledOnce(_query);
          if (err) return done(err); 
          return done(); 
        });

    });


    it("should state a bad request when when the application party role is not an integer", (done) => {


      api(userMock)
        .put(`/applicant/fred/ancillary`)
        .send({
          "identifyElectronically" : false,
          "consentToVerify" : false
        })
        .expectStatus(400)
        .end((err, res, body) => {          
          if (err) return done(err); 
          return done(); 
        });

    });


    it("should state a bad request when when the body is incorrect", (done) => {


      let _query =  sandbox.stub(ApplicationPartyRoleAncillaryMock, 'upsert').throws();

      api(userMock)
        .put(`/applicant/fred/ancillary`)
        .send({
          "bad1" : false,
          "bad2" : false
        })
        .expectStatus(400)
        .end((err, res, body) => {
          if (err) return done(err); 
          return done(); 
        });

    });

  });

});

      /*
    Applicant Employment Tests
   */
describe("Applicant Employment Tests", () => {

  describe("Employments Retreive", () => {
      describe("GET /applicant/:id/employments", () => {

            //get the suite of filtered data
            let employmentData = require('./api-mocks/database/employments.json');
            //variable for the findAll method to be stubbed
            let _findAll;
            //before each test we need to replace functions
            beforeEach(() => {
                //stub the find all method
                _findAll = sandbox.stub(EmploymentDbStub, 'findAll', (id) => {
                    //use lodash to filter out the data to mimic the where clause
                    let data = _.filter(employmentData, { 'applicationPartyRoleID': id.where.applicationPartyRoleID });

                    //return a promise of the filtered data
                    return Q(data);
                });
            });

            //after each test we need to restore each function for the next iteration
            afterEach(() => {
                _findAll.restore();
            });


            it("should respond 200 with data array of employments when found", (done) => {

              api(userMock)
                .get(`/applicant/19148/employments`)
                .expectStatus(200)
                .end((err, res, body) => {
                  sinon.assert.calledOnce(_findAll);
                  expect(body).to.deep.equal(employmentData);
                  if (err) return done(err); 
                  return done(); 
                });

            });


            it("should respond 404 as no data is found", (done) => {

              api(userMock)
                .get(`/applicant/11111/employments`)
                .expectStatus(404)
                .end((err, res, body) => {
                  sinon.assert.calledOnce(_findAll);
                  if (err) return done(err); 
                  return done(); 
                });

            });


            it("should respond 500 as invalid input", (done) => {

              api(userMock)
                .get(`/applicant/fred/employments`)
                .expectStatus(400)
                .end((err, res, body) => {
                  sinon.assert.callCount(_findAll,0);
                  if (err) return done(err); 
                  return done(); 
                });

            });

      });
  });

  describe("Employment Create", () => {

      describe("POST /applicant/:id/employment", () => {

        it("should return successful 201 data when saved", (done) => {

          let _query =  sandbox.stub(EmploymentDbStub, 'create', () => {
                //return that it was successful
                return Q(12342);
            });

            var rBody = require('./api-mocks/applicant-employment/employment-save');

            api(userMock)
              .post(`/applicant/19148/employment`)
              .send(rBody)
              .expectStatus(201)
              .end((err, res, body) => {
                sinon.assert.calledOnce(_query);
                if (err) return done(err);
                return done();
              });

          });

      });


      it("should return 400 when body data is incorrect", (done) => {

        let _query =  sandbox.stub(EmploymentDbStub, 'create', () => {
                //return that it was successful
                return Q(null);
            });

          api(userMock)
            .post(`/applicant/19148/employment`)
            .send({"bad" : "data"})
            .expectStatus(500)
            .end((err, res, body) => {
              sinon.assert.calledOnce(_query);
              if (err) return done(err);
              return done();
            });

        });


      it("should return 500 when route application party role is not valid", (done) => {

          api(userMock)
            .post(`/applicant/fred/employment`)
            .send({"bad" : "data"})
            .expectStatus(400)
            .end((err, res, body) => {
              if (err) return done(err);
              return done();
            });

        });

  });

  describe("Employment Update", () => {

    describe("PUT /applicant/:id/employment", () => {

        it("should return 200 when updated", (done) => {

         var rBody = require('./api-mocks/applicant-employment/employment-update');

         let _query =  sandbox.stub(EmploymentDbStub, 'findById', () => {
              //return that it was successful
              rBody.save = () => {
                return Q(8574);
              };
              rBody.updateAttributes = (body) => {

              };
              return Q(rBody);
          });

          api(userMock)
            .put(`/employment/8576`)
            .send(rBody)
            .expectStatus(200)
            .end((err, res, body) => {
              //sinon.assert.calledOnce(_query);
              if (err) return done(err);
              return done();
            });

      });


      it("should return 500 when the employment is not found", (done) => {

         var rBody = require('./api-mocks/applicant-employment/employment-update');

         let _query =  sandbox.stub(EmploymentDbStub, 'findById', () => {
              //return that it was successful
              rBody.save = () => {
                return Q(null);
              };
              rBody.updateAttributes = (body) => {

              };
              return Q(null);
          });

          api(userMock)
            .put(`/employment/8574`)
            .send(rBody)
            .expectStatus(404)
            .end((err, res, body) => {
              sinon.assert.calledOnce(_query);
              if (err) return done(err);
              return done();
            });

      });

      it("should return 400 when body data is incorrect", (done) => {


          api(userMock)
            .post(`/applicant/19148/employment`)
            .send({"bad" : "data"})
            .expectStatus(500)
            .end((err, res, body) => {
         //     sinon.assert.calledOnce(_query);
              if (err) return done(err);
              return done();
            });

        });


      it("should return 400 when route application party role is not valid", (done) => {

          api(userMock)
            .post(`/applicant/fred/employment`)
            .send({"bad" : "data"})
            .expectStatus(400)
            .end((err, res, body) => {
              if (err) return done(err);
              return done();
            });

        });

      });

  });

  describe("Employment Delete", () => {
      describe("DEL /applicant/:id/employment", () => {


        it("should return success when deleted", (done) => {

         let _query =  sandbox.stub(sequelizeStub, 'query', () => {
              //return that it was successful
              return Q(1);
          });

          api(userMockAdmin)
            .del(`/employment/8574`)
            .expectStatus(204)
            .end((err, res, body) => {
               sinon.assert.calledOnce(_query);
              if (err) return done(err);
              return done();
            });

        });


        it("should return internal server error when not deleted due to not found", (done) => {

         let _query =  sandbox.stub(sequelizeStub, 'query', () => {
              //return that it was successful
              return Q(null);
          });

          api(userMockAdmin)
            .del(`/employment/8574`)
            .expectStatus(500)
            .end((err, res, body) => {
               sinon.assert.calledOnce(_query);
              if (err) return done(err);
              return done();
            });

        });

        it("should return bad valid-request when not deleted due to permissions", (done) => {
          api(userMock)
            .del(`/employment/fred`)
            .expectStatus(400)
            .end((err, res, body) => {
              if (err) return done(err);
              return done();
            });

        });

      });

    });
});

      /*
    Applicant Income Tests
   */

    describe("Applicant Income Tests", () => {
      describe("Income Retrieve", () => {
        describe("GET /applicant/:id/incomes", () => {
            //get the suite of filtered data
          let incomeData = require('./api-mocks/database/income.json');
          let incomeSuccessData =  require('./api-mocks/applicant-income/success.json');
          let incomeEmploymentData = require('./api-mocks/database/income-employment.json');
          //variable for the findAll method to be stubbed
          let _findAll;
          //before each test we need to replace functions
          beforeEach(() => {

              //stub the find all method
              _findAll = sandbox.stub(IncomeDbStub, 'findAll', (id) => {
                  //use lodash to filter out the data to mimic the where clause
                  let data = _.filter(incomeData, { 'applicationPartyRoleID': id.where.applicationPartyRoleID });
                  if(data){
                    let  ie= _.filter(incomeEmploymentData, { 'incomeID': data.iD });
                    if(ie)
                      data["EmploymentIncomeFks"] = ie;
                  }
                  //return a promise of the filtered data
                  return Q(data);
              });
          });

          //after each test we need to restore each function for the next iteration
          afterEach(() => {
              _findAll.restore();
          });


          it("should return data when found", (done) => {

            api(userMock)
              .get(`/applicant/19148/incomes`)
              .expectStatus(200)
              .end((err, res, body) => {
                  sinon.assert.calledOnce(_findAll);
                  expect(body).to.deep.equal(incomeSuccessData);
                if (err) return done(err); 
                return done(); 
              });

          });

          it("should respond 404 as no data is found", (done) => {

            api(userMock)
              .get(`/applicant/11111/incomes`)
              .expectStatus(404)
              .end((err, res, body) => {
                sinon.assert.calledOnce(_findAll);
                if (err) return done(err); 
                return done(); 
              });

          });


          it("should respond 500 as invalid input", (done) => {

            api(userMock)
              .get(`/applicant/fred/incomes`)
              .expectStatus(400)
              .end((err, res, body) => {
                sinon.assert.callCount(_findAll,0);
                if (err) return done(err); 
                return done(); 
              });

          });
      });
   });

  });

});
