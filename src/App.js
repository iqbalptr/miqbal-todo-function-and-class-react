import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './Header';
import ClassBasedTodo from './components/ClassBasedTodo';
import FunctionBasedTodo from './components/FunctionBasedTodo';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/classbasedtodo">
            <ClassBasedTodo />
          </Route>
          <Route path="/functionbasedtodo">
            <FunctionBasedTodo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
