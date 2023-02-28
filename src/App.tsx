import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes/routes";
import PrimaryNavBar from './components/PrimaryNavBar';
import { ThemeProvider } from './theme/ThemeContext';

function App() {

  return (
    <ThemeProvider>
      <BrowserRouter>
        <PrimaryNavBar/>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <route.component />
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    
  );
}

export default App;
