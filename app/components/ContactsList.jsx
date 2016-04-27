var React = require("react");
var ContactInfo = require("./ContactInfo.jsx")
var AddContact = require("./AddContact.jsx");

module.exports = React.createClass({
   render:function(){
       return(
           <div className="row">
                <div className="col-md-6">
                  <AddContact />
                </div>
                <div className="col-md-6">
                    {
                        this.props.contacts.map(function(s,index){
                            return(
                                <ContactInfo info={s} key={"contact"+server} />
                            )
                        })
                    }
                </div>
           </div>
       )
   }
});
