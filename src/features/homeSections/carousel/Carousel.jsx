import { useEffect, useState } from "react";
import { getLatestPublications } from "../../../services/api";
import PublicationCard from "../../publications/publicationCard/PublicationCard";

const Carousel = () => {
    const [publications, setPublications] = useState([]);

    useEffect(() => {
        getLatestPublications()
            .then((data) => {
                setPublications(data)
            })
            .catch(console.error);
    }, []);

    const duplicated = [...publications, ...publications];    

    return (
        <div className="w-full max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#FFE0C4] font-poppins bg-[#40250D] p-5 rounded-2xl w-[300px] m-auto mb-[80px] mt-[50px]">
                Últimas publicaciones
            </h2>
            <div className="overflow-hidden w-full max-w-6xl mx-auto">
                <div className="flex w-max animate-marquee">
                    {duplicated.map((pub, i) => (
                        <div key={i} className="min-w-[300px] mx-2">
                            <PublicationCard
                                id={pub.ID_Publication}
                                title={pub.Title}
                                description={pub.DescriptionProduct}
                                img={pub.ImageUrl}
                                price={pub.Price}
                                status={pub.State}
                                brand={pub.Brand}
                                city={pub.City}
                                category={pub.Category}
                                id_seller={pub.ID_Sellers}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
