import { useEffect, useState } from "react";
import { useAuth } from "../../services/auth/AuthContext";

const AdminDashboard = () => {
  const { token } = useAuth();
  const [users, setUsers] = useState([]);
  const [publications, setPublications] = useState([]);

  const [confirmData, setConfirmData] = useState({
    show: false,
    type: null,
    id: null,
    message: '',
  });

  useEffect(() => {
    fetchUsers();
    fetchPublications();
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

  const deleteUser = async (id) => {
    try {
      await fetch(`http://localhost:3000/admin/usuarios/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(users.filter((u) => u.ID_Buyers !== id));
      closeConfirm();
    } catch (error) {
      console.error("Error al eliminar usuario", error);
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
      setPublications(publications.filter((p) => p.ID_Publications !== id));
      closeConfirm();
    } catch (error) {
      console.error("Error al eliminar publicación", error);
      closeConfirm();
    }
  };

  // Abre modal de confirmación con datos
  const openConfirm = (type, id) => {
    setConfirmData({
      show: true,
      type,
      id,
      message:
        type === "user"
          ? "¿Eliminar este usuario?"
          : "¿Eliminar esta publicación?",
    });
  };

  // Cierra modal de confirmación
  const closeConfirm = () => {
    setConfirmData({
      show: false,
      type: null,
      id: null,
      message: "",
    });
  };

  // Confirma la acción según el tipo
  const confirmAction = () => {
    if (confirmData.type === "user") {
      deleteUser(confirmData.id);
    } else if (confirmData.type === "publication") {
      deletePublication(confirmData.id);
    }
  };

  return (
    <div className="p-6 relative">
      <h2 className="text-2xl font-bold mb-4">Panel de Administración</h2>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Usuarios</h3>
        <ul className="space-y-2">
          {users.map((user) => (
            <li
              key={user.ID_Buyers}
              className="bg-white shadow p-4 rounded flex justify-between items-center"
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

      <section>
        <h3 className="text-xl font-semibold mb-2">Publicaciones</h3>
        <ul className="space-y-2">
          {publications.map((pub) => (
            <li
              key={pub.ID_Publications}
              className="bg-white shadow p-4 rounded flex justify-between items-center"
            >
              <div>
                <p>
                  {pub.Title} - ${pub.Price}
                </p>
              </div>
              <button
                onClick={() => openConfirm("publication", pub.ID_Publications)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </section>

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
  );
};

export default AdminDashboard;
