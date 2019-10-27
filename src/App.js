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
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Comment</th>
              </tr>
            </thead>
            <tbody>
              {/* BE CAREFUL TO NOT LEAVE ANY WHITESPACE AFTER WRITTEN CODE */}
              {/* because we've written tags for tables in our component template : there is no problem to put them in tbody */}
              {/*<User /> {/*User component is used here*/}
              {/*<User /> {/*Because we used Math.random content will be dynamic*/}
              <User name="hello"/>{/* Here we apply some attributes to our components */}
              <User name="john">Occupations : working...</User>{/* but we must add properties (props) elements in order to make this work */}
              <User name="Bilaal">I like to discover new things, but is it really necessary ?</User>
              <User name="Stephan">I'm a human not a machine to learn : are we humans or products for rendering ?</User>
            </tbody>
          </table> 
        </div>
       //warning : any HTML-ish JSX code from a component must be nested inside a ROOT element
   );
   //Is equivalent to :
   //return React.createElement("div",{className: "App"},React.createElement("h1",null,"Hi I'm a React application"));
  }
}

export default App; //export App Class to be used somewhere
