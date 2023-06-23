"use client"
import React, { useState, useEffect } from 'react';
import LoadingAnimation from '../components/LoadingAnimation';
import Homes from '../components/Home/Home'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate asynchronous operation (e.g., data fetching)
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="container text-black ">
      {isLoading ? <LoadingAnimation /> : <Homes />}
    </div>
  );
};

export default Home;
