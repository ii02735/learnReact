import React from "react";

const user = (props) => {

    return (
        <div onClick={props.click} className="User">
           <h4>{props.name == null ? "Unknown" : props.name}</h4>
           <hr></hr>
           <p>{props.children == null ? "Nothing to say..." : props.children}</p>{/* children (special prop attribute) refers to content between the opening and the closing tags*/}
           <button onClick={props.delete} className="delete">Delete user</button>
        </div>
    ) 

};

export default user;