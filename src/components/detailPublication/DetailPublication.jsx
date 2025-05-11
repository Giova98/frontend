import React from 'react'

import { Box, Typography, Button, Grid, Avatar, IconButton } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CloseIcon from '@mui/icons-material/Close';
import { useLocation, useNavigate } from 'react-router';

const DetailPublication = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { title, description, img, price, status, brand } = location.state.publicacion;

  return (
    <Box sx={{ p: 4, m: 4, backgroundColor: "#FFEFEF", borderRadius: 2, maxWidth: 1000, mx: 'auto', position: 'relative' }}>
      <IconButton 
        onClick={() => navigate(-1)}
        sx={{ position: 'absolute', top: 0, right: 0 }}>
        <CloseIcon />
      </IconButton>

      <Grid container spacing={5} alignItems="flex-start">
        <Grid item md={4}>
          <Box
            component="img"
            src={img}
            alt="Guitarra"
            sx={{ width: '400px', borderRadius: 2 }}
          />
        </Grid>

        {/*detalles */}
        <Grid item md={8} sx={{ ml: { maxWidth: 500, xs: 0, md: 4, lg: 5 } }}>

          <Typography variant="h5" fontWeight="bold">
            {title}
          </Typography>

          <Typography variant="caption" color="gray">category1</Typography>

          <Typography sx={{ mt: 1 }}><strong>Estado:</strong> {status} </Typography>

          <Typography variant="body2" sx={{ mt: 1, whiteSpace: 'pre-line' }}>
            {description}
          </Typography>

          <Typography sx={{ mt: 1 }}><strong>Marca:</strong> {brand} </Typography>

          <Box sx={{mb: {md: 7, xs: 5} }} ></Box>

          <Typography variant="h4" sx={{ mt: 2 }} >
            ${price}
          </Typography>

          <Button variant="contained" color="primary" sx={{ mt: 2, backgroundColor: '#5d4037' }}>
            Comprar ahora
          </Button>

        </Grid>
        {/* Información del vendedor */}
        <Grid item md={12} sx={{ mt: 4 }}>
          <Typography fontWeight="bold">Vendedor:</Typography>
          <Box display="flex" alignItems="center" gap={1} mt={1}>
            <Avatar />
            <Box>
              <Typography fontWeight="bold">Nombre Del Vendedor</Typography>
              <Typography variant="body2">
                <LocationOnIcon sx={{ fontSize: 16, verticalAlign: 'middle' }} />
                Santa Fe, Rosario, Sarmiento 1423
              </Typography>
              <Typography variant="body2">Contacto: +54 3464-578823</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default DetailPublication
