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
        
    },[props.users]); // we create an array, and inside it we put "watchers"

    //If we want to execute another logic for another watcher, it is perfectly fine to ANOTHER useEffect() method.

    useEffect(() => {
        console.log("%cCockpit created", 'color: darkgreen; background: lightgreen');
        //const timer = setTimeout(() => {alert("fake http call")},2000);
        //we can also make a cleanup work in React hook :
        return () => { //that function will be called BEFORE useEffect, and AFTER the first render() call
            //clearTimeout(timer);   //prevent setTimeout to be executed when cockpit is removed 
            console.warn("Cockpit removed");
        };
    },[]);

    useEffect(()=>{  //This method should only be executed if there is changing regarding the Cockpit. However, because it is in App, it will react for each changes in that container
        console.info("Second call");
        return (()=> {
            console.warn("Second clean up");
        });
    });
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
    if(props.usersLength >= 2)
    classes.push(styles.green)
    if(props.usersLength >= 3)
        classes.push(styles.bold)
    if(props.usersLength < 2)
        classes.push(styles.red)
    if(props.usersLength === 0)
        classes.push(styles.bold);

    let output = null;

    if(props.usersLength !== 0)
        output = (<div className={styles.Cockpit}> {/* Don't forget the root element, but thanks to React 16, we can find a workaround --> later */}
                      <h1 className={classes.join(" ")}>Hi I'm a React application</h1>
                      <button className={btnClass} onClick={props.toggleUsersHandler}>Toggle users</button>
                 </div>);
    else
        output = (<div className={styles.Cockpit}>
                  <h1 className={classes.join(" ")}>Hi I'm a React application</h1>
                  <button className={btnClass} onClick={props.toggleUsersHandler}>Toggle users</button>
            </div>);

    return output;

    //Don't forget that if we want to manage STATES, we can also use useState (instead of getDerivedStateFromProps) 
};

//Because we are in a functional component, Hook methods like shouldUpdateComponents are not applicable.
//To use a workaround, we must wrap the export with React.memo (usage of memoization technique)
/**
 * Memoization :
 * Store of a snapshot, and if its inputs change (props),
 * it will re-render it. However React cannot pick changes regarding properties within props objects (like length property for users array)
 * So instead of passing an object to props, and access to its property, we must pass directly the property
 */
export default React.memo(Cockpit);