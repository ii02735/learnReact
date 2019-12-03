import React, { PureComponent } from 'react'; //For each props/states, check if change has occurred, if yes -> update the component, else don't update it (shouldComponentUpdate replacement)
//import React, { Component } from "react";
/**
 * Checking each props before updating is DIFFERENT than updating directly :
 * We assure that changes are relevent to the component, if not we SAVE some resources (don't forget that it is a good optimization)
 */

import User from './User/User';
/**
 * List of Users delegation (instead of writing it in App's render method)
 */

//conversion to a class based component (in order to use lifecycle methods)
 class Users extends PureComponent {
    
    //first step of lifecycle updating AND SECOND step of lifecycle CREATION : handle props or state data before updating
    //Can be used in specific cases : handle user input, form controlling etc.
    //Must have an EXISTANT state ! (define a state attribute)
    // static getDerivedStateFromProps(props,state)
    // {   
    //     console.log("Users.js getDerivedStateFromProps");
    //     return state;
    // } ignored, because state is not existant here

    //second step of lifecycle updating
    //must update the component or not ?
    /**shouldComponentUpdate(nextProps, nextState)
    {
       // console.warn("Users.js shouldComponentUpdate");
        //return boolean : if the component MUST CONTINUE to update, true, else FALSE.
        //method called when state or props are changed. For example here, it false, the user cannot change any text fields (because it will result to an state update --> double binding)
       
        
           Problem here : whatever it is happening in App, Users will be updated (because return true)
           Which is wrong because all the changes are not from Users only, but can also be from Cockpit.
           So it is useless to update Users if there is no changes : in order to prevent App to make an update, we must write a condition
           If the next props are the same as actual, we don't update it. With that condition, we can save some resources, and make better performances.
    

        //As long as props are being used by a component, you must check them if you think they must make an update of the component
        //The Users component muse be updated if : the array has changed, the comment handler function, the delete one, the showing comment function....
      
        if(nextProps.users !== this.props.users 
            || nextProps.changeCommentHandler !== this.props.changeCommentHandler 
            || nextProps.deleteUserHandler !== this.props.deleteUserHandler 
            || nextProps.showCommentHandler !== this.props.showCommentHandler)
        {
            console.info("%c[Users.js] Users props have changed : updating component", "color: orange")
            return true;
        }


        console.info("[Users.js] no changes regarding Users Props : preventing update");
        return false;


    } //will be triggered when children components updating will be performed
    //|
    //|
    //-> checking ALL the PROPS if they have changed can be a LOT verbose --> the shorter way is to extend to PureComponent instead of Component ! */

    //third step of lifecycle updating
    render(){
        return this.props.users.map( (user,i)=>{
            //So this is not a good way
            //i (the incremental index) can be a unique index, but what happen if the list is modified (delete, add => i won't be the same anymore for each element)
            //Ergo, we must set our proper unique IDs !
               
            //Here we are granted to pass ADJACENT JSX (without root element), because a KEY is assigned for each element
            return <User 
                // isAuth={this.props.isAuthenticated } useless : we will directly inject our context to the appropriate component that will use it 
                key={user.id} 
                length={this.props.users.length} 
                changed={(event)=>{this.props.changeCommentHandler(event,user.id)}} 
                name={user.name} 
                delete={this.props.deleteUserHandler.bind(this.props,i)} 
                click={this.props.showCommentHandler.bind(this,user.comment)}>{user.comment}
                </User>
        })
    
    }

    //fourth step of lifecycle updating, so after render()
    //useful to save previous props or state before update them from the render (like for mouse position for example) and use these old value AFTER the update
    /**
     * @param {*} prevProps previous props (so before updating). Because Users contains all the User components written (see in render()) 
     * it will return ALL the props (for EACH User component so)
     * @param {*} prevState previous state (so before updating)
     * These two parameters will be NULL because there is no state there, and no props are updated by this component, but from its children
     */
    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        //console.log("Users.js getSnapshotBeforeUpdate");
        return { snapshot: "some older value"};
    }

    //last step of lifecycle updating
    //Used for side effects statements, like HTTP calls, or promises...
    //Third param, snapshot is INJECTED by getSnapshotBeforeUpdate() return value
    //componentDidUpdate is the most often used, because that hook is run after the component update
    componentDidUpdate(prevProps,prevState,snapshot)
    {
        console.log("PureComponent !")
        console.warn("Users.js componentDidUpdate");
        //console.log({ snapshotValue: snapshot });   
    }

    //What about hooks when the component is removed from the DOM (clean up) ?

    //Will be triggered when component is removed from DOM (when we toggle again)
    componentWillUnmount()
    {
        console.warn("Users component is removed");
    }

 }
 export default Users;