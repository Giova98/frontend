import { motion } from 'framer-motion';

// Datos simulados (puedes reemplazarlos con una API más adelante)
const postsData = [
  {
    id: 1,
    title: 'Guitarra Eléctrica',
    marca: 'Fender',
    price: 1200,
    image_url: 'https://productos.mjmusic.com.ar/images/00000000LE362MBL70717LE362MBL.jpg',
    state: 'Nuevo',
    date: '2025-04-20',
  },
  {
    id: 2,
    title: 'Bajo Eléctrico',
    marca: 'Ibanez',
    price: 850,
    image_url: 'https://media1.101db.com.ar/14787-Productos/bajo-electrico-fender-player-precision-bass-black-mastil-maple.jpg',
    state: 'Usado',
    date: '2025-04-18',
  },
  {
    id: 3,
    title: 'Amplificador',
    marca: 'Marshall',
    price: 500,
    image_url: 'https://http2.mlstatic.com/D_NQ_NP_894173-MLA49434081312_032022-O.webp',
    state: 'Nuevo',
    date: '2025-04-15',
  },
  {
    id: 4,
    title: 'Pedal de Efectos',
    marca: 'Boss',
    price: 150,
    image_url: 'https://http2.mlstatic.com/D_983646-MLA47531306677_092021-C.jpg',
    state: 'Usado',
    date: '2025-04-10',
  },
];

const MyPosts = () => {
  // Animaciones para las tarjetas
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
    }),
  };

  // Animación para el título
  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <div className="min-h-screen bg-[#FDE7B9] pt-24 pb-6 flex flex-col items-center">
      {/* Encabezado */}
      <motion.div initial="hidden" animate="visible" variants={titleVariants}>
        <div className="bg-[#40250D] p-8 rounded-xl mb-24 text-center shadow-lg">
          <h2 className="text-4xl font-bold text-[#FDE7B9] font-poppins">
            Mis Publicaciones
          </h2  >
        </div>
      </motion.div>

      {/* Listado de publicaciones */}
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {postsData.map((post, index) => (
            <motion.div
              key={post.id}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
            >
              <div className="relative bg-gradient-to-br from-[#FDE7B9] to-[#401809] rounded-xl border border-[#363738] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <img
                  src={post.image_url}
                  alt={post.title}
                  className="h-[290px] w-[290px] object-cover rounded-t-xl"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold text-[#401809] font-poppins mb-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-[#401809] font-poppins">
                    <strong>Marca:</strong> {post.marca}
                  </p>
                  <p className="text-sm text-[#401809] font-poppins">
                    <strong>Precio:</strong> ${post.price}
                  </p>
                  <p className="text-sm text-[#401809] font-poppins">
                    <strong>Estado:</strong> {post.state}
                  </p>
                  <p className="text-sm text-[#401809] font-poppins">
                    <strong>Fecha:</strong> {post.date}
                  </p>
                </div>
                {/* Botón flotante que aparece al hacer hover */}
                <button
                  className="absolute top-2 right-2 bg-[#363738] text-[#FFE0C4] px-3 py-1 rounded-md opacity-1 group-hover:opacity-100 transition-opacity duration-300"
                  onClick={() => alert(`Editar publicación: ${post.title}`)}
                >
                  Editar
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPosts;