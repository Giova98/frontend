import { useState, useEffect } from "react"

function RegisterValidationsV2() {

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
   return {
   formData,
   handleChange
   };
}

export default RegisterValidationsV2
