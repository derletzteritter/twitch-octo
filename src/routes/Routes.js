import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';

// Pages
import { Home } from '../components/pages/home/Home'
import { TopGames } from '../components/pages/top-games/TopGames';
 

export const Routes = () => {
  return (
    <Router>
      <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/top-games" component={TopGames} />
      </Switch>
      </div>
    </Router>
  )
}