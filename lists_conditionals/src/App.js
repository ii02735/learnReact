import React, { Component } from 'react';
import './App.css';
import './User/User.css';
import User from "./User/User";

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
      showUsers: false //new property to test our condition
  };

  render()
  {
    const style = {
      //warning : JS syntax only !
      backgroundColor: "wheat",
    }; //example of inline style

    //Better syntax for condition instead of ternary operation:
    let users = null; //we'll store the JSX code inside users
    if(this.state.showUsers)
    { 
        users = (<div id="users"> 
                  <User name={this.state.users[0].name} click={this.showCommentHandler.bind(this,this.state.users[0].comment)}>{this.state.users[0].comment}</User>
                  <User name={this.state.users[1].name} click={() => this.showCommentHandler(this.state.users[1].comment)}>{this.state.users[1].comment}</User>
                  <User name={this.state.users[2].name} style={style} changeComment={this.changeCommentHandler} click={this.showCommentHandler.bind(this,this.state.users[2].comment)}>{this.state.users[2].comment}</User>
                </div>);
                //if it is null, well users won't have nothing 
    }

    return ( //JSX (not really HTML) content above :
              //As an exemple : we write "class" attribute in HTML, but here "className"
        <div className="Hello">
          <h1>Hi I'm a React application</h1>

            <button onClick={this.toggleUsersHandler}>Toggle users</button>
            {/* we'll render the User components conditionally 
                We surrond the dynamic block with braces
            // */}
            { /*We must write a ternary expression, since we can't really write conditions with JS way (so not the optimized way for complex conditions)* }
            //   this.state.showUsers ? 
            // <div id="users"> 
            //   <User name={this.state.users[0].name} click={this.showCommentHandler.bind(this,this.state.users[0].comment)}>{this.state.users[0].comment}</User>
            //   <User name={this.state.users[1].name} click={() => this.showCommentHandler(this.state.users[1].comment)}>{this.state.users[1].comment}</User>
            //   <User name={this.state.users[2].name} style={style} changeComment={this.changeCommentHandler} click={this.showCommentHandler.bind(this,this.state.users[2].comment)}>{this.state.users[2].comment}</User>
            // </div> : null /*  null : if it is false, nothing is rendered*/}

            {users}
        </div>
       //warning : any HTML-ish JSX code from a component must be nested inside a ROOT element
   );

  }

  toggleUsersHandler = () => {
    this.setState({ showUsers: !this.state.showUsers })
  } //notice : with normal function redaction, so without assign an object function in a variable, "this" keyword won't be accessible to the method
 
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
