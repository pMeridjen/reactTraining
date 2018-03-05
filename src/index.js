import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import TodoForm from './components/toDoListe/TodoForm';
import PlusMoins from './components/balek/PlusMoins';
import SimpleApi from './components/api/SimpleApi';
import {BrowserRouter, Route, Miss, Switch} from 'react-router-dom';



ReactDOM.render(<BrowserRouter>
    <Switch>
    <Route exactly path='/' component={SimpleApi}/>
    <Route exactly path='/increment' component={PlusMoins}/>
    <Route exactly path='/todoliste' component={TodoForm}/>
    </Switch>
    
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
