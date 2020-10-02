import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import { Header } from '../components/header/Header';

// Pages
import { Home } from '../components/pages/home/Home'
import { Games } from '../components/pages/games/Games';
import { Streamers } from '../components/pages/streamers/Streamers';
 

export const Routes = () => {
  return (
    <Router>
      <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/games" component={Games} />
        <Route path="/streamers" component={Streamers} />
      </Switch>
      </div>
    </Router>
  )
}