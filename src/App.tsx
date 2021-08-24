import React from 'react';
import { Auth0Provider } from "@auth0/auth0-react";
import './App.css';
import Routes from './Routes';
import Header from './components/Header';

const App = () => (
    <div className="App">
        <Auth0Provider
            domain={process.env.REACT_APP_AUTH_DOMAIN || ''}
            clientId={process.env.REACT_APP_AUTH_CLIENTID || ''}
            redirectUri={window.location.origin + '/home'}
        >
            <Header />
            <Routes />
        </Auth0Provider>
    </div>
);

export default App;
