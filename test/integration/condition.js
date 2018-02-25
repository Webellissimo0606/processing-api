"use strict";
/**
 * @module test/condition
 */

const   sinon   = require("sinon"),
        chai    = require("chai"),
        expect  = chai.expect,
        Q       = require("q"),
        _       = require("lodash");

const dao = require('../../dao');
const sequelizeStub = dao.sequelize;

let api = require("./common").api;

let userMock = "standard";

describe('/condition', () => {

  let sandbox = null;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore()
  });

  before(done => done());

  describe('Condition retrieve tests', () => {

     describe("GET /application/:id/conditions", () => {
       let queryData = require('./api-mocks/database/functions/ApplicationCondition_RetrieveForApplicationContainerID.json');

       let getData = (acId) => {
         let data = _.filter(queryData, {"ApplicationContainerID": acId});
         return data && data.length > 0 ? data[0].data : null;
       }

       let _query;

       beforeEach(() => {
         _query = sandbox.stub(sequelizeStub, 'query', (query, filters) => {

           let acId = filters.replacements.acId;

           if( acId === 777) {
              return Q.reject(new Error('Something bad happened'));
            }

           return Q(getData(acId));
         });
       });

       afterEach(() => {
         _query.restore();
       });

       it("Should return a bad request when passed invalid params", (done) => {

         api(userMock)
           .get(`/application/bad/conditions`)
           .expectStatus(400)
           .end((err, res, body) => {
             sinon.assert.callCount(_query, 0);
             if (err) return done(err);
             done();
           });
       });

       it("should send internal server error when data doesn't exist for given application container id", (done) => {

         api(userMock)
           .get('/application/123123/conditions')
           .expectStatus(500)
           .end((err, res, body) => {
             sinon.assert.calledOnce(_query);
             if (err) return done(err);
             done();
           });
       });

       it("Should return a 200 successful", (done) => {
         let expectedResult = require('./api-mocks/condition/list-success.json');

         api(userMock)
           .get(`/application/723723/conditions`)
           .expectStatus(200)
           .end((err, res, body) => {
             sinon.assert.calledOnce(_query);
             expect(body).to.deep.equal(expectedResult);
             if (err) return done(err);
             done();
           });
       });

       it("Should send internal server error when exception thrown", (done) => {

         api(userMock)
           .get(`/application/777/conditions`)
           .expectStatus(500)
           .end((err, res, body) => {
             sinon.assert.calledOnce(_query);
             if (err) return done(err);
             return done();
           });
       });

     });

   });

   describe('Condition retrieve tests', () => {

    describe('GET `/condition/:id`', () => {

      let queryData = require('./api-mocks/condition/condition-retrieve-list.json');

      let getData = (acId) => {
        let data = _.find(queryData, {"applicationConditionID": acId});
        return data || null;
      }

      let _query;

      beforeEach(() => {
        _query = sandbox.stub(sequelizeStub, 'query', (query, filters) => {
          let acId = filters.replacements.acId;

          if( acId === 777) {
             return Q.reject(new Error('Something bad happened'));
           }

          return Q(getData(acId));
        });
      });

      afterEach(() => {
        _query.restore();
      });

      it("Should return a bad request when passed invalid params", (done) => {

        api(userMock)
          .get(`/condition/bad`)
          .expectStatus(400)
          .end((err, res, body) => {
            sinon.assert.callCount(_query, 0);
            if (err) return done(err);
            done();
          });
      });

      it("should send internal server error when data doesn't exist for given application container id", (done) => {

        api(userMock)
          .get('/condition/100000000')
          .expectStatus(500)
          .end((err, res, body) => {
            sinon.assert.calledOnce(_query);
            if (err) return done(err);
            done();
          });
      });

      it("Should send internal server error when exception thrown", (done) => {

        api(userMock)
          .get(`/condition/777`)
          .expectStatus(500)
          .end((err, res, body) => {
            sinon.assert.calledOnce(_query);
            if (err) return done(err);
            return done();
          });
      });

      it("Should return a 200 successful", (done) => {

        api(userMock)
          .get(`/condition/712712`)
          .expectStatus(200)
          .end((err, res, body) => {
            sinon.assert.calledOnce(_query);
            expect(body).to.deep.equal(getData(712712));
            if (err) return done(err);
            done();
          });
      });

    });
  });

});
