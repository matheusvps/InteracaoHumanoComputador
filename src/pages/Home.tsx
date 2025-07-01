import { Container, Typography, Card, CardContent, CardMedia, Button, Box, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AccessibleIcon from '@mui/icons-material/Accessible';
import SecurityIcon from '@mui/icons-material/Security';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { useState } from 'react';
import TravelBookingFlow from '../components/TravelBookingFlow/TravelBookingFlow';

const Home = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [nomeGrupo, setNomeGrupo] = useState('');
  const [openTravel, setOpenTravel] = useState(false);

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

  const destinosPublic = [
    { nome: 'Curitiba', img: '/curitiba.webp' },
    { nome: 'Aparecida', img: '/aparecida.jpg' },
    { nome: 'Rio de Janeiro', img: '/rioDeJaneiro.jpg' },
    { nome: 'Porto Alegre', img: '/portoAlegre.jpg' },
    { nome: 'Salvador', img: '/salvador.webp' },
    { nome: 'São Paulo', img: '/saoPaulo.jpg' },
    { nome: 'Florianópolis', img: '/florianopolis.webp' },
  ];

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCriarGrupo = () => {
    setOpen(false);
    setNomeGrupo('');
    alert('Grupo criado com sucesso! (Funcionalidade fictícia)');
  };

  return (
    <div className="centralizado">
      <Container maxWidth="xl" sx={{ px: { xs: 1, md: 8 }, py: 0, pt: { xs: 10, md: 12 } }}>
        {/* Hero Section */}
        <Box
          sx={{
            textAlign: 'center',
            py: 8,
            background: 'linear-gradient(45deg, #2E7D32 30%, #4CAF50 90%)',
            borderRadius: 4,
            color: 'white',
            mb: 6,
            maxWidth: 900,
            mx: 'auto',
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
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              onClick={() => setOpenTravel(true)}
              sx={{ fontSize: '1.4rem', py: 2, px: 4, minWidth: 220, borderColor: 'white', color: 'white', '&:hover': { borderColor: 'grey.100', background: 'rgba(255,255,255,0.1)' } }}
            >
              Planejar Viagem
            </Button>
          </Box>
        </Box>

        {/* Modal Planejar Viagem */}
        <Dialog open={openTravel} onClose={() => setOpenTravel(false)} maxWidth="sm" fullWidth PaperProps={{
          sx: {
            borderRadius: 4,
            boxShadow: 8,
            background: '#f9f9f9',
            p: { xs: 2, sm: 4 },
            maxWidth: 500,
            mx: 'auto',
          }
        }}>
          <DialogContent sx={{ p: { xs: 1, sm: 3 } }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <TravelBookingFlow />
            </Box>
          </DialogContent>
        </Dialog>

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
          Por que escolher a Agência Senior?
        </Typography>
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
          gap: 4,
          mb: 8, 
          maxWidth: 1200, 
          mx: 'auto' 
        }}>
          {features.map((feature, index) => (
            <Card
              key={index}
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
          ))}
        </Box>

        {/* Featured Destinations */}
        <Typography variant="h2" component="h2" align="center" gutterBottom sx={{ mb: 6, fontWeight: 700, fontSize: { xs: '1.7rem', md: '2.5rem' } }}>
          Destinos em Destaque
        </Typography>
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
          gap: 4
        }}>
          {destinosPublic.map((destino, index) => (
            <Card key={index} sx={{ height: 400, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <CardMedia
                component="img"
                height="200"
                image={destino.img}
                alt={destino.nome}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 600, fontSize: { xs: '1.2rem', md: '1.7rem' } }}>
                  {destino.nome}
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
          ))}
        </Box>
      </Container>
    </div>
  );
};

export default Home; 