var React = require("react");
var actions = require("../actions/ContactActions");

module.exports = React.createClass({
  deleteContact: function(e){
      e.preventDefault();
      actions.deleteContact(this.props.info);
  },
    render:function(){
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    {this.props.info.name}
                    <span className="pull-right text-uppercase delete-button" onClick={this.deleteContact}>&times;</span>
                    </div>
                    <div className="panel-body">{this.props.info.number}</div>
                </div>
            )
        }
    })
