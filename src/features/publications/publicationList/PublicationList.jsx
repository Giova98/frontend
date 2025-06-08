import React, { useState } from 'react';
import PublicationFilters from '../../publicationFilters/PublicationFilters';
import PublicationCard from '../publicationCard/PublicationCard';

const PublicationList = ({ publicaciones }) => {
  
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [searchTitle, setSearchTitle] = useState('');

  const filteredPublicaciones = publicaciones.filter(p => {
    const matchCategory = selectedCategory ? p.Category?.ID_Category === parseInt(selectedCategory) : true;
    const matchSubcategory = selectedSubcategory ? p.SubCategory?.ID_SubCategory === parseInt(selectedSubcategory) : true;
    const matchProvince = selectedProvince ? p.City?.Province?.ID_Province === parseInt(selectedProvince) : true;
    const matchCity = selectedCity ? p.City?.ID_City === parseInt(selectedCity) : true;
    const matchState = selectedState ? p.State === selectedState : true;
    const matchTitle = searchTitle ? p.Title.toLowerCase().includes(searchTitle.toLowerCase()) : true;

    return matchCategory && matchSubcategory && matchProvince && matchCity && matchState && matchTitle;
  });

  return (
    <div className="flex px-4 py-6 max-w-[1500px] mx-auto gap-8">
      <PublicationFilters
        publicaciones={publicaciones}
        selectedCategory={selectedCategory}
        selectedSubcategory={selectedSubcategory}
        selectedProvince={selectedProvince}
        selectedCity={selectedCity}
        selectedState={selectedState}
        searchTitle={searchTitle}
        onCategoryChange={setSelectedCategory}
        onSubcategoryChange={setSelectedSubcategory}
        onProvinceChange={setSelectedProvince}
        onCityChange={setSelectedCity}
        onStateChange={setSelectedState}
        onSearchChange={setSearchTitle}
      />

      <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredPublicaciones.length > 0 ? (
          filteredPublicaciones.map(publicacion => (
            <PublicationCard
              key={publicacion.ID_Publication}
              id={publicacion.ID_Publication}
              title={publicacion.Title}
              description={publicacion.DescriptionProduct}
              img={publicacion.ImageUrl}
              price={publicacion.Price}
              status={publicacion.State}
              brand={publicacion.Brand}
              city={publicacion.City}
              category={publicacion.Category}
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
