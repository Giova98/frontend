import * as React from 'react';
import { AppProvider } from '@toolpad/core/AppProvider';
import { createTheme } from '@mui/material/styles';
import { useColorScheme } from '@mui/material/styles';
import { getDesignTokens, inputsCustomizations } from './ThemeProvider';
import { Box, TextField, Button, Stack, Typography } from '@mui/material';
import backgroundImage from '../../assets/fondo.png';

export default function Register() {
  const { mode, systemMode } = useColorScheme();
  const calculatedMode = (mode === 'system' ? systemMode : mode) ?? 'light';
  const brandingDesignTokens = getDesignTokens(calculatedMode);

  const THEME = createTheme({
    ...brandingDesignTokens,
    palette: {
      ...brandingDesignTokens.palette,
      mode: calculatedMode,
    },
    components: {
      ...inputsCustomizations,
    },
  });

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
    <AppProvider theme={THEME}>
      <Box
        sx={{
          position: 'relative',
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
          <Typography variant="h4" sx={{ gridColumn: '1 / -1', textAlign: 'center' }}>
            Registrarme
          </Typography>
          <Typography variant="h7" sx={{ gridColumn: '1 / -1', textAlign: 'center' }}>
            Crear una cuenta
          </Typography>

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