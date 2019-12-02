import React, { Component } from "react";
import userStyles from './User.module.css';

/**
 * Because we can't use lifecycle methods
 * We must convert into a class based component
 */

class User extends Component {
    
    componentDidMount()
    {
        console.info("User component successfully created");
    }
    
    shouldComponentUpdate(nextProps,nextState)
    {
        if(nextProps.children !== this.props.children || nextProps.length === 1) //don't forget the props's attribute
        {
            /**
             * Same here : because User is in Users (which is in App), a change will provoke Users to update, hence ALL the User components will be updated
             * So we keep only the correct User to be updated, we'll keep the other one untouched by an new useless update
             */
            console.info("%c[User.js] Props changed : updating...","color : orange");
            return true;
        }
        console.info("[User.js] No changes detected : preventing");
        return false;
    }


    componentDidUpdate()
    {
        console.warn("User component updated");
    }

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