import BrandsCarousel from '../../features/homeSections/brandsCarousel/BrandsCarousel'
import OfferProductsCarousel from '../../features/homeSections/offerProudctsCarousel/OfferProductsCarousel'
import MainCategories from '../../features/homeSections/MainCategories/MainCategories'
import BenefitsSection from '../../features/homeSections/BenefitsSection/BenefitsSection'
import TestimonialsSection from '../../features/homeSections/TestimonialsSection/TestimonialsSection'
import Carousel from '../../features/homeSections/carousel/Carousel'


const Dashboard = ({ publicaciones }) => {

    const onlyNewPublications = publicaciones.filter(p => p.State === 'nuevo');

    return (
        <div className="flex flex-col items-center w-full py-10 bg-[#FDE7B9] ">
            {/* Carrusel de destacados 
      <FeaturedProductsCarousel products={featuredProducts} />*/}
            <Carousel />

            {/* Nuevo carrusel de marcas */}
            <BrandsCarousel />

            <OfferProductsCarousel products={onlyNewPublications} />
            <MainCategories />
            <BenefitsSection />
            <TestimonialsSection />
        </div>
    );
};

export default Dashboard

