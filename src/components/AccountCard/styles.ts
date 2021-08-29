import styled from 'styled-components';

export const StyledAccountCardContainer = styled.div`
    border: 1px solid #ececec;
    margin: 1rem;
    max-width: 10rem;
    padding: 1.5rem;
    box-shadow: 6px 6px 16px -8px rgba(0,0,0,0.35);
    position: relative;
`;

export const StyledActions = styled.div`
    display: flex;
    flex-direction: column;

    a {
        color: black;
       text-transform: uppercase;
        font-size: 0.8rem;
        margin-bottom: 1rem;
    }

    button {
        cursor: pointer;
        background: transparent;
        border: none;
        font-size: 1.25rem;
        position: absolute;
        top: 0.75rem;
        right: 0.75rem;
    }
`;