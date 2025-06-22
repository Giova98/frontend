import { useState, useEffect } from "react";
import { createBuyer } from "../../services/api";
import { useNavigate } from "react-router";
import { useAuth } from "../../services/auth/AuthContext";
import { notifyMissingFields, notifySuccessAdd } from "../../pages/notification/notification";

function RegisterValidations(onRegisterSuccess) {

  //formData: Describe claramente que contiene datos de formulario
  //setFormData: Es la funcion actualizadora
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

  // Debuggear cambios en formData
  useEffect(() => {
    try {

    } catch (error) {

    }
  }, [formData]); // Se ejecuta cada que formData cambie


  const handleChange = (e) => {
    // 1. Desestructuración del evento para obtener propiedades clave
    const { name, value } = e.target;
    /* 
    name: nombre del campo (debe coincidir con las keys de formData)
    value: valor para inputs normales (text, email, password, etc.)
    */

    // 3. Actualización del estado de forma inmutable
    setFormData({
      ...formData,
      [name]: value
    })
    /*
    - prevState: captura el estado actual garantizando que no usamos un estado obsoleto
    - [name]: usa la notación de corchetes para actualizar dinámicamente la key correspondiente
  */
  };

  const validateBlur = (e) => {
    const { name, value } = e.target;

    if (value.trim() === '') {
      // Campo vacío → guardar mensaje de error
      setErrors(prev => ({
        ...prev,
        [name]: 'Este campo es obligatorio',
      }));
    } else {
      // Campo válido → eliminar error si ya estaba
      setErrors(prev => {
        const newErrors = { ...prev }; // Copio el estado actual de errores
        delete newErrors[name]; // Borro el error del campo corregido
        return newErrors; // Devuelvo la nueva lista de errores
      });
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault(); // 1. Evitar que se recargue la página

    const newErrors = {}; // 2. Objeto para guardar errores

    // 3. Validar todos los campos
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
    if (formData.RegistrationDate.trim() === '') {
      newErrors.RegistrationDate = 'La fecha es obligatoria';
    }
    if (formData.DNI.trim() === '') {
      newErrors.DNI = 'El DNI es obligatorio';
    } else {
      const dniRegex = /^[0-9]{7,8}$/;
      if (!dniRegex.test(formData.DNI)) {
        newErrors.DNI = 'El DNI debe contener solo números (7-8 dígitos)';
      }
    }
    if (formData.ID_City.trim() === '') {
      newErrors.ID_City = 'Debe seleccionar una ciudad';
    }
    if (formData.Passwords.trim() === '') {
      newErrors.Passwords = 'La contraseña es obligatoria';
    }else {
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

    // 4. Revisar si hay errores
    if (Object.keys(newErrors).length > 0) return; // Si hay errores, salir

    // 5. Si no hay errores, enviamos al backend
    try {
      const response = await createBuyer(formData);

      
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
      notifyMissingFields(`¡Hubo un error al registrarce!`)
    }
  };

  return {
    formData,
    handleChange,
    validateBlur,
    errors,
    handleSubmit,
    successMessage
  };
}

export default RegisterValidations;