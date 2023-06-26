'use client';

import { createContext, useContext, useState } from "react";
const ThemeContext = createContext({})

export const ThemeContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [userGet,setUserGet] = useState()
    const [userDetails, setUserDetails] = useState({
        userName: "",
        email: "",
        photoUrl: "",
      });

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    const login = () => {
        setIsLoggedIn(true);
      };
    
      const logout = () => {
        setIsLoggedIn(false);
      };
    return (
        <ThemeContext.Provider value={{ isLoggedIn, setIsLoggedIn, login, logout, isOpen, setIsOpen, toggleDropdown, userDetails, setUserDetails, userGet, setUserGet}}>
            {children}
        </ThemeContext.Provider>
    )
};

export const useThemeContext = () => useContext(ThemeContext);