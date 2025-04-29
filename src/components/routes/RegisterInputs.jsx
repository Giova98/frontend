import * as React from 'react';
import { Box, Button, TextField, Stack, Typography } from '@mui/material';

export default function RegisterInputs() {
  const [formData, setFormData] = React.useState({
    BuyersName: '',
    NickName: '',
    Email: '',
    Passwords: '',
    Phone: '',
    DNI: '',
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    // Aquí iría la lógica para enviar los datos al servidor
  };

  return (
    <Box 
      component="form" 
      onSubmit={handleSubmit} 
      noValidate 
      sx={{ mt: 4, maxWidth: 400, mx: 'auto' }}
    >
      <Typography variant="h4" gutterBottom>
        Crear una cuenta
      </Typography>

      <Stack spacing={2}>
        <TextField
          required
          label="Nombre completo"
          name="BuyersName"
          value={formData.BuyersName}
          onChange={handleChange}
        />
        <TextField
          required
          label="Nombre de usuario"
          name="NickName"
          value={formData.NickName}
          onChange={handleChange}
        />
        <TextField
          required
          label="Correo electrónico"
          name="Email"
          type="email"
          value={formData.Email}
          onChange={handleChange}
        />
        <TextField
          required
          label="Contraseña"
          name="Passwords"
          type="password"
          value={formData.Passwords}
          onChange={handleChange}
        />
        <TextField
          required
          label="Teléfono"
          name="Phone"
          value={formData.Phone}
          onChange={handleChange}
        />
        <TextField
          required
          label="DNI"
          name="DNI"
          value={formData.DNI}
          onChange={handleChange}
        />
      </Stack>

      <Button 
        type="submit" 
        fullWidth 
        variant="contained" 
        sx={{ mt: 3 }}
      >
        Registrarme
      </Button>
    </Box>
  );
}