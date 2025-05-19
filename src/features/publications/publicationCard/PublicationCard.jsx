import React from 'react'
import { useNavigate } from 'react-router-dom'

const PublicationCard = ({ id, title, description, img, price, status, brand, city, quantity }) => {
    const navigate = useNavigate()

    const handleCardClick = () => {
        const publicacion = { id, title, description, img, price, status, brand, city, quantity }

        navigate(`/catalogo/${id}`, {
            state: { publicacion }
        })
    }

    const handleBuyClick = (event) => {
        event.stopPropagation();

        const publicacion = { id, title, description, img, price, status, brand, city, quantity }

        navigate(`/catalogo/${id}/purchase-details`, {
            state: { publicacion }
        })
    }

    return (
        <div
            className="
                relative
                group
                max-w-[230px] min-w-[200px] 
                bg-[#401809] 
                text-[#fff] 
                my-[20px] mx-auto 
                rounded-[7px] 
                shadow-[5px_5px_5px_rgba(0,0,0,0.25)]"
            onClick={handleCardClick}
        >
            <img
                src={img}
                alt="imagen de Producto"
                className="w-full h-[140px] bg-[#fff] rounded-t-[7px] object-contain"
            />
            <div className="px-[15px] py-[3px] text-left">
                <span className="inline-block bg-[#D2D2D2] rounded-[10px] px-[10px] py-0 mb-[8px] text-[0.75rem] text-[#535353]">
                    Categoria
                </span>
                <h3 className="text-[1.2rem] font-semibold leading-tight pb-[4px] m-[0] ">{title}</h3>
                <p className="text-2 pb-[5px] m-[0]">{city}</p>
                <p className="text-[2rem] pb-[5px] m-[0] font-poppins">${price}</p>
                <p className="text-[1.25rem] pb-[8px] m-[0]">{status}</p>
            </div>

            <button
                onClick={handleBuyClick}
                className="
                    bg-[#9D9B8F] 
                    text-[#fff] 
                    font-bold
                    rounded-[5px]
                    w-[90%]
                    p-[6px]
                    absolute 
                    left-[5%] 
                    bottom-[10px]
                    opacity-0 
                    transition-all
                    duration-300
                    group-hover:opacity-100">
                Comprar
            </button>
        </div>
    )
}

export default PublicationCard
