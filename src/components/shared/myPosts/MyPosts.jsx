import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { motion } from 'framer-motion';

// Datos simulados (puedes reemplazarlos con una API más adelante)
const postsData = [
  {
    id: 1,
    title: 'Guitarra Eléctrica',
    marca: 'Fender',
    price: 1200,
    image_url: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTMWpxty9shWqaiRcWgN4djdRQtp3jJ93Sp0_WyLJhTRqbG_Bvgmb1YHSsg3II4b-Iv73i6I9Rb4nNGVmtmrMy9skHFkzZzXnFHH18xXtKIsLRVWHKEHTrc', // Imagen placeholder
    state: 'Nuevo',
    date: '2025-04-20',
  },
  {
    id: 2,
    title: 'Bajo Eléctrico',
    marca: 'Ibanez',
    price: 850,
    image_url: 'https://media1.101db.com.ar/14787-Productos/bajo-electrico-fender-player-precision-bass-black-mastil-maple.jpg',
    state: 'Usado',
    date: '2025-04-18',
  },
  {
    id: 3,
    title: 'Amplificador',
    marca: 'Marshall',
    price: 500,
    image_url: 'https://http2.mlstatic.com/D_NQ_NP_894173-MLA49434081312_032022-O.webp',
    state: 'Nuevo',
    date: '2025-04-15',
  },
  {
    id: 4,
    title: 'Pedal de Efectos',
    marca: 'Boss',
    price: 150,
    image_url: 'https://http2.mlstatic.com/D_983646-MLA47531306677_092021-C.jpg',
    state: 'Usado',
    date: '2025-04-10',
  },
];

const MyPosts = () => {
  // Animaciones para las tarjetas
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
    }),
  };

  // Animación para el título
  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#FFE0C4', // Fondo sólido como pediste
        padding: '100px 20px 20px 20px', // Espacio para el navbar
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Encabezado */}
      <motion.div initial="hidden" animate="visible" variants={titleVariants}>
        <Box
          sx={{
            backgroundColor: '#40250D',
            padding: '35px 90px',
            borderRadius: '12px',
            marginBottom: '100px',
            textAlign: 'center',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: '#FFE0C4',
              fontWeight: 'bold',
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Mis Publicaciones
          </Typography>
        </Box>
      </motion.div>

      {/* Listado de publicaciones */}
      <Box sx={{ maxWidth: '1300px', width: '150%'}}>
        <Grid container spacing={3} justifyContent="center">
          {postsData.map((post, index) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <motion.div
                custom={index}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
              >
                <Card
                  sx={{
                    background: 'linear-gradient(240deg, #FFE0C4 0%, #401809 160%)',
                    borderRadius: '12px',
                    border: '1px solid #363738',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease-in-out',
                    position: 'relative', // Para el botón flotante
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                      '& .editButton': {
                        opacity: 1, // Mostrar botón al hacer hover
                      },
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="300"
                    image={post.image_url}
                    alt={post.title}
                    sx={{ objectFit: 'cover', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}
                  />
                  <CardContent sx={{ padding: '15px' }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#401809',
                        fontWeight: 'bold',
                        fontFamily: "'Poppins', sans-serif",
                        marginBottom: '5px',
                      }}
                    >
                      {post.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#401809',
                        fontFamily: "'Poppins', sans-serif",
                        marginBottom: '5px',
                      }}
                    >
                      <strong>Marca:</strong> {post.marca}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#401809',
                        fontFamily: "'Poppins', sans-serif",
                        marginBottom: '5px',
                      }}
                    >
                      <strong>Precio:</strong> ${post.price}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#401809',
                        fontFamily: "'Poppins', sans-serif",
                        marginBottom: '5px',
                      }}
                    >
                      <strong>Estado:</strong> {post.state}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#401809',
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      <strong>Fecha:</strong> {post.date}
                    </Typography>
                  </CardContent>
                  {/* Botón flotante que aparece al hacer hover */}
                  <Button
                    className="editButton"
                    variant="contained"
                    sx={{
                      position: 'absolute',
                      top: '9px',
                      right: '8px',
                      backgroundColor: '#363738',
                      color: '#FFE0C4',
                      opacity: 0, // Oculto por defecto
                      transition: 'opacity 0.3s ease-in-out',
                      '&:hover': {
                        backgroundColor: 'linear-gradient(240deg, #FFE0C4 0%, #401809 140%)',
                      },
                    }}
                    onClick={() => alert(`Editar publicación: ${post.title}`)} // Acción simulada
                  >
                    Editar
                  </Button>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default MyPosts;