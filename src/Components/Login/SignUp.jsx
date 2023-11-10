// SignUp.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://pharma-k0q8.onrender.com/api/v1/users/signup', {
        email,
        password,
        name,
        address,
      });

      if (response.status === 201) {
        alert('Sign up successful!');
        console.log(response);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errorMessage = error.response.data.message || 'Password must be a minimum of 4 and a maximum of 8 characters';
        alert(errorMessage);
      } else {
        alert('An error occurred. Please try again.');
      }
      console.error(error);
    }
  };

  return (
    <div className="signup-container">
      <form id="signup-form" className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <button className='btn' type="submit">Signup</button>
        <p>
          Already have an account{' '}
          <Link to="/Signin">Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
