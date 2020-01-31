import React from 'react';
// React Router
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// Redux
import { connect } from 'react-redux';
// styles
import { ThemeProvider } from '@chakra-ui/core';
import customTheme from './theme/customTheme';
import './App.css';
// components
import LandingPage from './components/LandingPage';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={customTheme}>
        <Route exact path='/' render={props => <LandingPage {...props} />} />
      </ThemeProvider>
    </Router>
  );
};

const mapStateToProps = state => {
  console.log('APP STATE', state);
  return {
    isLoggedIn: state.isLoggedIn
  };
};

export default connect(mapStateToProps, {})(App);
