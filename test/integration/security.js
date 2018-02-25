"use strict";
/**
 * @module test/security
 */


const sinon   = require("sinon"),
      chai    = require("chai"),
      expect  = chai.expect,
      Q       = require("q"),
      _       = require("lodash");

const dao = require('../../dao');
const sequelizeStub = dao.sequelize;
const SecurityDbStub = dao.v8.Security;
const AccessoryCategoryTypeProductCategoryDbStub = dao.v8.AccessoryCategoryTypeProductCategory;

var api = require("./common").api;
var userMock = "standard";

describe("/security", () => {

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

  describe("Securities list for Application Container", () => {

   describe("GET /application/:id/securities", () => {
     const securities = require('./api-mocks/database/functions/Security_RetrieveListByApplicationContainerID.json');

     let getData = (acId) => {
       let data = _.filter(securities, { ApplicationContainerID: acId });

       return data && data.length > 0 ? data[0].data : null;
     };

     let _query;

     beforeEach(() => {

       _query = sandbox.stub(sequelizeStub, 'query', (query, filters) => {
         //do some fakes to simulate throw
         if(filters.replacements.acId === 777) {
           return Q.reject(new Error('Something bad happened'));
         }

         return Q(getData(filters.replacements.acId));
       });
     });

     afterEach(() => {
       _query.restore();
     });

     it("Should state a success and should return securities for application container", (done) => {
       const expBody = require('./api-mocks/security/list-success.json');

       api(userMock)
       .get(`/application/7008395/securities`)
       .expectStatus(200)
       .end((err, res, body) => {
         sinon.assert.calledOnce(_query);
         expect(body).to.deep.equal(expBody);
         if(err) return done(err);
         done();
       });
     });

     it("should send internal server error when data doesn't exist for given application container id", (done) => {

       api(userMock)
       .get(`/application/111111111111119999/securities`)
       .expectStatus(500)
       .end((err, res, body) => {
         sinon.assert.calledOnce(_query);
         if(err) return done(err);
         done();
        });
      });

      it("Should send bad request when given an invalid application container id", (done) => {

        api(userMock)
        .get(`/application/HAGHVAGHVB/securities`)
        .expectStatus(400)
        .end((err, req, body) => {
          sinon.assert.callCount(_query, 0);
          if(err) return done(err);
          done();
        });
      });

      it("Should send internal server error when exception thrown", (done) => {

        api(userMock)
        .get(`/application/777/securities`)
        .expectStatus(500)
        .end((err, res, body) => {
          sinon.assert.calledOnce(_query);
          if (err) return done(err);
          return done();
        });
      });
    });

  });


  describe("Delete a Security", () => {
     describe("DELETE /security/:id", () => {
       const data = require('./api-mocks/database/securities.json');

       let _query;

       beforeEach(() => {
         _query = sandbox.stub(sequelizeStub, 'query', (query, filters) => {
           //do some fakes to simulate throw
           if(filters.replacements.id === 777) {
             return Q.reject(new Error('Something bad happened'));
           }

           let result = _.remove(data, { iD: filters.replacements.id });

           return Q(result);
         });
       });

       afterEach(() => {
         _query.restore();
       });

       it("Should send bad request when given an invalid security id", (done) => {

         api(userMock)
           .del(`/security/HJBJHVBJK`)
           .expectStatus(400)
           .end((err, req, body) => {
             sinon.assert.callCount(_query, 0);
             if(err) return done(err);
             done();
           });
       });

       it("Should return internal server error when deleting goes wrong", (done) => {

         api(userMock)
           .del(`/security/111111`)
           .expectStatus(500)
           .end((err, req, body) => {
             sinon.assert.calledOnce(_query);
             if(err) return done(err);
             done();
           });
         });

       it("Should state success when deleted ok", (done) => {

         api(userMock)
           .del(`/security/1`)
           .expectStatus(204)
           .end((err, req, body) => {
             sinon.assert.calledOnce(_query);
             if(err) return done(err);
             done();
           });
       });

       it("Should send internal server error when exception throw", (done) => {

         api(userMock)
           .del(`/security/777`)
           .expectStatus(500)
           .end((err, req, body) => {
             sinon.assert.calledOnce(_query);
             if(err) return done(err);
             done();
           });
       });

     });
  });
  describe("Security accessorycats", () => {

    describe("GET /security/:pcid/accessorycats", () => {

      const data = require('./api-mocks/security/accessory-cagtegory-types.json');

      let getData = (pcid) => {
        let result = _.filter(data, { productCategoryTypeID: pcid });

        return result && result.length > 0 ? result : null;
      }

      let _findAll;

      beforeEach(() => {
        _findAll = sandbox.stub(AccessoryCategoryTypeProductCategoryDbStub, 'findAll', (filters) => {
          if(filters.where.productCategoryTypeID === 777) {
            return Q.reject(new Error('Something bad happened'));
          }

          return Q(getData(filters.where.productCategoryTypeID));
        });
      });

      afterEach(() => {
        _findAll.restore();
      });

      it("Should state success when set valid product category id", (done) => {

        api(userMock)
          .get(`/security/2/accessorycats`)
          .expectStatus(200)
          .end((err, req, body) => {
            sinon.assert.calledOnce(_findAll);
            expect(body).to.deep.equal(getData(2));
            if(err) return done(err);
            done();
          });
      });

      it("Should send not found error when product not found", (done) => {

        api(userMock)
          .get(`/security/878/accessorycats`)
          .expectStatus(404)
          .end((err, req, body) => {
            sinon.assert.calledOnce(_findAll);
            if(err) return done(err);
            done();
          });
      });

      it("Should send bad request when given an invalid product category id", (done) => {

        api(userMock)
          .get(`/security/GJHBUYKBN/accessorycats`)
          .expectStatus(400)
          .end((err, req, body) => {
            sinon.assert.callCount(_findAll, 0);
            if(err) return done(err);
            done();
          });
      });

      it("Should send internal server error when exception thrown", (done) => {

        api(userMock)
          .get(`/security/777/accessorycats`)
          .expectStatus(500)
          .end((err, req, body) => {
            sinon.assert.calledOnce(_findAll);
            if(err) return done(err);
            done();
          });
      });
    });

  });

  describe("Security accessories", () => {

     describe("GET /security/:pcid/accessories/:actid", () => {

       const data = require('./api-mocks/security/accessory-category.json');

       let getData = (pcid, actid) => {
         let result = _.filter(data, { productCategoryTypeID: pcid, accessoryCategoryTypeID: actid });

         return result && result.length > 0 ? result : null;
       }

       let _findAll;

       beforeEach(() => {
         _findAll = sandbox.stub(AccessoryCategoryTypeProductCategoryDbStub, 'findAll', (filters) => {
           // fake error throw to test catch block
           if(filters.where.productCategoryTypeID === 777) {
             return Q.reject(new Error('Something bad happened'));
           }

           return Q(getData(Number(filters.where.productCategoryTypeID), Number(filters.where.accessoryCategoryTypeID)));
         });
       });

       afterEach(() => {
         _findAll.restore();
       });

       it("Should state success when set valid product category id and accessory category id", (done) => {

         api(userMock)
           .get(`/security/2/accessories/2`)
           .expectStatus(200)
           .end((err, req, body) => {
             sinon.assert.calledOnce(_findAll);
             expect(body).to.deep.equal(getData(2, 2));
             if(err) return done(err);
             done();
           });
       });

       it("Should send not found error when product not found", (done) => {

         api(userMock)
           .get(`/security/878/accessories/1`)
           .expectStatus(404)
           .end((err, req, body) => {
             sinon.assert.calledOnce(_findAll);
             if(err) return done(err);
             done();
           });
       });

       it("Should send bad request when given an invalid product category id or accessory category id", (done) => {

         api(userMock)
           .get(`/security/HGJVHBJH/accessories/HJBHGVBJ`)
           .expectStatus(400)
           .end((err, req, body) => {
             sinon.assert.callCount(_findAll, 0);
             if(err) return done(err);
             done();
           });
       });

       it("Should send internal server error when exception thrown", (done) => {

         api(userMock)
           .get(`/security/777/accessories/3`)
           .expectStatus(500)
           .end((err, req, body) => {
             sinon.assert.calledOnce(_findAll);
             if(err) return done(err);
             done();
           });
       });

     });

   });

});
