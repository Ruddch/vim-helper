import React, { Component } from 'react';
import Keyboard from './components/Keyboard';
import 'reset-css';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Keyboard/>
        </header>
      </div>
    );
  }
}

export default App;
