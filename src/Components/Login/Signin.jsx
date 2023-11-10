import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Signin.css';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://pharma-k0q8.onrender.com/api/v1/users/signin', {
        email,
        password,
      });

      if (response.status === 200) {
        alert('Sign In successful!');
        sessionStorage.setItem('user', JSON.stringify(response.data));


        if (response.data.role === 'admin') {
          window.location.href = './Home'; 
        } else {
          window.location.href = './SignUp'; 
        }

        console.log(response);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errorMessage = error.response.data.message || 'Provide a valid email or password';
        alert(errorMessage);
      } else {
        alert('An error occurred. Please try again.');
      }
      console.error(error);
    }
  };

  return (
    <div className="signin-container">
      <form id="signin-form" className="signin-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className='btn' type="submit">Sign In</button>
        <p>
          Don't have an account{' '}
          <Link to="/">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Signin;
