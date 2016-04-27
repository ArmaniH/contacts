var async = require('async');
var cassandra = require('cassandra-driver');
var client = new cassandra.Client({contactPoints: ['127.0.0.1'], keyspace: 'contactdb'})

var getALLContacts = 'SELECT * FROM contacts.contactdb';

router.get('/', function(req, res){
  client.execute(getALLContacts,[], function(err, result){
      if (err){
      res.status(404).send({msg: err});
    }else{
      res.render('server', {
        contacts: result.rows
      })
    }
  });
});

// module.exports =
