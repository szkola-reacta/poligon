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
import Movie from './pages/Movie';
import CreateMovie from './pages/CreateMovie';
import Form from './pages/Form';
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
          <Route exact path="/movies/create">
            <CreateMovie />
          </Route>
          <Route exact path="/movies/:movieId">
            <Movie />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/form">
            <Form />
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
