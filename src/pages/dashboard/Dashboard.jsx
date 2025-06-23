import BrandsCarousel from '../../features/homeSections/brandsCarousel/BrandsCarousel'
import FeaturedProductsCarousel from '../../features/homeSections/offerProudctsCarousel/OfferProductsCarousel'
import MainCategories from '../../features/homeSections/MainCategories/MainCategories'
import BenefitsSection from '../../features/homeSections/BenefitsSection/BenefitsSection'
import TestimonialsSection from '../../features/homeSections/TestimonialsSection/TestimonialsSection'
import Carousel from '../../features/homeSections/carousel/Carousel'


const Dashboard = ({ publications }) => {

    const onlyNewPublications = publications.filter(p => p.State === 'nuevo');

    return (
        <div className="flex flex-col items-center w-full py-10 bg-[#FDE7B9] ">
            {/* Carrusel de destacados 
      <FeaturedProductsCarousel products={featuredProducts} />*/}
            <Carousel />

            {/* Nuevo carrusel de marcas */}
            <BrandsCarousel />

            <FeaturedProductsCarousel products={onlyNewPublications} />
            <MainCategories />
            <BenefitsSection />
            <TestimonialsSection />
        </div>
    );
};

export default Dashboard

