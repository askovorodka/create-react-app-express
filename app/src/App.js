/*import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './pages/DangerButton'
import DangerButton from "./pages/DangerButton";
import Route from 'react-router'
import Hello from './pages/Hello'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
            <DangerButton/>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
*/

import React, {Component} from 'react'
import Header from './components/Header'
import Main from './components/Main'

class App extends Component {
    render(){
        return (
            <div>
                <Header/>
                <Main/>
            </div>
        )
    }
}

export default App