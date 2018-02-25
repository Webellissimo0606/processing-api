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
const applicationContainerFeeDbStub = dao.v8.ApplicationContainerFee;

var api = require("./common").api;
var userMock = "standard";

describe("/fees", () => {

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

  describe("ApplicationContainerFees Retreive Tests", () => {

    describe("GET /application/:id/fees", () => {

      let applicationContainerFeesData = require('./api-mocks/database/application-container-fees.json');

      let getData = (id) => {
        let data = _.filter(applicationContainerFeesData, { 'applicationContainerID': id });

        return data && data.length > 0 ? data : null;
      };

      let _findAll;

      beforeEach(() => {
        _findAll = sandbox.stub(applicationContainerFeeDbStub, 'findAll', (filter) => {
          let id = filter.where.applicationContainerID;

          if(id === 777) {
            return Q.reject(new Error('Somthing bad happened'));
          }

          return Q(getData(id));
        });
      });

      afterEach(() => {
        _findAll.restore();
      });

      it("should state a success when found", (done) => {

        api(userMock)
          .get(`/application/7008394/fees`)
          .expectStatus(200)
          .end((err, res, body) => {
            sinon.assert.calledOnce(_findAll);
            expect(body).to.deep.equal(getData(7008394));
            if (err) return done(err);
            done();
          });
      });

      it("Should return not found error when fess doesn't", (done) => {

        api(userMock)
          .get(`/application/1000/fees`)
          .expectStatus(404)
          .end((err, res, body) => {
            sinon.assert.calledOnce(_findAll);
            if (err) return done(err);
            done();
          });
      });

      it("should send bad request when given an valid a non integer based id", (done) => {

        api(userMock)
          .get(`/application/0123456789ABCD0123456789/fees`)
          .expectStatus(400)
          .end((err, res, body) => {
            sinon.assert.callCount(_findAll, 0);
            if (err) return done(err);
            done();
          });
      });

      it("should return internal server error when exception thrown", (done) => {

        api(userMock)
          .get(`/application/777/fees`)
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
  *  GET THE FEE
  */
  describe("Fees Retreive Tests", () => {
    describe("GET /fee/:id", () => {

      let applicationContainerFeesData = require('./api-mocks/database/application-containers-fees.json');

      let getData = (id) => {
        let data = _.find(applicationContainerFeesData, { 'iD': id });

        return data || null;
      };

      let _findById;

      beforeEach(() => {

        _findById = sandbox.stub(applicationContainerFeeDbStub, 'findById', (id) => {
          if(id === 777) {
            return Q.reject(new Error('Something bad happened!'));
          }

          return Q(getData(id));
        });
      });

      //after each test we need to restore each function for the next iteration
      afterEach(() => {
      _findById.restore();
      });


      it("should state a success when found", (done) => {

         api(userMock)
           .get(`/fee/2`)
           .expectStatus(200)
           .end((err, res, body) => {
             sinon.assert.calledOnce(_findById);
             expect(body).to.deep.equal(getData(2));
             if (err) return done(err);
             done();
           });
       });

       it("Should return not found error when fess doesn't", (done) => {

         api(userMock)
           .get(`/fee/1000`)
           .expectStatus(404)
           .end((err, res, body) => {
             sinon.assert.calledOnce(_findById);
             if (err) return done(err);
             done();
           });
       });

       it("should send bad request when given an valid a non integer based id", (done) => {

         api(userMock)
           .get(`/fee/0123456789ABCD0123456789`)
           .expectStatus(400)
           .end((err, res, body) => {
             sinon.assert.callCount(_findById, 0);
             if (err) return done(err);
             done();
           });
       });

       it("should return internal server error when exception thrown", (done) => {

         api(userMock)
           .get(`/fee/777`)
           .expectStatus(500)
           .end((err, res, body) => {
             sinon.assert.calledOnce(_findById);
             if (err) return done(err);
             done();
           });
       });

    });
  });
});
