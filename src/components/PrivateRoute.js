import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import { Route } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
//Component to make private route so that user cannot see feed without login
function PrivateRoute({ component: Component, ...rest }) {
    const { user } = useContext(AuthContext)
    return (
        <Route {...rest} render={props => {
            return user ? <Component {...props} /> : <Redirect to="login" />
        }} />
    )
}

export default PrivateRoute
