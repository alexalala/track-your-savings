import React from 'react';
import { Auth0Provider } from "@auth0/auth0-react";
import './App.css';
import Routes from './Routes';
import Header from './components/Header';

function App() {
    return (
        <div className="App">
            <Auth0Provider
                domain={process.env.AUTH_DOMAIN || ''}
                clientId={process.env.AUTH_CLIENTID || ''}
                redirectUri={window.location.origin}
            >
                <Header />
                <Routes />
            </Auth0Provider>
        </div>
    );
}

export default App;
