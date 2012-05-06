var tmu = require('express').createServer();

tmu.get('/', function(req, res){
  res.send('hello world');
});

tmu.listen(process.env.PORT || 4000);
module.exports = tmu;
