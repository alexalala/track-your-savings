import styled from 'styled-components';

export const StyledAccountCardContainer = styled.div`
    border: 1px solid #ececec;
    margin: 0.5rem;
    max-width: 10rem;
    padding: 2.25rem 2.5rem 0.75rem;
    box-shadow: 6px 6px 16px -8px rgba(0,0,0,0.35);
    position: relative;
    background: #fff;

    p {
        margin: 0.5rem;
    }
`;

export const StyledActions = styled.div`
    display: flex;
    flex-direction: column;

    a {
        color: black;
        text-transform: uppercase;
        font-size: 0.8rem;
        position: absolute;
        top: 1.25rem;
        left: 1.25rem;
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