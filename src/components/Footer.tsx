import { Box, Typography, Link, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(90deg, #388e3c 0%, #43a047 100%)',
        color: 'white',
        py: 3,
        mt: 6,
        boxShadow: '0 -2px 8px 0 rgba(0,0,0,0.08)',
      }}
    >
      <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: 1 }}>
            Agência Senior Viagens
          </Typography>
          <Typography variant="body2">
            CNPJ: 12.345.678/0001-99<br/>
            Av. Brasil, 1234 - Centro, Curitiba/PR<br/>
            Atendimento: (41) 99999-9999
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          <Link href="/sobre" color="inherit" underline="hover">
            Sobre Nós
          </Link>
          <Link href="/contato" color="inherit" underline="hover">
            Contato
          </Link>
          <Link href="/pacotes" color="inherit" underline="hover">
            Pacotes
          </Link>
        </Box>
        <Box>
          <Typography variant="body2" align="right">
            &copy; {new Date().getFullYear()} Agência Senior Viagens. Todos os direitos reservados.
          </Typography>
          <Typography variant="caption" align="right" sx={{ opacity: 0.7, fontSize: '0.95rem', display: 'block' }}>
            By Matheus Passos
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 