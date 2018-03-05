import React, { Component } from 'react';
import TodoForm from './components/toDoListe/TodoForm';
import PlusMoins from './components/balek/PlusMoins';
import SimpleApi from './components/api/SimpleApi';



import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Application Todo list</h1>
        </header>
       <SimpleApi/>
      </div>
    );
  }
}

export default App;
