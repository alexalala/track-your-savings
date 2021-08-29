import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

import { Account } from '../../types';
    
function Edit(): JSX.Element {
  interface IValues {
    [key: string]: any;
  }
  
  interface paramTypes { accountId: string; };

  const { getIdTokenClaims } = useAuth0();
  let history = useHistory();
  let { accountId } = useParams<paramTypes>();
  const [account, setAccount] = useState({} as Account);
  const [values, setValues] = useState<IValues>([]);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
    
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/savings/account/${accountId}`);
      const json = await response.json();
      setAccount(json)    
    }
    fetchData();    
  }, [accountId]);
    
  const handleFormSubmission = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    const submitSuccess: boolean = await submitForm();
    setSubmitSuccess(submitSuccess);
    setLoading(false);
    setTimeout(() => {
      history.push('/');
    }, 1500);
  }
  const submitForm = async (): Promise<boolean> => {
    try {
      const accessToken = await getIdTokenClaims();
      const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/savings/edit?accountID=${accountId}`, {
        method: "put",
        headers: new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
          "authorization": `Bearer ${accessToken.__raw}`
        }),
        body: JSON.stringify(values)
      });
      return response.ok;      
    } catch(ex) {
      return false;
    }
  }
  const setFormValues = (formValues: IValues) => {
    setValues({...values, ...formValues})
  }
  const handleInputChanges = (e: React.FormEvent<HTMLInputElement>) => {
    setFormValues({ [e.currentTarget.id]: e.currentTarget.value })
  }
  return (
    <div>
    {account &&
      <div>
        <h1>Edit Account</h1>
        <form id={"create-account-form"} onSubmit={handleFormSubmission} noValidate={true}>
          <div>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" defaultValue={account.title} onChange={(e) => handleInputChanges(e)} name="title" placeholder="Enter title" />
          </div>
          <div>
            <label htmlFor="body">Amount</label>
            <input type="text" id="body" defaultValue={account.amount} onChange={(e) => handleInputChanges(e)} name="amount" placeholder="Enter amount" />
          </div>
          <div>
            <label htmlFor="month">Month</label>
            <input type="text" id="month" defaultValue={account.month} onChange={(e) => handleInputChanges(e)} name="month" placeholder="Enter Month" />
          </div>
          <div>
            <label htmlFor="year">Year</label>
            <input type="number" id="year" defaultValue={account.year} onChange={(e) => handleInputChanges(e)} name="year" placeholder="Enter Year" />
          </div>
          <div>
            <button type="submit">
              Edit Account
            </button>
            {loading &&
              <p>Loading...</p>
            }
          </div>
        </form>
        {submitSuccess && (
          <div role="alert">
            The account has been edited successfully!
          </div>
        )}
      </div>
    }
  </div>
  )
}
export default Edit;