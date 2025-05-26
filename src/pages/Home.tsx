import Grid from '@mui/material/Grid';
import { Container, Typography, Card, CardContent, CardMedia, Button, Box, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AccessibleIcon from '@mui/icons-material/Accessible';
import SecurityIcon from '@mui/icons-material/Security';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { useState } from 'react';

const Home = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [nomeGrupo, setNomeGrupo] = useState('');

  const features = [
    {
      icon: <AccessibleIcon sx={{ fontSize: 70, color: 'primary.main' }} />,
      title: 'Acessibilidade Total',
      description: 'Viagens adaptadas para todas as necessidades, com suporte especializado.',
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 70, color: 'primary.main' }} />,
      title: 'Segurança Garantida',
      description: 'Assistência médica e acompanhamento durante toda a viagem.',
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: 70, color: 'primary.main' }} />,
      title: 'Suporte 24h',
      description: 'Equipe dedicada disponível 24 horas por dia para ajudar.',
    },
  ];

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCriarGrupo = () => {
    setOpen(false);
    setNomeGrupo('');
    alert('Grupo criado com sucesso! (Funcionalidade fictícia)');
  };

  return (
    <Container maxWidth={false} sx={{ px: { xs: 1, md: 8 }, py: 0, pt: { xs: 10, md: 12 }, maxWidth: '1400px', mx: 'auto' }}>
      {/* Hero Section */}
      <Box
        sx={{
          textAlign: 'center',
          py: 8,
          background: 'linear-gradient(45deg, #2E7D32 30%, #4CAF50 90%)',
          borderRadius: 4,
          color: 'white',
          mb: 6,
        }}
      >
        <Typography variant="h1" component="h1" gutterBottom sx={{ fontSize: { xs: '2.2rem', md: '3.2rem' }, fontWeight: 700 }}>
          Viagens Especiais para Você
        </Typography>
        <Typography variant="h4" sx={{ mb: 4, fontSize: { xs: '1.3rem', md: '2rem' } }}>
          Descubra o mundo com conforto e segurança
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/pacotes')}
            sx={{
              backgroundColor: 'white',
              color: 'primary.main',
              '&:hover': { backgroundColor: 'grey.100' },
              fontSize: '1.4rem',
              py: 2,
              px: 4,
              minWidth: 220,
            }}
          >
            Ver Pacotes de Viagem
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            startIcon={<GroupAddIcon sx={{ fontSize: 32 }} />}
            onClick={handleOpen}
            sx={{ fontSize: '1.4rem', py: 2, px: 4, minWidth: 220 }}
          >
            Criar Grupo
          </Button>
        </Box>
      </Box>

      {/* Modal Criar Grupo */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ fontSize: '2rem' }}>Criar Grupo de Viagem</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Nome do Grupo"
            type="text"
            fullWidth
            variant="outlined"
            value={nomeGrupo}
            onChange={e => setNomeGrupo(e.target.value)}
            sx={{ fontSize: '1.2rem' }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" sx={{ fontSize: '1.1rem' }}>Cancelar</Button>
          <Button onClick={handleCriarGrupo} variant="contained" color="primary" sx={{ fontSize: '1.1rem' }}>Criar</Button>
        </DialogActions>
      </Dialog>

      {/* Features Section */}
      <Typography variant="h2" component="h2" align="center" gutterBottom sx={{ mb: 6, fontWeight: 700, fontSize: { xs: '1.7rem', md: '2.5rem' } }}>
        Por que escolher a Viagens Felizes?
      </Typography>
      <Grid container spacing={4} sx={{ mb: 8, maxWidth: 1200, mx: 'auto' }} justifyContent="center" alignItems="stretch">
        {features.map((feature, index) => (
          <Grid item xs={12} md={6} lg={4} key={index} sx={{ display: 'flex' }}>
            <Card
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                p: 3,
                fontSize: '1.3rem',
              }}
            >
              {feature.icon}
              <CardContent>
                <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 600, fontSize: { xs: '1.3rem', md: '2rem' } }}>
                  {feature.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.2rem' }}>
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Featured Destinations */}
      <Typography variant="h2" component="h2" align="center" gutterBottom sx={{ mb: 6, fontWeight: 700, fontSize: { xs: '1.7rem', md: '2.5rem' } }}>
        Destinos em Destaque
      </Typography>
      <Grid container spacing={4}>
        {['Gramado', 'Florianópolis', 'Porto Seguro'].map((destination, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ height: 400, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <CardMedia
                component="img"
                height="200"
                image={`https://source.unsplash.com/800x600/?${destination.toLowerCase()}`}
                alt={destination}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 600, fontSize: { xs: '1.2rem', md: '1.7rem' } }}>
                  {destination}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: '1.1rem' }}>
                  Pacotes especiais com hospedagem, alimentação e passeios inclusos.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => navigate('/pacotes')}
                  sx={{ fontSize: '1.2rem', py: 1.5 }}
                >
                  Ver Pacotes
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home; 