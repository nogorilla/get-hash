#get-hash
Used to generate a hash for a given id and secret

## Installation
```
npm install get-hash
```

### Commandline
To install for use on commandline, add the `-g` flag
```
npm install -g get-hash
```

## Usage
```javascript
const lib = require('get-hash');
console.log(lib.getHash(id, secret));
```

or on commandline
```bash
get-hash -i id -s secret
```


