import React from 'react';
import styles from './Cockpit.module.css';
/**
 * Will contain App's render method (because it is better to delegate its method there in order to not make state management harder -> split state logic with rendering)
 * So here we write a component that will be called by App (delegation -> less statements in the container)
 */

const cockpit = (props) => {
    
    let btnClass = ""; //Will change when button is clicked

    if(props.showUsers)
        btnClass = styles.Red;

    //dynamic classes 
    const classes = [];
    //we want to change h1 welcome element's class according to certain conditions regarding users QUANTITY 
    /**
     * If there is more than 3, turn to BOLD Green
     * If there is more than 2, turn to Green only
     * If there is less than 2, turn to Red only
     * If there is NONE, turn to Red bold
     *  
     * Because we used const keyword, classes array is only modifiable through reference (methods)
     */ 
    

    //We don't use ELSEIF here in order to push multiple elements, and not only one
    if(props.users.length >= 2)
    classes.push(styles.green)
    if(props.users.length >= 3)
        classes.push(styles.bold)
    if(props.users.length < 2)
        classes.push(styles.red)
    if(props.users.length === 0)
        classes.push(styles.bold);

    return(
        <div className={styles.Cockpit}> {/* Don't forget the root element, but thanks to React 16, we can find a workaround --> later */}
          <h1 className={classes.join(" ")}>Hi I'm a React application</h1>
          <button className={btnClass} onClick={props.toggleUsersHandler}>Toggle users</button>
        </div>
    );
};

export default cockpit;