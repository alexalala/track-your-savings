import React from 'react';

import stacks from '../../assets/notes.svg';
import AuthButton from '../../components/AuthButton';
import { StyledBackgroundContainer, StyledDescriptionContainer, StyledTextContainer, StyledStacks } from './styles';

const Landing = () => (
    <div>
        <StyledBackgroundContainer />
        <StyledDescriptionContainer>
            <StyledTextContainer>
                <h1>Track your savings on a monthly basis</h1>
                <p>Ensure you keep on top of your monthly savings by using this handy tracking tool.</p>
                <AuthButton signup={true} />
            </StyledTextContainer>
            <StyledStacks src={stacks} alt='' />
        </StyledDescriptionContainer>
    </div>
);

export default Landing;
