import React from "react";
import userStyles from './User.module.css';

const user = (props) => {

    /*return (
        <div onClick={props.click} className={userStyles.User}>
           <h4>{props.name == null ? "Unknown" : props.name}</h4>
           <hr></hr>
           <p>{props.children == null ? "Nothing to say..." : props.children}</p>{children (special prop attribute) refers to content between the opening and the closing tags}
           <input type="text" value={props.children} onChange={props.changed} />
           <button onClick={props.delete} className={userStyles.delete}>Delete user</button>
        </div>
    )*/
    
    //Pass as adjacent JSX, without root element (warning : loss of onClick callback + CSS class)

    return [ //warning ! Must assign a KEY for each element in array
        <h4 key="name">{props.name == null ? "Unknown" : props.name}</h4>,
        <hr key="hr"></hr>,
        <p key="children">{props.children == null ? "Nothing to say..." : props.children}</p>/*children (special prop attribute) refers to content between the opening and the closing tags*/,
        <input key="input" type="text" value={props.children} onChange={props.changed} />,
        <button key="button" onClick={props.delete} className={userStyles.delete}>Delete user</button>
    ];

};

export default user;