import React from "react";
import AuthButton from '../AuthButton';

import { StyledHeaderContainer, StyledButtonContainer, StyledTitle } from './styles';

const Header = () => (
    <StyledHeaderContainer>
        <StyledTitle>Track Your Savings</StyledTitle>
        <StyledButtonContainer>
            <AuthButton />
            <AuthButton signup={true} />
        </StyledButtonContainer>
    </StyledHeaderContainer>
);

export default Header; 