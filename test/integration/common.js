/**
 * Integration tests
 * @module test/integration
 */

const hippie = require('hippie')
    server = require('../../server'),
    logger = require('fm-common').logger,
    fs = require('fs');


var tokens = {
    administrator: fs.readFileSync("./test/tokens/administrator"),
    power: fs.readFileSync("./test/tokens/power"),
    standard: fs.readFileSync("./test/tokens/standard"),
    anonymous: fs.readFileSync("./test/tokens/anonymous")
};

// start the server listening now

// we'll turn off tls checking so that our self-signed certificate
// can make it through on these requests
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

function _api(user) {

    var test = hippie(server)
        .json()
        .use((options, next) => {
            options.strictSSL = false;
            next(options);
        })
        .base("https://localhost:3000/");        

    if (user) {         
        test = test.header('Authorization', `Bearer ${tokens[user]}`);
    }

    return test;

}

module.exports = {
    api: _api
};