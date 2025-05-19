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

const publicaciones = [
  {
    id: 1,
    title: 'Auriculares Bluetooth',
    description: 'Auriculares inalámbricos con sonido envolvente. Perfectos para correr.cascavcadvcdavadvadv',
    img: 'https://th.bing.com/th/id/OIP.DEwRIsQF7Gqqw6kgdEFCCwHaE7?cb=iwc2&rs=1&pid=ImgDetMain',
    price: 8500,
    status: 'Nuevo',
    brand: 'Sony',
  },
  {
    id: 2,
    title: 'Guitarra Eléctrica',
    description: 'Guitarra eléctrica tipo Stratocaster, ideal para principiantes.',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71Oo2ZKroFL._AC_SL1500_.jpg',
    price: 145000,
    status: 'Usado',
    brand: 'Fender',
  },
  {
    id: 3,
    title: 'Teclado MIDI',
    description: 'Teclado MIDI de 61 teclas, ideal para producción musical.',
    img: 'https://th.bing.com/th/id/OIP.539jLs5-c-sDWMtwyzBxegHaE8?cb=iwc2&rs=1&pid=ImgDetMain',
    price: 12000,
    status: 'Nuevo',
    brand: 'Akai Professional',
  },
  {
    id: 4,
    title: 'Bajo Eléctrico',
    description: 'Bajo eléctrico tipo Jazz, ideal para todo tipo de música.',
    img: 'https://th.bing.com/th/id/OIP.jGyCN8nkkvEXW-rHUIgatwHaHc?cb=iwc2&rs=1&pid=ImgDetMain',
    price: 90000,
    status: 'Poco usado',
    brand: 'Ibanez',
  },
  {
    id: 5,
    title: 'Cajón Flamenco',
    description: 'Cajón flamenco de madera con excelente resonancia y sonido.',
    img: 'https://th.bing.com/th/id/OIP.CDVhWtX6MhBqJiT7ZEuu6gHaJt?cb=iwc2&rs=1&pid=ImgDetMain',
    price: 25000,
    status: 'Usado',
    brand: 'Meinl',
  }
]
function App() {
  return (
    <Router>

      <div className="flex flex-col items-center min-h-screen bg-[#FFE0C4] ">

        <ResponsiveAppBar />
        <Toolbar /> {/* <- Esto empuja el contenido hacia abajo correctamente */}

        <Routes>
          <Route path="/" element={<Dashboard publicaciones={publicaciones} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path=":id" element={<DetailPublication />} />
          <Route path="/vender" element={<SellerDashboard />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/catalogo/*" element={<Catalogo publicaciones={publicaciones} />} />
          <Route path="/my-posts" element={<MyPosts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>

    </Router>
  );
}

export default App