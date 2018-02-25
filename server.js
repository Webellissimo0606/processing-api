
'use strict';

const restify       = require('restify'),
      restifyErrors = require('restify-errors'),
      config        = require('config'),
      fs            = require('fs'),
      jwt           = require('restify-jwt');

const routes        = require('./routes'),
      common        = require('fm-common'),
      logger        = common.logger,
      UserAdapter   = common.user.UserAdapter,
      mw            = require("./auth"),
      packageJson   = require('./package.json');

// read out all of the secrets required
const serverCertificate   = fs.readFileSync('./secrets/server.cer'),
      serverKey           = fs.readFileSync('./secrets/server.key'),
      signingCertificate  = fs.readFileSync('./secrets/signing.cer');

// create the api server
let server = restify.createServer({

  name:         packageJson.name,
  version:      packageJson.version,
  log:          logger,

  certificate:  serverCertificate,
  key:          serverKey

});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.authorizationParser());

server.use(restify.CORS({
  origins: ['*'],
  credentials: true,
  headers: ['accept', 'accept-version', 'content-type', 'api-version', 'origin', 'x-requested-with', 'authorization']
}));

server.use(restify.dateParser());
server.use(restify.queryParser());
server.use(restify.jsonp());
server.use(restify.gzipResponse());
server.use(restify.bodyParser());

server.use(restify.requestExpiry({
  header: 'x-request-expiry-time'
}));

server.use(restify.throttle({
  burst:    100,
  rate:     50,
  ip:       true,

  overrides: {
    '172.17.0.1': {
      rate:       0,
      burst:      0
    }
  }
}));

server.use(restify.conditionalRequest());

server.on('MethodNotAllowed', (req, res) => {

  if (req.method.toLowerCase() === 'options') {
    let allowHeaders = ['Accept', 'Accept-Version', 'Content-Type', 'Api-Version', 'Authorization'];

    if (res.methods.indexOf('OPTIONS') === -1) {
      res.methods.push('OPTIONS');
    }

    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', allowHeaders.join(', '));
    res.header('Access-Control-Allow-Methods', res.methods.join(', '));
    res.header('Access-Control-Allow-Origin', req.headers.origin);

    return res.send(204);
  }

  return res.send(new restifyErrors.MethodNotAllowedError());

});

server.on('after', restify.auditLogger({ log: logger }));
server.on('uncaughtException', (req, res, route, error) => {
  console.log("error has occured" + error);
  res.send(error);
  restify.auditLogger({ log: logger })(req, res, route, error);
});

/* Versioning route */
server.get('/ver', (req, res, next) => {

  let pkg = require("./package.json");

  res.send({
    name: pkg.name,
    version: pkg.version,
    description: pkg.description
  });

  return next();

});


/* Application *****************************************************************************/
server.get("/application/:id",  mw.auth, mw.assertPerm("read:entity"), routes.application.retrieve);
server.get("/application/:id/search/:tid",  mw.auth, mw.assertPerm("read:entity"), routes.application.searchbykey);
server.post("/application/submit",  mw.auth, mw.assertPerm("read:entity"), routes.applicationSubmission.submit);
    /* applicant related routes for the application */
server.get("/application/:id/applicants",  mw.auth, mw.assertPerm("read:entity"), routes.applicant.list);
server.get("/application/:id/relationshipkeys",  mw.auth, mw.assertPerm("read:entity"), routes.application.relationshipKeys);
server.post("/application/:id/applicant",  mw.auth, mw.assertPerm("write:entity"), routes.applicant.create);
  /* application status routes for the application */
