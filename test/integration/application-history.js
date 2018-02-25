"use strict";
/**
 * @module test/application-history
 */


const   sinon   = require("sinon"),
        chai    = require("chai"),
        expect  = chai.expect,
        Q       = require("q"),
        _       = require("lodash");

const dao = require('../../dao');
const sequelizeStub = dao.sequelize;
const ApplicationHistoryMock = dao.v8.ApplicationHistory;

var api = require("./common").api;
var userMock = "standard";

describe("/applicationhistory", () => {


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

describe("Retrieve History Notes", () => {

  describe("GET /application/:id/history/:p/:ps/:ht", () => {

         //get the suite of filtered data
          let queryData = require('./api-mocks/application-history/history-summary.json');

          let getData = (id, p, ps, ht) => {
              //use lodash to filter out the data to mimic the where clause
              let data;
              if(ht){
               data = _.find(queryData, { 'applicationContainerId': id, 'p' : p + 1, 'ps': ps, 'ht': ht });
              }else{
                data = _.find(queryData, { 'applicationContainerId': id, 'p' : p + 1, 'ps': ps, });
              }
              //return a promise of the filtered data
              return data && data.data && data.data.notes ? data.data.notes : null;
          };

            let getCountData = (id, ht) => {
              //use lodash to filter out the data to mimic the where clause
              let data;
              if(ht){
               data = _.find(queryData, { 'applicationContainerId': id, 'ht' : ht });
              }else{
                data = _.find(queryData, { 'applicationContainerId': id });
              }
              //return a promise of the filtered data
              return data && data.data && data.data.total ? data.data.total : null;

          };

          //variable for the findAll method to be stubbed
          let _query;
          let _countQ;
          //before each test we need to replace functions
          beforeEach(() => {
              //stub the find all method
              _query = sandbox.stub(ApplicationHistoryMock, 'findAll', (clause) => {
                  //return a promise of the filtered data
                  var data = getData(clause.where.applicationContainerID, clause.offset, clause.limit, clause.where.applicationHistoryTypeID ? clause.where.applicationHistoryTypeID : undefined);
                  if(data != null)
                    return Q(data);
                  else 
                    return Q(null);

              });
                 //stub the find all method
              _countQ = sandbox.stub(ApplicationHistoryMock, 'count', (clause) => {
                  //return a promise of the filtered data
                  var data = getCountData(clause.where.applicationContainerID, clause.where.applicationHistoryTypeID);
                  if(data != null)
                    return Q(data);
                  else 
                    return Q(null);
              });
          });

          //after each test we need to restore each function for the next iteration
          afterEach(() => {
              _query.restore();
              _countQ.restore();
          });

    it("should send bad request when given an invalid page number", (done) => {

      api(userMock)
        .get(`/application/111111/history/f/20`)
        .expectStatus(400)
        .end((err, res, body) => {
          sinon.assert.callCount(_query, 0);
            sinon.assert.callCount(_countQ,0);
          if (err) return done(err);
          done(); 
        });

    });

       it("should send bad request when given an invalid page size", (done) => {

      api(userMock)
        .get(`/application/111111/history/1/f`)
        .expectStatus(400)
        .end((err, res, body) => {
          sinon.assert.callCount(_query, 0);
            sinon.assert.callCount(_countQ,0);
          if (err) return done(err);
          done(); 
        });

    });

    it("should send bad request when given an valid a non integer based id", (done) => {

      api(userMock)
        .get(`/application/0123456789ABCD0123456789/history/1/20`)
        .expectStatus(400)
        .end((err, res, body) => {
           sinon.assert.callCount(_query, 0);
            sinon.assert.callCount(_countQ,0);
          if (err) return done(err);
          done(); 
        });

    });


    it("should state a success when pass through complete values without a type", (done) => {

      api(userMock)
        .get(`/application/7008394/history/1/5`)
        .expectStatus(200)
        .end((err, res, body) => {
           var expected = { "total": getCountData(7008394, undefined), "notes" : getData(7008394, 0, 5, undefined) };
            sinon.assert.calledOnce(_query);
            sinon.assert.calledOnce(_countQ);
               expect(body).to.deep.equal(expected);
          if (err) return done(err);
          done(); 
        });

    });


    it("should state a success when pass through complete values with a type", (done) => {

      api(userMock)
        .get(`/application/7008394/history/1/5/3`)
        .expectStatus(200)
        .end((err, res, body) => {
            var expected = { "total": getCountData(7008394, 3), "notes" : getData(7008394, 0, 5, 3) };
            sinon.assert.calledOnce(_query);
            sinon.assert.calledOnce(_countQ);
               expect(body).to.deep.equal(expected);
          if (err) return done(err);
          done(); 
        });

    });


  });

});

});
