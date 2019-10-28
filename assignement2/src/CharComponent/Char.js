import React from 'react';

const Char = (props) => {

    return(
        <div className="char" onClick={props.delete}>
            {props.letter}
         </div>
    );
}

export default Char;