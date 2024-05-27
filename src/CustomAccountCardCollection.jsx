import React from 'react';
import CustomAccountCard from './CustomAccountCard';

const CustomAccountCardCollection = ({ accounts }) => {
  return (
    <div>
      {accounts.map(account => (
        <CustomAccountCard key={account.id} account={account} />
      ))}
    </div>
  );
};

export default CustomAccountCardCollection;
