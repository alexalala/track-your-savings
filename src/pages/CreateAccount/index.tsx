import React, { useState } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
    
function Create(): JSX.Element {
  let history = useHistory();
  const { getIdTokenClaims, user } = useAuth0();

  interface IValues {
    [key: string]: any;
  }
  const [values, setValues] = useState<IValues>([]);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
    
  const handleFormSubmission = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    const formData = {
      title: values.title,
      description: values.description,
      amount: values.amount,
      month: values.month,
      year: values.year,
      user: user?.sub,
    }
    const submitSuccess: boolean = await submitform(formData);
    setSubmitSuccess(submitSuccess);
    setValues({...values, formData});
    setLoading(false);
    setTimeout(() => {
      history.push('/');
    }, 1500);
  }
    
  const submitform = async (formData: {}) => {
    try {
      const accessToken = await getIdTokenClaims();
      const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/savings/account`, {
        method: "post",
        headers: new Headers({
          "Content-Type": "application/json",
          "Accept": "application/json",
          "authorization": `Bearer ${accessToken.__raw}`
        }),
        body: JSON.stringify(formData)
      });
      return response.ok;
    } catch (ex) {
      return false;
    }
  }
  const setFormValues = (formValues: IValues) => {
    setValues({...values, ...formValues})
  }
  const handleInputChanges = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormValues({ [e.currentTarget.name]: e.currentTarget.value })
  }
  return (
    <div>
      <h2> Create Account</h2>
      {!submitSuccess && (
        <p>Ensure all fields are filled in to submit</p>
      )}
      {submitSuccess && (
        <p>Account Created</p>
      )}
      <form id={"create-account-form"} onSubmit={handleFormSubmission} noValidate={true}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange={(e) => handleInputChanges(e)} name="title" placeholder="Enter title" />
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <input type="number" id="amount" onChange={(e) => handleInputChanges(e)} name="amount" placeholder="Enter amount" />
        </div>
        <div>
          <label htmlFor="month">Month</label>
          <input type="text" id="month" onChange={(e) => handleInputChanges(e)} name="month" placeholder="Enter Month" />
        </div>
        <div>
          <label htmlFor="year">Year</label>
          <input type="number" id="year" onChange={(e) => handleInputChanges(e)} name="year" placeholder="Enter Year" />
        </div>
        <div>
          <button type="submit">
            Create Account
          </button>
          {loading &&
            <p>Loading...</p>
          }
        </div>
      </form>
    </div>
  );
}
export default withRouter(Create)