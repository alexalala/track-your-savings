import React from "react";

import { StyledHeaderContainer, StyledButtonContainer } from './styles';

export default function Header() {
    return (
        <StyledHeaderContainer>
            <p>Track Your Savings</p>
            <StyledButtonContainer>
                <button>Sign Up</button>
                <button>Log In</button>
            </StyledButtonContainer>
        </StyledHeaderContainer>
    );
}