const crypto = require('crypto');

const rand = len => crypto.randomBytes(len).toString('base64');

const getHash = (id, secret) => {
  return new Buffer.from(`${id}:${secret}`).toString('base64');
}

const generate = () => {
  return {
    id: rand(16),
    secret: rand(24)
  };
}

module.exports = {
  getHash: getHash,
  generate: generate
};
