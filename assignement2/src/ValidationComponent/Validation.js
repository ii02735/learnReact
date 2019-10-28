import React from 'react'

const Validation = (props) => {

    let message = null;
    if(props.text.length < 5)
        message = "Text too short !";
    else if(props.text.length > 10)
        message = "Text too long !";
    return (<div>
        {message}
    </div>)
};

export default Validation;