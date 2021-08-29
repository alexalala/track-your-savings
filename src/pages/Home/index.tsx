import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

import { Account } from '../../types';
import AccountCard from '../../components/AccountCard';

const Home = () => {
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
        <div>
            <h1>Savings Dashboard</h1>
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
        </div>
    );
}

export default Home;
