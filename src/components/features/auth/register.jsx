import * as React from 'react';
import { AppProvider } from '@toolpad/core/AppProvider';
import { createTheme } from '@mui/material/styles';
import { useColorScheme } from '@mui/material/styles';
import { getDesignTokens, inputsCustomizations } from '../../theme/ThemeProvider';
import { Box, TextField, Button, Stack, Typography } from '@mui/material';
import backgroundImage from '../../../assets/fondo.png';

export default function Register() {
  // Hook para leer el modo de color (light/system/dark) del usuario
  const { mode, systemMode } = useColorScheme();
  // Decide si usar el modo del sistema o el explícito; fallback a 'light'
  const calculatedMode = (mode === 'system' ? systemMode : mode) ?? 'light';
  // Genera tokens de diseño (colores, tipografía, sombras...) según el modo
  const brandingDesignTokens = getDesignTokens(calculatedMode);

  // Crea el tema MUI mezclando los design tokens y las personalizaciones de inputs/buttons
  const THEME = createTheme({
    ...brandingDesignTokens,
    palette: {
      ...brandingDesignTokens.palette,
      mode: calculatedMode, // asegura que el palette reconozca light/dark
    },
    components: {
      ...inputsCustomizations, // over-rides globales para botones, inputs, etc.
    },
  });

  // Función que maneja el submit del formulario y extrae los valores
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      firstName: data.get('firstName'),
      nickName: data.get('nickName'),
      email: data.get('email'),
      password: data.get('password'),
      confirmPassword: data.get('confirmPassword'),
      phone: data.get('phone'),
      dni: data.get('dni')
    });
  };

  return (
    // AppProvider inyecta el tema en todos los componentes de @toolpad/core y MUI hijos
    <AppProvider theme={THEME}>

      {/* Caja contenedora de TODO el fondo + overlay semitransparente */}
      <Box
        sx={{
          position: 'relative',
          width: '99vw',
          minHeight: '100vh',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            bgcolor: 'rgba(93, 64, 55, 0.5)', // Marrón semitransparente
            zIndex: 1,
          },
        }}
      >
        {/* Formulario como grid de 2 columnas */}
        <Stack
          component="form"
          onSubmit={handleSubmit}
          spacing={2}
          sx={{
            position: 'relative', // Para que quede encima del overlay
            zIndex: 2,
            width: '100%',
            maxWidth: '600px',
            margin: '0 auto',
            marginTop: '3rem',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1.5rem',
          }}
        >
          {/* Título principal (ocupa ambas columnas) */}
          <Typography variant="h4" sx={{ gridColumn: '1 / -1', textAlign: 'center' }}>
            Registrarme
          </Typography>
          {/* Subtítulo (también ocupa ambas columnas) */}
          <Typography variant="h7" sx={{ gridColumn: '1 / -1', textAlign: 'center' }}>
            Crear una cuenta
          </Typography>

          {/* Campos de texto con estilos personalizados de etiqueta */}
          <TextField name="firstName" label="Nombre" required slotProps={{ inputLabel: { sx: { fontSize: '1.1rem', color: '#FFFBEA', textShadow: '0 1px 2px rgba(0,0,0,0.4)' } } }} />
          <TextField name="nickName" label="Nombre de usuario" required slotProps={{ inputLabel: { sx: { fontSize: '1.1rem', color: '#FFFBEA', textShadow: '0 1px 2px rgba(0,0,0,0.4)' } } }} />
          <TextField name="email" label="Correo electrónico" required type="email" slotProps={{ inputLabel: { sx: { fontSize: '1.1rem', color: '#FFFBEA', textShadow: '0 1px 2px rgba(0,0,0,0.4)' } } }} />
          <TextField name="password" label="Contraseña" required type="password" slotProps={{ inputLabel: { sx: { fontSize: '1.1rem', color: '#FFFBEA', textShadow: '0 1px 2px rgba(0,0,0,0.4)' } } }} />
          <TextField name="confirmPassword" label="Confirmar contraseña" required type="password" slotProps={{ inputLabel: { sx: { fontSize: '1.1rem', color: '#FFFBEA', textShadow: '0 1px 2px rgba(0,0,0,0.4)' } } }} />
          <TextField name="Phone" label="Escribe tu numero de telefono" required type="phone" slotProps={{ inputLabel: { sx: { fontSize: '1.1rem', color: '#FFFBEA', textShadow: '0 1px 2px rgba(0,0,0,0.4)' } } }} />
          <TextField name="dni" label="Escribe tu numero de dni" required type="dni" sx={{ gridColumn: '1 / -1' }} slotProps={{ inputLabel: { sx: { fontSize: '1.1rem', color: '#FFFBEA', textShadow: '0 1px 2px rgba(0,0,0,0.4)' } } }} />

          <Button
            type="submit"
            variant="contained"
            disableElevation           // quita la sombra de Elevation
            sx={{
              gridColumn: '1 / -1',
              mt: 2,

              // ← override del estilo por defecto
              backgroundColor: '#40250D',
              backgroundImage: 'none',
              boxShadow: 'none',

              // hover brown más oscuro
              '&:hover': {
                backgroundColor: '#351D0A',
                backgroundImage: 'none',
              },
            }}
          >
            Registrarse
          </Button>
        </Stack>
      </Box>
    </AppProvider>
  );
}