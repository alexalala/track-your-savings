import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { StyledHeaderContainer, StyledButtonContainer } from './styles';

export default function Header() {
    const LoginButton = () => {
        const { loginWithRedirect } = useAuth0();
      
        return <button onClick={() => loginWithRedirect()}>Log In</button>;
    };

    return (
        <StyledHeaderContainer>
            <p>Track Your Savings</p>
            <StyledButtonContainer>
                <button>Sign Up</button>
                <LoginButton />
            </StyledButtonContainer>
        </StyledHeaderContainer>
    );
}