export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const validatePassword = (password) => {
    return password.length >= 8;
};

export const validatePhone = (phone) => {
    const regex = /^[0-9]{8,15}$/;
    return regex.test(phone);
};

export const validateDNI = (dni) => {
    const regex = /^[0-9]{7,8}$/;
    return regex.test(dni);
};

export const validateForm = ({ firstName, nickName, email, password, confirmPassword, phone, dni }) => {
    const errors = {};

    if (!firstName.trim()) errors.firstName = "El nombre es obligatorio";
    if (!nickName.trim()) errors.nickName = "El usuario es obligatorio";

    if (!validateEmail(email)) errors.email = "Correo inválido";

    if (!validatePassword(password)) errors.password = "La contraseña debe tener al menos 8 caracteres";
    if (password !== confirmPassword) errors.confirmPassword = "Las contraseñas no coinciden";

    if (!validatePhone(phone)) errors.phone = "Número inválido";
    if (!validateDNI(dni)) errors.dni = "DNI inválido";

    return errors;
};
