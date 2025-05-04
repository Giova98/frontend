import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//componentes y paginas
import Register from '../features/auth/register';
import ResponsiveAppBar from '../navbar/Navbar';
import Footer from '../footer/footer';

function AppRouter() {
  return (
    <BrowserRouter>
        <ResponsiveAppBar/>

            <Routes>
                <Route path="/Register" element={<Register />} />
            </Routes>

        <Footer/>
    </BrowserRouter>
  )
}

export default AppRouter
