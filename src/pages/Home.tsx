import React, { useContext } from 'react';
import { ThemeContext } from './../theme/ThemeContext';

const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  console.info(theme.primaryColor + ", " + theme.secondaryColor);

  return (
    <div style={{ 
      backgroundColor: theme.backgroundColor,
      height: 'calc(100vh - 70px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: "column",
    }}>
      <div  style={{ color: theme.onBackgroundColor }}>
        Home
      </div>
      <button onClick={toggleTheme}>
        {theme.mode === "light" ? "Switch to Dark" : "Switch to Light"}
      </button>
    </div>
    
  )
}

export default Home