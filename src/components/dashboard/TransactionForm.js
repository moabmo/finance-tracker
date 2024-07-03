// src/components/dashboard/TransactionForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../../actions/transactions';

const TransactionForm = () => {
  const [formData, setFormData] = useState({
    type: 'income',
    amount: '',
    category: '',
  });

  const { type, amount, category } = formData;
  const dispatch = useDispatch();

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    dispatch(addTransaction({ type, amount, category }));
    setFormData({ type: 'income', amount: '', category: '' });
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-group">
        <select name="type" value={type} onChange={onChange} required>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
      <div className="form-group">
        <input
          type="number"
          placeholder="Amount"
          name="amount"
          value={amount}
          onChange={onChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Category"
          name="category"
          value={category}
          onChange={onChange}
          required
        />
      </div>
      <input type="submit" className="btn btn-primary" value="Add Transaction" />
    </form>
  );
};

export default TransactionForm;
