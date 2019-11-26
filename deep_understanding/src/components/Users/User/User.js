import React, { Component } from "react";
import userStyles from './User.module.css';

/**
 * Because we can't use lifecycle methods
 * We must convert into a class based component
 */

class User extends Component {
    

    render(){    
        return (
            <div onClick={this.props.click} className={userStyles.User}>
            <h4>{this.props.name == null ? "Unknown" : this.props.name}</h4>
            <hr></hr>
            <p>{this.props.children == null ? "Nothing to say..." : this.props.children}</p>{/* children (special prop attribute) refers to content between the opening and the closing tags*/}
            <input type="text" value={this.props.children} onChange={this.props.changed} />
            <button onClick={this.props.delete} className={userStyles.delete}>Delete user</button>
            </div>
        ); 
    }
}

export default User;