server.get("/application/:id/status",  mw.auth, mw.assertPerm("read:entity"), routes.applicationStatus.summary);
server.get("/application/:id/statusgrouped",  mw.auth, mw.assertPerm("read:entity"), routes.applicationStatus.grouped);
server.post("/application/:id/status/:tid/:ctid",  mw.auth, mw.assertPerm("write:entity"), routes.applicationStatus.create);
server.post("/application/:id/statusdate/:tid/:when",  mw.auth, mw.assertPerm("write:entity"), routes.applicationStatus.createwithdate);
server.del("/application/:id/status/:tid",  mw.auth, mw.assertPerm("delete:entity"), routes.applicationStatus.clear);
server.put("/application/:id/crash",  mw.auth, mw.assertPerm("write:entity"), routes.applicationStatus.crash);
server.del("/application/:id/reset",  mw.auth, mw.assertPerm("delete:entity"), routes.applicationStatus.reset);
    /* condition related routes for the application */
server.get("/application/:id/conditions",  mw.auth, mw.assertPerm("read:entity"), routes.condition.list);
server.post("/application/:id/condition",  mw.auth, mw.assertPerm("write:entity"), routes.condition.create);

/* credit report related routes for the application */
server.get("/application/:id/creditreportsrequired",  mw.auth, mw.assertPerm("read:entity"), routes.creditReport.listRequired);

/* direct debit related routes for the application */
server.get("/application/:id/directdebits",  mw.auth, mw.assertPerm("read:entity"), routes.directDebit.list);
server.post("/application/:id/directdebit",  mw.auth, mw.assertPerm("write:entity"), routes.directDebit.create);

/* disbursement related routes for the application */
server.put("/application/:id/autodisburse",  mw.auth, mw.assertPerm("write:entity"), routes.disbursement.auto);

    /* fee related routes for the application */
server.get("/application/:id/fees",  mw.auth, mw.assertPerm("read:entity"), routes.fee.list);
server.post("/application/:id/fee",  mw.auth, mw.assertPerm("write:entity"), routes.fee.create);

    /* final approval related routes for the loan */
server.get("/application/:id/finalapprovals",  mw.auth, mw.assertPerm("read:entity"), routes.finalApproval.list);
server.get("/application/:id/finalapproval",  mw.auth, mw.assertPerm("write:entity"), routes.finalApproval.latest);
  /* financials related routes for the loan */
server.get("/application/:id/households",  mw.auth, mw.assertPerm("read:entity"), routes.financial.households);

    /* history related routes for the application */
server.get("/application/:id/history/:p/:ps/",  mw.auth, mw.assertPerm("read:entity"), routes.applicationHistory.list);
 server.get("/application/:id/history/:p/:ps/:ht",  mw.auth, mw.assertPerm("read:entity"), routes.applicationHistory.list);
server.post("/application/:id/history",  mw.auth, mw.assertPerm("write:entity"), routes.applicationHistory.create);
  /* identity related routes for the application */
server.get("/application/:id/identity",  mw.auth, mw.assertPerm("read:entity"), routes.application.identity.list);
 /* loan related routes for the application */
server.get("/application/:id/loans",  mw.auth, mw.assertPerm("read:entity"), routes.loan.list);
server.get("/application/:id/loanamounts",  mw.auth, mw.assertPerm("read:entity"), routes.loan.listamounts);
server.post("/application/:id/loan",  mw.auth, mw.assertPerm("write:entity"), routes.loan.create);
  /* loan xref history related routes for the application */
server.get("/application/:id/loanxrefhistories",  mw.auth, mw.assertPerm("read:entity"), routes.loanXrefHistory.list);
  /* loan xref pool history related routes for the application */
server.get("/application/:id/loanxrefpoolhistory",  mw.auth, mw.assertPerm("read:entity"), routes.loanXrefPoolHistory.list);

  /* party role related routes for the application */
server.post("/application/:id/partyrole/:prId",  mw.auth, mw.assertPerm("write:entity"), routes.application.partyrole.create);
server.del("/application/:id/partyrole/:prId",  mw.auth, mw.assertPerm("write:entity"), routes.application.partyrole.delete);
server.put("/application/:id/partyrole/:prId",  mw.auth, mw.assertPerm("write:entity"), routes.application.partyrole.update);
  /* pooling related routes for the application */
