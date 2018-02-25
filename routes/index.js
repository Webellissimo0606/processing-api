"use strict";

/** Routing module
  * @module routes */

module.exports = {
  admin: require("./admin"),
  application: require("./application"),
  applicant: require("./applicant"),
  applicationHistory: require("./application-history"),
  applicationStatus: require("./application-status"),
  applicationSubmission: require("./application-submit"),
  assessment: require("./assessment"),
  condition: require("./condition"),
  creditReport: require("./credit-report"),
  deposit: require("./deposit"),
  directDebit: require("./direct-debit"),
  disbursement: require("./disbursement"),
  fee: require("./fee"),
  finalApproval: require("./final-approval"),
  financial: require("./financial"),
  insurance: require("./insurance"),
  jobs: require("./jobs"),
  loanPurpose: require("./loan-purpose"),
  loanXrefHistory: require("./loan-xref-history"),
  loanXrefPoolHistory: require("./loan-xref-pool-history"),
  loan: require("./loan"),
  motorVehicle: require("./motor-vehicle"),
  pool: require("./pool"),
  search: require("./search"),
  security: require("./security"),
  thirdParty: require("./third-party"),
  valuation: require("./valuation")
};
