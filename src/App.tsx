import React from 'react';
import { ThemeProvider } from '@mui/system';
import { materialTheme } from './ui';
import { Mainpage } from './pages/Mainpage';
import './init'

export const App = () => {
  return (
    <ThemeProvider theme={materialTheme}>
      <Mainpage />
    </ThemeProvider>
  );
}