server.post("/application/:id/autopool",  mw.auth, mw.assertPerm("write:entity"), routes.pool.auto);
  /* search related routes for the application */
server.get("/application/search/:q/:p/:ps",  mw.auth, mw.assertPerm("read:entity"), routes.search.application);
  /* security related routes for the application */
server.get("/application/:id/securities",  mw.auth, mw.assertPerm("read:entity"), routes.security.list);
server.post("/application/:id/loan",  mw.auth, mw.assertPerm("write:entity"), routes.loan.create);


/* Application Security *****************************************************************************/
server.get("/applicationsecurity/:id/insurance",  mw.auth, mw.assertPerm("read:entity"), routes.insurance.list);
server.post("/applicationsecurity/:id/insurance",  mw.auth, mw.assertPerm("write:entity"), routes.insurance.create);
  /* valuation related routes for the application */
server.get("/applicationsecurity/:id/valuations",  mw.auth, mw.assertPerm("read:entity"), routes.valuation.list);


/* Assessment *******************************************************************************/
server.put("/assessment/:id/triggerconditions/:tid",  mw.auth, mw.assertPerm("read:entity"), routes.assessment.triggerconditions);
server.put("/assessment/:id/docusignconditions",  mw.auth, mw.assertPerm("read:entity"), routes.assessment.docusignconditions);
server.get("/assessment/:id/workbook",  mw.auth, mw.assertPerm("read:entity"), routes.assessment.workbook);
server.get("/assessment/:id",  mw.auth, mw.assertPerm("read:entity"), routes.assessment.retrieve);
server.get("/assessment/:id/detailed",  mw.auth, mw.assertPerm("read:entity"), routes.assessment.detailed);
server.get("/assessment/:id/check",  mw.auth, mw.assertPerm("read:entity"), routes.assessment.check);
server.post("/assessment/:id",  mw.auth, mw.assertPerm("write:entity"), routes.assessment.calculate);




/* Applicant *******************************************************************************/
server.put("/applicant/:id",  mw.auth, mw.assertPerm("write:entity"), routes.applicant.update);
server.del("/applicant/:id",  mw.auth, mw.assertPerm("delete:entity"), routes.applicant.delete);
  /* relationship related routes for the applicant */
server.get("/applicant/:id/relationships",  mw.auth, mw.assertPerm("read:entity"), routes.applicant.relationships.list);
server.put("/applicant/:id/relationships",  mw.auth, mw.assertPerm("write:entity"), routes.applicant.relationships.save);
server.get("/applicant/:fid/relationshipTypes/:tid",  mw.auth, mw.assertPerm("read:entity"), routes.applicant.relationships.types);
  /* anclliary related routes for the applicant */
server.put("/applicant/:id/ancillary",  mw.auth, mw.assertPerm("write:entity"), routes.applicant.ancillarysave);
  /* credit report related routes for the applicant */
server.get("/applicant/:id/creditreport",  mw.auth, mw.assertPerm("read:entity"), routes.creditReport.summary);
server.post("/applicant/:id/creditreportapply",  mw.auth, mw.assertPerm("write:entity"), routes.creditReport.apply);
server.get("/applicant/:id/creditreportcompany",  mw.auth, mw.assertPerm("read:entity"), routes.creditReport.companySummary);
server.post("/applicant/:id/creditreportenqueue",  mw.auth, mw.assertPerm("read:entity"), routes.creditReport.enqueue);
server.get("/applicant/:id/creditreportlatest",  mw.auth, mw.assertPerm("read:entity"), routes.creditReport.latest);
server.get("/applicant/:id/creditreportrequired",  mw.auth, mw.assertPerm("read:entity"), routes.creditReport.required);
server.get("/applicant/:id/creditreporttype",  mw.auth, mw.assertPerm("read:entity"), routes.creditReport.reportType);
  /* employment related routes for the applicant */
