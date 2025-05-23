
import { BrowserRouter as Router, Route, Routes } from 'react-router';

import ResponsiveAppBar from './components/layout/navbar/Navbar'
import Footer from './components/layout/footer/Footer'
import Dashboard from './pages/dashboard/Dashboard';
import DetailPublication from './features/publications/detailPublication/DetailPublication';
import MyPosts from './components/shared/myPosts/MyPosts';
import NotFound from './components/shared/routes/not-Found/NotFound';
import Login from './features/auth/Login';
import Catalogo from './pages/catalogo/Catalogo';
import SellerDashboard from './pages/sellerDashboard/SellerDashboard';
import Contact from './pages/contact/Contact';
import Register from './features/auth/Register';
import PurchaseDetails from './features/publications/purchaseDetails/PurchaseDetails';
import PublicationList from './features/publications/publicationList/PublicationList';
import { getPublications } from './services/api';
import { useState } from 'react';

function App() {
  const [publicaciones, setPublicaciones] = useState([]);

  useEffect(() => {
    getPublications().then(setPublicaciones).catch(console.error);
  }, []);

  return (
    <Router>

      <div className="flex flex-col items-center min-h-screen bg-[#FDE7B9] ">

        <ResponsiveAppBar />

        <Routes>
          <Route path="/" element={<Dashboard publicaciones={publicaciones} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/vender" element={<SellerDashboard />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/catalogo" element={<Catalogo />}>
            <Route index element={<PublicationList publicaciones={publicaciones} />} />
            <Route path=":id" element={<DetailPublication />} />
          </Route>
          <Route path="/catalogo/:id/purchase-details" element={<PurchaseDetails />} />
          <Route path="/my-posts" element={<MyPosts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>

    </Router>
  );
}

export default App