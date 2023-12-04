// ThemeProvider.js

import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if(isDarkMode === false)
    {
         document.getElementById("root").style.backgroundColor = "#fff";
        //document.body.style.backgroundImage = "linear-gradient(to bottom right, #fff, #fff, #fff)";
    }
    else
    {
        //setIsDarkMode(true);
        document.getElementById("root").style.backgroundColor = "#333";
        //document.body.style.backgroundImage = "linear-gradient(to bottom right, #333, #333, #333)";
    }
    
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
