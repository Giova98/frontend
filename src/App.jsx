import React from 'react'
import ResponsiveAppBar from './components/navbar/Navbar'
import Footer from './components/footer/footer'
import { Box } from '@mui/material'
import Toolbar from '@mui/material/Toolbar';
import ThemeSignInPage from './components/routes/ThemeSignInPage';

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <ResponsiveAppBar />
      <Toolbar /> {/* <- Esto empuja el contenido hacia abajo correctamente */}

      {/* Contenido principal */}
      
      <ThemeSignInPage/>
      <Footer />
    </Box>
  );
}

export default App