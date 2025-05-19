
import { useState, useEffect } from "react"

function RegisterValidations() {

  //formData: Describe claramente que contiene datos de formulario
  //setFormData: Es la funcion actualizadora
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    isSeller: false, // El usuario no es vendedor por defecto
    isUser: false // El usuario no es comprador por defecto
  });
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  // Debuggear cambios en formData
  useEffect(() => {
    console.log("Datos actualizados:", formData);
  }, [formData]); // Se ejecuta cada que formData cambie


  const handleChange = (e) => {
    // 1. Desestructuración del evento para obtener propiedades clave
    const { name, value, type, checked } = e.target;
    /* 
    name: nombre del campo (debe coincidir con las keys de formData)
    value: valor para inputs normales (text, email, password, etc.)
    type: tipo de input (para distinguir checkboxes)
    checked: estado de checkboxes (true/false)
    */

    // 2. Determinar qué valor usar según el tipo de input
    const fieldValue = type === 'checkbox' ? checked : value;
    /*
    Si es checkbox → usa el estado checked (booleano)
    Si es input normal → usa el value (string)
    */

    // 3. Actualización del estado de forma inmutable
    setFormData({
      ...formData,
      [name]: fieldValue
    })
    /*
    - prevState: captura el estado actual garantizando que no usamos un estado obsoleto
    - [name]: usa la notación de corchetes para actualizar dinámicamente la key correspondiente
    - fieldValue: el valor ya procesado (checked o value)
  */
  };
  const validateField = (e, message) => {
    const validateName = e.target;

    const validateNameValue = e.target.value;
    if (validateNameValue === 0) {
      setErrors(e, message)
    }
  }
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
  const handleSubmit = (e) => {
    e.preventDefault(); // 1. Evitar que se recargue la página

    const newErrors = {}; // 2. Objeto para guardar errores

    // 3. Validar todos los campos
    if (formData.fullName.trim() === '') {
      newErrors.fullName = 'El nombre es obligatorio';
    }
    if (formData.username.trim() === '') {
      newErrors.username = 'Su nombre de usuario es obligatorio'
    }
    if (formData.email.trim() === '') {
      newErrors.email = 'El email es obligatorio';
    }
    if (formData.phone.trim() === '') {
      newErrors.phone = 'El telefono es obligatorio'
    }
    if (formData.password.trim() === '') {
      newErrors.password = 'La contraseña es obligatoria'
    }
    if (formData.confirmPassword.trim() === '') {
      newErrors.confirmPassword = 'La confirmacion de la contraseña es obligatoria'
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }

    setErrors(newErrors);

    // 4. Revisar si hay errores
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // Si hay errores, mostrarlos
    } else {
      setErrors({}); // No hay errores, limpiar
      console.log('Formulario enviado con éxito:', formData);
      alert('¡Formulario enviado con éxito!');
      // Acá podrías hacer un fetch para enviar los datos a un servidor, si quisieras
    }
  };
  return {
    formData,
    handleChange,
    validateBlur,
    errors,
    handleSubmit,
  };
}

export default RegisterValidations;
