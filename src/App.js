import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import AppContainer from './components/AppContainer';
import Resume from './components/common/Resume';
import styled from 'styled-components';
import './App.css';

const Router = styled.div`
  height: 100%;
`;

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={AppContainer} />
      <Route exact path="/resume" component={Resume} />
    </Router>
  );
};

export default App;
