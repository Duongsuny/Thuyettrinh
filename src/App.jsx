import { useState } from 'react'
import { createTheme } from './theme/index.js';
import { ThemeProvider } from '@mui/material/styles';
import { Button, CssBaseline, Typography } from '@mui/material';

import Bar from './components/NavBar/NavBar.jsx';
import NavBar from './components/NavBar/NavBar.jsx';

function App() {
  const theme = createTheme();
  return (
    <>
    <ThemeProvider theme={theme}>
      <NavBar/>
    </ThemeProvider>
    </>
  )
}

export default App
