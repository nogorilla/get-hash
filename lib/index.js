const getHash = (id, secret) => {
  return new Buffer(`${id}:${secret}`).toString('base64');
}

exports.getHash = getHash