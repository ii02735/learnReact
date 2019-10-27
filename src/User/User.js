//exmaple of other component
//in fact, don't forget that the "class" keyword is in fact a function
//So we can write a function, but we can also write it in ES6 format (thanks to Babel)

import React from "react";
            //we can name this argument (that will contain attributes informations) like we want to, but for better understanding, we write "props" instead
const user = (props) => {
    // a component is caracterized by its return : it returns JSX
    //return <h2>Hello I'm a user !!</h2> //for the moment our JSX code is not really dynamic...
    //return <h2>Hello I'm the user number {Math.round(Math.random() * 3)} !</h2> //example of dynamic code
                                        //we can only execute one line JS expression, not special stuffs (like classes, etc.)
    //new version with props

    return (
        <tr>
           <td>{props.name == null ? "Unknown" : props.name}</td>
           <td>{props.children == null ? "Nothing to say..." : props.children}</td>{/* children (special prop attribute) refers to content between the opening and the closing tags*/}
        </tr>
    ) 
};

export default user;