
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
import SobreNosotros from './pages/sobreNosotros/sobreNosotros'
import PurchaseDetails from './features/publications/purchaseDetails/PurchaseDetails';
import PublicationList from './features/publications/publicationList/PublicationList';
import FAQ from './pages/FAQ/FAQ';
import TermsAndConditions from './pages/terminosPolitica/TerminosPolitica'
import HelpResources from './pages/recursosUtiles/RecursosUtiles';


const publicaciones = [
  {
    id: 1,
    title: 'Auriculares Bluetooth',
    description: 'Auriculares inalámbricos con sonido envolvente. Perfectos para correr.cascavcadvcdavadvadv',
    img: 'https://th.bing.com/th/id/OIP.DEwRIsQF7Gqqw6kgdEFCCwHaE7?cb=iwc2&rs=1&pid=ImgDetMain',
    price: 8500,
    status: 'Nuevo',
    brand: 'Sony',
    city: 'Buenos Aires',
    quantity: 10,
  },
  {
    id: 2,
    title: 'Guitarra Eléctrica',
    description: 'Guitarra eléctrica tipo Stratocaster, ideal para principiantes.',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71Oo2ZKroFL._AC_SL1500_.jpg',
    price: 145000,
    status: 'Usado',
    brand: 'Fender',
    city: 'Córdoba',
    quantity: 4,
  },
  {
    id: 3,
    title: 'Teclado MIDI',
    description: 'Teclado MIDI de 61 teclas, ideal para producción musical.',
    img: 'https://th.bing.com/th/id/OIP.539jLs5-c-sDWMtwyzBxegHaE8?cb=iwc2&rs=1&pid=ImgDetMain',
    price: 12000,
    status: 'Nuevo',
    brand: 'Akai Professional',
    city: 'Rosario',
    quantity: 7,
  },
  {
    id: 4,
    title: 'Bajo Eléctrico',
    description: 'Bajo eléctrico tipo Jazz, ideal para todo tipo de música.',
    img: 'https://th.bing.com/th/id/OIP.jGyCN8nkkvEXW-rHUIgatwHaHc?cb=iwc2&rs=1&pid=ImgDetMain',
    price: 90000,
    status: 'Poco usado',
    brand: 'Ibanez',
    city: 'Casilda',
    quantity: 3,
  },
  {
    id: 5,
    title: 'Cajón Flamenco',
    description: 'Cajón flamenco de madera con excelente resonancia y sonido.',
    img: 'https://th.bing.com/th/id/OIP.CDVhWtX6MhBqJiT7ZEuu6gHaJt?cb=iwc2&rs=1&pid=ImgDetMain',
    price: 25000,
    status: 'Usado',
    brand: 'Meinl',
    city: 'Mendoza',
    quantity: 6,
  }
];

function App() {
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
          <Route path='/SobreNosotros' element={<SobreNosotros/>}/>
          <Route path='/FAQ' element={<FAQ/>}/>
          <Route path='/TerminosPoliticas' element={<TermsAndConditions/>}/>
          <Route path='/RecursosUtiles' element={<HelpResources/>}/>
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