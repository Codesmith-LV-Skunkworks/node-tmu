var request = require('request'),
    vows = require('vows'),
    assert = require('assert'),
    apiUrl = 'http://localhost:'+(process.env.PORT || 4000),
    cookie = null,
    svr = require('../tmu');

// See http://fabianosoriani.wordpress.com/2011/08/31/testing-a-node-js-express-api-server-with-vows-functional/ for helper functions
var apiTest = {
  general: function(method, url, data, cb){
    request(
      {
        method: method,
        url: apiUrl+(url || ''),
        json: data || {},
        headers: { Cookie: cookie }
      },
      function(req, res){
        cb(res)
      }
    )
  },
  get: function(url, data, cb){ apiTest.general('GET', url, data, cb) },
  post: function(url, data, cb){ apiTest.general('POST', url, data, cb) },
  put: function(url, data, cb){ apiTest.general('PUT', url, data, cb) },
  del: function(url, data, cb){ apiTest.general('DELETE', url, data, cb) }
}

function assertStatus(code) {
  return function(res, b, c) {
    assert.notEqual(res, null, "Response was null.");
    assert.equal(res.statusCode, code, "Expected "+code+", got "+res.statusCode);
  }
}

var suite = vows.describe('Express Routing')

.addBatch({
  'Path should return correct code for GET': {
    topic: function() { apiTest.get('/', {}, this.callback) },
    '/ should return 200': assertStatus(200),
  },
})

;

suite.export(module)
