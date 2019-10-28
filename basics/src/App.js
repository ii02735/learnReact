import React, { Component } from 'react';
import './App.css';
import './User/User.css' //Because we display User components here, we must import their CSS also here !
import User from "./User/User";
import HookExample from "./User/HookExample";
import UserOutput from "./Assignement1/UserOutput";
import UserInput from './Assignement1/UserInput';

//Because this component does store data and logic inside, it is a STATEFUL component
//Unlike a stateless one, it is recommended to only have a couple of these (else, difficulties for maintenance)
//So it is not a problem to not having no logic inside a component, but rather a presentation role instead
class App extends Component
{
  state = {
      //will contain informations that can be modified only inside the component
      //instead of be modified outside it with props
      //remember : state is a SPECIAL property
      users: [
        { name: "Mark", comment: "I'm a police Detective" },
        { name: "Diana", comment: "I don't know what to do..." },
        { name: "Frederick", comment: "I have to make a stop at my castle" }
      ],
      output: {
        username: "hello world"
      }
  };

  render()
  {
    const style = {
      //warning : JS syntax only !
      backgroundColor: "wheat"
    }; //example of inline style

    return ( //JSX (not really HTML) content above :
              //As an exemple : we write "class" attribute in HTML, but here "className"
        <div className="Hello">
          <h1>Hi I'm a React application</h1>
              {/* BE CAREFUL TO NOT LEAVE ANY WHITESPACE AFTER WRITTEN CODE */}
              {/* because we've written tags for tables in our component template : there is no problem to put them in tbody */}
              {/*<User /> {/*User component is used here*/}
              <User name="hello"/>{/* Here we apply some attributes to our components */}
              <User name="john">Occupations : working...</User>{/* but we must add properties (props) elements in order to make this work */}
              <User name="Bilaal">I like to discover new things, but is it really necessary ?</User>
              <User name="Stephan">I'm a human not a machine to learn : are we humans or products for rendering ?</User>
              {/* We modify our components outside them (from App), thanks to PROPS, but we can also modify them INSIDE them, with STATES */}
              {/* Indeed because for the moment, we defined them manually, but what about dynamically (INJECTING THEM), for each component ? Inside is the way */}

              {/* 
                  Defining state is from an attribute's class that EXTENDS Component, but for User, because it is doesn't extends it, because
                  it is a functionnal method, is is not possible to define state.
                  BUT from 16.8 React version, it is now possible to DEFINE state property INSIDE FUNCTIONNAL method !
                  For now, we'll explore that feature later...

                  //Version with state : we modify PROPS but DYNAMICALLY
              */}
              {/* We can pass by reference a method on a component instance in order to be used inside of it 
                  Remember : bind() CREATES a new function with additional argument in it
              */}
              <User name={this.state.users[0].name} click={this.showCommentHandler.bind(this,this.state.users[0].comment)}>{this.state.users[0].comment}</User>
              {/* Second syntax instead of bind(), we return a function object, however this syntax can be inefficient ! (PREFER BIND IF POSSIBLE) */}
              <User name={this.state.users[1].name} click={() => this.showCommentHandler(this.state.users[1].comment)}>{this.state.users[1].comment}</User>
              <User name={this.state.users[2].name} style={style}changeComment={this.changeCommentHandler} click={this.showCommentHandler.bind(this,this.state.users[2].comment)}>{this.state.users[2].comment}</User>
              {/* state is special : if we change it, React updates the Component DOM*/}
              {/*Event handling : we must use the camel case (for onClick instead of the HTML syntax, onclick*/}
              {/*Warning : because it JS content, don't forget braces, and because it is related to the current class, the this object is mandatory*/}
              <button onClick={this.clickHandler} id="firstButton">Click here !</button>
              <HookExample/>
              <div className="assignement1">
              <UserInput changeName={this.changeNameAssignement1}/>
              <UserOutput username={this.state.output.username}>Some paragraph text here</UserOutput>
              </div>
        </div>
       //warning : any HTML-ish JSX code from a component must be nested inside a ROOT element
   );

  }

  changeNameAssignement1 = (event) => {
    this.setState({
      output: {
        username: event.target.value
      }
    })
  }

  //method handler creation
  clickHandler = () => {
    console.log("click detected !");
    //this keyword cannot be used inside the ES6 method scope => we cannot set this.state to change there, we must a getter !
    //we must respect the syntax of the state attribute value
    /**
     * Indeed because, setState will check the attribute first, then it will MERGE what we entered inside the method, it will leave
     * other properties untouched if they are not mentionned (something outside of users for example)
     */
    this.setState({
      users: [
        { name: "Tom" },
        { name: "John", comment: "I'm an new user !"},
        { name: "Carl", comment: "I'm getting old..."}
      ]
    });//because we have changed the state, the DOM is updated
  };

  //When we'll typing, the comment for Frederick will be changed
  //We will deal with a better a way to write this : change every comment for each component (not only for a specific data)
  //So an error-warning will be shown for components that don't have their onChange handler property set
  //Indeed because, with the current method, we will LOSE (we wrote the old state for User components) changes made with clickHandler !
  changeCommentHandler = (event) =>{
    this.setState({
      users: [
        { name: "Mark", comment: "I'm a police Detective" },
        { name: "Diana", comment: "I don't know what to do..." },
        { name: "Frederick", comment: event.target.value }
      ]
    });//because we have changed the state, the DOM is updated
  }

  showCommentHandler = (comment) => {
    console.log("Hey you clicked on it !  " + (comment != null ? "You made a comment : " + comment : "You haven't made a comment here..."));
  };
}



export default App; //export App Class to be used somewhere
