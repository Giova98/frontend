import React from 'react'
import { useLocation, useNavigate } from 'react-router'
import { Close } from '@mui/icons-material'
import LocationOnIcon from '@mui/icons-material/LocationOn'

const DetailPublication = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const { title, description, img, price, status, brand } = location.state.publicacion

  return (
    <div className="relative bg-[#FFEFEF] rounded-[8px] max-w-[900px] mx-auto my-8 p-8">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-2 right-2 text-gray-600 hover:text-black"
      >
        <Close />
      </button>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Imagen */}
        <div className="flex-shrink-0">
          <img
            src={img}
            alt="Guitarra"
            className="w-[400px] max-h-[350px] rounded-[8px] object-contain"
          />
        </div>

        {/* Detalles */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-sm text-gray-500">category1</p>
          <p className="mt-2"><strong>Estado:</strong> {status}</p>
          <p className="mt-2 whitespace-pre-line text-sm">{description}</p>
          <p className="mt-2"><strong>Marca:</strong> {brand}</p>

          <hr className="my-6 border-black/70" />

          <p className="text-[2.5rem] font-semibold mt-4">${price}</p>
          <button className="mt-4 bg-[#401809] text-white px-6 py-2 rounded font-semibold hover:bg-[#4e332d]">
            Comprar ahora
          </button>
        </div>
      </div>

      {/* Información del vendedor */}
      <div className="mt-8">
        <h3 className="font-bold">Vendedor:</h3>
        <div className="flex items-center gap-3 mt-2">
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
          <div>
            <p className="font-bold">Nombre Del Vendedor</p>
            <p className="text-sm text-gray-700 flex items-center gap-1">
              <LocationOnIcon fontSize="small" />
              Santa Fe, Rosario, Sarmiento 1423
            </p>
            <p className="text-sm text-gray-700">Contacto: +54 3464-578823</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailPublication
