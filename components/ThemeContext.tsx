import React, { useState, useContext, createContext } from "react";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

// // Initialize theme as light theme
// // Initialize as empty function
const ThemeContext = createContext<boolean>(false);
const ThemeUpdateContext = createContext<() => void>(() => void 0);

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }: ThemeContextProviderProps) {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
