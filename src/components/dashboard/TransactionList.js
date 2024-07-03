// src/components/dashboard/TransactionList.js
import React from 'react';

const TransactionList = ({ transactions }) => {
  return (
    <div className="transactions">
      <h2 className="my-2">Transactions</h2>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction._id}>
            <span>{transaction.type}</span>
            <span>{transaction.amount}</span>
            <span>{transaction.category}</span>
            <span>{new Date(transaction.date).toLocaleDateString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
