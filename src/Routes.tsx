import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Landing from './pages/Landing';

export default function Routes() {
    return (
        <Router>
            <div>
            <Switch>
                <Route path="/">
                    <Landing />
                </Route>
            </Switch>
            </div>
        </Router>
    );
}