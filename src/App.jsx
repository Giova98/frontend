import React from 'react'
import ResponsiveAppBar from './components/navbar/Navbar'
import Footer from './components/footer/footer'
import { Box, ThemeProvider } from '@mui/material'
import Toolbar from '@mui/material/Toolbar';
import Login from './components/routes/Login';
import Register from './components/routes/register';

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
      <Register/>
      <Footer />
    </Box>
    
  );
}

export default App