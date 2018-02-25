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
const Database = dao.v8;
const ApplicationContainerDbStub = Database.ApplicationContainer;
const ProductCategoriesStub = Database.ProductCategory;

var api = require("./common").api;
var userMock = "standard";

describe("/application", () => {

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

describe("Application Retreive Tests", () => {
  describe("GET /application/:id", () => {

        //get the suite of filtered data
      let applicationContainerData = require('./api-mocks/database/application-containers.json');
      let productCategoryData = require('./api-mocks/database/product-categories.json');
      //variable for the findAll method to be stubbed
      let _findById;
      //before each test we need to replace functions
      beforeEach(() => {

          //stub the find all method
          _findById = sandbox.stub(ApplicationContainerDbStub, 'findById', (id) => {
              //use lodash to filter out the data to mimic the where clause
              let data = _.find(applicationContainerData, { 'iD': id });
              if(data){
                let  pc= _.find(productCategoryData, { 'iD': data.productCategoryID });
                if(pc)
                  data["ProductCategory"] = pc;
              }
              //return a promise of the filtered data
              return Q(data);
          });
      });

      //after each test we need to restore each function for the next iteration
      afterEach(() => {
          _findById.restore();
      });


    it("should send bad request when given an invalid id", (done) => {

      api(userMock)
        .get(`/application/111111`)
        .expectStatus(404)
        .end((err, res, body) => {
          sinon.assert.calledOnce(_findById);
          if (err) return done(err);
          done(); 
        });

    });


    it("should send bad request when given an valid a non integer based id", (done) => {

      api(userMock)
        .get(`/application/0123456789ABCD0123456789`)
        .expectStatus(400)
        .end((err, res, body) => {
          if (err) return done(err);
          done(); 
        });

    });


    it("should state a success when found", (done) => {

      api(userMock)
        .get(`/application/7008394`)
        .expectStatus(200)
        .end((err, res, body) => {
          sinon.assert.calledOnce(_findById);
          expect(body).to.deep.equal(require('./api-mocks/application-container/success.json'));
          if (err) return done(err);
          done(); 
        });

    });


  });

});

describe("Application Relationship Key Tests", () => {

  describe("GET /application/:id/relationshipkeys", () => {


      //get the suite of filtered data
      let queryData = require('./api-mocks/database/functions/ApplicationPartyRole_KeySummary_JSON.json');

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
              return Q(getData(filters.replacements.id));
          });
      });

      //after each test we need to restore each function for the next iteration
      afterEach(() => {
          _query.restore();
      });

    it("should state a success when found", (done) => {
      api(userMock)
        .get(`/application/7008394/relationshipkeys`)
        .expectStatus(200)
        .end((err, res, body) => {
          sinon.assert.calledOnce(_query);
          expect(body).to.deep.equal(getData(7008394)[0]["ApplicationPartyRole_KeySummary_JSON"]);
          if (err) return done(err);
          done(); 
        });
    });

    it("should state a bad request when invalid params", (done) => {
      api(userMock)
        .get(`/application/hhkjhk/relationshipkeys`)
        .expectStatus(400)
        .end((err, res, body) => {
          sinon.assert.callCount(_query,0);
          if (err) return done(err);
          done(); 
        });
    });

     it("should state internal error when data is not found", (done) => {
      api(userMock)
        .get(`/application/11111/relationshipkeys`)
        .expectStatus(500)
        .end((err, res, body) => {
          sinon.assert.calledOnce(_query);
          if (err) return done(err);
          done(); 
        });
    });

     it("should state internal error when data is found but null length", (done) => {
      api(userMock)
        .get(`/application/222222/relationshipkeys`)
        .expectStatus(500)
        .end((err, res, body) => {
          sinon.assert.calledOnce(_query);
          if (err) return done(err);
          done(); 
        });
    });


  });
});

});
