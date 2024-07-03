// src/reducers/transactionReducer.js
const initialState = {
    transactions: [],
    loading: true,
  };
  
  export default function(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case 'GET_TRANSACTIONS':
        return { ...state, transactions: payload, loading: false };
      case 'ADD_TRANSACTION':
        return { ...state, transactions: [...state.transactions, payload], loading: false };
      default:
        return state;
    }
  }
  