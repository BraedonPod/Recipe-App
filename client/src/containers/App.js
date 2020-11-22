import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import { Appbar } from '../components';

import Home from './Home';
import Recipes from './Recipes';
import Recipe from './Recipe';

function App() {

  return (
    <Router>
      <Appbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/recipes" component={Recipes} />
        <Route exact path="/recipe/:id" component={Recipe} />
      </Switch>
    </Router>
  );
}

export default App;
