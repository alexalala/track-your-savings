import styled from 'styled-components';

export const StyledLinkButton = styled.button`
    border: none;
    background: transparent;
    cursor: pointer;
    height: fit-content;
    margin: 1rem 0.5rem;
    font-size: 1rem;
    color: #707070;

    &:hover {
        text-decoration: underline;
    }
`;

export const StyledLinkButtonBorder = styled(StyledLinkButton)`
    border: 1px solid #707070;
    padding: 0.5rem 1rem;
    margin: 0.5rem 0;
    border-radius: 0.5rem;

    &:hover {
        text-decoration: none;
        background: #f4fafd;
    }
`;