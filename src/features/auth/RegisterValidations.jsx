import { useState, useEffect } from "react";
import { createBuyer } from "../../services/api";
import { useNavigate } from "react-router";
import { useAuth } from "../../services/auth/AuthContext";
import { notifyMissingFields, notifySuccessAdd } from "../../pages/notification/notification";

function RegisterValidations(onRegisterSuccess) {

  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState('');

  const [formData, setFormData] = useState({
    BuyersName: '',
    BuyersLastName: '',
    NickName: '',
    Email: '',
    Phone: '',
    RegistrationDate: '',
    DNI: '',
    ID_City: '',
    Passwords: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [successMessage, setSuccessMessage] = useState('');

  const { isAuthenticated } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    try {

    } catch (error) {

    }
  }, [formData]);

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const res = await fetch("http://localhost:3000/provincias-ciudades");
        const data = await res.json();
        setProvinces(data);
      } catch (err) {
        console.error("Error al cargar provincias:", err);
      }
    };

    fetchProvinces();
  }, []);

  useEffect(() => {
    const fetchCities = async () => {
      if (!selectedProvince) return;
      try {
        const res = await fetch(`http://localhost:3000/ciudades/${selectedProvince}`);
        const data = await res.json();
        setCities(data);
      } catch (err) {
        console.error("Error al cargar ciudades:", err);
      }
    };

    fetchCities();
  }, [selectedProvince]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    })

  };

  const validateBlur = (e) => {
    const { name, value } = e.target;

    if (value.trim() === '') {
      setErrors(prev => ({
        ...prev,
        [name]: 'Este campo es obligatorio',
      }));
    } else {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (formData.BuyersName.trim() === '') {
      newErrors.BuyersName = 'El nombre es obligatorio';
    }
    if (formData.BuyersLastName.trim() === '') {
      newErrors.BuyersLastName = 'El apellido es obligatorio';
    }
    if (formData.NickName.trim() === '') {
      newErrors.NickName = 'Su nombre de usuario es obligatorio';
    }
    if (formData.Email.trim() === '') {
      newErrors.Email = 'El email es obligatorio';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.Email)) {
        newErrors.Email = 'El email no es válido';
      }
    }
    if (formData.Phone.trim() === '') {
      newErrors.Phone = 'El teléfono es obligatorio';
    } else {
      const phoneRegex = /^[0-9]{7,}$/;
      if (!phoneRegex.test(formData.Phone)) {
        newErrors.Phone = 'Ingrese un teléfono válido';
      }
    }
    if (formData.DNI.trim() === '') {
      newErrors.DNI = 'El DNI es obligatorio';
    } else {
      const dniRegex = /^[0-9]{7,8}$/;
      if (!dniRegex.test(formData.DNI)) {
        newErrors.DNI = 'El DNI debe contener solo números (7-8 dígitos)';
      }
    }
    if (!selectedProvince || selectedProvince === '') {
      newErrors.selectedProvince = 'Debe seleccionar una provincia';
    }
    if (formData.ID_City.trim() === '') {
      newErrors.ID_City = 'Debe seleccionar una ciudad';
    }
    if (formData.Passwords.trim() === '') {
      newErrors.Passwords = 'La contraseña es obligatoria';
    } else {
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
      if (!passwordRegex.test(formData.Passwords)) {
        newErrors.Passwords = 'La contraseña debe tener al menos 8 caracteres, incluir mayúsculas, minúsculas y números';
      }
    }
    if (formData.confirmPassword.trim() === '') {
      newErrors.confirmPassword = 'La confirmación es obligatoria';
    }
    if (formData.Passwords !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    try {
      const formDataToSend = { ...formData };

      delete formDataToSend.RegistrationDate;

      delete formDataToSend.confirmPassword;

      const response = await createBuyer(formDataToSend);

      if (isAuthenticated) {
        onRegisterSuccess();

      }

      setFormData({
        BuyersName: '',
        BuyersLastName: '',
        NickName: '',
        Email: '',
        Phone: '',
        RegistrationDate: '',
        DNI: '',
        ID_City: '',
        Passwords: '',
        confirmPassword: '',
      });
      notifySuccessAdd(`¡Registro con éxito!`)

      if (!isAuthenticated) {
        navigate('/login');
      }

    } catch (error) {
      console.error('Error al crear usuario:', error);

      if (error.message.includes("email") || error.message.includes("Email")) {
        setErrors((prev) => ({
          ...prev,
          Email: error.message,
        }));
      } else {
        notifyMissingFields(`¡Hubo un error al registrarte!`);
      }
    }
  };

  return {
    formData,
    handleChange,
    validateBlur,
    errors,
    setErrors,
    handleSubmit,
    successMessage,
    provinces,
    cities,
    selectedProvince,
    setSelectedProvince,
  };
}

export default RegisterValidations;