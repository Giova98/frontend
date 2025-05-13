import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router';


import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Dashboard from './components/dashboard/Dashboard';
import DetailPublication from './components/detailPublication/DetailPublication';
import MyPosts from './components/myPosts/MyPosts';
import NotFound from './components/routes/notFound/notFound';
import Login from './components/features/auth/Login';
import Catalogo from './components/catalogo/Catalogo';
import SellerDashboard from './components/sellerDashboard/SellerDashboard';
import Contact from './components/contact/Contact';
import Register from './components/features/auth/Register';


function App() {
  return (
    <Router>

        <Navbar />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/detail-publication/:id" element={<DetailPublication />} />
          <Route path="/vender" element={<SellerDashboard />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/my-posts" element={<MyPosts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        
        <Footer />

    </Router>
  );
}

export default App