import React from "react";
import { Link, useHistory } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

import { Account } from '../../types';
import { StyledAccountCardContainer, StyledActions } from './styles';

const AccountCard = ({title, _id, amount, month, year}: Account) => {
    const { getIdTokenClaims } = useAuth0();
    let history = useHistory();
    const deleteAccount = async(id: string | undefined) => {
        const accessToken = await getIdTokenClaims();
        await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/savings/delete?accountID=${id}`, {
            method: "delete",
            headers: new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
            "authorization": `Bearer ${accessToken.__raw}`
            })
        });
        history.push('/');
    };

    return (
        <StyledAccountCardContainer>
            <h3>{title}</h3>
            <p>${amount}</p>
            <StyledActions>
                <Link to={`/edit/${_id}`}>Edit</Link>
                <button onClick={() => deleteAccount(_id)}>x</button>
            </StyledActions>
        </StyledAccountCardContainer>
    );
};

export default AccountCard; 