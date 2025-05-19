import React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SellIcon from '@mui/icons-material/Sell';
import UploadIcon from '@mui/icons-material/Upload';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ChatIcon from '@mui/icons-material/Chat';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PersonIcon from '@mui/icons-material/Person';

// Opciones del sidebar para el vendedor
const sidebarOptions = [
  { text: 'Home', icon: <DashboardIcon sx={{ color: '#FFFFFF' }} /> },
  { text: 'Mis Publicaciones', icon: <SellIcon sx={{ color: '#FFFFFF' }} /> },
  { text: 'Subir Publicación', icon: <UploadIcon sx={{ color: '#FFFFFF' }} /> },
  { text: 'Pedidos', icon: <ShoppingCartIcon sx={{ color: '#FFFFFF' }} /> },
  { text: 'Chat', icon: <ChatIcon sx={{ color: '#FFFFFF' }} /> },
  { text: 'Datos Bancarios', icon: <AccountBalanceIcon sx={{ color: '#FFFFFF' }} /> },
  { text: 'Perfil', icon: <PersonIcon sx={{ color: '#FFFFFF' }} /> },
];

const SideBar = ({ open, onClose }) => {
  const sidebarContent = (
    <Box
      sx={{
        width: 250,
        backgroundColor: '#40250D', // Fondo del sidebar
        height: '100%', // Para que ocupe toda la altura
      }}
      role="presentation"
      onClick={onClose}
      onKeyDown={onClose}
    >
      <List>
        {sidebarOptions.map((option) => (
          <ListItem
            button
            key={option.text}
            sx={{
              '&:hover': {
                backgroundColor: '#401809', // Fondo al pasar el mouse
                '& .MuiListItemText-primary': {
                  color: '#FFE0C4', // Texto claro al pasar el mouse
                },
                '& .MuiListItemIcon-root': {
                  color: '#FFE0C4', // Icono claro al pasar el mouse
                },
              },
            }}
          >
            <ListItemIcon>{option.icon}</ListItemIcon>
            <ListItemText

              primary={option.text}
              primaryTypographyProps={{ style: { color: '#FFFFFF', fontFamily: "'Poppins', sans-serif" } }} // Color del texto

            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      {sidebarContent}
    </Drawer>
  );
};

export default SideBar;