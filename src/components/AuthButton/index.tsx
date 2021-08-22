import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

interface TodoItemProps {
    signup?: boolean,
}

const AuthButton = ({signup}: TodoItemProps) => {
    const { isAuthenticated } = useAuth0();

    const LoginButton = () => {
        const { loginWithRedirect } = useAuth0();
      
        return (
            <button onClick={() => loginWithRedirect()}>
                Log In
            </button>
        );
    };
    
    const SignupButton = () => {
        const { loginWithRedirect } = useAuth0();
      
        return (
            <button onClick={() => loginWithRedirect({
                screen_hint: "signup"
            })}>
                Sign Up
            </button>
        );
    };
    
    const LogoutButton = () => {
        const { logout } = useAuth0();
    
        return (
            <button onClick={() => logout({ returnTo: window.location.origin })}>
            Log Out
            </button>
        );
    };
    
    if (signup) {
        return <SignupButton />;
    };

    return isAuthenticated ? <LogoutButton /> : <LoginButton />;
  };
  
  export default AuthButton;