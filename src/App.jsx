import { useState } from 'react'
import { createTheme } from './theme/index.js';
import { ThemeProvider } from '@mui/material/styles';
import ReactFullpage from '@fullpage/react-fullpage';
import { Button, Box, CssBaseline, Typography } from '@mui/material';

import NavBar from './components/NavBar/NavBar.jsx';
import Blur from './components/Blur/Blur.jsx';

function App() {
  const theme = createTheme();
  return (
    <>
    <ThemeProvider theme={theme}>
      <NavBar/>
      <Box>
        <section>
            <h1>Mission</h1>
        </section>
        <section>
            <h1>Coreteam</h1>
        </section>
        <section> 
            <h1>Gallery</h1>
        </section>
        <section> 
            <h1>Tôi Bản lĩnh</h1>
        </section>
      </Box>
    </ThemeProvider>
    </>
  )
}

export default App
