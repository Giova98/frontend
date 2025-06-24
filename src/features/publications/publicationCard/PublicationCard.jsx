import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../../services/auth/AuthContext';

const PublicationCard = ({ id, title, description, img, price, status, brand, city, category, subCategory, id_seller }) => {
    const navigate = useNavigate();
    const { user } = useAuth();
    

    const handleCardClick = () => {
        const publicacion = { id, title, description, img, price, status, brand, city, category, subCategory }

        navigate(`/catalogo/${id}`, {
            state: { publicacion }
        })
    }

    const handleBuyClick = (event) => {
        event.stopPropagation();
        
        if (user.id === id_seller) {
            toast.info("No podés comprar tu propia publicación.");

            return;
        }

        const publicacion = { id, title, description, img, price, status, brand, city }

        navigate(`/catalogo/${id}/purchase-details`, {
            state: { publicacion }
        })
    }


    return (
        <div
            className="
                relative
                group
                w-[250px]
                h-[430px]
                bg-[#401809] 
                text-[#fff] 
                my-[15px] mx-auto 
                rounded-[10px] 
                shadow-[5px_5px_5px_rgba(0,0,0,0.25)]
                "
            onClick={handleCardClick}
        >
            <img
                src={img}
                alt="imagen de Producto"
                className="w-full h-[240px] bg-[#fff] rounded-t-[7px] object-contain"
            />
            <div className="px-[15px] py-[3px] text-left">
                <span className="inline-block bg-[#D2D2D2] rounded-[7px] px-[15px] py-0.5 mt-[10px] mb-[8px] text-[0.80rem] text-[black]">
                    {category?.CategoryName}
                </span>
                <h3 className="text-[1.3rem] font-semibold leading-tight pb-[4px] mb-[2px] ">{title}</h3>
                <p className="text-2 pb-[5px] m-[0]">{city?.Province?.Name}, {city?.Name}</p>
                <p className="text-[1.7rem] pb-[5px] m-[0] font-poppins">${price}</p>
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
