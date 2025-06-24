import { useEffect, useState } from 'react';

import { useAuth } from '../../../services/auth/AuthContext.jsx'
import { Link, useLocation, useNavigate } from 'react-router';

import { Close } from '@mui/icons-material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import avatarDefault from '../../../assets/avatarDefault.jpeg';
import { getSellerByPublicationId } from '../../../services/api';

const DetailPublication = () => {
  const [seller, setSeller] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const { user } = useAuth()

  const publicacion = location.state.publicacion;
  const { id, title, description, img, price, status, brand, city, category, subCategory } = publicacion;


  useEffect(() => {
    const fetchSeller = async () => {
      try {
        const data = await getSellerByPublicationId(id);
        setSeller(data);
        
      } catch (err) {
        console.error(err);
      }
    };

    fetchSeller();
  }, [id]);

  const handleBuyClick = () => {
    if (user.id === seller?.Buyer?.ID_Buyers) {
      toast.info("No podés comprar tu propia publicación.");
      return;
    }

    navigate(`/catalogo/${id}/purchase-details`, {
      state: { publicacion: { id, title, img, price } }
    });
  };

  const hadleChatClick = () => {
    if (user.id === seller?.Buyer?.ID_Buyers) {
      toast.info("No podés chatear con vos mismo.");
      return;
    }

    navigate('/chat', {
      state: {
        chatUsers: {
          userID: user.id,
          sellerID: seller.Buyer?.ID_Buyers
        }
      }
    });
  };
  return (
    <div className="relative bg-[#FDE7B9] rounded-[8px] max-w-[900px] mx-auto my-8 p-8">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-2 right-2 text-gray-600 hover:text-black"
      >
        <Close />
      </button>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-shrink-0">
          <img
            src={img}
            alt="Guitarra"
            className="w-[400px] max-h-[350px] rounded-[8px] object-contain"
          />
        </div>

        <div className="flex-1">
          <h2 className="text-2xl font-bold">{title}</h2>
          <div className='flex'>
            <p className="bg-[#C5CEBB] rounded-[25px] text-sm text-gray-800 px-5 mr-3">{category?.CategoryName}</p>
            <p className="bg-[#C5CEBB] rounded-[25px] text-sm text-gray-800 px-5">{subCategory?.NameSubCategory}</p>
          </div>
          <p className="mt-2"><strong>Estado:</strong> {status}</p>
          <p className="mt-2 whitespace-pre-line text-sm"> {description}</p>
          <p className="mt-2"><strong>Marca:</strong> {brand}</p>
          <p className="mt-2"><strong>Ubicación:</strong> {city?.Province?.Name}, {city?.Name}</p>

          <hr className="my-6 border-black/70" />

          <p className="text-[2.5rem] font-semibold mt-4">${price}</p>
          <button
            className="mt-4 mr-4 bg-[#401809] text-white px-6 py-2 rounded font-semibold hover:bg-[#4e332d]"
            onClick={handleBuyClick}
          >
            Comprar ahora
          </button>
          <button
            className="mt-4 bg-[#401809] text-white px-6 py-2 rounded font-semibold hover:bg-[#4e332d]"
            onClick={hadleChatClick}
          >
            Chatear
          </button>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="font-bold">Vendedor:</h3>
        {seller ? (
          <Link to={`/Perfil/${seller.Buyer?.ID_Buyers}`}>
            <div className="flex items-center gap-3 mt-2">
              <img
                src={seller.Buyer?.avatarUrl ? `http://localhost:3000${seller.Buyer?.avatarUrl}` : avatarDefault}
                alt='avatarSeller'
                className="w-10 h-10 rounded-full bg-gray-300" />
              <div>
                <p className="font-bold">{seller.Buyer?.BuyersName} {seller.Buyer?.BuyersLastName}</p>
                <p className="text-sm text-gray-700 flex items-center gap-1">
                  <LocationOnIcon fontSize="small" />
                  {seller.Buyer?.City?.Name}, {seller.Buyer?.City?.Province?.Name}
                </p>
                <p className="text-sm text-gray-700">Contacto: {seller.Buyer?.Phone}</p>
              </div>
            </div>
          </Link>
        ) : (
          <p className="text-sm text-gray-500">Cargando vendedor...</p>
        )}
      </div>
    </div>
  );
};

export default DetailPublication;