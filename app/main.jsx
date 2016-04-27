//main.jsx
var React = require("react");
var ReactDOM = require("react-dom");
var ContactsList = require("./components/ContactsList.jsx");
var contactsStore = require("./stores/contactsStore");
_contacts = [];
getContactsCallback = function(contacts){
    _contacts = contacts;
    render();
};
contactsStore.onChange(getContactsCallback);

function render(){
    ReactDOM.render(<ContactsList contacts={_contacts} />, document.getElementById("container"));
}
