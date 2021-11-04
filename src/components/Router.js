import React from 'react';
import Header from './Header.js';
import App from './App.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Header}></Route>
        <Route exact path='/' component={App}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
