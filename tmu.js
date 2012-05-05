var app = require('express').createServer();

app.get('/', function(req, res){
  console.log(req.headers['user-agent']);
  res.send('hello world');
});

app.listen(4000);
// look ma, i made a change!
