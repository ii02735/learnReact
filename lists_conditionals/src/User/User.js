import React from "react";

const user = (props) => {

    return (
        <div onClick={props.click} className="User" style={props.style}>
           <h4>{props.name == null ? "Unknown" : props.name}</h4>
           <hr></hr>
           <p>{props.children == null ? "Nothing to say..." : props.children}</p>{/* children (special prop attribute) refers to content between the opening and the closing tags*/}
        </div>
    ) 

};

export default user;