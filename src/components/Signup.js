// Signup.js
import React, { useState } from 'react';
import firebase from '../config/firebaseConfig';
import LoadingAnimation from '../components/LoadingAnimation';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log('User created successfully!');
    } catch (error) {
      console.error('Error creating user:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
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
          {isLoading ? <LoadingAnimation /> : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default Signup;
