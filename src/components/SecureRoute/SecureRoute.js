import React from 'react';

import { Route, Redirect, useHistory } from 'react-router-dom';

const isAuthenticated = false;

function SecureRoute({ children: Component, ...restProps }) {
  // const history = useHistory();

  if (isAuthenticated) {
    return <Route {...restProps}><Component /></Route>;
  }
  // return history.push('/login');
  return <Redirect to="/login" />;
}

export default SecureRoute;
