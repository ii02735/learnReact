import React, { useEffect } from 'react'; //useEffect allows us to use an alternative of lifecycle hook into a React hook (for functional component )
import styles from './Cockpit.module.css';
/**
 * Will contain App's render method (because it is better to delegate its method there in order to not make state management harder -> split state logic with rendering)
 * So here we write a component that will be called by App (delegation -> less statements in the container)
 * Because that component does not manage states (directly), it is a presentational / stateless / dumb component
 * 
 * In general, a good React application should be composed in majority of stateless components, managing multiple states in different components can be
 * somewhat hard. Passing states to stateless props parameter is however easier.
 */

const Cockpit = (props) => {
    
    //kind of componentDidUpdate, will be run any time when the component will be updated, and will be launched when it is initialized
    //Ergo, it is mixed with componentDidMount and componentDidUpdate
    //So we can also write side effect statements, like HTTP requests
    useEffect(() => { //must capitalize component variable name first !
        console.log("Cockpit.js useEffect");
        //That method will be executed EACH time when there is an update
        //But what if we want to execute a specific statement once ? When the children are updated (props.users) ?    
        
        setTimeout(() => { console.info(props.users); }, 1000);
    },[props.users]); // we create an array, and inside it we put "watchers"

    //If we want to execute another logic for another watcher, it is perfectly fine to ANOTHER useEffect() method.

    useEffect(() => {
        console.info("Cockpit created");
        //we can also make a cleanup work in React hook :
        return () => { //that function will be called BEFORE useEffect, and AFTER the first render() call
            console.warn("Cockpit removed");
        };
    },[]);

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

    let output = null;

    if(props.users.length !== 0)
        output = (<div className={styles.Cockpit}> {/* Don't forget the root element, but thanks to React 16, we can find a workaround --> later */}
                      <h1 className={classes.join(" ")}>Hi I'm a React application</h1>
                      <button className={btnClass} onClick={props.toggleUsersHandler}>Toggle users</button>
                 </div>);

    return output;

    //Don't forget that if we want to manage STATES, we can also use useState (instead of getDerivedStateFromProps) 
};

export default Cockpit;