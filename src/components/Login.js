// Login.js
import React, { useState } from 'react';
import firebase from '../config/firebaseConfig';
import LoadingAnimation from '../components/LoadingAnimation';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log('User logged in successfully!');
    } catch (error) {
      console.error('Error logging in:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? <LoadingAnimation /> : 'Log In'}
        </button>
      </form>
    </div>
  );
};

export default Login;
