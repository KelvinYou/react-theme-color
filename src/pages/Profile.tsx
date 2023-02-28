import React, { useContext } from 'react';
import { ThemeContext } from './../theme/ThemeContext';

const Profile = () => {
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
        Profile
      </div>
    </div>
  )
}

export default Profile