import React from 'react';
import { Component } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const token = useSelector((state => state.token));
    console.log("private token", token)
    return (
        <Route
            {...rest}
            render={props => (
                token ? (
                    <Component{...rest}{...props} />
                ) : (
                    <Redirect to="/SignIn" />
                )
            )}
        />
    );
};


export default PrivateRoute;