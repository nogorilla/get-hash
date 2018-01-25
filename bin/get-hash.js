#!/usr/bin/env node

const lib = require('../lib/index.js');
const argv = require('minimist')(process.argv.slice(2));

let id = null;
let secret = null;

if (argv.i !== 'undefined') id = argv.i;
if (argv.s !== 'undefined') secret = argv.s;

if (id === null) {
  console.log('Missing id, use -i flag');
} else if (secret === null) {
  console.log('Missing secret, use -s flag');
} else {
  console.log(lib.getHash(id, secret));
}
