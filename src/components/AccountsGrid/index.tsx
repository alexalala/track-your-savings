import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';

import AccountCard from '../../components/AccountCard';
import { Account } from '../../types';

import { StyledAccountsGridContainer } from './styles';

const AccountsGrid = () => {
    const [accounts, setAccounts] = useState([]);
    const { user } = useAuth0();
      
    useEffect(() => {
        const fetchAccounts = async (): Promise<any> => {
            const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/savings/accounts/${user?.sub}`);
            const json = await response.json();
            setAccounts(json);
        }
        fetchAccounts();
    }, [user]);

    return (
        <StyledAccountsGridContainer>
            <Link to={'/create'}>+ Add a new account</Link>
            {accounts && accounts.map((account: Account) => (
            <div key={account._id}>
                <AccountCard 
                    _id={account._id}
                    title={account.title}
                    amount={account.amount}
                    month={account.month}
                    year={account.year}
                />
            </div>
            ))}
        </StyledAccountsGridContainer>
    );
};

export default AccountsGrid; 