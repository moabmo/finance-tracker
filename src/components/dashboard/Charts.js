// src/components/dashboard/Charts.js
import React from 'react';
import { Pie, Line } from 'react-chartjs-2';

const Charts = ({ transactions }) => {
  const incomeData = transactions.filter(t => t.type === 'income').reduce((acc, curr) => acc + curr.amount, 0);
  const expenseData = transactions.filter(t => t.type === 'expense').reduce((acc, curr) => acc + curr.amount, 0);

  const pieData = {
    labels: ['Income', 'Expenses'],
    datasets: [{
      data: [incomeData, expenseData],
      backgroundColor: ['#36A2EB', '#FF6384']
    }]
  };

  const lineData = {
    labels: transactions.map(t => new Date(t.date).toLocaleDateString()),
    datasets: [{
      label: 'Income',
      data: transactions.filter(t => t.type === 'income').map(t => t.amount),
      fill: false,
      borderColor: '#36A2EB'
    }, {
      label: 'Expenses',
      data: transactions.filter(t => t.type === 'expense').map(t => t.amount),
      fill: false,
      borderColor: '#FF6384'
    }]
  };

  return (
    <div className="charts">
      <h2>Financial Overview</h2>
      <div className="chart">
        <Pie data={pieData} />
      </div>
      <div className="chart">
        <Line data={lineData} />
      </div>
    </div>
  );
};

export default Charts;
