import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Edit from './pages/EditAccount';
import Create from './pages/CreateAccount';

export default function Routes() {
    const { isAuthenticated } = useAuth0();

    return (
        <Router>
            <Switch>
                <ProtectedRoute path={"/edit/:accountId"} component={Edit}/>
                <ProtectedRoute path={"/create/:date"} component={Create} />
                { isAuthenticated ?
                    <ProtectedRoute path="/" component={Home} />
                :
                    <Route path="/">
                        <Landing />
                    </Route>
                }
            </Switch>
        </Router>
    );
}