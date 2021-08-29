import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AccountCard from '../../components/AccountCard';

const Home = () => {
    const [accounts, setAccounts] = useState([]);
      
    useEffect(() => {
        const fetchAccounts = async (): Promise<any> => {
            const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/savings/accounts`);
            const json = await response.json();
            setAccounts(json)
        }
        fetchAccounts();
    }, [])
      return (
        <div>
            <h1>Savings Dashboard</h1>
            <Link to={'/create'}>+ Add a new account</Link>
            {accounts && accounts.map((account: { title: string; _id: string; amount: string}) => (
            <div key={account._id}>
                <AccountCard 
                    _id={account._id}
                    title={account.title}
                    amount={account.amount}
                />
            </div>
            ))}
        </div>
    );
}

export default Home;
