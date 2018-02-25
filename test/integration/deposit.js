"use strict";
/**
 * @module test/deposit
 */

const   sinon   = require("sinon"),
        chai    = require("chai"),
        expect  = chai.expect,
        Q       = require("q"),
        _       = require("lodash");

const dao = require('../../dao');
const sequelizeStub = dao.sequelize;
const DepositDbStub = dao.v8.Deposit;

var api = require("./common").api;

var userMock = "standard";
var userMockPower = "power";
var userMockAdmin = "administrator";

describe("/deposit", () => {

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

  describe("Deposit Retreive Tests", () => {

    describe("GET /loan/:id/deposits", () => {

      let queryData = require('./api-mocks/database/deposits.json');

      let getData = (id) => {
        let data = _.filter(queryData, { 'loanID': id });

        return data && data.length > 0 ? data : null;
      };

      let _findAll;

      beforeEach(() => {
        _findAll = sandbox.stub(DepositDbStub, 'findAll', (filters) => {
          if(filters.where.loanId === 777) {
            return Q.reject(new Error('Something bad happened'));
          }

          return Q(getData(filters.where.loanId));
        });
      });

      afterEach(() => {
        _findAll.restore();
      });

      it("should state a success when found", (done) => {

        api(userMock)
          .get(`/loan/18742/deposits`)
          .expectStatus(200)
          .end((err, res, body) => {
            sinon.assert.calledOnce(_findAll);
            expect(body).to.deep.equal(getData(18742));
            if (err) return done(err);
            done();
          });
      });

      it("Should send not found error when no deposit found with this loan id", (done) => {

        api(userMock)
          .get(`/loan/111111/deposits`)
          .expectStatus(404)
          .end((err, res, body) => {
            sinon.assert.calledOnce(_findAll);
            if (err) return done(err);
            done();
          });
      });

      it("Should send bad request when given an invalid a non integer based loand id", (done) => {

        api(userMock)
        .get(`/loan/HJBJKBJHK85/deposits`)
        .expectStatus(400)
        .end((err, res, body) => {
          sinon.assert.callCount(_findAll, 0);
          if (err) return done(err);
          done();
        });
      });

      it("Should send internal server error when exception thrown", (done) => {

        api(userMock)
        .get(`/loan/777/deposits`)
        .expectStatus(500)
        .end((err, res, body) => {
          sinon.assert.calledOnce(_findAll);
          if (err) return done(err);
          done();
        });
      });

    });
  });

  /*
  *  DEPOSIT RETRIEVE DEPOSIT TEST
  */
  describe("Deposit Get By Id Tests", () => {

    describe("GET /deposit/:id", () => {

      let queryData = require('./api-mocks/database/deposits.json');

      let getData = (id) => {
        let data = _.find(queryData, { 'iD': id });

        return data;
      };

      let _findById;

      beforeEach(() => {
        _findById = sandbox.stub(DepositDbStub, 'findById', (id) => {
          if(id === 777) {
            return Q.reject(new Error('Something bad happened'));
          }

          return Q(getData(id));
        });
      });

      afterEach(() => {
        _findById.restore();
      });

      it("should state a success when found", (done) => {

        api(userMock)
          .get(`/deposit/3`)
          .expectStatus(200)
          .end((err, res, body) => {
            sinon.assert.calledOnce(_findById);
            expect(body).to.deep.equal(getData(3));
            if (err) return done(err);
            done();
          });
      });

      it("Should send not found error when no deposit found with this id", (done) => {

        api(userMock)
          .get(`/deposit/12642874628462871924872`)
          .expectStatus(404)
          .end((err, res, body) => {
            sinon.assert.calledOnce(_findById);
            if (err) return done(err);
            done();
          });
      });

      it("Should send bad request when given an invalid a non integer based id", (done) => {

        api(userMock)
        .get(`/deposit/HJBJKBJHK85`)
        .expectStatus(400)
        .end((err, res, body) => {
          sinon.assert.callCount(_findById, 0);
          if (err) return done(err);
          done();
        });
      });

      it("Should send internal server error when exception thrown", (done) => {

        api(userMock)
        .get(`/deposit/777`)
        .expectStatus(500)
        .end((err, res, body) => {
          sinon.assert.calledOnce(_findById);
          if (err) return done(err);
          done();
        });
      });
    });
  });

  /*
  *  DEPOSIT UPDATE TEST
  */
  describe("Deposit Update", () => {

    describe("PUT /deposit/:id", () => {

      it("Should return 200 when updated", (done) => {

        const rBody = require('./api-mocks/deposit-save/deposit-update.json');

        let _query =  sandbox.stub(DepositDbStub, 'findById', () => {

          rBody.save = () => {
            return Q(this);
          };

          rBody.updateAttributes = (body) => {

          };

          return Q(rBody);
        });

        api(userMock)
          .put(`/deposit/18079`)
          .send(rBody)
          .expectStatus(200)
          .end((err, req, body) => {
            sinon.assert.calledOnce(_query);
            if(err) return done(err);
            done();
          });

      });

      it("should return 404 when the deposit not found", (done) => {

        const rBody = require('./api-mocks/deposit-save/deposit-update.json');

        let _query =  sandbox.stub(DepositDbStub, 'findById', () => {

          rBody.save = () => {
            return Q(null);
          };

          rBody.updateAttributes = (body) => {

          };

          return Q(null);
        });

        api(userMock)
          .put(`/deposit/777777777`)
          .send(rBody)
          .expectStatus(404)
          .end((err, res, body) => {
            sinon.assert.calledOnce(_query);
            if (err) return done(err);
            return done();
          });
      });

      it("should return 400 when body data is incorrect", (done) => {

        const rBody = require('./api-mocks/deposit-save/deposit-update-error.json');

        api(userMock)
          .put(`/deposit/19148`)
          .send(rBody)
          .expectStatus(400)
          .end((err, res, body) => {
            if (err) return done(err);
            return done();
          });
      });

      it("Should send bad request when deposit id invalid", (done) => {
        const rBody = require('./api-mocks/deposit-save/deposit-update.json');

        api(userMock)
          .put(`/deposit/KLAHJBKJGJHBK`)
          .send(rBody)
          .expectStatus(400)
          .end((err, req, body) => {
            if(err) return done(err);
            done();
          });
      });

      it("Should send internal server error when exception thrown", (done) => {
        const rBody = require('./api-mocks/deposit-save/deposit-update.json');

        let _query =  sandbox.stub(DepositDbStub, 'findById', () => {
          return Q.reject(new Error('Something bad happened'));
        });

        api(userMock)
          .put(`/deposit/197`)
          .send(rBody)
          .expectStatus(500)
          .end((err, req, body) => {
            sinon.assert.calledOnce(_query);
            if(err) return done(err);
            _query.restore();
            done();
          });
      });

    });
  });

  /*
   *  DEPOSIT CREATE TEST
   */
   describe("Deposit Saves", () => {

     describe("POST /loan/:id/deposit", () => {

       const newDeposit = require('./api-mocks/deposit-save/new-deposit.json');
       const newDepositError = require('./api-mocks/deposit-save/new-deposit-error.json');

       it("Should state a success when pass through complete values with a type", (done) => {

         let _create = sandbox.stub(DepositDbStub, 'create', (data) => {
           data.iD = 17238;
           data.get = function(key) {
             return this[key];
           };

           return Q(data);
         });

         api(userMock)
           .post(`/loan/78928/deposit`)
           .send(newDeposit)
           .expectStatus(201)
           .end((err, req, body) => {
             sinon.assert.calledOnce(_create);
             expect(body).to.have.property('iD');
             expect(body.iD).to.be.a('number');
             if(err) return done(err);
             _create.restore();
             done();
           });
       });

       it("should state an internal server error when not created", (done) => {

         let _create =  sandbox.stub(DepositDbStub, 'create', () => {
           return Q(null);
         });

         api(userMock)
           .post(`/loan/7008394/deposit`)
           .send(newDeposit)
           .expectStatus(500)
           .end((err, res, body) => {
             sinon.assert.calledOnce(_create);
             if (err) return done(err);
             _create.restore();
             return done();
           });
       });

       it("Should send internal server error when exception thrown", (done) => {
         let _create =  sandbox.stub(DepositDbStub, 'create', () => {
           return Q.reject(new Error('Something bad happened'));
         });

         api(userMock)
           .post(`/loan/7008394/deposit`)
           .send(newDeposit)
           .expectStatus(500)
           .end((err, res, body) => {
             sinon.assert.calledOnce(_create);
             if (err) return done(err);
             _create.restore();
             return done();
           });
       });

       it("Should send internal server error when loan id was not found", (done) => {

         api(userMock)
           .post(`/loan//deposit`)
           .send(newDeposit)
           .expectStatus(500)
           .end((err, req, body) => {
             if(err) return done(err);
             done();
           });
       });

       it("Should send bad request when input values set to required are invalid", (done) => {

         api(userMock)
           .post(`/loan/18232/deposit`)
           .send(newDepositError)
           .expectStatus(400)
           .end((err, req, body) => {
             if(err) return done(err);
             done();
           });
       });

     });
   });


     /*
      *  DEPOSIT DELETE TEST
      */
      describe("Deposit Delete", () => {

        describe("DELETE /deposit/:id", () => {

          const depositsData = require('./api-mocks/database/deposits.json');

          let _query;

          beforeEach(() => {
            _query = sandbox.stub(sequelizeStub, 'query', (query, filters) => {
              //do some fakes to simulate throw
              if(filters.replacements.id === 777) {
                return Q.reject(new Error('Something bad happened'));
              }

              let result = _.remove(depositsData, { iD: filters.replacements.id });

              return result && result.length > 0 ? Q([1]) : Q(null);
            });
          });

          afterEach(() => {
            _query.restore();
          });

          it("Should should delete deposit successfully", (done) => {

            api(userMock)
              .del('/deposit/2')
              .expectStatus(204)
              .end((err, req, body) => {
                sinon.assert.calledOnce(_query);
                if(err) return done(err);
                done();
              });
          });

          it("Should return internal server error when not deleted due to not found", (done) => {

            api(userMock)
              .del('/deposit/222222222222222222')
              .expectStatus(500)
              .end((err, req, body) => {
                sinon.assert.calledOnce(_query);
                if(err) return done(err);
                done();
              });
          });

          it("Should return bad request when deposit id invalid", (done) => {

            api(userMock)
              .del('/deposit/JHKBHJVLNUVN')
              .expectStatus(400)
              .end((err, req, body) => {
                sinon.assert.callCount(_query, 0);
                if(err) return done(err);
                done();
              });
          });

          it("Should return internal server error when exception thrown", (done) => {

            api(userMock)
              .del('/deposit/777')
              .expectStatus(500)
              .end((err, req, body) => {
                sinon.assert.calledOnce(_query);
                if(err) return done(err);
                done();
              });
          });

        });
      });
});
