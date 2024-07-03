// src/actions/auth.js
import axios from 'axios';

export const loadUser = () => async dispatch => {
  const token = localStorage.getItem('token');
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }

  try {
    const res = await axios.get('/api/auth');
    dispatch({ type: 'USER_LOADED', payload: res.data });
  } catch (err) {
    dispatch({ type: 'AUTH_ERROR' });
  }
};

export const register = ({ username, email, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ username, email, password });

  try {
    const res = await axios.post('/api/auth/signup', body, config);
    dispatch({ type: 'REGISTER_SUCCESS', payload: res.data });
    dispatch(loadUser());
  } catch (err) {
    dispatch({ type: 'REGISTER_FAIL' });
  }
};

export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/api/auth/login', body, config);
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    dispatch(loadUser());
  } catch (err) {
    dispatch({ type: 'LOGIN_FAIL' });
  }
};

export const logout = () => dispatch => {
  dispatch({ type: 'LOGOUT' });
};
