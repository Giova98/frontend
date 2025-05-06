import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router';

const PublicationCard = () => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate('/detail-publication/123');
    };
    return (
        <Box sx={{ maxWidth: 230, margin: '20px auto'}}>
            <Card sx={{ 
                backgroundColor: '#401809',
                borderRadius: '7px',
                boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.25)',
                position: 'relative',
                '&:hover .buy-button': { opacity: 1, bottom: '16px' }
                }}
                onClick={handleCardClick}>
                <CardMedia 
                    component="img"
                    height="140"
                    image="https://images-na.ssl-images-amazon.com/images/I/71Oo2ZKroFL._AC_SL1500_.jpg"
                    alt="imagen de Producto"
                    sx={{
                        objectFit: 'contain',
                        backgroundColor: '#fff',
                        width: '100%'
                    }}
                />
                <CardContent sx={{ textAlign: 'left' }}>
                    <Typography
                        variant='caption' 
                        color='text.secondary'
                        sx={{
                            backgroundColor: '#D2D2D2',
                            px: 3.5,
                            py: 0,
                            mb: 1,
                            borderRadius: '10px',
                            display: 'inline-block'
                        }}>
                        Category
                    </Typography>
                    <Typography 
                        variant='subtitle1'
                        sx={{
                            color: '#fff',
                            fontWeight: '700',
                            lineHeight: 1.2,
                            mb: 1
                        }}>
                        Guitarra eléctrica, modelo, marca, tamaño
                    </Typography>
                    <Typography 
                        variant='h5'
                        sx={{
                            color: '#fff',
                            mb: 1,
                            fontFamily: '"Poppins", sans-serif',
                            letterSpacing: '0.5px'
                        }}>
                        $100.000
                    </Typography>
                    <Typography 
                        variant='h6'
                        sx={{
                            color: '#fff',
                            fontWeight: '500'
                        }}>
                        estado
                    </Typography>
                </CardContent>
                <Button 
                    variant="contained"
                    className="buy-button"
                    sx={{
                      backgroundColor: '#9D9B8F',
                      color: '#fff',
                      fontWeight: 'bold',
                      textTransform: 'none',
                      width: '90%',
                      position: 'absolute',
                      left: '5%',
                      bottom: '0px',
                      opacity: 0,
                      transition: 'all 0.3s ease',
                      pointerEvents: 'none'
                    }}>
                    Comprar
                </Button>
            </Card>
        </Box>
    )
}

export default PublicationCard
