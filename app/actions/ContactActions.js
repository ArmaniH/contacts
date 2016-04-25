var dispatcher = require("../dispatcher");

module.exports = {
    addContact:function(contact){
        dispatcher.dispatch({
           contact:contact,
           type:"contact:addContact"
        });
    },
    deleteContact:function(contact){
        dispatcher.dispatch({
           contact:contact,
           type:"contact:deleteContact"
        });
    }
}
