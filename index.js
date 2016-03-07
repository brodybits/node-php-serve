#!/usr/bin/env node

// THANKS for GUIDANCE: https://developer.atlassian.com/blog/2015/11/scripting-with-node/
var myprogram = require('commander'),
    phpserver = require('node-php-server');

myprogram
  .arguments('<phpfile>')
  .option('--hostname <hostname>', 'listen host name (may be 0.0.0.0)',
          '127.0.0.1')
  .option('--port <port>', 'port to listen to (default: 8080)', 8080)
  .action(function(phpfile) {
    console.log('Serve php hostname: ' + myprogram.hostname +
                ' port: ' + myprogram.port + ' file: ' + phpfile);
    phpserver.createServer({router: phpfile});
  })
  .parse(process.argv);
