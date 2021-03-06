import styled from 'styled-components';

export const StyledAccountsGridContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    align-items: center;

    canvas {
        max-width: 30rem;
        max-height: 15rem;
        margin: 2rem;

        @media only screen and (max-width: 600px) {
            margin: 0.5rem;
        }
    }
`;

export const StyledGrid = styled.div`
    display: flex;
    width: 100%;

    @media only screen and (max-width: 600px) {
        overflow: scroll;
    }
`;

export const StyledColumn = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0.5rem 1rem;
    padding: 1rem;
    border-radius: 1rem;
    background: #e7f4fa;
    border-radius: 1rem;
    min-width: 13rem;
    min-height: 70vh;

    span {
        font-weight: 500;
    }

    h3 {
        margin: 0.5rem 0 0 0;
        color: #6092ae;
    }

    > a {
        color: black;
        text-decoration: none;
        background: #ffffffc4;
        border-radius: 0.25rem;
        padding: 0.25rem;
        margin: 0 0.5rem 0.55rem;
    }
`;

export const StyledAddContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100% - 6rem);
    justify-content: center;

    a {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #6092ae;
        text-decoration: none;

        > span {
            font-size: 5rem;
        }

        > p {
            text-transform: uppercase;
            font-family: 'Raleway',sans-serif;
            font-weight: bold;
            font-size: 1.5rem;
            margin: 0;
        }
    }
`;
