import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/createaccount' component={CreateAccount} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;