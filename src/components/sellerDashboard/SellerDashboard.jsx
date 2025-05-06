import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ChatIcon from '@mui/icons-material/Chat';
import SellIcon from '@mui/icons-material/Sell';
import { motion } from 'framer-motion'; // Para animaciones modernas

const SellerDashboard = () => {
  // Datos simulados
  const dashboardData = {
    totalSales: 150,
    pendingOrders: 10,
    newMessages: 5,
    activePosts: 25,
  };

  // Animaciones para las tarjetas
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: 'easeOut' },
    }),
  };

  // Animación para el título
  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0., ease: 'easeOut' } },
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'radial-gradient(circle, #FFE0C4 0%)', // Fondo degradado radial
        padding: '250px 20px 10px 20px', // Espacio para el navbar y padding
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Encabezado */}
      <motion.div initial="hidden" animate="visible" variants={titleVariants}>
        <Box
          sx={{
            background: 'linear-gradient(100deg, #40250D 0%)', // Degradado para el encabezado
            padding: '30px 50px ',
            borderRadius: '16px',
            marginBottom: '80px',
            textAlign: 'center',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: '#363738',
              fontWeight: 'bold',
              fontFamily: "'Poppins', sans-serif", // Tipografía moderna
            }}
          >
            Panel del Vendedor
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: '#363738',
              marginTop: '5px',
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Resumen de tu actividad
          </Typography>
        </Box>
      </motion.div>

      {/* Tarjetas de métricas (centradas) */}
      <Box sx={{ maxWidth: '1200px', width: '100%' }}>
        <Grid container spacing={4} justifyContent="center">
          {/* Ventas totales */}
          <Grid item xs={12} sm={6} md={3}>
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
            >
              <Card
                sx={{
                  background: 'linear-gradient(240deg, #FFE0C4 0%, #401809 140%)', // Degradado en la tarjeta
                  borderRadius: '20px',
                  textAlign: 'center',
                  marginRight: '20px',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                  },
                }}
              >
                <CardMedia>
                  <MonetizationOnIcon
                    sx={{
                      fontSize: 60,
                      color: '#363738',
                      marginTop: '20px',
                      transition: 'color 0.3s ease-in-out',
                      '&:hover': { color: '#FFE0C4' }, // Cambio de color al hover
                    }}
                  />
                </CardMedia>
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#401809',
                      fontWeight: 'bold',
                      fontFamily: "'Poppins', sans-serif",
                      marginRight: '20px'
                    }}
                  >
                    Ventas Totales
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      color: '#401809',
                      transition: 'color 0.3s ease-in-out',
                      '&:hover': { color: '#FFE0C4' },
                    }}
                  >
                    {dashboardData.totalSales}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Pedidos pendientes */}
          <Grid item xs={12} sm={6} md={3}>
            <motion.div
              custom={1}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
            >
              <Card
                sx={{
                  background: 'linear-gradient(240deg, #FFE0C4 0%, #401809 140%)',
                  borderRadius: '20px',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                  textAlign: 'center',
                  transition: 'all 0.3s ease-in-out',
                  marginRight: '20px',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                  },
                }}
              >
                <CardMedia>
                  <ShoppingCartIcon
                    sx={{
                      fontSize: 60,
                      color: '#363738',
                      marginTop: '20px',
                      transition: 'color 0.3s ease-in-out',
                      '&:hover': { color: '#FFE0C4' },
                    }}
                  />
                </CardMedia>
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#401809',
                      fontWeight: 'bold',
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    Pedidos Pendientes
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      color: '#401809',
                      transition: 'color 0.3s ease-in-out',
                      '&:hover': { color: '#FFE0C4' },
                    }}
                  >
                    {dashboardData.pendingOrders}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Mensajes nuevos */}
          <Grid item xs={12} sm={6} md={3}>
            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
            >
              <Card
                sx={{
                  background: 'linear-gradient(240deg, #FFE0C4 0%, #401809 140%)',
                  borderRadius: '20px',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                  textAlign: 'center',
                  transition: 'all 0.3s ease-in-out',
                  marginRight: '20px',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                  },

                }}
              >
                <CardMedia>
                  <ChatIcon
                    sx={{
                      fontSize: 60,
                      color: '#363738',
                      marginTop: '20px',
                      transition: 'color 0.3s ease-in-out',
                      '&:hover': { color: '#FFE0C4' },
                    }}
                  />
                </CardMedia>
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#401809',
                      fontWeight: 'bold',
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    Mensajes Nuevos
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      color: '#401809',
                      transition: 'color 0.3s ease-in-out',
                      '&:hover': { color: '#FFE0C4' },
                    }}
                  >
                    {dashboardData.newMessages}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Publicaciones activas */}
          <Grid item xs={12} sm={6} md={3}>
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
            >
              <Card
                sx={{
                  background: 'linear-gradient(240deg, #FFE0C4 0%, #401809 140%)',
                  borderRadius: '20px',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                  textAlign: 'center',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                  },
                }}
              >
                <CardMedia>
                  <SellIcon
                    sx={{
                      fontSize: 60,
                      color: '#363738',
                      marginTop: '20px',
                      transition: 'color 0.3s ease-in-out',
                      '&:hover': { color: '#FFE0C4' },
                    }}
                  />
                </CardMedia>
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#401809',
                      fontWeight: 'bold',
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    Publicaciones Activas
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      color: '#401809',
                      transition: 'color 0.3s ease-in-out',
                      '&:hover': { color: '#FFE0C4' },
                    }}
                  >
                    {dashboardData.activePosts}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SellerDashboard;