import React, { useState } from 'react';
import PublicationFilters from '../../publicationFilters/PublicationFilters';
import PublicationCard from '../publicationCard/PublicationCard';
import { useSearch } from '../../../services/auth/SearchContext';

const PublicationList = ({ publications }) => {
  

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedState, setSelectedState] = useState('');
  
  const { searchTitle } = useSearch();


  const filteredPublications = publications.filter(p => {
    const matchCategory = selectedCategory ? p.Category?.ID_Category === parseInt(selectedCategory) : true;
    const matchSubcategory = selectedSubcategory ? p.SubCategory?.ID_SubCategory === parseInt(selectedSubcategory) : true;
    const matchProvince = selectedProvince ? p.City?.Province?.ID_Province === parseInt(selectedProvince) : true;
    const matchCity = selectedCity ? p.City?.ID_City === parseInt(selectedCity) : true;
    const matchState = selectedState ? p.State === selectedState : true;
    const matchTitle = searchTitle ? p.Title.toLowerCase().includes(searchTitle.toLowerCase()) : true;

    return matchCategory && matchSubcategory && matchProvince && matchCity && matchState && matchTitle;
  });

  return (
    <div className="flex px-4 py-6 max-w-[1500px] mx-auto gap-8 ">
      <PublicationFilters
        publications={publications}
        selectedCategory={selectedCategory}
        selectedSubcategory={selectedSubcategory}
        selectedProvince={selectedProvince}
        selectedCity={selectedCity}
        selectedState={selectedState}
        onCategoryChange={setSelectedCategory}
        onSubcategoryChange={setSelectedSubcategory}
        onProvinceChange={setSelectedProvince}
        onCityChange={setSelectedCity}
        onStateChange={setSelectedState}
      />

      <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredPublications.length > 0 ? (
          filteredPublications.map(publication => (
            <PublicationCard
              key={publication.ID_Publication}
              id={publication.ID_Publication}
              title={publication.Title}
              description={publication.DescriptionProduct}
              img={publication.ImageUrl}
              price={publication.Price}
              status={publication.State}
              brand={publication.Brand}
              city={publication.City}
              category={publication.Category}
              subCategory={publication.SubCategory}
              id_seller={publication.ID_Sellers}
            />
          ))
        ) : (
          <p>No se encontraron publicaciones.</p>
        )}
      </section>
    </div>
  );
};

export default PublicationList;
