var express = require("express");
var router = express.Router();
var path = require("path");
var http = require("http");
var bodyParser = require("body-parser");
var async = require('async');
var cassandra = require('cassandra-driver');
var client = new cassandra.Client({contactPoints: ['127.0.0.1:9042'], keyspace: 'contactdb'});
  client.connect(function(err, result){
    console.log('server: cassandra connected');
  });

var contactController = require("./controllers/contactController");

  // var getALLContacts = 'SELECT * FROM contacts.contactdb';
  //
  // router.get('/', function(req, res){
  //   client.execute(getALLContacts,[], function(err, result){
  //       if (err){
  //       res.status(404).send({msg: err});
  //     }else{
  //       res.render('server', {
  //         contacts: result.rows
  //       })
  //     }
  //   });
  // });

  // module.exports = router;
// var helenus = require('helenus');
//
// var pool = new helenus.ConnectionPool({
//   hosts         :['127.0.0.1:9042', '127.0.0.2:9042', '127.0.0.3:9042'],
//   keyspace      :'contactdb',
//   cqlVersion    :'*',
//   hostPoolSize  :3
// });
//
//   pool.connect(function(err){
//     if(err){
//     }
//   http.createServer(app).listen(app.get('port'), function(){
//     console.log("Express server listening on port", 7777);
//   });
// });
//

// client.execute('contactdb', function(err, result) {
//   if (err) throw err;
//   console.log(result.rows[0]);
// });
// //controllers
// var contactController = require("./controllers/contactController");

//Express request pipeline
var app = express();
app.use(express.static(path.join(__dirname, "../app/dist")));
app.use(bodyParser.json())
app.use("/api", contactController);

// app.configure(function(){
  // app.set('port', process.env.PORT || 7777);
  // app.set('cassandra', pool);
  // app.set('views', __dirname + '/views');
  // app.set('view engine', 'jade');
  // app.use(express.favicon());
  // app.use(express.logger('dev'));
  // app.use(express.bodyParser());
  // app.use(express.methodOverride());
  // app.use(app.router);
  // app.use(express.static(path.join(__dirname,"../app/dist")));

  // app.use(express.static(path.join(__dirname, 'public')));
// });


var app = express();
app.use(express.static(path.join(__dirname,"../app/dist")));
app.listen(7777,function(){
    console.log("Started listening on port", 7777);
})
