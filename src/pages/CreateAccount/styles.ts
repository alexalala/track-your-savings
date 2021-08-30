import styled from 'styled-components';

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 40rem;
    align-items: center;
    margin: 3rem auto;

    button {
        background: none;
        border: 1px solid;
        padding: 1rem;
        border-radius: 0.5rem;
        font-size: 1rem;
        margin: 1rem;
        cursor: pointer;
    }
`;

export const StyledFormField = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem;

    label {
        text-align: left;
    }

    input {
        border: 0;
        outline: 0;
        background: transparent;
        border-bottom: 1px solid black;
        margin: 1rem 0;
        padding: 0.5rem 0;
        font-size: 1.5rem;
    }
`;

export const StyledMoneyInput = styled.div`
    display: flex;
    font-size: 1.5rem;
    align-items: center;

    span {
        margin: 1rem;
    }
`;
