"use strict";
 /**
  * @module test/final-approval
  */


 const sinon   = require("sinon"),
       chai    = require("chai"),
       expect  = chai.expect,
       Q       = require("q"),
       _       = require("lodash");

 const dao = require('../../dao');
 const sequelizeStub = dao.sequelize;
 const FinalApprovalProcessHistoryDbStub = dao.v8.FinalApprovalProcessHistory;

 const services = require("../../services"),
       finalApprovalService = services.finalApproval;

 var api = require("./common").api;
 var userMock = "standard";

 describe("/final-approval", () => {

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

   describe("Final Approval Retrieves", () => {

      describe("GET /application/:id/finalapprovals", () => {

        const finalApprovalProcessHistories = require('./api-mocks/database/final-approval-process-histories.json');
        const finalApprovalProcessTypes = require('./api-mocks/database/final-approval-process-types.json');

        let getData = (acId) => {
          let data = _.filter(finalApprovalProcessHistories, {
            applicationContainerID: acId
          });

          data = data.map((processHistory) => {
            processHistory.finalApprovalProcessType = _.find(finalApprovalProcessTypes, {
              iD: processHistory.finalApprovalProcessTypeID
            });

            return processHistory;
          });

          return data && data.length > 0 ? data : null;
        };

        let _findAll;

        beforeEach(() => {
          _findAll = sandbox.stub(FinalApprovalProcessHistoryDbStub, 'findAll', (filters) => {
            //do some fakes to simulate throw
            if(filters.where.applicationContainerID === 777) {
              return Q.reject(new Error('Something bad happened'));
            }

            return Q(getData(filters.where.applicationContainerID));
          });
        });

        afterEach(() => {
          _findAll.restore();
        });

        it("Should state a success and should return final approvals when pass correct values", (done) => {

          api(userMock)
            .get(`/application/7008395/finalapprovals`)
            .expectStatus(200)
            .end((err, req, body) => {
              sinon.assert.calledOnce(_findAll);
              expect(body).to.deep.equal(getData(7008395));
              if(err) return done(err);
              done();
            });
        });

        it("Should send not found error when final approvals for this container id doesn't exist", (done) => {

          api(userMock)
            .get(`/application/1111111/finalapprovals`)
            .expectStatus(404)
            .end((err, req, body) => {
              sinon.assert.calledOnce(_findAll);
              if(err) return done(err);
              done();
            });
        });

        it("Should send bad request when given an invalid application container id", (done) => {

         api(userMock)
           .get(`/application/KAJHBHBJKNAAHJK/finalapprovals`)
           .expectStatus(400)
           .end((err, req, body) => {
             sinon.assert.callCount(_findAll, 0);
             if(err) return done(err);
             done();
           });
        });

        it("Should send internal server error when exception thrown", (done) => {

          api(userMock)
            .get(`/application/777/finalapprovals`)
            .expectStatus(500)
            .end((err, req, body) => {
              sinon.assert.calledOnce(_findAll);
              if(err) return done(err);
              done();
            });
        });

      });

   });
   describe("Final Approval process item", () => {

      describe("GET /finalapproval/:id", () => {

        const finalApprovalProcessHistories = require('./api-mocks/database/final-approval-process-histories.json');
        const finalApprovalProcessTypes = require('./api-mocks/database/final-approval-process-types.json');

        let getData = (iD) => {
          let processHistory = _.find(finalApprovalProcessHistories, { iD });

          if(!processHistory) {
            return null;
          }

          processHistory.finalApprovalProcessType = _.find(finalApprovalProcessTypes, {
            iD: processHistory.finalApprovalProcessTypeID
          });

          return processHistory;
        };

        let _findById;

        beforeEach(() => {
          _findById = sandbox.stub(finalApprovalService, 'retrieve', (id, user) => {

              if(id === 777) {
                return Q.reject(new Error('Something bad happened'));
              }

              return Q(getData(id));
          });
        });

        afterEach(() => {
          _findById.restore();
        });

        it("Should state a success and should return final approval when pass correct values", (done) => {

          api(userMock)
            .get(`/finalapproval/15789`)
            .expectStatus(200)
            .end((err, req, body) => {
              sinon.assert.calledOnce(_findById);
              expect(body).to.deep.equal(getData(15789));
              if(err) return done(err);
              done();
            });
        });

        it("Should send not found error when final approval with this id doesn't exist", (done) => {

          api(userMock)
            .get(`/finalapproval/1111111`)
            .expectStatus(404)
            .end((err, req, body) => {
              sinon.assert.calledOnce(_findById);
              if(err) return done(err);
              done();
            });
        });

        it("Should send bad request when given an invalid id", (done) => {

         api(userMock)
           .get(`/finalapproval/KAJHBHBJKNAAHJ`)
           .expectStatus(400)
           .end((err, req, body) => {
             sinon.assert.callCount(_findById, 0);
             if(err) return done(err);
             done();
           });
        });

        it("Should send internal server error when exception thrown", (done) => {

          api(userMock)
            .get(`/finalapproval/777`)
            .expectStatus(500)
            .end((err, req, body) => {
              sinon.assert.calledOnce(_findById);
              if(err) return done(err);
              done();
            });
        });
      });
   });
   describe("Final Approval Save", () => {

      describe("PUT /finalapproval/:id", () => {

        const finalApprovalData = require('./api-mocks/database/final-approvals.json');
        const createUpdateData = require('./api-mocks/final-approval-save/create-update-success.json');
        const rBody = require('./api-mocks/final-approval-save/final-approval.json');
        const rBodyError = require('./api-mocks/final-approval-save/final-approval-error.json');

        let _query;
        let serviceMock;

        let getData = (iD) => {
          let data = _.find(finalApprovalData, { iD });

          return data || null;
        };

        beforeEach(() => {
          _query = sandbox.stub(sequelizeStub, 'query', (query, filters) => {
              let data = null;
              //return some mock datas
              switch(filters.replacements.acId){
                case 7008394:
                  data = createUpdateData;
                break;
                case 7008395:
                  data = null;
                break;
                case 7008396:
                  data = [{iD: 9}];
                break;
                case 777:
                 return Q.reject(new Error('Something bad happened'));
                break;
              }

              return Q(data);
          });

          serviceMock = sandbox.stub(finalApprovalService, 'retrieve', (id) => {

            return Q(getData(id));
          });
        });

        afterEach(() => {
          _query.restore();
          serviceMock.restore();
        });

        it("Should state a success when created ok", (done) => {

          api(userMock)
            .put(`/finalapproval/7008394`)
            .send(rBody)
            .expectStatus(201)
            .end((err, req, body) => {
              sinon.assert.calledOnce(_query);
              sinon.assert.calledOnce(serviceMock);
              expect(body).to.deep.equal(getData(1));
              if(err) return done(err);
              done();
            });
        });

        it("Should return internal server error when finalapproval not created", (done) => {

          api(userMock)
            .put(`/finalapproval/7008395`)
            .send(rBody)
            .expectStatus(500)
            .end((err, req, body) => {
              sinon.assert.calledOnce(_query);
              sinon.assert.callCount(serviceMock, 0);
              if(err) return done(err);
              done();
            });
        });

        it("Should return not found error when retrieve service returns empty object", (done) => {

          api(userMock)
            .put(`/finalapproval/7008396`)
            .send(rBody)
            .expectStatus(404)
            .end((err, req, body) => {
              sinon.assert.calledOnce(_query);
              sinon.assert.calledOnce(serviceMock);
              if(err) return done(err);
              done();
            });
        });

        it("Should return bad request when set invalid id", (done) => {

          api(userMock)
            .put(`/finalapproval/GHBNKJLM`)
            .send(rBody)
            .expectStatus(400)
            .end((err, req, body) => {
              sinon.assert.callCount(_query, 0);
              sinon.assert.callCount(serviceMock, 0);
              if(err) return done(err);
              done();
            });
        });

        it("Should return bad request when set invalid body", (done) => {

          api(userMock)
            .put(`/finalapproval/1276`)
            .send(rBodyError)
            .expectStatus(400)
            .end((err, req, body) => {
              sinon.assert.callCount(_query, 0);
              sinon.assert.callCount(serviceMock, 0);
              if(err) return done(err);
              done();
            });
        });

        it("Should return internal server error when error thrown", (done) => {

          api(userMock)
            .put(`/finalapproval/777`)
            .send(rBody)
            .expectStatus(500)
            .end((err, req, body) => {
              sinon.assert.calledOnce(_query);
              sinon.assert.callCount(serviceMock, 0);
              if(err) return done(err);
              done();
            });
        });

      });
   });
   describe("Final Approval Next", () => {

   describe("GET /finalapproval/:id/next", () => {

     const nextData = require('./api-mocks/final-approval/final-approval-next.json');

     let getData = (acId, user) => {
       let data = _.find(nextData, { applicationContainerID: acId, userID: user });

       return data ? data.finalApprovalProcessTypeID : null;
     };

     let _query;

     beforeEach(() => {
       _query = sandbox.stub(sequelizeStub, 'query', (query, filters) => {
         let acId = filters.replacements.acId
         let userId = filters.replacements.user;

         if(acId === 777) {
           return Q.reject(new Error("Something bad happened"));
         }

         return Q(getData(acId, userId));
       });
     });

     afterEach(() => {
       _query.restore();
     });

     it("Should return success when set parameters correctly", (done) => {

       api(userMock)
         .get('/finalapproval/730/next')
         .expectStatus(200)
         .end((err, res, body) => {
           sinon.assert.calledOnce(_query);
           expect(body).to.deep.equal(getData(730, 3));
           if(err) return done(err);
           done();
         });
     });

     it("Should return not found error when next final approval doesn't exist", (done) => {

       api(userMock)
         .get('/finalapproval/900000003/next')
         .expectStatus(404)
         .end((err, res, body) => {
           sinon.assert.calledOnce(_query);
           if(err) return done(err);
           done();
         });
     });

     it("Should return bad request when set invalid id", (done) => {

       api(userMock)
         .get('/finalapproval/GHBJKNJHNHJ/next')
         .expectStatus(400)
         .end((err, res, body) => {
           sinon.assert.callCount(_query, 0);
           if(err) return done(err);
           done();
         });
     });

     it("Should return internal server error when exception thrown", (done) => {

       api(userMock)
         .get('/finalapproval/777/next')
         .expectStatus(500)
         .end((err, res, body) => {
           sinon.assert.calledOnce(_query);
           if(err) return done(err);
           done();
         });
     });

   });
 });
 describe("Final Approval Reset", () => {

     describe("PUT /finalapproval/:id/reset", () => {

       const resetData = require('./api-mocks/database/final-approvals.json');

       let getData = (iD) => {
         let data = _.find(resetData, { iD });

         return data || null;
       };

       let _query;
       let serviceMock;

       beforeEach(() => {
         _query = sandbox.stub(sequelizeStub, 'query', (query, filters) => {

           if(filters.replacements.id === 777) {
             return Q.reject(new Error("Something bad happened"));
           }

           return Q();
         });

         serviceMock = sandbox.stub(finalApprovalService, 'retrieve', (id) => {
           return Q(getData(id));
         });
       });

       afterEach(() => {
         _query.restore();
         serviceMock.restore();
       });

       it("Should return success when set parameters correctly", (done) => {

         api(userMock)
           .put('/finalapproval/1/reset')
           .expectStatus(200)
           .end((err, res, body) => {
             sinon.assert.calledOnce(_query);
             sinon.assert.calledOnce(serviceMock);
             expect(body).to.deep.equal(getData(1));
             if(err) return done(err);
             done();
           });
       });

       it("Should return not found error when final approval doesn't exist", (done) => {

         api(userMock)
           .put('/finalapproval/900000003/reset')
           .expectStatus(404)
           .end((err, res, body) => {
             sinon.assert.calledOnce(_query);
             sinon.assert.calledOnce(serviceMock);
             if(err) return done(err);
             done();
           });
       });

       it("Should return bad request when set invalid id", (done) => {

         api(userMock)
           .put('/finalapproval/GHBJKNJHNHJ/reset')
           .expectStatus(400)
           .end((err, res, body) => {
             sinon.assert.callCount(_query, 0);
             sinon.assert.callCount(serviceMock, 0);
             if(err) return done(err);
             done();
           });
       });

       it("Should return internal server error when exception thrown", (done) => {

         api(userMock)
           .put('/finalapproval/777/reset')
           .expectStatus(500)
           .end((err, res, body) => {
             sinon.assert.calledOnce(_query);
             sinon.assert.callCount(serviceMock, 0);
             if(err) return done(err);
             done();
           });
       });

     });
   });
 });
