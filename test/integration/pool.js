"use strict";
/**
  * @module test/pool
 */

const   sinon   = require("sinon"),
        chai    = require("chai"),
        expect  = chai.expect,
        Q       = require("q"),
        _       = require("lodash");

const dao = require('../../dao');
const sequelizeStub = dao.sequelize;
const PoolDbStub = dao.v8.Pool;
const utils = require('../../routes/utils');


var api = require("./common").api;
var userMock = "standard";
var userMockPower = "power";
var userMockAdmin = "administrator";


describe("/pool", () => {

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

  describe("Generate Pooling", () => {

    describe("POST /application/:id/autopool", () => {

      it("Shoud generate pool successfuly when pass correct values", (done) => {
        let _query = sandbox.stub(sequelizeStub, 'query', () => {
          return Q([1]);
        });

        api(userMock)
          .post(`/application/729/autopool`)
          .expectStatus(201)
          .end((err, res, body) => {
            sinon.assert.calledOnce(_query);
            if (err) return done(err);
            _query.restore();
            done();
          });
      });

      it("Should return internal server error when pool not created", (done) => {
        let _query = sandbox.stub(sequelizeStub, 'query', () => {
          return Q(null);
        });

        api(userMock)
          .post(`/application/927/autopool`)
          .expectStatus(500)
          .end((err, res, body) => {
            sinon.assert.calledOnce(_query);
            if (err) return done(err);
            _query.restore();
            done();
          });
      });

      it("Should return bad request when pass invalid id", (done) => {

        api(userMock)
          .post(`/application/SDHBJKN/autopool`)
          .expectStatus(400)
          .end((err, res, body) => {
            if (err) return done(err);
            done();
          });
      });

      it("Should return internal server error when exception thrown", (done) => {
        let _query = sandbox.stub(sequelizeStub, 'query', () => {
          return Q.reject(new Error('Something bad happened'));
        });

        api(userMock)
          .post(`/application/777/autopool`)
          .expectStatus(500)
          .end((err, res, body) => {
            sinon.assert.calledOnce(_query);
            if (err) return done(err);
            _query.restore();
            done();
          });
      });

    });
  });
});
