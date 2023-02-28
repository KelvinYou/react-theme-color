import React, { createContext, useState } from 'react';

interface Theme {
  mode: string;
  primaryColor: string;
  onPrimaryColor: string;
  secondaryColor: string;
  onSecondaryColor: string;
  backgroundColor: string;
  onBackgroundColor: string;
}

const lightTheme: Theme = {
  mode: "light",
  primaryColor: 'purple',
  onPrimaryColor: '#fff',
  secondaryColor: '#f1c40f',
  onSecondaryColor: '#000',
  backgroundColor: '#fff',
  onBackgroundColor: '#000',
};

const darkTheme: Theme = {
  mode: "dark",
  primaryColor: '#4d2177',
  onPrimaryColor: '#fff',
  secondaryColor: '#f1c40f',
  onSecondaryColor: '#000',
  backgroundColor: '#121212',
  onBackgroundColor: '#fff',
};

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

interface MyComponentProps {
  children: React.ReactNode;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  toggleTheme: () => {
    
  },
});

export const ThemeProvider: React.FC<MyComponentProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
