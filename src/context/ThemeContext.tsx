
import React, { createContext, useState, useContext, useEffect } from "react";
import { useColorScheme } from "react-native";

// Define the theme colors
const lightTheme = {
  background: "#FFFFFF",
  card: "#F7F7F7",
  text: "#333333",
  subtext: "#767676",
  primary: "#9b87f5",
  primaryDark: "#7E69AB",
  accent: "#E5DEFF",
  border: "#E5E5E5",
  button: "#9b87f5",
  buttonText: "#FFFFFF",
};

const darkTheme = {
  background: "#121212",
  card: "#1E1E1E",
  text: "#F5F5F5",
  subtext: "#BBBBBB",
  primary: "#9b87f5",
  primaryDark: "#7E69AB",
  accent: "#3A3A3A",
  border: "#333333",
  button: "#9b87f5",
  buttonText: "#FFFFFF",
};

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
  colors: typeof lightTheme;
};

const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleTheme: () => {},
  colors: lightTheme,
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const deviceColorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(deviceColorScheme === "dark");
  
  // Update theme if device settings change
  useEffect(() => {
    setIsDarkMode(deviceColorScheme === "dark");
  }, [deviceColorScheme]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const theme = {
    isDarkMode,
    toggleTheme,
    colors: isDarkMode ? darkTheme : lightTheme,
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
