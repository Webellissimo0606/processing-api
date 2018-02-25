"use strict";
/**
* @module test/financial
*/


const sinon   = require("sinon"),
     chai    = require("chai"),
     expect  = chai.expect,
     Q       = require("q"),
     _       = require("lodash");

const dao = require('../../dao');
const sequelizeStub = dao.sequelize;
const LiabilityDbStub = dao.v8.Liability;

var api = require("./common").api;
var userMock = "standard";

describe("/financial", () => {

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

  describe("List liabilities for a household", () => {

    describe("GET /financial/:id/liability", () => {

      const liabilities = require('./api-mocks/database/liabilities.json');

      let getData = (householdID, liabilityTypeID) => {
       let data = _.filter(liabilities, { householdID, liabilityTypeID });

       return data && data.length > 0 ? data : null;
      };

      let _findAll;

      beforeEach(() => {

       _findAll = sandbox.stub(LiabilityDbStub, 'findAll', (filters) => {
         let householdID = filters.where.householdID;
         let liabilityTypeID = filters.where.liabilityTypeID;

         if(householdID === 777) {
           return Q.reject(new Error('Something bad happened'));
         }

         return Q(getData(householdID, liabilityTypeID));
       });
      });

      afterEach(() => {
        _findAll.restore();
      });

      it("Should state success and return liabilities", (done) => {

       api(userMock)
        .get(`/financial/921/liability`)
        .expectStatus(200)
        .end((err, res, body) => {
          sinon.assert.calledOnce(_findAll);
          expect(body).to.deep.equal(getData(921, 1));
          if(err) return done(err);
          done();
        });
      });

      it("Should return not found error when liabilities doesn't exist", (done) => {

        api(userMock)
        .get(`/financial/1001/liability`)
        .expectStatus(404)
        .end((err, res, body) => {
          sinon.assert.calledOnce(_findAll);
          if(err) return done(err);
          done();
        });
      });

      it("Should return bad request error when set invalid id parameter", (done) => {

       api(userMock)
        .get(`/financial/HGUJKHJOKL/liability`)
        .expectStatus(400)
        .end((err, res, body) => {
          sinon.assert.callCount(_findAll, 0);
          if(err) return done(err);
          done();
        });
      });

      it("Should send internal server error when exception thrown", (done) => {

        api(userMock)
         .get(`/financial/777/liability`)
         .expectStatus(500)
         .end((err, res, body) => {
           sinon.assert.calledOnce(_findAll);
           if(err) return done(err);
           done();
         });
      });

    });
  });
});
