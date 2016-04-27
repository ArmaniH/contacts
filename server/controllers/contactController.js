var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var async = require('async');
var _ = require("underscore");
var cassandra = require('cassandra-driver');
var client = new cassandra.Client({contactPoints: ['127.0.0.1'], keyspace: 'contactdb'})

var router = require("express").Router();
router.route("/contacts/:id?").get(getContacts).post(addContact).delete(deleteContact);

function getContacts(req, res) {
    Contact.find(function (err, contacts) {
        if (err)
            res.send(err);
        else
            res.json(contacts);
    });
}

function addContact(req, res) {
    var contact = new Contact(_.extend({}, req.body));
    contact.save(function (err) {
        if (err)
            res.send(err);
        else
            res.json(contact);
    });
}

function deleteContact(req, res) {
    var id = req.params.id;
    Contact.remove({ _id: id }, function (err, removed) {
        if (err)
            res.send(err)
        else
            res.json(removed);
    });
}

module.exports = router;
