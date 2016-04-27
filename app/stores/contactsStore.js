var dispatcher = require("../dispatcher");
var contactService = require("../services/contactService");

function ContactStore() {
    var listeners = [];

    function onChange(listener) {
        getContacts(listener);
        listeners.push(listener);
    }

    function getContacts(cb){
        contactService.getContacts().then(function (res) {
            cb(res);
        });
    }

    function addContact(contact) {
        contactService.addContact(contact).then(function (res) {
            console.log(res);
            triggerListeners();
        });
    }

    function deleteContact(contact) {
        contactService.deleteContact(contact).then(function (res) {
            console.log(res);
            triggerListeners();
        });
    }

    function triggerListeners() {
        getContacts(function (res) {
            listeners.forEach(function (listener) {
                listener(res);
            });
        });
    }

    dispatcher.register(function (payload) {
        var split = payload.type.split(":");
        if (split[0] === "contact") {
            switch (split[1]) {
                case "addContact":
                    addContact(payload.contact);
                    break;
                case "deleteContact":
                    deleteContact(payload.contact);
                    break;
            }
        }
    });

    return {
        onChange: onChange
    }
}

module.exports = ContactStore();
