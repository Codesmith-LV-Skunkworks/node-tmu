var express = require('express')
,   MongoStore = require('connect-mongodb')
,   Db = require('mongodb').Db
,   Server = require('mongodb').Server
,   server_config = new Server('localhost', 27017, {auto_reconnect: true, native_parser: true})
,   db = new Db('test', server_config, {})
,   mongo_store = new MongoStore({db: db, reapInterval: 3000})
;

var app = express.createServer(
);
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.cookieParser('iamsecret'));
app.use(express.session({cookie: {maxAge: 6000}, store:mongo_store, secret:'iamsecret'}));
//app.use(app.router);
//app.use(express.static());
//app.use(express.errorHandler());

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(process.env.PORT || 4000);
module.exports = app;
