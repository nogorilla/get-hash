let id = '';
let secret = '';

const hash = new Buffer(`${id}:${secret}`).toString('base64');

console.log(hash);