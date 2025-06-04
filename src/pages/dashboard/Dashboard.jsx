
import Login from '../../features/auth/Login'
import PublicationList from '../../features/publications/publicationList/PublicationList'
import Register from '../../features/auth/Register'
import PurchaseDetails from '../../features/publications/purchaseDetails/PurchaseDetails'
import MyPosts from '../../components/shared/myPosts/MyPosts'
import SellerDashboard from '../sellerDashboard/SellerDashboard'
import SobreNosotros from '../../components/shared/pageFooter/sobreNosotros/sobreNosotros'
import FAQ from '../../components/shared/pageFooter/FAQ/FAQ'
import TermsAndConditions from '../../components/shared/pageFooter/terminosPolitica/TerminosPolitica'
import HelpResources from '../../components/shared/pageFooter/recursosUtiles/RecursosUtiles'
import HeroSection from '../../components/layout/Slider/HeroSection'
import FeaturedProductsCarousel from '../../features/publications/productCarousel/FeaturedProductsCarousel'
import BrandsCarousel from '../../features/publications/brandsCarousel/BrandsCarousel'




{/* Home (por ahora contendra todos los componentes) */}
const Dashboard = ({ publicaciones }) => {
  // Filtra productos destacados (los primeros 6 con mejor estado)
  const featuredProducts = [...publicaciones]
    .sort((a, b) => {
      // Ordena por: Nuevo > Poco usado > Usado
      const statusOrder = { 'Nuevo': 3, 'Poco usado': 2, 'Usado': 1 };
      return statusOrder[b.status] - statusOrder[a.status] || b.quantity - a.quantity;
    })
    .slice(0, 6);

  return (
    <div className="flex flex-col items-center w-full py-10 bg-[#FFEFEF]">
      {/* Carrusel de destacados */}
      <FeaturedProductsCarousel products={featuredProducts} />

      {/* Nuevo carrusel de marcas */}
      <BrandsCarousel />

      {/* Lista principal de publicaciones */}
      <div className="w-full max-w-[1000px] px-4 mt-8">
        <h2 className="text-2xl font-bold mb-6 text-[#401809]">Todos los instrumentos</h2>
        <PublicationList publicaciones={publicaciones} />
      </div>

      {/* Resto de tus componentes */}
      <SellerDashboard />
    </div>
  );
};

export default Dashboard