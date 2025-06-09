/*
-cuando integre los datos del usuario validado 
voy a tener que hacer una función asincrona adentro del useEfect que captura el formData y poder esperar la respuesta del servidor.
-Pobrar hasta tener el backend almacernar los datos en el localStoraged (es para no esperar a tener todo terminado e ir probando mientras tanto).
-Todo lo que entra en el front (validaciones) tiene que coincidir con el back.
*/

import { useState, useEffect } from "react";
import { createBuyer } from "../../services/api";
import { useNavigate } from "react-router";

function RegisterValidations() {

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

  /*
  useEffect(() => {
    try {
      console.log(formData);

      createBuyer(formData)
    } catch (error) {

    }
  }, [])
  */

  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  // Debuggear cambios en formData
  useEffect(() => {
    try {

    } catch (error) {

    }
  }, [formData]); // Se ejecuta cada que formData cambie


  const handleChange = (e) => {
    // 1. Desestructuración del evento para obtener propiedades clave
    const { name, value, type } = e.target;
    /* 
    name: nombre del campo (debe coincidir con las keys de formData)
    value: valor para inputs normales (text, email, password, etc.)
    type: tipo de input (para distinguir checkboxes)
    checked: estado de checkboxes (true/false)
    */

    // 3. Actualización del estado de forma inmutable
    setFormData({
      ...formData,
      [name]: value
    })
    /*
    - prevState: captura el estado actual garantizando que no usamos un estado obsoleto
    - [name]: usa la notación de corchetes para actualizar dinámicamente la key correspondiente
    - fieldValue: el valor ya procesado (checked o value)
  */
  };

  /*
  const validateField = (e, message) => {
    const validateName = e.target;

    const validateNameValue = e.target.value;
    if (validateNameValue.trim() === '') {
      setErrors(e, message)
    }
  }
  */
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
    }
    if (formData.Phone.trim() === '') {
      newErrors.Phone = 'El teléfono es obligatorio';
    }
    if (formData.RegistrationDate.trim() === '') {
      newErrors.RegistrationDate = 'La fecha es obligatoria';
    }
    if (formData.DNI.trim() === '') {
      newErrors.DNI = 'El DNI es obligatorio';
    }
    if (formData.ID_City.trim() === '') {
      newErrors.ID_City = 'Debe seleccionar una ciudad';
    }
    if (formData.Passwords.trim() === '') {
      newErrors.Passwords = 'La contraseña es obligatoria';
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

      setSuccessMessage("Se registró correctamente");

      // Esperar 2 segundos antes de redirigir
      setTimeout(() => {
        navigate('/login');
      }, 2000);

    } catch (error) {
      console.error('Error al crear usuario:', error);
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