server.get("/applicant/:id/employments",  mw.auth, mw.assertPerm("read:entity"), routes.applicant.employment.list);
server.post("/applicant/:id/employment",  mw.auth, mw.assertPerm("write:entity"), routes.applicant.employment.create);

    /* income related routes for the applicant */
server.get("/applicant/:id/incomes",  mw.auth, mw.assertPerm("read:entity"), routes.applicant.income.list);
server.post("/applicant/:id/income",  mw.auth, mw.assertPerm("write:entity"), routes.applicant.income.create);

/* Conditions *******************************************************************************/
server.get("/condition/:id",  mw.auth, mw.assertPerm("read:entity"), routes.condition.retrieve);
server.get("/condition/:id/stagemet/:astid",  mw.auth, mw.assertPerm("read:entity"), routes.condition.stagemet);
server.get("/condition/:id/stagemetflag/:astid",  mw.auth, mw.assertPerm("read:entity"), routes.condition.stagemetflag);
server.post("/condition/:id/status/:astid",  mw.auth, mw.assertPerm("write:entity"), routes.condition.processfromstatus);
server.post("/condition/:id/process/:acid",  mw.auth, mw.assertPerm("write:entity"), routes.condition.processfromcondition);

/* Conditions *******************************************************************************/
server.get("/creditreport/:id/enquiry",  mw.auth, mw.assertPerm("read:entity"), routes.creditReport.enquiry);
server.put("/creditreport/:id/filename",  mw.auth, mw.assertPerm("write:entity"), routes.creditReport.updatePDFFileName);


/* Deposit *****************************************************************************/
server.get("/deposit/:id",  mw.auth, mw.assertPerm("read:entity"), routes.deposit.retrieve);
server.put("/deposit/:id",  mw.auth, mw.assertPerm("write:entity"), routes.deposit.update);
server.del("/deposit/:id",  mw.auth, mw.assertPerm("delete:entity"), routes.deposit.delete);

/* Deposit *****************************************************************************/
server.put("/directdebit/:id",  mw.auth, mw.assertPerm("write:entity"), routes.directDebit.update);
server.del("/directdebit/:id",  mw.auth, mw.assertPerm("delete:entity"), routes.directDebit.delete);

/* Employment */
server.del("/employment/:id",  mw.auth, mw.assertPerm("delete:entity"), routes.applicant.employment.delete);
server.put("/employment/:id",  mw.auth, mw.assertPerm("write:entity"), routes.applicant.employment.update);

/* Fees *****************************************************************************/
server.get("/fee/:id",  mw.auth, mw.assertPerm("read:entity"), routes.fee.retrieve);
server.put("/fee/:id",  mw.auth, mw.assertPerm("write:entity"), routes.fee.update);
server.del("/fee/:id",  mw.auth, mw.assertPerm("delete:entity"), routes.fee.delete);

/* Final Approval *****************************************************************************/
server.get("/finalapproval/:id",  mw.auth, mw.assertPerm("read:entity"), routes.finalApproval.retrieve);
server.put("/finalapproval/:id",  mw.auth, mw.assertPerm("write:entity"), routes.finalApproval.save);
server.put("/finalapproval/:id/reset",  mw.auth, mw.assertPerm("write:entity"), routes.finalApproval.reset);
server.get("/finalapproval/:id/next",  mw.auth, mw.assertPerm("read:entity"), routes.finalApproval.next);

/* Loan Purpose *****************************************************************************/
server.get("/loanpurpose/:id",  mw.auth, mw.assertPerm("read:entity"), routes.loanPurpose.retrieve);
server.put("/loanpurpose/:id",  mw.auth, mw.assertPerm("write:entity"), routes.loanPurpose.update);
server.del("/loanpurpose/:id",  mw.auth, mw.assertPerm("delete:entity"), routes.loanPurpose.delete);


