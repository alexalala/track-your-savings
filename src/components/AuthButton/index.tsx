import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { StyledLinkButton, StyledLinkButtonBorder } from './styles';

interface TodoItemProps {
    signup?: boolean,
}

const AuthButton = ({ signup }: TodoItemProps) => {
    const { isAuthenticated } = useAuth0();

    const LoginButton = () => {
        const { loginWithRedirect } = useAuth0();
      
        return (
            <StyledLinkButton onClick={() => loginWithRedirect()}>
                Log In
            </StyledLinkButton>
        );
    };
    
    const SignupButton = () => {
        const { loginWithRedirect } = useAuth0();
      
        return (
            <StyledLinkButtonBorder onClick={() => loginWithRedirect({
                screen_hint: "signup"
            })}>
                Sign Up
            </StyledLinkButtonBorder>
        );
    };
    
    const LogoutButton = () => {
        const { logout } = useAuth0();
    
        return (
            <StyledLinkButton onClick={() => logout({ returnTo: window.location.origin })}>
            Log Out
            </StyledLinkButton>
        );
    };
    
    if (signup && !isAuthenticated) {
        return <SignupButton />;
    } else if (!signup) {
        return isAuthenticated ? <LogoutButton /> : <LoginButton />;
    } else {
        return <></>;
    };
  };
  
  export default AuthButton;