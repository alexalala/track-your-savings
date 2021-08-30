import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';

import { Account } from '../../types';
import { StyledFormField, StyledForm, StyledMoneyInput, StyledButtonContainer } from './styles';
    
const Create = (): JSX.Element => {
    interface ParamsTypes {
        date: string;
    };

    interface ValuesTypes {
        [key: string]: any;
    };

    let history = useHistory();
    const { getIdTokenClaims, user } = useAuth0();
    let { date } = useParams<ParamsTypes>();

    const [values, setValues] = useState<ValuesTypes>({});
    const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    // Convert URL params to date.
    useEffect(() => {
        var array = date.split('-');

        if (array.length === 2) {
            setValues({
                ...values,
                month: array[0].toUpperCase(),
                year: parseInt(array[1], 10)
            })
        }
        // eslint-disable-next-line
    }, [date]);
  
    const handleFormSubmission = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setLoading(true);

        const formData: Account = {
            title: values.title,
            amount: values.amount,
            month: values.month,
            year: values.year,
            user: user?.sub,
        };

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
    const setFormValues = (formValues: Account) => {
        setValues({...values, ...formValues})
    }
    const handleInputChanges = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        setFormValues({ [e.currentTarget.name]: e.currentTarget.value })
    }
    return (
        <div>
            <h1>Add Account</h1>
            {!submitSuccess && (
                <p>Ensure all fields are filled in to submit</p>
            )}
            <StyledForm id={"create-account-form"} onSubmit={handleFormSubmission} noValidate={true}>
                <StyledFormField>
                    <label htmlFor="title">Account Name</label>
                    <input type="text" id="title" onChange={(e) => handleInputChanges(e)} name="title" placeholder="Bank of America" />
                </StyledFormField>
                <StyledFormField>
                    <label htmlFor="amount">Account Amount</label>
                    <StyledMoneyInput>
                        <span>$</span>
                        <input type="number" step="0.01" id="amount" onChange={(e) => handleInputChanges(e)} name="amount" placeholder="0.00" />
                    </StyledMoneyInput>
                </StyledFormField>
                <StyledButtonContainer>
                    <Link to="/">Back</Link>
                    <button type="submit">
                        Create Account
                    </button>
                    {loading &&
                        <p>Loading...</p>
                    }
                    {submitSuccess && (
                        <p>Account Created</p>
                    )}
                </StyledButtonContainer>
            </StyledForm>
        </div>
    );
}
export default Create;