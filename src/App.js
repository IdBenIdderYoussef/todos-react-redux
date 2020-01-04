import React from 'react';
import { Header } from './components/Header';
import { TodoList } from './components/TodoList';
import { Filter } from './components/Filter';
import { TodoDetail } from './components/TodoDetail'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { NoComponent } from './components/NoComponent';


function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Header />
            <Filter />
            <TodoList />
          </Route>
          <Route exact path="/todo/:id" component={TodoDetail} />
          <Route component={NoComponent} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
