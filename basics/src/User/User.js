//exmaple of other component
//in fact, don't forget that the "class" keyword is in fact a function
//So we can write a function, but we can also write it in ES6 format (thanks to Babel)

import React from "react";
 //we can name this argument (that will contain attributes informations) like we want to, but for better understanding, we write "props" instead

 //Because this component doesn't store any data inside, it is called a STATELESS component (+ no internal logic)

const user = (props) => {
    // a component is caracterized by its return : it returns JSX
    //return <h2>Hello I'm a user !!</h2> //for the moment our JSX code is not really dynamic...
    //return <h2>Hello I'm the user number {Math.round(Math.random() * 3)} !</h2> //example of dynamic code
                                        //we can only execute one line JS expression, not special stuffs (like classes, etc.)
    //new version with props

    return (
        //we'll work because we passed a method in reference with the click prop
        //It can be a good practice if we want to change the state of this component somewhere else, so it reduce writing some logic in this component !
        //The state will be changed it the parent component (where this component is used)
        <div onClick={props.click} className="User" style={props.style}>
           <h4>{props.name == null ? "Unknown" : props.name}</h4>
           <hr></hr>
           <p>{props.children == null ? "Nothing to say..." : props.children}</p>{/* children (special prop attribute) refers to content between the opening and the closing tags*/}
           <span><input type="text" onChange={props.changeComment} value={props.children}/></span>{/* we can do double-binding : show the current value in the input before it changes */}
        </div>
    ) 

    //we made a funtionnal method instead of a class, in order to prevent to use STATE property from its setter (setState)
    //Indeed, if we use that setter in multiple components, it can be quickly unpredictable and difficult to manage our current component
    //So, be careful when modifying STATE property

};

export default user;