/* Financials *****************************************************************************/
  /* Living Expenses */
server.get("/financial/:id/living",  mw.auth, mw.assertPerm("read:entity"), routes.financial.living.list);
server.post("/financial/:id/living",  mw.auth, mw.assertPerm("write:entity"), routes.financial.living.create);
server.put("/living/:id",  mw.auth, mw.assertPerm("write:entity"), routes.financial.living.update);
server.del("/living/:id",  mw.auth, mw.assertPerm("delete:entity"), routes.financial.living.delete);
  /* Asssets */
server.get("/financial/:id/asset",  mw.auth, mw.assertPerm("read:entity"), routes.financial.asset.list);
server.post("/financial/:id/asset",  mw.auth, mw.assertPerm("write:entity"), routes.financial.asset.create);
server.put("/asset/:id",  mw.auth, mw.assertPerm("write:entity"), routes.financial.asset.update);
server.del("/asset/:id",  mw.auth, mw.assertPerm("delete:entity"), routes.financial.asset.delete);
  /* Liabilities */
server.get("/financial/:id/liability",  mw.auth, mw.assertPerm("read:entity"), routes.financial.liability.list);
server.post("/financial/:id/liability",  mw.auth, mw.assertPerm("write:entity"), routes.financial.liability.create);
server.put("/liability/:id",  mw.auth, mw.assertPerm("write:entity"), routes.financial.liability.update);
server.del("/liability/:id",  mw.auth, mw.assertPerm("delete:entity"), routes.financial.liability.delete);

/* Income */
server.del("/income/:id",  mw.auth, mw.assertPerm("delete:entity"), routes.applicant.income.delete);
server.put("/income/:id",  mw.auth, mw.assertPerm("write:entity"), routes.applicant.income.update);

/* Insurance *****************************************************************************/
server.put("/insurance/:id",  mw.auth, mw.assertPerm("write:entity"), routes.insurance.update);
server.del("/insurance/:id",  mw.auth, mw.assertPerm("delete:entity"), routes.insurance.delete);

/* Jobs  *****************************************************************************/
server.get("/jobs/:id/:astid",  mw.auth, mw.assertPerm("read:entity"), routes.jobs.listbyapplicationandstatus);
server.get("/jobs/:id/",  mw.auth, mw.assertPerm("read:entity"), routes.jobs.listbyapplication);
server.get("/jobs/:id/:astid/rollback",  mw.auth, mw.assertPerm("read:entity"), routes.jobs.rollback);

/* Loan *****************************************************************************/
server.put("/loan/:id",  mw.auth, mw.assertPerm("write:entity"), routes.loan.update);
server.get("/loan/:id/balloons",  mw.auth, mw.assertPerm("read:entity"), routes.loan.balloons);
server.get("/loan/:id/products",  mw.auth, mw.assertPerm("read:entity"), routes.loan.products);
server.get("/loan/:id/repayments",  mw.auth, mw.assertPerm("read:entity"), routes.loan.repayments);
server.get("/loan/:id/termrates",  mw.auth, mw.assertPerm("read:entity"), routes.loan.termrates);
    /* deposit related routes for the loan */
server.get("/loan/:id/deposits",  mw.auth, mw.assertPerm("read:entity"), routes.deposit.list);
server.post("/loan/:id/deposit",  mw.auth, mw.assertPerm("write:entity"), routes.deposit.create);
  /* loan purpose related routes for the loan */
server.get("/loan/:id/loanpurposes",  mw.auth, mw.assertPerm("read:entity"), routes.loanPurpose.list);
server.post("/loan/:id/loanpurpose",  mw.auth, mw.assertPerm("write:entity"), routes.loanPurpose.create);
  /* loan xref history related routes for the loan */
server.get("/loan/:id/loanxrefhistory",  mw.auth, mw.assertPerm("read:entity"), routes.loanXrefHistory.byloan);
  /* loan xref history related routes for the loan */
