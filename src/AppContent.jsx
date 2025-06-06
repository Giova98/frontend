import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ResponsiveAppBar from './components/layout/navbar/Navbar';
import Footer from './components/layout/footer/Footer';
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
import SobreNosotros from './components/shared/pageFooter/sobreNosotros/sobreNosotros';
import FAQ from './components/shared/pageFooter/FAQ/FAQ';
import TermsAndConditions from './components/shared/pageFooter/terminosPolitica/TerminosPolitica';
import HelpResources from './components/shared/pageFooter/recursosUtiles/RecursosUtiles';
import Protected from './components/shared/routes/protected/protected';
import ProfesilelSeller from './pages/sellerDashboard/ProfesilelSeller'

import { getPublications } from './services/api';

const AppContent = () => {
  const [publicaciones, setPublicaciones] = useState([]);
  
  const location = useLocation();
  
  useEffect(() => {
    getPublications()
      .then((data) => {
        setPublicaciones(data)
        console.log(data);
        
      })
      .catch(console.error);
  }, []);

  const hideLayout = location.pathname === '/login';

  return (
    <div className={`flex flex-col items-center min-h-screen bg-[#FDE7B9] ${!hideLayout ? 'mt-16' : ''}`}>
      {!hideLayout && <ResponsiveAppBar />}

      <Routes>
        <Route path="/" element={<Navigate to="login" />} />
        <Route path="login" element={<Login />} />
        <Route element={<Protected />}>
          <Route path="/home/*" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/vender" element={<SellerDashboard />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/SobreNosotros" element={<SobreNosotros />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/TerminosPoliticas" element={<TermsAndConditions />} />
          <Route path="/RecursosUtiles" element={<HelpResources />} />
          <Route path="/Perfil" element={<ProfesilelSeller />} />
          <Route path="/catalogo" element={<Catalogo />}>
            <Route index element={<PublicationList publicaciones={publicaciones} />} />
            <Route path=":id" element={<DetailPublication />} />
          </Route>
          <Route path="/catalogo/:id/purchase-details" element={<PurchaseDetails />} />
          <Route path="/my-posts" element={<MyPosts />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!hideLayout && <Footer />}
    </div>
  );
};

export default AppContent;
