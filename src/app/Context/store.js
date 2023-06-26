'use client';

import { createContext, useContext, useEffect, useState } from "react";
const ThemeContext = createContext({})
import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from '@/config/firebaseConfig'
import { useRouter } from "next/navigation";

export const ThemeContextProvider = ({ children }) => {
  const [userCurrentState, setUserCurrentState] = useState(null)
  const router = useRouter()
    const [isLoggedIn, setIsLoggedIn] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const [userGet,setUserGet] = useState()
    const [userDetails, setUserDetails] = useState({
        userName: "",
        email: "",
        photoUrl: "",
      });
      useEffect(() => {
        // Listener for authentication state changes
        const unsubscribe = onAuthStateChanged(auth,(user) => {
        if (user) {
            // User is logged in
            setUserCurrentState(user);
           
        } else {
            // User is logged out
            setUserCurrentState(null);
           
        }
        });
        
    
    }, []);
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    const login = () => {
        setIsLoggedIn(true);
      };
    
      const logout = () => {
        signOut(auth).then(() => {
          // Sign-out successful.
          console.log('Sign-out successful')
          router.push("/")
        }).catch((error) => {
          // An error happened.
          console.log('sign-out error: ',error)
        });
      };
    return (
        <ThemeContext.Provider value={{ isLoggedIn, setIsLoggedIn, login, logout, isOpen, setIsOpen, toggleDropdown, userDetails, setUserDetails, userGet, setUserGet, userCurrentState, setUserCurrentState}}>
            {children}
        </ThemeContext.Provider>
    )
};

export const useThemeContext = () => useContext(ThemeContext);