server.get("/loan/:id/loanxrefpoolhistories",  mw.auth, mw.assertPerm("read:entity"), routes.loanXrefPoolHistory.listbyloan);
server.get("/loan/:id/loanxrefpoolhistory",  mw.auth, mw.assertPerm("read:entity"), routes.loanXrefPoolHistory.byloan);

/* Loan xref history *****************************************************************************/
server.get("/loanxrefhistory/:id",  mw.auth, mw.assertPerm("read:entity"), routes.loanXrefHistory.retrieve);
server.post("/loanxrefhistory/:id",  mw.auth, mw.assertPerm("write:entity"), routes.loanXrefHistory.save);

/* Loan xref pool history *****************************************************************************/
server.get("/loanxrefpoolhistory/:id",  mw.auth, mw.assertPerm("read:entity"), routes.loanXrefPoolHistory.retrieve);
server.post("/loanxrefpoolhistory/:id",  mw.auth, mw.assertPerm("write:entity"), routes.loanXrefPoolHistory.save);

/* Motor Vehicle *****************************************************************************/
server.post("/motorvehicle/:acid/dealer/:asid/:invid",  mw.auth, mw.assertPerm("write:entity"), routes.motorVehicle.dealerinvoicesave);

/* Security *****************************************************************************/
server.get("/security/:id",  mw.auth, mw.assertPerm("read:entity"), routes.security.retrieve);
server.get("/security/:pcid/accessorycats",  mw.auth, mw.assertPerm("read:entity"), routes.security.accessorycats);
server.get("/security/:pcid/accessories/:actid",  mw.auth, mw.assertPerm("read:entity"), routes.security.accessories);
server.del("/security/:id",  mw.auth, mw.assertPerm("delete:entity"), routes.security.delete);

/* Valuation *****************************************************************************/
server.get("/valuation/:id",  mw.auth, mw.assertPerm("read:entity"), routes.valuation.retrieve);
server.del("/valuation/:id",  mw.auth, mw.assertPerm("delete:entity"), routes.valuation.delete);

/* Third party *****************************************************************************/
server.get("/thirdparty/track/:oprid",  mw.auth, mw.assertPerm("read:entity"), routes.thirdParty.track);

/* Xref *****************************************************************************/
  /* loan xref history related routes for the xref */
server.get("/xref/:id/loanxrefhistory",  mw.auth, mw.assertPerm("read:entity"), routes.loanXrefHistory.byxref);
  /* loan xref history related routes for the loan */
server.get("/xref/:id/loanxrefpoolhistories",  mw.auth, mw.assertPerm("read:entity"), routes.loanXrefPoolHistory.listbyxref);
server.get("/xref/:id/loanxrefpoolhistory",  mw.auth, mw.assertPerm("read:entity"), routes.loanXrefPoolHistory.byxref);

/* WEBHOOKS  - TODO*/
  /* Assessment */
server.put("/assessment/:id/approval",  mw.auth, mw.assertPerm("write:entity"), routes.assessment.approval);
server.put("/assessment/:id/declined",  mw.auth, mw.assertPerm("write:entity"), routes.assessment.declined);

  /* Conditions */
server.put("/condition/:id/configure",  mw.auth, mw.assertPerm("write:entity"), routes.condition.configure);
server.put("/condition/:id",  mw.auth, mw.assertPerm("write:entity"), routes.condition.update);
//server.post("/applicant/:id/employment",  mw.auth, mw.assertPerm("write:entity"), routes.applicant.employmentcreate);
//server.put("/applicant/:id/employment/:eid",  mw.auth, mw.assertPerm("write:entity"), routes.applicant.employmentupdate);
/* Application Status *****************************************************************************/
// server.get("/applicationstatus/:id/summary",  mw.auth, mw.assertPerm("read:entity"), routes.applicationstatus.summary);

module.exports = server;
