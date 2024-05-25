import React from 'react';
import './App.css';
import { AccountCardCollection, AccountCreateForm1 } from './ui-components';

function App() {
  return (
    <div className="App">
      <h1>Bank Account Management</h1>
      <div className="main-content">
        <div className="account-list">
          <h2>Accounts</h2>
          <AccountCardCollection />
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