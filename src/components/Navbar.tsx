import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import InfoIcon from '@mui/icons-material/Info';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import PeopleIcon from '@mui/icons-material/People';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, logout } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    logout();
  };

  const navLinks = [
    { to: '/', label: 'Início', icon: <HomeIcon className="text-2xl" /> },
    { to: '/pacotes', label: 'Pacotes', icon: <FlightTakeoffIcon className="text-2xl" /> },
    { to: '/social', label: 'Social', icon: <PeopleIcon className="text-2xl" /> },
    { to: '/sobre', label: 'Sobre', icon: <InfoIcon className="text-2xl" /> },
    { to: '/contato', label: 'Contato', icon: <ContactSupportIcon className="text-2xl" /> },
  ];

  return (
    <AppBar position="fixed" elevation={4} sx={{
      background: 'linear-gradient(90deg, #388e3c 0%, #43a047 100%)',
      boxShadow: '0 4px 16px 0 rgba(0,0,0,0.10)',
    }}>
      <Toolbar sx={{ justifyContent: 'space-between', py: { xs: 1, md: 2 }, minHeight: { xs: 56, md: 72 } }}>
        <Box className="flex items-center" sx={{ flex: { xs: '0 0 auto', md: '0 0 220px' } }}>
          <Typography
            variant="h4"
            component={RouterLink}
            to="/"
            className="text-white no-underline flex items-center"
            sx={{
              textShadow: '0 2px 8px rgba(0,0,0,0.15)',
              fontSize: { xs: '1.3rem', md: '2rem' },
              letterSpacing: 1,
              lineHeight: 1.1,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Agência Senior
          </Typography>
        </Box>
        {/* Desktop Navigation Centralizada */}
        <Box className="gap-2 hidden md:flex" sx={{ flex: 1, justifyContent: 'center', display: { xs: 'none', md: 'flex' } }}>
          {navLinks.map((link) => (
            <Button
              key={link.to}
              component={RouterLink}
              to={link.to}
              color="inherit"
              startIcon={link.icon}
              className="text-lg font-semibold transition-all"
              sx={{
                '&:hover': {
                  color: '#fff',
                  background: 'rgba(56,142,60,0.15)',
                  boxShadow: '0 2px 8px 0 rgba(56,142,60,0.10)',
                },
                px: 2,
                py: 1,
                borderRadius: 2,
              }}
            >
              {link.label}
            </Button>
          ))}
        </Box>
        {/* User Info and Logout */}
        <Box className="hidden md:flex items-center space-x-2" sx={{ flex: '0 0 auto' }}>
          <Typography variant="body2" className="text-white">
            Olá, {user?.name}
          </Typography>
          <Button
            onClick={handleLogout}
            color="inherit"
            className="text-sm"
            sx={{
              '&:hover': {
                background: 'rgba(255,255,255,0.1)',
              },
            }}
          >
            Sair
          </Button>
        </Box>
        {/* Mobile Navigation: só aparece em telas pequenas */}
        <Box className="md:hidden flex items-center" sx={{ flex: '0 0 auto', display: { xs: 'flex', md: 'none' } }}>
          <IconButton edge="end" color="inherit" onClick={handleDrawerToggle}>
            <MenuIcon fontSize="large" />
          </IconButton>
          <Drawer
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            PaperProps={{ sx: { width: 240 } }}
          >
            <List>
              {navLinks.map((link) => (
                <ListItem 
                  key={link.to} 
                  component={RouterLink} 
                  to={link.to} 
                  onClick={handleDrawerToggle}
                  sx={{ cursor: 'pointer' }}
                >
                  <ListItemIcon>{link.icon}</ListItemIcon>
                  <ListItemText primary={link.label} />
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 