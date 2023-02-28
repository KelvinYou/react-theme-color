import React, { useContext } from 'react';
import { ThemeContext } from './../theme/ThemeContext';

const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div  style={{ color: theme.primaryColor }}>Home</div>
  )
}

export default Home