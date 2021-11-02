import React from 'react';
import Landing from './Landing.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Landing}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
