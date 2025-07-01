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
    { 
      nome: 'Rio de Janeiro', 
      img: '/rioDeJaneiro.jpg',
      descricao: 'A Cidade Maravilhosa com suas praias icônicas e o Cristo Redentor.',
      preco: 'A partir de R$ 1.200'
    },
    { 
      nome: 'Fernando de Noronha', 
      img: '/fernandoNoronha.jpg',
      descricao: 'Paraíso natural com praias cristalinas e vida marinha exuberante.',
      preco: 'A partir de R$ 2.500'
    },
    { 
      nome: 'Foz do Iguaçu', 
      img: '/fozDoIguacu.jpg',
      descricao: 'As majestosas Cataratas do Iguaçu, uma das 7 maravilhas naturais.',
      preco: 'A partir de R$ 800'
    },
    { 
      nome: 'Maceió', 
      img: '/maceio.jpg',
      descricao: 'Praias de águas cristalinas e piscinas naturais deslumbrantes.',
      preco: 'A partir de R$ 1.100'
    },
    { 
      nome: 'Salvador', 
      img: '/salvador.webp',
      descricao: 'A primeira capital do Brasil com rica história e cultura afro-brasileira.',
      preco: 'A partir de R$ 900'
    },
    { 
      nome: 'São Paulo', 
      img: '/saoPaulo.jpg',
      descricao: 'A maior metrópole da América Latina com gastronomia e cultura únicas.',
      preco: 'A partir de R$ 600'
    },
    { 
      nome: 'Curitiba', 
      img: '/curitiba.webp',
      descricao: 'Cidade modelo com planejamento urbano e parques deslumbrantes.',
      preco: 'A partir de R$ 700'
    },
    { 
      nome: 'Florianópolis', 
      img: '/florianopolis.webp',
      descricao: 'A Ilha da Magia com 42 praias e uma qualidade de vida excepcional.',
      preco: 'A partir de R$ 950'
    },
    { 
      nome: 'Porto Alegre', 
      img: '/portoAlegre.jpg',
      descricao: 'Capital gaúcha com tradição cultural e gastronomia regional.',
      preco: 'A partir de R$ 750'
    },
    { 
      nome: 'Aparecida', 
      img: '/aparecida.jpg',
      descricao: 'Maior santuário mariano do mundo, destino de fé e devoção.',
      preco: 'A partir de R$ 400'
    },
  ];

  const destinosPromocao = [
    {
      nome: 'Fernando de Noronha',
      img: '/fernandoNoronha.jpg',
      descricao: 'Paraíso natural com praias cristalinas e vida marinha exuberante.',
      precoOriginal: 'R$ 3.200',
      precoPromocional: 'R$ 2.500',
      desconto: '22% OFF'
    },
    {
      nome: 'Maceió',
      img: '/maceio.jpg',
      descricao: 'Praias de águas cristalinas e piscinas naturais deslumbrantes.',
      precoOriginal: 'R$ 1.400',
      precoPromocional: 'R$ 1.100',
      desconto: '21% OFF'
    },
    {
      nome: 'Foz do Iguaçu',
      img: '/fozDoIguacu.jpg',
      descricao: 'As majestosas Cataratas do Iguaçu, uma das 7 maravilhas naturais.',
      precoOriginal: 'R$ 1.000',
      precoPromocional: 'R$ 800',
      desconto: '20% OFF'
    }
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

        {/* Promoções Especiais */}
        <Typography variant="h2" component="h2" align="center" gutterBottom sx={{ mb: 6, fontWeight: 700, fontSize: { xs: '1.7rem', md: '2.5rem' } }}>
          🎉 Promoções Especiais
        </Typography>
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
          gap: 4,
          mb: 8
        }}>
          {destinosPromocao.map((destino, index) => (
            <Card 
              key={index} 
              sx={{ 
                height: 500, 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'visible',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                }
              }}
            >
              {/* Badge de desconto */}
              <Box
                sx={{
                  position: 'absolute',
                  top: -10,
                  right: 10,
                  backgroundColor: '#f44336',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontWeight: 'bold',
                  fontSize: '0.9rem',
                  zIndex: 1,
                  boxShadow: '0 4px 12px rgba(244, 67, 54, 0.3)',
                }}
              >
                {destino.desconto}
              </Box>
              
              <CardMedia
                component="img"
                height="220"
                image={destino.img}
                alt={destino.nome}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Box>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600, fontSize: { xs: '1.2rem', md: '1.4rem' } }}>
                    {destino.nome}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph sx={{ fontSize: '1rem', mb: 2 }}>
                    {destino.descricao}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        textDecoration: 'line-through', 
                        color: 'text.secondary',
                        fontSize: '1rem'
                      }}
                    >
                      {destino.precoOriginal}
                    </Typography>
                    <Typography 
                      variant="h5" 
                      color="error" 
                      sx={{ 
                        fontWeight: 700,
                        fontSize: '1.3rem'
                      }}
                    >
                      {destino.precoPromocional}
                    </Typography>
                  </Box>
                </Box>
                <Button
                  variant="contained"
                  color="error"
                  fullWidth
                  onClick={() => navigate('/pacotes')}
                  sx={{ 
                    fontSize: '1.1rem', 
                    py: 1.5,
                    background: 'linear-gradient(45deg, #f44336 30%, #ff5722 90%)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #d32f2f 30%, #e64a19 90%)',
                    }
                  }}
                >
                  Aproveitar Oferta
                </Button>
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
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(4, 1fr)' },
          gap: 4,
          mb: 8
        }}>
          {destinosPublic.map((destino, index) => (
            <Card 
              key={index} 
              sx={{ 
                height: 450, 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                }
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={destino.img}
                alt={destino.nome}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Box>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600, fontSize: { xs: '1.2rem', md: '1.4rem' } }}>
                    {destino.nome}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph sx={{ fontSize: '1rem', mb: 2 }}>
                    {destino.descricao}
                  </Typography>
                  <Typography variant="h6" color="primary" sx={{ fontWeight: 600, mb: 2 }}>
                    {destino.preco}
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => navigate('/pacotes')}
                  sx={{ 
                    fontSize: '1.1rem', 
                    py: 1.5,
                    background: 'linear-gradient(45deg, #2E7D32 30%, #4CAF50 90%)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #1B5E20 30%, #388E3C 90%)',
                    }
                  }}
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