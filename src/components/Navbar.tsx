import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import InfoIcon from '@mui/icons-material/Info';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'primary.main', zIndex: 1300 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography
          variant="h4"
          component={RouterLink}
          to="/"
          sx={{
            textDecoration: 'none',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <FlightTakeoffIcon sx={{ fontSize: 40 }} />
          Viagens Felizes
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            component={RouterLink}
            to="/"
            color="inherit"
            startIcon={<HomeIcon sx={{ fontSize: 30 }} />}
            sx={{ fontSize: '1.2rem' }}
          >
            Início
          </Button>
          <Button
            component={RouterLink}
            to="/pacotes"
            color="inherit"
            startIcon={<FlightTakeoffIcon sx={{ fontSize: 30 }} />}
            sx={{ fontSize: '1.2rem' }}
          >
            Pacotes
          </Button>
          <Button
            component={RouterLink}
            to="/sobre"
            color="inherit"
            startIcon={<InfoIcon sx={{ fontSize: 30 }} />}
            sx={{ fontSize: '1.2rem' }}
          >
            Sobre
          </Button>
          <Button
            component={RouterLink}
            to="/contato"
            color="inherit"
            startIcon={<ContactSupportIcon sx={{ fontSize: 30 }} />}
            sx={{ fontSize: '1.2rem' }}
          >
            Contato
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 