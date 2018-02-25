"use strict";
 /**
  * @module test/direct-debit
  */


 const sinon   = require("sinon"),
       chai    = require("chai"),
       expect  = chai.expect,
       Q       = require("q"),
       _       = require("lodash");

 const dao = require('../../dao');
 const sequelizeStub = dao.sequelize;
 const DirectDebitDbStub = dao.v8.DirectDebit;

 var api = require("./common").api;
 var userMock = "standard";

 describe("/direct-debit", () => {

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

  describe("Direct Debit Retreives", () => {

    describe("GET /application/:id/directdebit", () => {

      const directDebitsData = require('./api-mocks/database/direct-debits.json');

      let getData = (applicationContainerID, active) => {
        let data = _.filter(directDebitsData, { applicationContainerID, active });

        return data && data.length > 0 ? data : null;
      };

      let _findAll;

      beforeEach(() => {
        _findAll = sandbox.stub(DirectDebitDbStub, 'findAll', (filters) => {
          //do some fakes to simulate throw
          if(filters.where.applicationContainerID === 777) {
            return Q.reject(new Error('Something bad happened'));
          }
          return Q(getData(filters.where.applicationContainerID, filters.where.active));
        });
      });

      afterEach(() => {
      _findAll.restore();
      });

      it("Should send bad request when given an invalid application container id", (done) => {

        api(userMock)
          .get(`/application/SAHFKNASKJFBANSJKB/directdebits`)
          .expectStatus(400)
          .end((err, req, body) => {
            sinon.assert.callCount(_findAll, 0);
            if(err) return done(err);
            done();
          });
      });

      it("Should send not found error when direct debits for this container doesn't exist", (done) => {

        api(userMock)
          .get(`/application/1111111/directdebits`)
          .expectStatus(404)
          .end((err, req, body) => {
            sinon.assert.calledOnce(_findAll);
            if(err) return done(err);
            done();
          });
      });

      it("Should state a success when pass through complete values with a type", (done) => {

        api(userMock)
          .get(`/application/7008394/directdebits`)
          .expectStatus(200)
          .end((err, req, body) => {
            sinon.assert.calledOnce(_findAll);
            expect(body).to.deep.equal(getData(7008394, 1));
            if(err) return done(err);
            done();
          });
      });

      it("Should send internal server error when exception thrown", (done) => {

        api(userMock)
          .get(`/application/777/directdebits`)
          .expectStatus(500)
          .end((err, res, body) => {
            sinon.assert.calledOnce(_findAll);
            if (err) return done(err);
            return done();
          });
      });
    });
  });

  describe("Direct Debit Saves", () => {

    describe("POST /application/:id/directdebit", () => {

      const newDirectDebit = require('./api-mocks/direct-debit-save/new-direct-debit.json');
      const newDirectDebitError = require('./api-mocks/direct-debit-save/new-direct-debit-error.json');
      const newDirectDebitLoanError = require('./api-mocks/direct-debit-save/new-direct-debit-loan-error.json');

      it("Should send internal server error when loan id was not found", (done) => {

        api(userMock)
          .post(`/application/7008395/directdebit`)
          .send(newDirectDebitLoanError)
          .expectStatus(500)
          .end((err, req, body) => {
            if(err) return done(err);
            done();
          });
      });

      it("Should send bad request when application container id invalid", (done) => {

        api(userMock)
          .post(`/application/KLAHJBKJGJHBK/directdebit`)
          .send(newDirectDebit)
          .expectStatus(400)
          .end((err, req, body) => {
            if(err) return done(err);
            done();
          });
      });

      it("Should send bad request when input values set to required are invalid", (done) => {

        api(userMock)
          .post(`/application/7008395/directdebit`)
          .send(newDirectDebitError)
          .expectStatus(400)
          .end((err, req, body) => {
            if(err) return done(err);
            done();
          });
      });

      it("Should state a success when pass through complete values with a type", (done) => {

        let _create = sandbox.stub(DirectDebitDbStub, 'create', (data) => {
          data.iD = 17238;
          data.get = function(key) {
            return this[key];
          };

          return Q(data);
        });

        api(userMock)
          .post(`/application/7008394/directdebit`)
          .send(newDirectDebit)
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

        let _create =  sandbox.stub(DirectDebitDbStub, 'create', () => {
          return Q(null);
        });

        api(userMock)
          .post(`/application/7008394/directdebit`)
          .send(newDirectDebit)
          .expectStatus(500)
          .end((err, res, body) => {
            sinon.assert.calledOnce(_create);
            if (err) return done(err);
            _create.restore();
            return done();
          });

      });

      it("Should send internal server error when exception thrown", (done) => {
        let _create =  sandbox.stub(DirectDebitDbStub, 'create', () => {
          return Q.reject(new Error('Something bad happened'));
        });

        api(userMock)
          .post(`/application/7008394/directdebit`)
          .send(newDirectDebit)
          .expectStatus(500)
          .end((err, res, body) => {
            sinon.assert.calledOnce(_create);
            if (err) return done(err);
            _create.restore();
            return done();
          });
      });

    });

  });

  describe("Direct Debit Updates", () => {

    describe("PUT /directdebit/:id", () => {

      it("should return 200 when updated", (done) => {

        var rBody = require('./api-mocks/direct-debit-save/update-direct-debit.json');

        let _query =  sandbox.stub(DirectDebitDbStub, 'findById', () => {

          rBody.save = () => {
            return Q(this);
          };

          rBody.updateAttributes = (body) => {

          };

          return Q(rBody);
        });

        api(userMock)
          .put(`/directdebit/18079`)
          .send(rBody)
          .expectStatus(200)
          .end((err, req, body) => {
            sinon.assert.calledOnce(_query);
            expect(body).to.be.an('object');
            if(err) return done(err);
            done();
          });
      });

      it("should return 500 when the direct debit is not found", (done) => {

        var rBody = require('./api-mocks/direct-debit-save/update-direct-debit.json');

        let _query =  sandbox.stub(DirectDebitDbStub, 'findById', () => {

          rBody.save = () => {
            return Q(null);
          };

          rBody.updateAttributes = (body) => {

          };

          return Q(null);
        });

        api(userMock)
          .put(`/directdebit/777777777`)
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
          .put(`/directdebit/19148`)
          .send({"bad" : "data"})
          .expectStatus(400)
          .end((err, res, body) => {
            if (err) return done(err);
            return done();
          });
      });

      it("Should send bad request when direct debit id invalid", (done) => {
        const rBody = require('./api-mocks/direct-debit-save/update-direct-debit.json');

        api(userMock)
          .put(`/directdebit/KLAHJBKJGJHBK`)
          .send(rBody)
          .expectStatus(400)
          .end((err, req, body) => {
            if(err) return done(err);
            done();
          });
      });

      it("Should send internal server error when exception thrown", (done) => {
        const rBody = require('./api-mocks/direct-debit-save/update-direct-debit.json');

        let _query =  sandbox.stub(DirectDebitDbStub, 'findById', () => {
          return Q.reject(new Error('Something bad happened'));
        });

        api(userMock)
          .put(`/directdebit/197`)
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

  describe('Direct Debit Delete', () => {

    describe("DELETE /directdebit/:id", () => {

      const directDebitsData = require('./api-mocks/database/direct-debits.json');

      let _deactivate;

      beforeEach(() => {
        _deactivate = sandbox.stub(DirectDebitDbStub, 'update', (body, filter) => {
          //do some fakes to simulate throw
          if(filter.where.iD === 777) {
            return Q.reject(new Error('Something bad happened'));
          }

          let result = _.find(directDebitsData, (item) => {
              if(item.iD === filter.where.iD) {
              return Object.assign(item, body);
            }
          });

          return result ? Q([1]) : Q(null);
        });
      });

      afterEach(() => {
        _deactivate.restore();
      });


      it("Should should delete direct debit successfully", (done) => {

        api(userMock)
          .del('/directdebit/18077')
          .expectStatus(204)
          .end((err, req, body) => {
            sinon.assert.calledOnce(_deactivate);
            if(err) return done(err);
            done();
          });
      });

      it("Should return internal server error when not deleted due to not found", (done) => {

        api(userMock)
          .del('/directdebit/222222222222222222')
          .expectStatus(500)
          .end((err, req, body) => {
            sinon.assert.calledOnce(_deactivate);
            if(err) return done(err);
            done();
          });
      });

      it("Should return bad request when direct debit id invalid", (done) => {

        api(userMock)
          .del('/directdebit/JHKBHJVLNUVN')
          .expectStatus(400)
          .end((err, req, body) => {
            sinon.assert.callCount(_deactivate, 0);
            if(err) return done(err);
            done();
          });
      });

      it("Should return internal server error when exception thrown", (done) => {

        api(userMock)
          .del('/directdebit/777')
          .expectStatus(500)
          .end((err, req, body) => {
            sinon.assert.calledOnce(_deactivate);
            if(err) return done(err);
            done();
          });
      });

    });
  });
 });
