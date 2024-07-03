// src/components/dashboard/Dashboard.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactions } from '../../actions/transactions';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';
import Charts from './Charts';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { transactions } = useSelector(state => state.transactions);

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  return (
    <div className="dashboard">
      <h1 className="large text-primary">Dashboard</h1>
      <TransactionForm />
      <TransactionList transactions={transactions} />
      <Charts transactions={transactions} />
    </div>
  );
};

export default Dashboard;
