try {
  var server = require('../src-cov/tmu');
} catch (e) {
  var server = require('../src/tmu');
}

var assert = require('assert')
;

module.exports = {
  'test / returns 200': function(){
    assert.response(server, {
      url: '/'
    },
    {
      status: 200
    },
    "Expected status not found"
    );
  }
}
