import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Edit from './pages/EditAccount';
import Create from './pages/CreateAccount';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <ProtectedRoute path="/home" component={Home} />
                <ProtectedRoute path={"/edit/:postId"} component={Edit}/>
                <ProtectedRoute path={"/create"} component={Create} />
                <Route path="/">
                    <Landing />
                </Route>
            </Switch>
        </Router>
    );
}