import React, { useContext } from 'react';
import { ThemeContext } from './../theme/ThemeContext';

const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  console.info(theme.primaryColor + ", " + theme.secondaryColor);

  return (
    <>
      <div  style={{ color: theme.primaryColor }}>
        Home
      </div>
      <button onClick={toggleTheme}>
        Switch
      </button>
    </>
    
  )
}

export default Home