import React, { useState } from 'react';
//warning, with Hooks, please uppercase the component object
const HookExample = (props) => {

    //destructuring, because in fact useState is an object composed of two elements : 
    //an attribute that contains the actual state informations, and a METHOD that updates the state
    const [exampleState, setState] = useState({
        attribute1: "hello world !",
        attribute2: "test property"
    });

    function handlerTest()
    {
        setState({
            attribute1: "New property !",
            attribute2: "Updated after click..."
        })
    }

    return (
        <div>
        This is a component with Hook Features !
        State elements : <b>{ exampleState.attribute1 }</b>, <b>{ exampleState.attribute2 }</b>
        <button onClick={handlerTest}> Test click </button>
        </div>)
};

export default HookExample;