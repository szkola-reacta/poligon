import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Registration from './pages/Registration';
import Movies from './pages/Movies';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Content>
        <Switch>
          <Route path="/articles">
            <Articles />
          </Route>
          <Route path="/register">
            <Registration />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Content>
      <Footer />
    </Router>
  );
}

export default App;
