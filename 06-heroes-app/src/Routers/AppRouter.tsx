import { Router, Route, Switch, Redirect  } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import React, { useContext } from 'react';

import { LoginPage } from '../Pages/Login/LoginPage';
import { DashboardsRoutes } from './DashboardsRoutes';
import { AuthContext } from '../Auth/authContext';

const history = createBrowserHistory();

export const AppRouter = () => {

    const { user: { logged: isAuthenticated } } = useContext(AuthContext);

    return (
        <Router history={history}>
            <div>
                <Switch>
                    <Route exact path="/login" component={ LoginPage  } />
                    <Route 
                        path="/"
                        render={
                            (props: any) => (
                                (isAuthenticated) 
                                ? <DashboardsRoutes { ...props } />
                                : ( <Redirect to='/login' />)
                            )
                    }
                    />
                </Switch>
            </div>
        </Router>
    )
}
