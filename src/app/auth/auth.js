// withAuth.js

import { useContext, useEffect } from 'react';
import { useRouter } from "next/navigation";
import { useThemeContext } from '../Context/store';

export const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const { isLoggedIn } = useThemeContext();
    const router = useRouter();

    useEffect(() => {
      if (!isLoggedIn) {
        router.push('/login'); 
      }
    }, [isLoggedIn, router]);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};
