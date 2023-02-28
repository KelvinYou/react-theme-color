import React, { useContext } from 'react';
import { ThemeContext } from './../theme/ThemeContext';

const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

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
      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          borderRadius: "4px",
          backgroundColor: theme.secondaryColor,
          color: theme.onSecondaryColor,
          border: "none",
          cursor: "pointer",
          marginTop: "20px",
          transition: "background-color 0.5s ease",
        }}
      >
        {theme.mode === "light" ? "Switch to Dark" : "Switch to Light"}
      </button>
    </div>
    
  )
}

export default Home