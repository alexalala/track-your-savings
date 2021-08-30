import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';

import AccountCard from '../../components/AccountCard';
import Graph from '../../components/Graph';
import { Account } from '../../types';

import { StyledAccountsGridContainer, StyledGrid, StyledColumn, StyledAddContainer } from './styles';

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
        
        // Add current month if not already logged.
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];;
        var date = new Date();
        const currentMonth = months[date.getMonth()].toUpperCase() + ' ' + date.getFullYear();

        if (!columns.includes(currentMonth)) {
            newArray.push({date: currentMonth, accounts: [] as Account[], total: 0  })
        }
        setPopulatedColumns(newArray as populatedColArray);
    }, [columns, accounts]);


    return (
        <StyledAccountsGridContainer>
            <Graph months={columns} values={populatedColumns} />
            <StyledGrid>
                { populatedColumns.length && populatedColumns.map((column: populatedColTypes, i: number) => (
                    <StyledColumn key={i}>
                        <h3>{column.date}</h3>
                        {column?.accounts?.length !== 0 ? (
                            <>
                                <h4><span>Monthly total:</span> ${column.total}</h4>
                                <Link to={`/create/${column?.date?.replace(/\s/g, '-').toLowerCase()}`}>+ Add Account</Link>
                            </>
                        ) : (
                            <StyledAddContainer>
                                <Link to={`/create/${column?.date?.replace(/\s/g, '-').toLowerCase()}`}>
                                    <span>+</span>
                                    <p>Add Account</p>
                                </Link>
                            </StyledAddContainer>
                        )}
                        {column?.accounts?.map((account: Account) => (
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
                    </StyledColumn>
                ))}
            </StyledGrid>
        </StyledAccountsGridContainer>
    );
};

export default AccountsGrid; 