import React, { Component } from 'react';
import './App.css';
import User from "./User/User";

// function App() {
//   return ( //JSX (not really HTML) content above :
//     <div className="App">
//         <h1>Hi I'm a React application</h1>
//     </div>
//   );
// }

class App extends Component
{
  render()
  {
    return ( //JSX (not really HTML) content above :
              //As an exemple : we write "class" attribute in HTML, but here "className"
        <div className="Hello">
          <h1>Hi I'm a React application</h1>
          <User /> {/*User component is used here*/}
          <User /> {/*Because we used Math.random content will be dynamic*/}
          <User />      
        </div>
       //warning : any HTML-ish JSX code from a component must be nested inside a ROOT element
   );
   //Is equivalent to :
   //return React.createElement("div",{className: "App"},React.createElement("h1",null,"Hi I'm a React application"));
  }
}

export default App; //export App Class to be used somewhere
