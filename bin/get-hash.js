#!/usr/bin/env node

const lib = require('../lib/index.js');
const argv = require('minimist')(process.argv.slice(2));

let id = null;
let secret = null;

if (argv.i) id = argv.i;
if (argv.s) secret = argv.s;

if (id && secret) {
  console.log(lib.getHash(id, secret));
  return;
}

if (id === null && secret !== null) {
  console.log('Missing id, use -i flag');
  return;
}
if (id !== null && secret === null) {
  console.log('Missing secret, use -s flag');
  return;
}

if (id === null && secret === null) {
  const results = lib.generate();
  console.log('ID: ', results.id);
  console.log('SECRET: ', results.secret);
  return;
}