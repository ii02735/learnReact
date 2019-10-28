import React, { useState } from 'react';
//warning, with Hooks, please uppercase the component object
const HookExample = (props) => {

    //destructuring, because in fact useState is an object composed of two elements : 
    //an attribute that contains the actual state informations, and a METHOD that updates the state
    const [exampleState, setState] = useState({
        attribute1: "hello world !",
        attribute2: "test property"
        //intial: "untouched data" --> see WARNING section
    });

    function handlerTest()
    {

        //WARNING : MAJOR DIFFERENCE FROM CLASS COMPONENT :
        /**
         * setState here REPLACES ALL the old data by the content written in argument
         * II IS NOT A MERGE but a FULL REPLACEMENT ! BE SURE TO INCLUDE ALL DATA (even the UNMODIFIED ones in set state !)
         */
        setState({
            attribute1: "New property !",
            attribute2: "Updated after click..."
            //initial data is absent here !
        })
    }

    function handlerTest2()
    {
        setState2({
            intial: "touched data"
        })
    }

    //TO FIX THIS FULL REPLACEMENT, we can call useState to other data with its proper setState method !
    //In that case, because exampleState2 data is separated from exampleState, it is not replaced
    const [exampleState2, setState2] = useState({
        intial: "untouched data"
    })

    return (
        <div>
        This is a component with Hook Features !
        State elements : <b>{ exampleState.attribute1 }</b>, <b>{ exampleState.attribute2 }</b>, <b> {exampleState2.intial} </b>
        <button onClick={handlerTest}> Test click </button>
        <button onClick={handlerTest2}> Test click </button>
        </div>)
};

export default HookExample;