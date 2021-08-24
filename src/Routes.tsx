import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Landing from './pages/Landing';

export default function Routes() {
    return (
        <Router>
            <div>
            <Switch>
                <ProtectedRoute path="/home" component={Home} />
                <Route path="/">
                    <Landing />
                </Route>
            </Switch>
            </div>
        </Router>
    );
}