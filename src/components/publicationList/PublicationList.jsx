import React from 'react';
import PublicationCard from '../publicationCard/PublicationCard';

const PublicationList = ({ publicaciones }) => {
    return (
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {publicaciones.map((publicacion) => (
                <div key={publicacion.id}>
                    <PublicationCard
                        id={publicacion.id}
                        title={publicacion.title}
                        description={publicacion.description}
                        img={publicacion.img}
                        price={publicacion.price}
                        status={publicacion.status}
                        brand={publicacion.brand}
                    />
                </div>
            ))}
        </div>
    );
};

export default PublicationList;
