import { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";

import avatarDefault from '../../../assets/avatarDefault.jpeg';
import { useAuth } from "../../../services/auth/AuthContext";
import { useNavigate, useParams } from "react-router";

const Toast = ({ message, type = "success", onClose }) => {
    return (
        <div
            className={`fixed top-4 right-4 z-50 px-4 py-2 rounded shadow text-white 
        ${type === "success" ? "bg-green-600" : "bg-red-600"}`}
            role="alert"
            onClick={onClose}
            style={{ cursor: "pointer" }}
        >
            {message}
        </div>
    );
};

const Profile = () => {
    const { user, setUser } = useAuth();
    const [sellerData, setSellerData] = useState(null);
    const [editingField, setEditingField] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [toast, setToast] = useState({ message: "", type: "success", visible: false });

    const { id } = useParams();
    console.log(id);
    

    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            if (id) {
                try {
                    const res = await fetch(`http://localhost:3000/buyers/${id}`);
                    const data = await res.json();
                    
                    setSellerData({
                        profileImage: data.avatarUrl
                            ? data.avatarUrl.startsWith("/") ? data.avatarUrl : data.avatarUrl
                            : "/uploads/avatars/avatarDefault.jpeg",
                        name: data.BuyersName,
                        lastname: data.BuyersLastName,
                        nickname: data.NickName,
                        email: data.Email,
                        phone: data.Phone,
                        country: "Argentina",
                        province: data.City?.Province?.Name || "",
                        city: data.City?.Name || "",
                        seller: data.Seller || null
                    });
                } catch (err) {
                    console.error("Error al cargar el perfil:", err);
                }
            } else if (user) {
                setSellerData({
                    profileImage: user.avatarUrl?.startsWith("/") ? user.avatarUrl : `/uploads/avatars/${user.avatarUrl}`,
                    name: user.name,
                    lastname: user.lastname,
                    nickname: user.nickname,
                    email: user.email,
                    phone: user.phone,
                    country: "Argentina",
                    province: user.city?.province?.name || "",
                    city: user.city?.name || "",
                    seller: user.seller || null
                });
            }
        };

        fetchProfile();
    }, [id, user]);

    useEffect(() => {
        return () => {
            if (previewImage) URL.revokeObjectURL(previewImage);
        };
    }, [previewImage]);

    const handleChange = (field, value) => {
        setSellerData({ ...sellerData, [field]: value });
    };

    const handleEdit = (field) => {
        setEditingField(field);
    };

    const handleBlur = () => {
        setEditingField(null);
    };

    const handleNavigateSellerDashboard = () => {
        navigate("/vender")
    };

    const handleProfileImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSellerData(prev => ({ ...prev, profileImage: file }));
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    const handleSaveChanges = async () => {
        try {
            const formData = new FormData();

            if (sellerData.profileImage instanceof File) {
                formData.append('avatar', sellerData.profileImage);
            }

            formData.append('BuyersName', sellerData.name);
            formData.append('BuyersLastName', sellerData.lastname);
            formData.append('NickName', sellerData.nickname);
            formData.append('Email', sellerData.email);
            formData.append('Phone', sellerData.phone);

            const res = await fetch(`http://localhost:3000/buyers/${user.id}`, {
                method: "PUT",
                body: formData
            });

            if (!res.ok) throw new Error("No se pudo guardar el perfil");

            showToast("Perfil actualizado con éxito.", "success");
            setEditingField(null);

            const resData = await res.json();

            console.log("resData:", resData);

            const updatedUser = {
                ...user,
                name: sellerData.name,
                lastname: sellerData.lastname,
                nickname: sellerData.nickname,
                email: sellerData.email,
                phone: sellerData.phone,
                avatarUrl: resData.avatarUrl,
            };
            setUser(updatedUser);
        } catch (error) {
            console.error("Error al guardar el perfil:", error);
            showToast("Hubo un error al guardar los cambios.", "error");
        }
    };

    const isOwnProfile = !id || id === user?.id?.toString();

    const renderField = (label, field) => (
        <div className="group flex flex-col sm:flex-row items-start sm:items-center gap-1">
            <span className="text-[#401809] font-semibold w-32">{label}:</span>
            {editingField === field && isOwnProfile ? (
                <input
                    className="bg-white text-[#363738] border-b border-[#401809] focus:outline-none"
                    type="text"
                    value={sellerData[field]}
                    onChange={(e) => handleChange(field, e.target.value)}
                    onBlur={handleBlur}
                    autoFocus
                />
            ) : (
                <div className="flex items-center gap-2">
                    <span className="text-[#363738]">{sellerData[field]}</span>
                    {isOwnProfile && (
                        <FaEdit
                            className="text-[#40250D] cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            onClick={() => handleEdit(field)}
                        />
                    )}
                </div>
            )}
        </div>
    );

    const showToast = (message, type = "success") => {
        setToast({ message, type, visible: true });
        setTimeout(() => setToast(prev => ({ ...prev, visible: false })), 3000);
    };


    const getImageSrc = () => {
        if (previewImage) return previewImage;

        if (sellerData.profileImage instanceof File)
            return URL.createObjectURL(sellerData.profileImage);

        if (typeof sellerData.profileImage === "string")
            return `http://localhost:3000${sellerData.profileImage}`;

        return avatarDefault;
    };

    if (!sellerData) return <div className="text-center mt-10">Cargando perfil...</div>;

    return (
        <>
            <div className="max-w-xl mx-auto bg-[#FDE7B9] p-6 rounded-2xl mt-10">
                <div className="flex flex-col items-center">
                    <div className="relative group">
                        <img
                            src={getImageSrc()}
                            alt="Perfil"
                            className="w-32 h-32 rounded-full object-cover border-4 border-[#401809]"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = avatarDefault;
                            }}

                        />
                        {isOwnProfile && (
                            <label className="absolute bottom-2 right-2 bg-[#401809] text-white p-1 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                <FaEdit />
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleProfileImageChange}
                                />
                            </label>
                        )}
                    </div>
                    <h2 className="text-2xl mt-4 text-[#401809]">{sellerData.name} {sellerData.lastname}</h2>
                    <span className="text-[#363738] text-sm">@{sellerData.nickname}</span>
                </div>

                <div className="mt-8 space-y-6">
                    {renderField("Nombre", "name")}
                    {renderField("Apellido", "lastname")}
                    {renderField("Nickname", "nickname")}
                    {renderField("Correo", "email")}
                    {renderField("Teléfono", "phone")}
                    {renderField("País", "country")}
                    {renderField("Provincia", "province")}
                    {renderField("Ciudad", "city")}
                </div>

                {isOwnProfile && (
                    <div className="mt-6 text-center">
                        <button 
                            onClick={handleNavigateSellerDashboard}
                            className="bg-[#401809] text-[#FFE0C4] px-4 py-2 rounded-full hover:bg-[#40250D] transition-colors">
                            Ir al Panel de Publicaciones
                        </button>
                    </div>
                )}

                {isOwnProfile && (
                    <div className="mt-6 text-center">
                        <button
                            onClick={handleSaveChanges}
                            className="bg-[#401809] text-[#FFE0C4] px-4 py-2 rounded-full hover:bg-[#40250D] transition-colors"
                        >
                            Guardar Cambios
                        </button>
                    </div>
                )}
            </div>

            {toast.visible && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast(prev => ({ ...prev, visible: false }))}
                />
            )}
        </>
    );
};

export default Profile;
