import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';

import AccountCard from '../../components/AccountCard';
import { Account } from '../../types';

import { StyledAccountsGridContainer, StyledColumn } from './styles';

const AccountsGrid = () => {
    interface populatedColTypes {
        date?: string;
        accounts?: Account[];
        total?: number;
    };

    type populatedColArray = populatedColTypes[];

    const [accounts, setAccounts] = useState<Account[]>([]);
    const [columns, setColumns] = useState<string[]>([]);
    const [populatedColumns, setPopulatedColumns] = useState([] as populatedColArray);
    const { user } = useAuth0();
      
    useEffect(() => {
        const fetchAccounts = async (): Promise<any> => {
            const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/savings/accounts/${user?.sub}`);
            const json = await response.json();
            setAccounts(json);
        }
        fetchAccounts();
    }, [user]);

    // Seperate months out of accounts.
    useEffect(() => {
        let months: string[] = [];

        accounts.forEach((account: Account) => {
            let accountDate = account.month + ' ' + account.year;

            if (!months.includes(accountDate)) {
                months.push(accountDate);
            };
        });

        setColumns(months);
    }, [accounts]);

    // Populate columns with accounts.
    useEffect(() => {
        let newArray = columns.map((column) => ({ date: column, accounts: [] as Account[], total: 0 }));
        
        accounts.forEach((account: Account) => {
            let accountDate = account.month + ' ' + account.year;

            newArray.forEach((column) => {
                if (accountDate === column.date) {
                    column.accounts.push(account);
                    column.total = column.total + (account.amount || 0);
                }
            })
        })
        setPopulatedColumns(newArray as populatedColArray);
    }, [columns, accounts]);


    return (
        <StyledAccountsGridContainer>
            { populatedColumns.length && populatedColumns.map((column: populatedColTypes, i: number) => (
                <StyledColumn key={i}>
                    <h3>{column.date}</h3>
                    <Link to={`/create/${column?.date?.replace(/\s/g, '-').toLowerCase()}`}>+ Add a new account</Link>
                    {column.accounts?.length && column.accounts.map((account: Account) => (
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
                    <h4>Monthly total: ${column.total}</h4>
                </StyledColumn>
            ))}
        </StyledAccountsGridContainer>
    );
};

export default AccountsGrid; 