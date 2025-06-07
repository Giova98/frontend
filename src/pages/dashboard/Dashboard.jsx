

import FeaturedProductsCarousel from '../../features/homeSections/productCarousel/FeaturedProductsCarousel'
import BrandsCarousel from '../../features/homeSections/brandsCarousel/BrandsCarousel'
import OfferProductsCarousel from '../../features/homeSections/offerProudctsCarousel/OfferProductsCarousel'
import MainCategories from '../../features/homeSections/MainCategories/MainCategories'
import BenefitsSection from '../../features/homeSections/BenefitsSection/BenefitsSection'
import TestimonialsSection from '../../features/homeSections/TestimonialsSection/TestimonialsSection'
import Carousel from '../../features/homeSections/carousel/Carousel'


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
    <div className="flex flex-col items-center w-full py-10 bg-[#FDE7B9] ">
      {/* Carrusel de destacados 
      <FeaturedProductsCarousel products={featuredProducts} />*/}
      <Carousel />

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