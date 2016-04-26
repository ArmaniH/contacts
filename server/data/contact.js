var async = require('async');
var cassandra = require('cassandra-driver');
var client = new cassandra.Client({contactPoints: ['127.0.0.1'], keyspace: 'contactdb'})

function (callback) {
    client.execute("INSERT INTO contacts (name, number) VALUES ('', '')", function (err, result) {
        // Run next function in series
        callback(err, null);
    });
},
