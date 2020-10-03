import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const isLogin = () => {
  if(localStorage.getItem("loggedIn")) {
    return true;
  } else {
    return false;
  }
}

export const logOut = () => {
  localStorage.removeItem("loggedIn");
}

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isLogin() ?
                <Component {...props} />
            : <Redirect to="/signin" />
        )} />
    );
};

export default PrivateRoute;