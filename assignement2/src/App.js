import React from 'react';
import Validation from './ValidationComponent/Validation';
import Char from "./CharComponent/Char";
import './App.css';
import './CharComponent/Char.css';

class App extends React.Component
{
  state = {
    content: "",
  };

  render()
  {
    let letters = null;
    if(this.state.content.split("").length > 0){ //we must display for each letter, a component
      letters = (
        <div id="letters">
          {
            this.state.content.split("").map((letter,index) => { return <Char letter={letter} key={index} delete={this.deleteHandler.bind(this,index)}/> })
          }
        </div>
      )
    }

    return (
    <div className="App">
      <h4><i>Main component</i></h4>
      <input type="text" value={this.state.content} onChange={this.changeHandler}/> {/* value=this.state.content, onChange modify this.state.content --> double binding */}
      <p>{this.state.content}</p>
      <Validation text={this.state.content}/>
      {letters} {/*array displayed from condition (array composed of Char components*/}
    </div>);
  }

  deleteHandler = (key) =>
  {
    const chars = this.state.content.split(""); //because the array (split) is not part of the state property, no need to copy here
    chars.splice(key,1);
    this.setState({ content: chars.join("") /* because the content originally split, we just have to join it again ! */})
    //content is modified, so the input text will also be , thanks to DOUBLE BINDING ! (value={this.state.content} No need to remove char from array or stuff)
  }

  changeHandler = (event) => {
    
    this.setState({ content: event.target.value });
  }
}

export default App;
