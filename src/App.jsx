import { useState } from 'react'
import { createTheme } from './theme/index.js';
import { ThemeProvider } from '@mui/material/styles';
import { Button, CssBaseline, Typography } from '@mui/material';

import Frame from './components/Frame.jsx' 

function App() {
  const theme = createTheme();
  return (
    <>
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <Frame />
    </ThemeProvider>
    </>
  )
}

export default App
