import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';

import Signin from './components/SignIn';
import Signup from './components/SignUp';

const generateClassName = createGenerateClassName({
    productionPrefix: 'au'
});

export default ({ history, onSignIn }) => {
    return (
        <>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        <Route path="/auth/signin">
                            <Signin onSignIn={onSignIn} />
                        </Route>
                        <Route path="/auth/signup" component={Signin} />
                    </Switch>
                </Router>
            </StylesProvider>
        </>
    )
}
