//main.jsx
var React = require("react");
var ReactDOM = require("react-dom");
var ContactsList = require("./components/ContactsList.jsx");
var contactsStore = require("./stores/contactsStore");
var _contacts = contactsStore.getContacts();
contactsStore.onChange(function(contacts){
    _contacts = contacts;
    render();
});

function render(){
    ReactDOM.render(<ContactsList contacts={_contacts} />, document.getElementById("container"));    
}

render();
