
import Login from '../../features/auth/Login'
import Register from '../../features/auth/Register'
import PurchaseDetails from '../../features/publications/purchaseDetails/PurchaseDetails'
import SellerDashboard from '../sellerDashboard/SellerDashboard'
import SobreNosotros from '../../components/shared/pageFooter/sobreNosotros/sobreNosotros'
import FAQ from '../../components/shared/pageFooter/FAQ/FAQ'
import TermsAndConditions from '../../components/shared/pageFooter/terminosPolitica/TerminosPolitica'
import HelpResources from '../../components/shared/pageFooter/recursosUtiles/RecursosUtiles'
import HeroSection from '../../components/layout/Slider/HeroSection'
import FeaturedProductsCarousel from '../../features/publications/productCarousel/FeaturedProductsCarousel'
import BrandsCarousel from '../../features/publications/brandsCarousel/BrandsCarousel'
import OfferProductsCarousel from '../../features/publications/offerProudctsCarousel/OfferProductsCarousel'
import MainCategories from '../../features/publications/MainCategories/MainCategories'
import BenefitsSection from '../../features/publications/BenefitsSection/BenefitsSection'
import TestimonialsSection from '../../features/publications/TestimonialsSection/TestimonialsSection'


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

      <OfferProductsCarousel products={featuredProducts}/>
      <MainCategories/>
      <BenefitsSection/>
      <TestimonialsSection/>
      
    </div>
  );
};

export default Dashboard