import React, { Component } from 'react';
import styles from './App.module.css'; //access style properties like objects (thanks to css modules)
import Users from "../components/Users/Users";
import Cockpit from "../components/Cockpit/Cockpit";
/**
 * App is a "container" component, because it contains component instanciations (JSX)
 */

class App extends Component
{

  //hook lifecycle INVOKES methods below (except of course for toggleUserHandler,changeCommentHandler,showCommentHandler or deleteUserHandler because these don't belong to Component class)

  constructor(props){ //first step of lifecycle creation
    super(props);
    console.log("constructor of App");
    //state can also be initialized here --> modern way
    this.state = {
      //will contain informations that can be modified only inside the component
      //instead of be modified outside it with props
      //remember : state is a SPECIAL property
      users: [
        { id: "!~#{±s", name: "Mark", comment: "I'm a police Detective" },
        { id: "apop#12", name: "Diana", comment: "I don't know what to do..." },
        { id: "king!#123",name: "Frederick", comment: "I have to make a stop at my castle" },
        { id: "johndoe",name: "John", comment: "I'm nobody" }
      ],
      showUsers: false, //new property to test our condition
      showCockpit: true
    };
  }

  //second step of creation lifecycle : update states when PROPS are changed (very rare though)
  static getDerivedStateFromProps(props,state)
  {
    //console.log("getDerivedStateFromProps method");
    //console.log(props);
    return props;

  }

  //last step of lifecycle creation, so AFTER render() call 
  //In that method, we can write side-effects statements, like HTTP calls
  componentDidMount()
  {
    //console.log("App.js componentDidMount method");
  }

  componentDidUpdate()
  {
    console.warn("App.js component updated (componentDidUpdate Hook method)");
  }

  //remember that Hook method will forward the update or not (true or false, regarding conditions)
  shouldComponentUpdate(nextProps, nextState)
  {
    //  console.warn("App.js shouldComponentUpdate");
    return true;
  }

  // componentWillMount() obsolete
  // {
  //   console.log("App.js componentWillMount");
  // }

  render()
  {
    //display Users component (via showUsers) recalls render() in order to update
    
    console.log("App.js rendering method")
    let users = null; //we'll store the JSX code inside users
   
    if(this.state.showUsers)
    {        
                //Apply loop (better way instead of writing a lot of same code for HtML/JSX attributes)   
        users =  <Users users={this.state.users} changeCommentHandler={this.changeCommentHandler} deleteUserHandler={this.deleteUserHandler} showCommentHandler={this.showCommentHandler}/>;      
                /* 
                    react cannot tell which elements we in fact modified.
                    Without an unique identifier, a long list to display will be really inefficient
                    And operations (delete, update) on it can cost resources if React doesn't directly know what to update
                    from the previous DOM 

                    So by default it renders the whole list (with the setState), which is very inefficient
                    To fix this, we set the key property
                */
                 
                //after showing the users list, the button style must be changed
          

    }

    /**
     * Good practices : when we manage states in a component, associate JSX rendering such as below is not a better way of coding
     * We must split logic from rendering.
     */
    
    return ( 
        <div className={styles.App}>
            {/* Because the container must contains other components, writting a lot of conditions is not a good idea, so we use component delegating instead */}
            {/*delegation = flexability -> good maintenance*/}
            <button id={styles.cockpitDisplay} onClick={this.removeCockpit} >Remove Cockpit</button>
            { this.state.showCockpit ? <Cockpit toggleUsersHandler={this.toggleUsersHandler} usersLength={this.state.users.length} showUsers={this.state.showUsers}/> : null } 
            {users} {/* we will use a better way instead of mixing components inside another one --> we preserve the functionnal statement here, and the non ones to cockpit*/}
        </div>
       //warning : any HTML-ish JSX code from a component must be nested inside a ROOT element
   );

  }

  removeCockpit = () =>
  {
    this.setState({ showCockpit: !this.state.showCockpit });
  }

  toggleUsersHandler = () => {
    this.setState({ showUsers: !this.state.showUsers })
  } //notice : with normal function redaction, so without assign an object function in a variable, "this" keyword won't be accessible to the method
 
  changeCommentHandler = (event, key) =>{ //NEW ARGUMENT : key => very important
    //thanks to key :
                  //findIndex takes a Predicate (boolean function that will return the index of the desired element if TRUE is encountered)
                  //So for each element, the Predicate will be applied
    const userIndex = this.state.users.findIndex((user) => user.id === key);

    //warning : please update without passing by reference (this is what ONLY the setState must do here !)
    //create a new object (copy) from the found one with the index (thanks to spread operator, which CREATE a new object with the indicated elements)
    const userToModify = { ...this.state.users[userIndex] }; //here we create a NEW object from the element of users at usersIndex position

    //Alternative would be : userToModify = Object.assign({},this.state.users[userIndex])

    //we can now retrieve the proper object that we want to update, here the comment :

    userToModify.comment = event.target.value; //remember : event.target.value is the content of the input
    //Because modifying state elements must be done immutabely, we copy the whole array
    const usersCopy = [...this.state.users]  
    //And, we modify the desired element in that new array. Because it is a copy, we are free to use reference pass :
    usersCopy[userIndex] = userToModify;

    this.setState({
      users: usersCopy //usersCopy takes the old values (thanks to spread, and the element at userIndex is modified, so setState will indeed update the DOM)
    });//because we have changed the state, the DOM is updated
       //So instead of writing by the hard way, the old data are preserved into an array (DYNAMIC)
  }

  showCommentHandler = (comment) => {
    console.log("Hey you clicked on it !  " + (comment != null ? "You made a comment : " + comment : "You haven't made a comment here..."));
  };

  deleteUserHandler = (index) => {
   // const users = this.state.users; //WARNING : users is an ARRAY, so we pass here by REFERENCE
    //users.splice(index,1); //so any object manipulation like SPLICE will ALREADY MUTATE / modify the users ARRAY (strongly not recommended, because unpredictable behaviours)
    //Unexpected behaviour because we change the state object BEFORE getting to SETSTATE !

    //Correction : create a copy of the array first in order to change the state safely (update with immutable fashion)

   // const users = this.state.users.slice(); //copy with slice (LEGACY)
    const users = [...this.state.users]; //spread opeator (ES6, thanks to Babel)
    console.log(users);
    users.splice(index,1);
    console.log(users);
    this.setState({ users: users });
    console.log(this.state.users);
  }
}



export default App; 
