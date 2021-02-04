import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        {/* <Route path='/app' component={OrphonagesMap} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;