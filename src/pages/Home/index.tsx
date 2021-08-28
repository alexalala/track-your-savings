import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
    const { getIdTokenClaims } = useAuth0();
    const [accounts, setAccounts] = useState([]);
      
    const _removePostFromView = (id: string) => {
        const index = accounts.findIndex((account: { _id: string; }) => account._id === id);
        accounts.splice(index, 1);
    }

    const deleteAccount = async(id: string) => {
        const accessToken = await getIdTokenClaims();
        await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/savings/delete?accountID=${id}`, {
            method: "delete",
            headers: new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
            "authorization": `Bearer ${accessToken.__raw}`
            })
        });
        _removePostFromView(id);
    }    
      
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
            <Link to={'/create'}>+ Add a new account</Link>
            {accounts && accounts.map((account: { title: string; _id: string; amount: string}) => (
            <div key={account._id}>
                <h4>{account.title}</h4>
                <ul>
                    <li>${account.amount}</li>
                    <li>
                        <Link to={`/edit/${account._id}`}>Edit account</Link>
                    </li>
                    <li>
                        <button onClick={() => deleteAccount(account._id)}>Delete account</button>
                    </li>
                </ul>
            </div>
            ))}
        </div>
    );
}

export default Home;
