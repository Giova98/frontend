import * as React from 'react';
import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage } from '@toolpad/core/SignInPage';
import { createTheme } from '@mui/material/styles';
import { useColorScheme } from '@mui/material/styles';
import { getDesignTokens, inputsCustomizations } from '../../theme/ThemeProvider';


// Definimos un arreglo de objetos llamado "providers", que contiene los métodos de autenticación disponibles.
// Cada objeto tiene un "id" que identifica al proveedor y un "name" que es el nombre que se muestra en la interfaz.
const providers = [
  { id: 'github', name: 'GitHub' },
  { id: 'google', name: 'Google' },
  { id: 'credentials', name: 'Email y Contraseña' },
];

// Creamos una función "signIn" que simula el proceso de inicio de sesión con un proveedor.
// Esta función retorna una promesa que después de medio segundo (500ms) muestra por consola el "id" del proveedor usado.
// Luego resuelve la promesa con un error simulado (esto sirve de ejemplo para manejar errores de login).
const signIn = async (provider) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Sign in with ${provider.id}`);
      resolve({ error: 'This is a mock error message.' });
    }, 500);
  });
  return promise;
};

// Definimos el componente principal "Login" que se va a exportar como default.
export default function Login() {

  // Obtenemos el modo de color actual del sistema (puede ser "light" o "dark") usando el hook "useColorScheme".
  const { mode, systemMode } = useColorScheme();

  // Calculamos el modo final que vamos a usar: si está en "modo sistema", usamos el modo del sistema;
  // si no, usamos el modo configurado manualmente. Si no hay ninguno definido, por defecto usamos "light".
  const calculatedMode = (mode === 'system' ? systemMode : mode) ?? 'light';

  // Llamamos a "getDesignTokens" pasándole el modo actual, para obtener los estilos de diseño correspondientes (paleta de colores, etc.).
  const brandingDesignTokens = getDesignTokens(calculatedMode);
  
   // Creamos un nuevo "theme" de MUI (Material-UI) utilizando el tema base más algunas personalizaciones.
  const THEME = createTheme({
    ...brandingDesignTokens, // aplicamos los tokens de diseño (colores, tipografías, etc.)
    palette: {
      ...brandingDesignTokens.palette,
      mode: calculatedMode, // indicamos explícitamente el modo (light o dark) en la paleta.
    },
    components: {
      ...inputsCustomizations, // aplicamos las personalizaciones para los inputs de los formularios.
    },
  });
  
  // Retornamos la estructura del componente.
  return (
    
    <AppProvider theme={THEME}> {/* Proveemos el tema a toda la aplicación usando AppProvider */}
      <SignInPage
        signIn={signIn} // Pasamos la función que maneja el proceso de inicio de sesión.
        providers={providers} // Pasamos los proveedores de autenticación disponibles.

        // slotProps permite personalizar partes internas del formulario de login.
        slotProps={{ form: { noValidate: true }, // Configuramos el formulario para que no use la validación HTML5 automática.
        passwordField: { label: 'Contraseña' }, // Cambiamos el label del campo de contraseña al español.
        emailField: { label: 'Correo electrónico' }, // Cambiamos el label del campo de email al español.
      }}

      // localeText permite traducir o personalizar todos los textos visibles de la página de inicio de sesión.
      localeText={{
        signInTitle: 'Iniciar sesión en la cuenta', // Título principal de la página de login.
        signInSubtitle: 'Accede a tu perfil', // Subtítulo debajo del título 
        email: 'Correo electrónico', // Texto para el campo de email.
        password: 'Contraseña', // Texto para el campo de contraseña.
        signInRememberMe: 'Recordarme', // Texto del checkbox para recordar la sesión.
        or: 'o', // Palabra que aparece entre las opciones de login (por ejemplo: "Iniciar sesión con Google o GitHub").
        passkey: 'Clave de acceso', // Texto alternativo en caso de usar llaves de acceso.
        providerSignInTitle: (provider) => `Iniciar sesión con ${provider}`,  // Función para traducir el título de cada proveedor de login.
      }}

      // sx permite aplicar estilos personalizados usando la sintaxis de MUI.
        sx={{
          '& form > .MuiStack-root': { // Seleccionamos el Stack que contiene los campos del formulario.
            marginTop: '2rem', // Agregamos un margen superior de 2 rem.
            rowGap: '0.5rem', // Espaciado vertical entre los elementos del formulario.
          },
        }}
      />
    </AppProvider>
  );
}