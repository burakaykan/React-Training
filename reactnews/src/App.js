import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import FuncComp from './FuncComp';

class App extends Component {
  render() {
    var helloWorld = 'Welcome to the Road to learn React.';
    var task = "I'm just started to learn React";
    let declaration = 'My current task is Learning React';
    const about = "This sentence coming from a const declaration so i can't change it anymore.";
    const trick = {
      text: "Const declaration can not changed later but if you define const variable as an array you can change it later"
    };    
    const list = [
      {
        title: 'React',
        url: 'https://reactjs.org/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
      },
      {
        title: 'Redux',
        url: 'https://redux.js.org/',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
      },
    ];
    return (
      <div className="App">
        <h2>{helloWorld}</h2>
        <p>{declaration}</p>
        <h1>{task}</h1>
        {declaration = "new declaration of let"}
        <span>{about}</span>
        <h6>{declaration}</h6>
        <p>{trick.text}</p>
        {trick.text = "Like this..."}
        <h3>{trick.text}</h3>

        {list.map(function(item) {
          return <div>{item.title}</div>
        })}


      </div>
    );
  }
}

export default App;
