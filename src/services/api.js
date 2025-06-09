const API_URL = "http://localhost:3000";

export const getPublications = async () => {
  const res = await fetch(`${API_URL}/publications`);
  if (!res.ok) throw new Error("Error al obtener publicaciones");
  return await res.json();
};

export const getLatestPublications = async () => {
  const res = await fetch(`${API_URL}/publications/latest`);
  if (!res.ok) throw new Error("Error al obtener las ultimas publicaciones");
  return await res.json();
};

export const getPublicationById = async (id) => {
  const res = await fetch(`${API_URL}/publications/${id}`);
  if (!res.ok) throw new Error("Publicación no encontrada");
  return await res.json();
};

export const getSellerByPublicationId = async (id) => {
  const res = await fetch(`${API_URL}/publications/${id}/seller`);
  if (!res.ok) throw new Error("Error al obtener el vendedor");
  return await res.json();
};

export const createPublication = async (data) => {
  const res = await fetch(`${API_URL}/publications`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Error al crear publicación");
  return await res.json();
};

export const createBuyer = async (data) => {  
  const res = await fetch(`${API_URL}/buyers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Error al crear publicación");
  return await res.json();
};

export const updatePublication = async (id, data) => {
  const res = await fetch(`${API_URL}/publications/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Error al actualizar publicación");
  return await res.json();
};

export const deletePublication = async (id) => {
  const res = await fetch(`${API_URL}/publications/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Error al eliminar publicación");
  return await res.json();
};
