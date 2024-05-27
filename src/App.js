import React, { useEffect, useState } from 'react';
import './App.css';
import CustomAccountCardCollection from './CustomAccountCardCollection';
import { AccountCreateForm1 } from './ui-components';
//import { API } from 'aws-amplify';
import { generateClient } from "aws-amplify/api";
import { listAccounts } from './graphql/queries';

const client = generateClient();

function App() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await client.graphql({ query: listAccounts });
        setAccounts(response.data.listAccounts.items);
      } catch (error) {
        console.error('Error fetching accounts:', error);
      }
    };

    fetchAccounts();
  }, []);

  return (
    <div className="App">
      <h1>Bank Account Management</h1>
      <div className="main-content">
        <div className="account-list">
          <h2>Accounts</h2>
          <CustomAccountCardCollection accounts={accounts} />
        </div>
        <div className="account-form">
          <h2>Create Account</h2>
          <AccountCreateForm1 />
        </div>
      </div>
    </div>
  );
}

export default App;
