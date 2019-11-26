import React, { Component } from 'react';
import User from './User/User';
/**
 * List of Users delegation (instead of writing it in App's render method)
 */

//conversion to a class based component (in order to use lifecycle methods)
 class Users extends Component {
    
    //first step of lifecycle updating : handle props or state data before updating
    //Can be used in specific cases : handle user input, form controlling etc.
    //Must have an EXISTANT state ! (define a state attribute)
    // static getDerivedStateFromProps(props,state)
    // {   
    //     console.log("Users.js getDerivedStateFromProps");
    //     return state;
    // } ignored, because state is not existant here

    //second step of lifecycle updating
    //must update the component or not ?
    shouldComponentUpdate(nextProps, nextState)
    {
        console.log("Users.js shouldComponentUpdate");
        //return boolean : if the component MUST CONTINUE to update, true, else FALSE.
        //method called when state or props are changed. For example here, it false, the user cannot change any text fields (because it will result to an state update --> double binding)
        return true;    
    }


    //third step of lifecycle updating
    render(){
        return this.props.users.map( (user,i)=>{
            //i (the incremental index) can be a unique index, but what happen if the list is modified (delete, add => i won't be the same anymore for each element)
            //So this is not a good way
            //Ergo, we must set our proper unique IDs !
            return <User key={user.id} changed={(event)=>{this.props.changeCommentHandler(event,user.id)}} name={user.name} delete={this.props.deleteUserHandler.bind(this.props,i)} click={this.props.showCommentHandler.bind(this,user.comment)}>{user.comment}</User>
        })
    
    }

    //fourth step of lifecycle updating, so after render()
    //useful to save previous props or state before update them from the render (like for mouse position for example)
    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        console.log("Users.js getSnapshotBeforeUpdate");
    }

    //last step of lifecycle updating
    //Used for side effects statements, like HTTP calls, or promises...
    componentDidUpdate()
    {
        console.log("Users.js componentDidUpdate");
    }
 }
 export default Users;