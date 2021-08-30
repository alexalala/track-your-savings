import styled from 'styled-components';

export const StyledBackgroundContainer = styled.div`
    width: 100vw;
    height: calc(100vh - 84px);
    background: rgb(197,219,245);
    background: linear-gradient(0deg, rgba(197,219,245,1) 0%, rgba(255,255,255,1) 100%);
    position: relative;
`;

export const StyledDescriptionContainer = styled.div`
    position: absolute;
    top: 20vh;
    display: flex;
    align-items: center;
    width: 100%;

    @media only screen and (max-width: 600px) {
        flex-direction: column-reverse;
        top: 15vh;
    }
`;

export const StyledStacks = styled.img`
    width: 50%;
    margin-bottom: 2rem;

    @media only screen and (max-width: 600px) {
        width: 100%;
        margin-bottom: 0;
    }
`;

export const StyledTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 0 3rem;

    h1 {
        text-transform: uppercase;
        font-size: 3.5rem;
        text-align: left;
        margin: 0;
    }

    p {
        text-align: left;
    }

    button {
        width: fit-content;
    }

    @media only screen and (max-width: 600px) {
        padding: 0;
        width: 100%;

        h1 {
            font-size: 2.5rem;
            margin: 1rem;
        }

        p, button {
            margin: 1rem;
        }
    }
`;