import React from "react";
import AuthButton from '../AuthButton';

import { StyledHeaderContainer, StyledButtonContainer } from './styles';

const Header = () => (
    <StyledHeaderContainer>
        <p>Track Your Savings</p>
        <StyledButtonContainer>
            <AuthButton signup={true} />
            <AuthButton />
        </StyledButtonContainer>
    </StyledHeaderContainer>
);

export default Header; 