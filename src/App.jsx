import { useState } from 'react'
import { createTheme } from './theme/index.js';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';


import NavBar from './components/NavBar/NavBar.jsx';
import Coreteam from './Sections/Coreteam/Coreteam.jsx';
import Mission from './Sections/Mission/Mission.jsx';

function App() {
  const theme = createTheme();
  return (
    <>
    <ThemeProvider theme={theme}>
      <NavBar/>
      {
        // each section in Box contain one part of the page, to do sync action with navbar button
      }
      <Box>
        <section>
            <Mission />
        </section>
            <Coreteam />
        <section> 
            <h1>Gallery</h1>
        </section>
        <section> 
            <h1>Tôi Bản lĩnh</h1>
        </section>
        <section>
          <h1>Club day</h1>
        </section>
        <section>
          <h1>Tuyển thành viên Gen 18</h1>
        </section>
      </Box>
    </ThemeProvider>
    </>
  )
}

export default App
