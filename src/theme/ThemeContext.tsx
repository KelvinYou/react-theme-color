import React, { createContext, useState } from 'react';

interface Theme {
  primaryColor: string;
  secondaryColor: string;
}

const lightTheme: Theme = {
  primaryColor: 'black',
  secondaryColor: '#6c757d',
};

const darkTheme: Theme = {
  primaryColor: 'white',
  secondaryColor: '#343a40',
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
