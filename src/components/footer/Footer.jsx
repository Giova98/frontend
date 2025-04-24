import * as React from 'react';
import {
  Box,
  Container,
  Typography,
  Link,
  IconButton
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  return (
    <Box sx={{ backgroundColor: '#40250D', color: 'white', py: 4, mt: 'auto', width: '100%' }}>
      <Container maxWidth={false} sx={{ px: { xs: 85, sm: 66 } }}>

        {/* Sección institucional */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap', mb: 2 }}>
          <Link href="#about" underline="hover" sx={{ color: 'white' }}>
            Sobre nosotros
          </Link>
          <Link href="#terms" underline="hover" sx={{ color: 'white' }}>
            Términos y condiciones
          </Link>
          <Link href="#privacy" underline="hover" sx={{ color: 'white' }}>
            Política de privacidad
          </Link>
        </Box>

        {/* Redes sociales */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
          <IconButton color="inherit" href="https://instagram.com" target="_blank">
            <InstagramIcon />
          </IconButton>
          <IconButton color="inherit" href="https://facebook.com" target="_blank">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit" href="https://wa.me/5491112345678" target="_blank">
            <WhatsAppIcon />
          </IconButton>
        </Box>

        {/* Contacto */}
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Typography variant="body2" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <EmailIcon sx={{ mr: 1 }} fontSize="small" />
            contacto@carpichords.com
          </Typography>
          <Typography variant="body2">
            Atención por WhatsApp: +54 9 341-283-6206
          </Typography>
        </Box>

        {/* Copyright */}
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} CarpiChords. Todos los derechos reservados.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;