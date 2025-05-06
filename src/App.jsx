import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router';

import { Box } from '@mui/material'
import Toolbar from '@mui/material/Toolbar';

import ResponsiveAppBar from './components/navbar/Navbar'
import Footer from './components/footer/footer'
import Dashboard from './components/dashboard/Dashboard';
import DetailPublication from './components/detailPublication/DetailPublication';
import MyPosts from './components/myPosts/MyPosts';
import NotFound from './components/routes/notFound/notFound';
import Register from './components/features/auth/Register'
import Login from './components/features/auth/Login'
import Catalogo from './components/catalogo/Catalogo';
import SellerDashboard from './components/sellerDashboard/SellerDashboard';
import Contact from './components/contact/Contact';



function App() {
  return (
    <Router>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: '100vh',
          backgroundColor: '#FFE0C4'
        }}>
        <ResponsiveAppBar />
        <Toolbar /> {/* <- Esto empuja el contenido hacia abajo correctamente */}

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/detail-publication/:id" element={<DetailPublication />} />
          <Route path="/vender" element={<SellerDashboard />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/my-posts" element={<MyPosts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </Box>

    </Router>
  );
}

export default App