import React from 'react';

// const withClass = props => (
//     <div className={props.classes}>{props.children}</div>
// ); version 1

const withClass = (WrappedComponent,classes) => {
    return props => ( //We see here that the props are injected by the component, so we already have their values, BUT we must inject them in the tag attribute
        <div className={classes}>
            <WrappedComponent {...props}/> {/* We use the spread operator to ADD props. Assigning like "props={props}" */}
        </div>
    );
} // version 2 : not a component anymore, but a function, so remove capital letter

export default withClass; 

//this HOC must be wrapped to the App one