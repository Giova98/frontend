import React, { useState } from 'react';
import PublicationFilters from '../../publicationFilters/PublicationFilters';
import PublicationCard from '../publicationCard/PublicationCard';

const PublicationList = ({ publicaciones }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');

  const filteredPublicaciones = publicaciones.filter(p => {
    const matchCategory = selectedCategory ? p.Category?.ID_Category === parseInt(selectedCategory) : true;
    const matchSubcategory = selectedSubcategory ? p.SubCategory?.ID_SubCategory === parseInt(selectedSubcategory) : true;
    return matchCategory && matchSubcategory;
  });

  return (
    <div className="flex px-4 py-6 max-w-[1500px] mx-auto gap-8">
      {/* Filtros */}
      <PublicationFilters
        publicaciones={publicaciones}
        selectedCategory={selectedCategory}
        selectedSubcategory={selectedSubcategory}
        onCategoryChange={setSelectedCategory}
        onSubcategoryChange={setSelectedSubcategory}
      />

      {/* Lista de publicaciones */}
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
              city={publicacion.city}
              quantity={publicacion.quantity}
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
