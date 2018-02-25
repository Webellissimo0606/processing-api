'use strict';

var server = require("./server"),
    logger = require("fm-common").logger;

// start the server listening now
server.listen(3000, () => {
  logger.info(`${server.name} listening at ${server.url}`);
});
