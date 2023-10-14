import { useState } from 'react'
import { createTheme } from './theme/index.js';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';

import NavBar from './components/NavBar/NavBar.jsx';

import Coreteam from './Sections/Coreteam/Coreteam.jsx';

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
            <Coreteam />
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
