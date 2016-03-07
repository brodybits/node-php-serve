# node-php-serve

CLI for `node-php-server`

LICENSE: ISC

## Sample usage

```shell
php-serve --hostname localhost --port 8000 ./hellotest.php
```

## Prerequisites

- Node.js
- npm
- PHP installation

## Major limitations

This CLI runs `node-php-server`, which in turn runs runs a single PHP process.
This is a single-process, single-threaded server which will block during the
processing of each incoming request.

## Major TODO(s)

- Test with Windows
- Automatic test suite

## FUTURE

- Support multi-threading, perhaps with node-webworker-threads or JXCore

## THANKS for guidance

- https://developer.atlassian.com/blog/2015/11/scripting-with-node/
- http://stackoverflow.com/questions/10396305/npm-package-bin-script-for-windows
- http://shapeshed.com/writing-cross-platform-node/
- https://leanpub.com/npm/read
