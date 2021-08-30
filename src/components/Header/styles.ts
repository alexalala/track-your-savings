import styled from 'styled-components';

export const StyledHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
`;

export const StyledTitle = styled.p`
    font-family: 'Pacifico', cursive;
    font-size: 1.75rem;
    margin: 0;
    color: #98ceea;

    @media only screen and (max-width: 600px) {
        font-size: 1.25rem;
        margin: 0.325rem;
    }
`;

export const StyledButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;