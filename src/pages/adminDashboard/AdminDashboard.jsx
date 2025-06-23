import { useEffect, useState } from "react";
import { useAuth } from "../../services/auth/AuthContext";
import Register from "../../features/auth/register";
import { motion } from 'framer-motion';
import { notifyMissingFields, notifySuccessAdd } from "../notification/notification";

async function updatePublication(id, data) {
  const res = await fetch(`http://localhost:3000/publications/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Error actualizando publicación");
  return await res.json();
}

const AdminDashboard = ({ onRefresh }) => {
  const { token } = useAuth();
  const [users, setUsers] = useState([]);
  const [publications, setPublications] = useState([]);
  const [sellers, setSellers] = useState([]);

  const [editingPost, setEditingPost] = useState(null);
  const [formData, setFormData] = useState({});

  const [confirmData, setConfirmData] = useState({
    show: false,
    type: null,
    id: null,
    message: '',
  });

  useEffect(() => {
    fetchUsers();
    fetchPublications();
    fetchSellers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:3000/admin/usuarios", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error("Error al obtener usuarios", error);
    }
  };

  const fetchPublications = async () => {
    try {
      const res = await fetch("http://localhost:3000/admin/publicaciones", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();

      setPublications(data);
    } catch (error) {
      console.error("Error al obtener publicaciones", error);
    }
  };

  const fetchSellers = async () => {
    try {
      const res = await fetch("http://localhost:3000/admin/sellers", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setSellers(data);
    } catch (error) {
      console.error("Error al obtener usuarios", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await fetch(`http://localhost:3000/admin/usuarios/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      closeConfirm();

      if (onRefresh) {
        onRefresh();
      } else {
        setUsers(users.filter((u) => u.ID_Buyers !== id));
      }
      fetchUsers();
      notifySuccessAdd('!Se elimino el usuario con exito!')
    } catch (error) {
      console.error("Error al eliminar usuario", error);
      notifyMissingFields(`¡Hubo un error al eliminar el usuario!`)
      closeConfirm();
    }
  };

  const deletePublication = async (id) => {
    try {
      await fetch(`http://localhost:3000/admin/publicaciones/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      closeConfirm();

      if (onRefresh) {
        onRefresh();
      } else {
        setPublications(publications.filter((p) => p.ID_Publication !== id));
      }
      fetchPublications();
      notifySuccessAdd(`¡Eliminacion de publicacion con exito!`)

    } catch (error) {
      console.error("Error al eliminar publicación", error);
      notifyMissingFields(`!Error al eliminar publicacion`)
      closeConfirm();
    }
  };

  const deleteSellers = async (id) => {
    try {
      await fetch(`http://localhost:3000/admin/seller/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      closeConfirm();

      if (onRefresh) {
        onRefresh();
      } else {
        setSellers(sellers.filter((s) => s.ID_Buyers !== id));
      }
      fetchSellers();
      notifySuccessAdd(`¡Se elimino un usuario!`)
    } catch (error) {
      console.error("Error al eliminar usuario", error);
      notifyMissingFields(`¡Error al eliminar el usuario!`)
      closeConfirm();
    }
  };

  const openConfirm = (type, id) => {
    setConfirmData({
      show: true,
      type,
      id,
      message:
        type === "user"
          ? "¿Eliminar este usuario?, se eliminaran sus publicaciones."
          : type === "publication"
            ? "¿Eliminar esta publicación?"
            : "¿Eliminar este vendedor?, se eliminaran sus publicaciones (no elimina su usuario).",
    });
  };

  const closeConfirm = () => {
    setConfirmData({
      show: false,
      type: null,
      id: null,
      message: "",
    });
  };

  const confirmAction = () => {
    if (confirmData.type === "user") {
      deleteUser(confirmData.id);
    } else if (confirmData.type === "publication") {
      deletePublication(confirmData.id);
    } else if (confirmData.type === "seller") {
      deleteSellers(confirmData.id);
    }
  };

  const openEditor = (post) => {
    setEditingPost(post);
    setFormData(post); // Carga datos del post a formData para editar
  };

  const closeEditor = () => {
    setEditingPost(null);
    setFormData({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      await updatePublication(editingPost.ID_Publication, formData);
      setPublications((prev) =>
        prev.map((pub) =>
          pub.ID_Publication === editingPost.ID_Publication ? { ...pub, ...formData } : pub
        )
      );
      onRefresh();
      closeEditor();
      notifySuccessAdd(`¡Cambios Guardados!`)
    } catch (error) {
      console.error("Error guardando publicación:", error);
      notifyMissingFields(`¡Error al guardar cambios!`)
    }
  };

  return (
    <>
      <h2 className="text-4xl font-bold mt-10">Panel de Administración</h2>
      <div className="p-6 relative flex flex-col lg:flex-row gap-6 w-full">
        <div className="flex-1 pl-[100px]">

          <section className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">Usuarios</h3>
            <ul className="space-y-2">
              {users.map((user) => (
                <li
                  key={user.ID_Buyers}
                  className=" bg-[#C5CEBB] shadow p-4 rounded flex justify-between items-center"
                >
                  <div>
                    <p>
                      {user.BuyersName} {user.BuyersLastName} - {user.Email}
                    </p>
                  </div>
                  <button
                    onClick={() => openConfirm("user", user.ID_Buyers)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">Publicaciones</h3>
            <ul className="space-y-2">
              {publications.map((pub) => (
                <li
                  key={pub.ID_Publication}
                  className="bg-[#C5CEBB] shadow p-4 rounded flex justify-between items-center"
                >
                  <div>
                    <p>
                      {pub.Title} - ${pub.Price}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => openEditor(pub)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => openConfirm("publication", pub.ID_Publication)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Eliminar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">Vendedores</h3>
            <ul className="space-y-2">
              {sellers.map((user) => (
                <li
                  key={user.ID_Buyers}
                  className="bg-[#C5CEBB] shadow p-4 rounded flex justify-between items-center"
                >
                  <div>
                    <p>
                      {user.BuyersName} {user.BuyersLastName} - {user.Email}
                    </p>
                  </div>
                  <button
                    onClick={() => openConfirm("seller", user.ID_Buyers)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="w-full lg:w-1/2 lg:sticky lg:top-6 lg:self-start">
          <Register onRegisterSuccess={fetchUsers} />
        </div>
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

        {confirmData.show && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-80 max-w-full shadow-lg">
              <p className="mb-4">{confirmData.message}</p>
              <div className="flex justify-end gap-3">
                <button
                  onClick={closeConfirm}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancelar
                </button>
                <button
                  onClick={confirmAction}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AdminDashboard;
