var React = require("react");
var actions = require("../actions/ContactActions");

module.exports = React.createClass({
    getInitialState:function(){
      return {
          name:"",
          number:""
      }
    },
    addContact:function(e){
        e.preventDefault();
        actions.addContact(this.state);
    },
    handleInputChange:function(e){
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      state[name] = e.target.value;
      this.setState(state);
    },
    render:function(){
        return(
            <form className="form" onSubmit={this.addContact}>
                <div className="form-group">
                    <label className="control-label" htmlFor="name">Contact Name:</label>
                    <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="Contact Name" />
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="number">Number:</label>
                    <input type="text" className="form-control" id="number" name="number" value={this.state.number} onChange={this.handleInputChange} placeholder="number" />
                </div>
                <div className="form-group">
                    <button className="btn" type="submit">Add Contact</button>
                </div>
            </form>
        )
    }
})
