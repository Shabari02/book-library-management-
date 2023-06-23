import React from 'react';
import { SyncLoader } from 'react-spinners';
import classes from './LoadingAnimation.module.css'

const LoadingAnimation = () => {
  return (
    <div className={classes.loadingAnimation}>
      <SyncLoader color="#36d7b7" loading={true} />
      {/* <style jsx>{`
        
      `}</style> */}
    </div>
  );
};

export default LoadingAnimation;
