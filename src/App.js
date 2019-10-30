import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import HomePage from '../src/pages/homePage';
import LoginPage from './pages/loginPage/loginPage';
import Header from './components/header';

function App({ login }) {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/login"
          render={() => (login ? <Redirect to="/" /> : <LoginPage />)}
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = state => {
  return { login: state.login.isLogin };
};

export default connect(mapStateToProps)(App);
