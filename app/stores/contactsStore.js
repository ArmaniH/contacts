var dispatcher = require("../dispatcher");

function ContactStore() {
    var listeners = [];
    var contacts = [{ name: "Steve Steverson", number:"804-804-8044" },
                    { name: "Bishop Wells",number:"804-408-4088" },
                    { name: "Armani Hall", number:"804-868-8653" }];

    function getContacts() {
        return contacts;
    }

    function onChange(listener) {
        listeners.push(listener);
    }

    function addContact(contact) {
        contacts.push(contact)
        triggerListeners();
    }

    function deleteContact(contact) {
        var _index;
        contacts.map(function (c, index) {
            if (c.name === contact.name) {
                _index = index;
            }
        });
        contacts.splice(_index, 1);
        triggerListeners();
    }

    function triggerListeners() {
        listeners.forEach(function (listener) {
            listener(contacts);
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
        getContacts: getContacts,
        onChange: onChange
    }
}

module.exports = ContactStore();
