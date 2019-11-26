import React from 'react';
import User from './User/User';
/**
 * List of Users delegation (instead of writing it in App's render method)
 */


 const users = (props) => (
    props.users.map( (user,i)=>{
        //i (the incremental index) can be a unique index, but what happen if the list is modified (delete, add => i won't be the same anymore for each element)
        //So this is not a good way
        //Ergo, we must set our proper unique IDs !
        return <User key={user.id} changed={(event)=>{props.changeCommentHandler(event,user.id)}} name={user.name} delete={props.deleteUserHandler.bind(props,i)} click={props.showCommentHandler.bind(this,user.comment)}>{user.comment}</User>
    })
 );

 export default users;