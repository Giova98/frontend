import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ResponsiveAppBar from './components/layout/navbar/Navbar';
import Footer from './components/layout/footer/Footer';
import Dashboard from './pages/dashboard/Dashboard';
import DetailPublication from './features/publications/detailPublication/DetailPublication';
import MyPosts from './features/sellerFeatures/myPosts/MyPosts';
import NotFound from './components/shared/routes/not-Found/NotFound';
import Login from './features/auth/Login';
import Catalogo from './pages/catalogo/Catalogo';
import SellerDashboard from './pages/sellerDashboard/SellerDashboard';
import Contact from './pages/contact/Contact';
import Register from './features/auth/register';
import PurchaseDetails from './features/publications/purchaseDetails/PurchaseDetails';
import PublicationList from './features/publications/publicationList/PublicationList';
import SobreNosotros from './components/shared/pageFooter/sobreNosotros/sobreNosotros';
import FAQ from './components/shared/pageFooter/FAQ/FAQ';
import TermsAndConditions from './components/shared/pageFooter/terminosPolitica/TerminosPolitica';
import HelpResources from './components/shared/pageFooter/recursosUtiles/RecursosUtiles';
import Protected from './components/shared/routes/protected/protected';
import Profile from './components/shared/perfil/Profile'
import HeroSection from './components/layout/Slider/HeroSection';
import PublicationFormSeller from './features/sellerFeatures/PublicationFormSeller';
import ProtectedSeller from './components/shared/routes/protected/ProtectedSeller';
import SellerRegister from './features/sellerFeatures/SellerRegister';
import ChatComponent from './pages/chatPage/ChatComponent'

import { getPublications } from './services/api';
import MyOrders from './components/shared/myOrders/MyOrders';
import ProtectedAdminRoute from './components/shared/routes/protected/ProtectedAdminRoute';
import AdminDashboard from './pages/adminDashboard/AdminDashboard';
import Unauthorized from './components/shared/routes/unauthorized/Unauthorized';

const AppContent = () => {
  const [publications, setPublications] = useState([]);

  const location = useLocation();

  const fetchPublications = () => {
    getPublications()
      .then(data => {
        setPublications(data)

      })
      .catch(console.error);
  };

  useEffect(() => {
    fetchPublications();
  }, []);

  const hideLayout = location.pathname === '/login' || location.pathname === '/Register';

  return (
    <div className={`flex flex-col items-center min-h-screen bg-[#FDE7B9] ${!hideLayout ? 'mt-16' : ''}`}>
      {!hideLayout && <ResponsiveAppBar publications={publications} />}

      <Routes>
        <Route path="/" element={<Navigate to="login" />} />
        <Route path="/Register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route element={<Protected />}>
          <Route
            path="/home"
            element={
              <>
                <HeroSection />
                <Dashboard publications={publications} />
              </>
            }
          />
          <Route path="/registro-vendedor" element={<SellerRegister />} />
          <Route element={<ProtectedSeller />}>
            <Route path="/MyPosts" element={<MyPosts />} />
            <Route path="/AñadirPublicacion" element={<PublicationFormSeller onRefresh={fetchPublications} />} />
            <Route path="/vender" element={<SellerDashboard onRefresh={fetchPublications} />} />
          </Route>
          <Route path="/chat" element={<ChatComponent />} />
          <Route path="/MisPedidos" element={<MyOrders />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/SobreNosotros" element={<SobreNosotros />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/TerminosPoliticas" element={<TermsAndConditions />} />
          <Route path="/RecursosUtiles" element={<HelpResources />} />
          <Route path="/Perfil" element={<Profile />} />
          <Route path="/Perfil/:id" element={<Profile />} />
          <Route path="/catalogo" element={<Catalogo />}>
            <Route index element={<PublicationList publications={publications} />} />
            <Route path=":id" element={<DetailPublication />} />
          </Route>
          <Route path="/catalogo/:id/purchase-details" element={<PurchaseDetails />} />
          <Route path='/Slider' element={<HeroSection />} />
          <Route element={<ProtectedAdminRoute />}>
            <Route path="/panel-admin" element={<AdminDashboard onRefresh={fetchPublications} />} />
          </Route>
        </Route>
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!hideLayout && <Footer />}
    </div >
  );
};

export default AppContent;