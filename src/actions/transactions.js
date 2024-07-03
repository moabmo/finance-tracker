// src/actions/transactions.js
import axios from 'axios';

export const getTransactions = () => async dispatch => {
  try {
    const res = await axios.get('/api/transactions');
    dispatch({ type: 'GET_TRANSACTIONS', payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

export const addTransaction = (transaction) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post('/api/transactions', transaction, config);
    dispatch({ type: 'ADD_TRANSACTION', payload: res.data });
  } catch (err) {
    console.error(err);
  }
};
