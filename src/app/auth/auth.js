// withAuth.js

import { useContext, useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import { useThemeContext } from '../Context/store';
import {  onAuthStateChanged} from "firebase/auth";
import { getDoc, doc } from 'firebase/firestore'; 
import {auth, db} from '@/app/config/firebaseConfig'

export const withAuth = (WrappedComponent) => {

  const Wrapper = (props) => {
    const { isLoggedIn , setIsLoggedIn, setUserDetails, userCurrentState, setUserCurrentState} = useThemeContext();
   
    const router = useRouter();

    // useEffect(() => {
    //   if (!isLoggedIn) {
    //     router.push('/login'); 
    //   }
    // }, [isLoggedIn, router]);
    const checkAuthProvider = (user) => {
      const providerData = user.providerData;
      let isEmailAuthProvider = false;
      let isGoogleAuthProvider = false;
    
      providerData.forEach((provider) => {
        if (provider.providerId === "password") {
          isEmailAuthProvider = true;
        }
        if (provider.providerId === "google.com") {
          isGoogleAuthProvider = true;
        }
      });
    
      if (isEmailAuthProvider) {
        console.log("User logged in with email/password authentication", user.uid);
        try {
          getDoc(doc(db, "user", user.uid)).then((response) => {
            const data =  response.data()
            setUserDetails({
              userName: data.userName,
              email: data.email,
              photoUrl: data.photoUrl,
            });
          });
        } catch (error) {
          console.log(error)
        }
       
      }
    
      if (isGoogleAuthProvider) {
        console.log("User logged in with Google authentication");
        const currentUser = auth.currentUser;
          if (user !== null) {
            // The user object has basic properties such as display name, email, etc.
            const userName = currentUser.displayName;
            const email = currentUser.email;
            const photoUrl = currentUser.photoURL;
            setUserDetails({
              userName: userName,
              email: email,
              photoUrl: photoUrl,
            });
          }
      }
    };
    useEffect(() => {
      // Listener for authentication state changes
      const unsubscribe = onAuthStateChanged(auth,(user) => {
      if (user) {
          // User is logged in
          // setCurrentUser(user);
          console.log("current user:",user);
          checkAuthProvider(user);
          setUserCurrentState(user)
         
          
      } else {
          // User is logged out
          // setCurrentUser(null);
          setUserCurrentState(null)
          router.push('/login');
          console.log("current user:", user);
      }
      });
      // const isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated'));
      // if (isAuthenticated) {
      //   setIsLoggedIn(true);
      // }
      return () => {
        unsubscribe()
      }
  
  }, []);
  // useEffect(() => {
  //   // Store the authenticated state in local storage
  //   localStorage.setItem('isAuthenticated', JSON.stringify(isLoggedIn));
  // }, [isLoggedIn]);
 

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};
