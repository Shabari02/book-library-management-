"use client"
import React, { useState, useEffect } from 'react';
import LoadingAnimation from '../components/LoadingAnimation';
// import Home from './home'
import Dashboard from '@/components/Dashboard/Dashboard';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate asynchronous operation (e.g., data fetching)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="">
      {isLoading ? <LoadingAnimation /> : <Dashboard />}
    </div>
  );
};

export default Home;
