import React from 'react';
import PublicationCard from '../publicationCard/PublicationCard';

const PublicationList = ({ publicaciones }) => {

    return (
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {publicaciones.map((publicacion) => (
                <div key={publicacion.ID_Publication}>
                    <PublicationCard
                        id={publicacion.ID_Publication}
                        title={publicacion.Title}
                        description={publicacion.DescriptionProduct}
                        img={publicacion.ImageUrl}
                        price={publicacion.Price}
                        status={publicacion.State}
                        brand={publicacion.brand}
                        city={publicacion.city}
                        quantity={publicacion.quantity}
                    />
                </div>
            ))}
        </div>
    );
};

export default PublicationList;
