import { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import avatarDefault from '../../assets/avatarDefault.jpeg';
import { useAuth } from "../../services/auth/AuthContext";

const SellerProfile = () => {
    const { user } = useAuth();
    const [sellerData, setSellerData] = useState(null);
    const [editingField, setEditingField] = useState(null);

    useEffect(() => {
        if (user) {
            setSellerData({
                profileImage: user.avatarUrl || avatarDefault,
                name: user.name,
                lastname: user.lastname,
                nickname: user.nickname,
                email: user.email,
                phone: user.phone,
                country: "Argentina", // fijo por ahora
                province: user.city?.province?.name || "",
                city: user.city?.name || "",
            });
        }
    }, [user]);

    const handleChange = (field, value) => {
        setSellerData({ ...sellerData, [field]: value });
    };

    const handleEdit = (field) => {
        setEditingField(field);
    };

    const handleBlur = () => {
        setEditingField(null);
    };

    const handleProfileImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSellerData({ ...sellerData, profileImage: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const renderField = (label, field) => (
        <div className="group flex flex-col sm:flex-row items-start sm:items-center gap-1">
            <span className="text-[#401809] font-semibold w-32">{label}:</span>
            {editingField === field ? (
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
                    <FaEdit
                        className="text-[#40250D] cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        onClick={() => handleEdit(field)}
                    />
                </div>
            )}
        </div>
    );

    if (!sellerData) return <div className="text-center mt-10">Cargando perfil...</div>;

    return (
        <div className="max-w-xl mx-auto bg-[#FDE7B9] p-6 rounded-2xl mt-10">
            <div className="flex flex-col items-center">
                <div className="relative group">
                    <img
                        src={sellerData.profileImage}
                        alt="Perfil"
                        className="w-32 h-32 rounded-full object-cover border-4 border-[#401809]"
                    />
                    <label className="absolute bottom-2 right-2 bg-[#401809] text-white p-1 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <FaEdit />
                        <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleProfileImageChange}
                        />
                    </label>
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

            <div className="mt-6 text-center">
                <button className="bg-[#401809] text-[#FFE0C4] px-4 py-2 rounded-full hover:bg-[#40250D] transition-colors">
                    Ir al Panel de Publicaciones
                </button>
            </div>
        </div>
    );
};

export default SellerProfile;
