import { useState } from 'react';
import { motion } from 'framer-motion';
import { notifySuccessAdd } from '../../../pages/notification/notification';
import { toast } from 'react-toastify';

const MyPosts = ({ posts, setPosts, onRefresh }) => {
  const [editingPost, setEditingPost] = useState(null);
  const [formData, setFormData] = useState({});

  const openEditor = (post) => {
    setEditingPost(post.ID_Publication);
    setFormData({ ...post });
  };

  const closeEditor = () => {
    setEditingPost(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const updatePublication = async (id, data) => {
    try {
      const {
        Title,
        Brand,
        Price,
        ImageUrl,
        State,
        DescriptionProduct,
        Sku,
        ID_Category,
        ID_SubCategory,
        ID_City,
        ID_Sellers
      } = data;

      const filteredData = {
        Title,
        Brand,
        Price,
        ImageUrl,
        State,
        DescriptionProduct,
        Sku,
        ID_Category,
        ID_SubCategory,
        ID_City,
        ID_Sellers
      };

      const res = await fetch(`http://localhost:3000/publications/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(filteredData),
      });

      if (!res.ok) {
        throw new Error('Error al actualizar la publicación');
      }

      const updated = await res.json();
      return updated;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const handleSave = async () => {
    const updatedPost = await updatePublication(editingPost, formData);

    if (updatedPost) {
      setPosts((prev) =>
        prev.map((p) =>
          p.ID_Publication === editingPost ? { ...updatedPost } : p
        )
      );
      onRefresh();
      notifySuccessAdd('¡Actualización con éxito!');
      closeEditor();
    }
  };

  const handleDelete = async (id) => {
    const confirmToast = toast(
      ({ closeToast }) => (
        <div>
          <p>¿Estás seguro que querés eliminar esta publicación?</p>
          <div className="mt-2 flex justify-end gap-2">
            <button
              onClick={closeToast}
              className="bg-gray-300 text-black px-3 py-1 rounded hover:bg-gray-400"
            >
              Cancelar
            </button>
            <button
              onClick={async () => {
                await deletePublication(id);
                closeToast();
              }}
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Confirmar
            </button>
          </div>
        </div>
      ),
      {
        position: 'top-center',
        autoClose: false,
        closeOnClick: false,
        closeButton: false,
      }
    );
  };

  const deletePublication = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/publications/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error();

      setPosts((prev) => prev.filter((p) => p.ID_Publication !== id));
      notifySuccessAdd('¡Publicación eliminada!');
    } catch (err) {
      console.error(err);
      notifyError('No se pudo eliminar la publicación.');
    }
  };

  return (
    <div className="min-h-screen bg-[#FDE7B9] pt-24 pb-6 flex flex-col items-center">
      <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
        <div className="bg-[#40250D] p-8 rounded-xl mb-24 text-center shadow-lg">
          <h2 className="text-4xl font-bold text-[#FDE7B9] font-poppins">Mis Publicaciones</h2>
        </div>
      </motion.div>

      {!posts || posts.length === 0 ? (
        <p className="text-[#401809] font-poppins text-xl">No hay publicaciones disponibles.</p>
      ) : (
        <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {posts.map((post, index) => (
            <motion.div
              key={post.ID_Publication}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative bg-gradient-to-br from-[#FDE7B9] to-[#401809] rounded-xl border border-[#363738] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <img src={post.ImageUrl} alt={post.Title} className="h-[290px] w-[290px] object-cover rounded-t-xl" />
              <div className="p-4 text-[#401809] font-poppins">
                <h2 className="text-xl font-bold mb-2">{post.Title}</h2>
                <p><strong>Marca:</strong> {post.Brand}</p>
                <p><strong>Precio:</strong> ${post.Price}</p>
                <p><strong>Estado:</strong> {post.State}</p>
              </div>

              <div className="absolute top-2 left-2 flex space-x-[130px]">
                <button
                  onClick={() => handleDelete(post.ID_Publication)}
                  className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 transition"
                  aria-label={`Eliminar publicación ${post.Title}`}
                >
                  Eliminar
                </button>
                <button
                  onClick={() => openEditor(post)}
                  className="bg-[#363738] text-[#FFE0C4] px-3 py-1 rounded-md hover:bg-[#292a2b] transition"
                  aria-label={`Editar publicación ${post.Title}`}
                >
                  Editar
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}

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
              <input name="Title" value={formData.Title || ""} onChange={handleChange} placeholder="Título" className="p-2 rounded border border-[#401809]" />
              <input name="Brand" value={formData.Brand || ""} onChange={handleChange} placeholder="Marca" className="p-2 rounded border border-[#401809]" />
              <input name="Price" value={formData.Price || ""} onChange={handleChange} placeholder="Precio" type="number" className="p-2 rounded border border-[#401809]" />
              <input name="ImageUrl" value={formData.ImageUrl || ""} onChange={handleChange} placeholder="URL de imagen" className="p-2 rounded border border-[#401809]" />
              <textarea name="DescriptionProduct" value={formData.DescriptionProduct || ""} onChange={handleChange} placeholder="Descripción" className="p-2 rounded border border-[#401809]" />
              <input name="Sku" value={formData.Sku || ""} onChange={handleChange} placeholder="SKU" className="p-2 rounded border border-[#401809]" />
              <select name="State" value={formData.State || ""} onChange={handleChange} className="p-2 rounded border border-[#401809]">
                <option value="nuevo">Nuevo</option>
                <option value="usado">Usado</option>
                <option value="Poco usado">Poco usado</option>
                <option value="Reparado">Reparado</option>
              </select>
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
