import { useState } from 'react';
import { motion } from 'framer-motion';
import { notifySuccessAdd } from '../../../pages/notification/notification';

const initialPosts = [
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
  const [posts, setPosts] = useState(initialPosts);
  const [editingPost, setEditingPost] = useState(null);
  const [formData, setFormData] = useState({});

  const openEditor = (post) => {
    setEditingPost(post.id);
    setFormData({ ...post });
  };

  const closeEditor = () => {
    setEditingPost(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setPosts((prev) =>
      prev.map((p) => (p.id === editingPost ? { ...formData, id: p.id } : p))
    );
    notifySuccessAdd(`¡Actualizacion con exito!`)
    closeEditor();
  };

  return (
    <div className="min-h-screen bg-[#FDE7B9] pt-24 pb-6 flex flex-col items-center">
      <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
        <div className="bg-[#40250D] p-8 rounded-xl mb-24 text-center shadow-lg">
          <h2 className="text-4xl font-bold text-[#FDE7B9] font-poppins">Mis Publicaciones</h2>
        </div>
      </motion.div>

      <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative bg-gradient-to-br from-[#FDE7B9] to-[#401809] rounded-xl border border-[#363738] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <img src={post.image_url} alt={post.title} className="h-[290px] w-[290px] object-cover rounded-t-xl" />
            <div className="p-4 text-[#401809] font-poppins">
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p><strong>Marca:</strong> {post.marca}</p>
              <p><strong>Precio:</strong> ${post.price}</p>
              <p><strong>Estado:</strong> {post.state}</p>
              <p><strong>Fecha:</strong> {post.date}</p>
            </div>
            <button
              onClick={() => openEditor(post)}
              className="absolute top-2 right-2 bg-[#363738] text-[#FFE0C4] px-3 py-1 rounded-md"
            >
              Editar
            </button>
          </motion.div>
        ))}
      </div>

      {/* Modal de edición */}
      {editingPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-[#FDE7B9] rounded-xl p-8 shadow-2xl w-[90%] max-w-lg relative"
          >
            <button
              onClick={closeEditor}
              className="absolute top-4 right-4 text-[#401809] text-xl font-bold"
            >
              ×
            </button>
            <h3 className="text-2xl font-bold text-[#401809] mb-6 text-center font-poppins">Editar Publicación</h3>
            <div className="flex flex-col gap-3">
              <input name="title" value={formData.title} onChange={handleChange} placeholder="Título" className="p-2 rounded border border-[#401809]" />
              <input name="marca" value={formData.marca} onChange={handleChange} placeholder="Marca" className="p-2 rounded border border-[#401809]" />
              <input name="price" value={formData.price} onChange={handleChange} placeholder="Precio" type="number" className="p-2 rounded border border-[#401809]" />
              <input name="image_url" value={formData.image_url} onChange={handleChange} placeholder="URL de imagen" className="p-2 rounded border border-[#401809]" />
              <select name="state" value={formData.state} onChange={handleChange} className="p-2 rounded border border-[#401809]">
                <option value="Nuevo">Nuevo</option>
                <option value="Usado">Usado</option>
              </select>
              <input name="date" value={formData.date} onChange={handleChange} placeholder="Fecha" type="date" className="p-2 rounded border border-[#401809]" />
              <button onClick={handleSave} className="mt-4 bg-[#401809] text-[#FDE7B9] px-4 py-2 rounded hover:bg-[#2e1005] transition">
                Guardar cambios
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default MyPosts;
