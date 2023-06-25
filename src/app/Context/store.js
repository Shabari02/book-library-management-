'use client';

import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({})

export const ThemeContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const login = () => {
        setIsLoggedIn(true);
      };
    
      const logout = () => {
        setIsLoggedIn(false);
      };
    return (
        <ThemeContext.Provider value={{ isLoggedIn, setIsLoggedIn, login, logout }}>
            {children}
        </ThemeContext.Provider>
    )
};

export const useThemeContext = () => useContext(ThemeContext);