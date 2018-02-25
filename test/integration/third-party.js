"use strict";
/**
* @module test/thirdparty
*/


const sinon   = require("sinon"),
     chai    = require("chai"),
     expect  = chai.expect,
     Q       = require("q"),
     _       = require("lodash");

const dao = require('../../dao');
const sequelizeStub = dao.sequelize;

var api = require("./common").api;
var userMock = "standard";

describe("/thirdparty", () => {

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

 describe("Third Party Track The Report", () => {

   describe("GET /thirdparty/track/:oprid", () => {

     const thirdparties = require('./api-mocks/database/functions/Report_TrackMyApplications_ByUserPartyRoleID.json');
     const success = require('./api-mocks/third-party/success.json');

     let getData = (oprid) => {
       let data = _.filter(thirdparties, { UserPartyRoleID: oprid });

       return data && data.length > 0 ? data[0].data : null;
     };

     let _query;

     beforeEach(() => {

       _query = sandbox.stub(sequelizeStub, 'query', (query, filters) => {

         let oprid = filters.replacements.oprid;

         if(oprid === 777) {
           return Q.reject(new Error('Something bad happened'));
         }

         return Q(getData(oprid));
       });
     });

     afterEach(() => {
       _query.restore();
     });

     it("Should state a success when set correct parameters", (done) => {
       const expBody = require('./api-mocks/third-party/success.json');

       api(userMock)
         .get(`/thirdparty/track/935`)
         .expectStatus(200)
         .end((err, res, body) => {
           sinon.assert.calledOnce(_query);
           expect(body).to.deep.equal(expBody);
           if(err) return done(err);
           done();
         });
     });

     it("should send internal server error when data doesn't exist", (done) => {

       api(userMock)
         .get(`/thirdparty/track/7215758`)
         .expectStatus(500)
         .end((err, res, body) => {
           sinon.assert.calledOnce(_query);
           if(err) return done(err);
           done();
          });
      });

      it("Should send bad request when given an invalid application container id", (done) => {

        api(userMock)
          .get(`/thirdparty/track/HFVBKJHFCHJB`)
          .expectStatus(400)
          .end((err, req, body) => {
            sinon.assert.callCount(_query, 0);
            if(err) return done(err);
            done();
          });
      });

      it("Should send internal server error when exception thrown", (done) => {

        api(userMock)
          .get(`/thirdparty/track/777`)
          .expectStatus(500)
          .end((err, res, body) => {
            sinon.assert.calledOnce(_query);
            if (err) return done(err);
            return done();
          });
      });

    });
  });
});
