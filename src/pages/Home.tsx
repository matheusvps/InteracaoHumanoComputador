import { Container, Typography, Card, CardContent, CardMedia, Button, Box, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AccessibleIcon from '@mui/icons-material/Accessible';
import SecurityIcon from '@mui/icons-material/Security';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ElderlyIcon from '@mui/icons-material/Elderly';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import { useState } from 'react';
import TravelBookingFlow from '../components/TravelBookingFlow/TravelBookingFlow';

const Home = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [nomeGrupo, setNomeGrupo] = useState('');
  const [openTravel, setOpenTravel] = useState(false);

  const features = [
    {
      icon: <ElderlyIcon sx={{ fontSize: 80, color: 'primary.main' }} />,
      title: 'Especialistas em Viagens para Idosos',
      description: 'Equipe treinada para atender às necessidades específicas de viajantes da terceira idade.',
    },
    {
      icon: <AccessibleIcon sx={{ fontSize: 80, color: 'primary.main' }} />,
      title: 'Acessibilidade Total',
      description: 'Viagens adaptadas para todas as necessidades, com suporte especializado e acomodações acessíveis.',
    },
    {
      icon: <HealthAndSafetyIcon sx={{ fontSize: 80, color: 'primary.main' }} />,
      title: 'Assistência Médica',
      description: 'Acompanhamento médico durante toda a viagem e seguro saúde especializado.',
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 80, color: 'primary.main' }} />,
      title: 'Segurança Garantida',
      description: 'Roteiros seguros, hotéis certificados e acompanhamento 24 horas por dia.',
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: 80, color: 'primary.main' }} />,
      title: 'Suporte 24h',
      description: 'Equipe dedicada disponível 24 horas por dia para ajudar em qualquer situação.',
    },
    {
      icon: <GroupAddIcon sx={{ fontSize: 80, color: 'primary.main' }} />,
      title: 'Grupos Especiais',
      description: 'Organizamos grupos de viagem para que você possa viajar com pessoas da mesma idade.',
    },
  ];

  const destinosPublic = [
    { 
      nome: 'Rio de Janeiro', 
      img: '/rioDeJaneiro.jpg',
      descricao: 'A Cidade Maravilhosa com suas praias icônicas e o Cristo Redentor. Visitas guiadas e acomodações confortáveis.',
      preco: 'A partir de R$ 1.200',
      duracao: '5 dias / 4 noites',
      dificuldade: 'Fácil'
    },
    { 
      nome: 'Fernando de Noronha', 
      img: '/fernandoNoronha.jpg',
      descricao: 'Paraíso natural com praias cristalinas e vida marinha exuberante. Roteiro adaptado para idosos.',
      preco: 'A partir de R$ 2.500',
      duracao: '7 dias / 6 noites',
      dificuldade: 'Médio'
    },
    { 
      nome: 'Foz do Iguaçu', 
      img: '/fozDoIguacu.jpg',
      descricao: 'As majestosas Cataratas do Iguaçu, uma das 7 maravilhas naturais. Acesso facilitado para idosos.',
      preco: 'A partir de R$ 800',
      duracao: '4 dias / 3 noites',
      dificuldade: 'Fácil'
    },
    { 
      nome: 'Maceió', 
      img: '/maceio.jpg',
      descricao: 'Praias de águas cristalinas e piscinas naturais deslumbrantes. Hospedagem com conforto máximo.',
      preco: 'A partir de R$ 1.100',
      duracao: '6 dias / 5 noites',
      dificuldade: 'Fácil'
    },
    { 
      nome: 'Salvador', 
      img: '/salvador.webp',
      descricao: 'A primeira capital do Brasil com rica história e cultura afro-brasileira. Roteiro histórico adaptado.',
      preco: 'A partir de R$ 900',
      duracao: '5 dias / 4 noites',
      dificuldade: 'Fácil'
    },
    { 
      nome: 'São Paulo', 
      img: '/saoPaulo.jpg',
      descricao: 'A maior metrópole da América Latina com gastronomia e cultura únicas. Transporte adaptado incluído.',
      preco: 'A partir de R$ 600',
      duracao: '4 dias / 3 noites',
      dificuldade: 'Fácil'
    },
    { 
      nome: 'Curitiba', 
      img: '/curitiba.webp',
      descricao: 'Cidade modelo com planejamento urbano e parques deslumbrantes. Acessibilidade exemplar.',
      preco: 'A partir de R$ 700',
      duracao: '4 dias / 3 noites',
      dificuldade: 'Fácil'
    },
    { 
      nome: 'Florianópolis', 
      img: '/florianopolis.webp',
      descricao: 'A Ilha da Magia com 42 praias e uma qualidade de vida excepcional. Hospedagem tranquila.',
      preco: 'A partir de R$ 950',
      duracao: '6 dias / 5 noites',
      dificuldade: 'Fácil'
    },
    { 
      nome: 'Porto Alegre', 
      img: '/portoAlegre.jpg',
      descricao: 'Capital gaúcha com tradição cultural e gastronomia regional. Roteiro cultural especial.',
      preco: 'A partir de R$ 750',
      duracao: '4 dias / 3 noites',
      dificuldade: 'Fácil'
    },
    { 
      nome: 'Aparecida', 
      img: '/aparecida.jpg',
      descricao: 'Maior santuário mariano do mundo, destino de fé e devoção. Acomodações próximas ao santuário.',
      preco: 'A partir de R$ 400',
      duracao: '3 dias / 2 noites',
      dificuldade: 'Fácil'
    },
  ];

  const destinosPromocao = [
    {
      nome: 'Fernando de Noronha',
      img: '/fernandoNoronha.jpg',
      descricao: 'Paraíso natural com praias cristalinas e vida marinha exuberante. Roteiro adaptado para idosos.',
      precoOriginal: 'R$ 3.200',
      precoPromocional: 'R$ 2.500',
      desconto: '22% OFF',
      duracao: '7 dias / 6 noites',
      dificuldade: 'Médio'
    },
    {
      nome: 'Maceió',
      img: '/maceio.jpg',
      descricao: 'Praias de águas cristalinas e piscinas naturais deslumbrantes. Hospedagem com conforto máximo.',
      precoOriginal: 'R$ 1.400',
      precoPromocional: 'R$ 1.100',
      desconto: '21% OFF',
      duracao: '6 dias / 5 noites',
      dificuldade: 'Fácil'
    },
    {
      nome: 'Foz do Iguaçu',
      img: '/fozDoIguacu.jpg',
      descricao: 'As majestosas Cataratas do Iguaçu, uma das 7 maravilhas naturais. Acesso facilitado para idosos.',
      precoOriginal: 'R$ 1.000',
      precoPromocional: 'R$ 800',
      desconto: '20% OFF',
      duracao: '4 dias / 3 noites',
      dificuldade: 'Fácil'
    }
  ];

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCriarGrupo = () => {
    setOpen(false);
    setNomeGrupo('');
    alert('Grupo criado com sucesso! Em breve entraremos em contato para organizar sua viagem.');
  };

  return (
    <div className="centralizado">
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 }, py: 0, pt: { xs: 2, md: 4 } }}>
        {/* Hero Section */}
        <Box
          sx={{
            textAlign: 'center',
            py: { xs: 6, md: 8 },
            background: 'linear-gradient(45deg, #2E7D32 30%, #4CAF50 90%)',
            borderRadius: 4,
            color: 'white',
            mb: 6,
            maxWidth: 1000,
            mx: 'auto',
            boxShadow: '0 8px 32px rgba(46, 125, 50, 0.3)',
          }}
        >
          <Typography 
            variant="h1" 
            component="h1" 
            gutterBottom 
            sx={{ 
              fontSize: { xs: '2.5rem', md: '3.5rem' }, 
              fontWeight: 700,
              mb: 3,
              textShadow: '0 2px 8px rgba(0,0,0,0.2)'
            }}
          >
            Viagens Especiais para Você
          </Typography>
          <Typography 
            variant="h4" 
            sx={{ 
              mb: 6, 
              fontSize: { xs: '1.5rem', md: '2.2rem' },
              fontWeight: 500,
              textShadow: '0 1px 4px rgba(0,0,0,0.2)'
            }}
          >
            Descubra o mundo com conforto, segurança e companhia
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: 3, 
            flexWrap: 'wrap',
            px: { xs: 2, md: 4 }
          }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/pacotes')}
              sx={{
                backgroundColor: 'white',
                color: 'primary.main',
                '&:hover': { backgroundColor: 'grey.100' },
                fontSize: { xs: '1.3rem', md: '1.5rem' },
                py: { xs: 2, md: 3 },
                px: { xs: 3, md: 4 },
                minWidth: { xs: 200, md: 250 },
                minHeight: { xs: 56, md: 64 },
                fontWeight: 600,
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              }}
            >
              Ver Pacotes de Viagem
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<GroupAddIcon sx={{ fontSize: { xs: 28, md: 32 } }} />}
              onClick={handleOpen}
              sx={{ 
                fontSize: { xs: '1.3rem', md: '1.5rem' }, 
                py: { xs: 2, md: 3 }, 
                px: { xs: 3, md: 4 }, 
                minWidth: { xs: 200, md: 250 },
                minHeight: { xs: 56, md: 64 },
                fontWeight: 600,
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              }}
            >
              Criar Grupo
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              onClick={() => setOpenTravel(true)}
              sx={{ 
                fontSize: { xs: '1.3rem', md: '1.5rem' }, 
                py: { xs: 2, md: 3 }, 
                px: { xs: 3, md: 4 }, 
                minWidth: { xs: 200, md: 250 },
                minHeight: { xs: 56, md: 64 },
                borderColor: 'white', 
                color: 'white', 
                borderWidth: 2,
                fontWeight: 600,
                '&:hover': { 
                  borderColor: 'grey.100', 
                  background: 'rgba(255,255,255,0.1)',
                  borderWidth: 2,
                } 
              }}
            >
              Planejar Viagem
            </Button>
          </Box>
        </Box>

        {/* Modal Planejar Viagem */}
        <Dialog 
          open={openTravel} 
          onClose={() => setOpenTravel(false)} 
          maxWidth="md" 
          fullWidth 
          PaperProps={{
            sx: {
              borderRadius: 4,
              boxShadow: 8,
              background: '#f9f9f9',
              p: { xs: 2, sm: 4 },
              maxWidth: 600,
              mx: 'auto',
            }
          }}
        >
          <DialogContent sx={{ p: { xs: 2, sm: 4 } }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <TravelBookingFlow />
            </Box>
          </DialogContent>
        </Dialog>

        {/* Modal Criar Grupo */}
        <Dialog 
          open={open} 
          onClose={handleClose}
          maxWidth="sm"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: 4,
              boxShadow: 8,
              background: '#f9f9f9',
            }
          }}
        >
          <DialogTitle sx={{ 
            fontSize: { xs: '1.5rem', md: '2rem' },
            fontWeight: 600,
            textAlign: 'center',
            color: 'primary.main'
          }}>
            Criar Grupo de Viagem
          </DialogTitle>
          <DialogContent sx={{ p: 3 }}>
            <Typography variant="body1" sx={{ mb: 3, fontSize: '1.125rem' }}>
              Organize um grupo de viagem com amigos ou familiares. Nossa equipe especializada irá ajudá-lo a planejar tudo!
            </Typography>
            <TextField
              autoFocus
              margin="dense"
              label="Nome do Grupo"
              type="text"
              fullWidth
              variant="outlined"
              value={nomeGrupo}
              onChange={e => setNomeGrupo(e.target.value)}
              sx={{ 
                fontSize: '1.125rem',
                '& .MuiInputBase-root': {
                  fontSize: '1.125rem',
                  minHeight: 56,
                },
                '& .MuiInputLabel-root': {
                  fontSize: '1.125rem',
                }
              }}
            />
          </DialogContent>
          <DialogActions sx={{ p: 3, gap: 2 }}>
            <Button 
              onClick={handleClose} 
              color="secondary" 
              sx={{ 
                fontSize: '1.125rem',
                py: 1.5,
                px: 3,
                minHeight: 56,
              }}
            >
              Cancelar
            </Button>
            <Button 
              onClick={handleCriarGrupo} 
              variant="contained" 
              color="primary" 
              sx={{ 
                fontSize: '1.125rem',
                py: 1.5,
                px: 3,
                minHeight: 56,
              }}
            >
              Criar Grupo
            </Button>
          </DialogActions>
        </Dialog>

        {/* Features Section */}
        <Typography 
          variant="h2" 
          component="h2" 
          align="center" 
          gutterBottom 
          sx={{ 
            mb: 6, 
            fontWeight: 700, 
            fontSize: { xs: '2rem', md: '3rem' },
            color: 'primary.main'
          }}
        >
          Por que escolher a Agência Senior?
        </Typography>
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
          gap: 4,
          mb: 8, 
          maxWidth: 1400, 
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
                p: 4,
                fontSize: '1.125rem',
                borderRadius: 4,
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                }
              }}
            >
              {feature.icon}
              <CardContent sx={{ p: 3 }}>
                <Typography 
                  variant="h4" 
                  component="h3" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 600, 
                    fontSize: { xs: '1.4rem', md: '1.8rem' },
                    color: 'primary.main',
                    mb: 2
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography 
                  variant="body1" 
                  color="text.secondary" 
                  sx={{ 
                    fontSize: '1.125rem',
                    lineHeight: 1.6
                  }}
                >
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Promoções Especiais */}
        <Typography 
          variant="h2" 
          component="h2" 
          align="center" 
          gutterBottom 
          sx={{ 
            mb: 6, 
            fontWeight: 700, 
            fontSize: { xs: '2rem', md: '3rem' },
            color: 'primary.main'
          }}
        >
          🎉 Promoções Especiais para Idosos
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
                height: 'auto', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'visible',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                borderRadius: 4,
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
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
                  padding: '12px 20px',
                  borderRadius: '25px',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  zIndex: 1,
                  boxShadow: '0 4px 12px rgba(244, 67, 54, 0.3)',
                }}
              >
                {destino.desconto}
              </Box>
              
              <CardMedia
                component="img"
                height="250"
                image={destino.img}
                alt={destino.nome}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 3 }}>
                <Box>
                  <Typography 
                    variant="h5" 
                    component="h3" 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 600, 
                      fontSize: { xs: '1.3rem', md: '1.5rem' },
                      color: 'primary.main'
                    }}
                  >
                    {destino.nome}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    paragraph 
                    sx={{ 
                      fontSize: '1.125rem', 
                      mb: 2,
                      lineHeight: 1.6
                    }}
                  >
                    {destino.descricao}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                    <Chip 
                      label={destino.duracao} 
                      color="primary" 
                      variant="outlined"
                      sx={{ fontSize: '0.875rem' }}
                    />
                    <Chip 
                      label={destino.dificuldade} 
                      color="secondary" 
                      variant="outlined"
                      sx={{ fontSize: '0.875rem' }}
                    />
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        textDecoration: 'line-through', 
                        color: 'text.secondary',
                        fontSize: '1.125rem'
                      }}
                    >
                      {destino.precoOriginal}
                    </Typography>
                    <Typography 
                      variant="h5" 
                      color="error" 
                      sx={{ 
                        fontWeight: 700,
                        fontSize: '1.5rem'
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
                    fontSize: '1.125rem', 
                    py: 2,
                    minHeight: 56,
                    background: 'linear-gradient(45deg, #f44336 30%, #ff5722 90%)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #d32f2f 30%, #e64a19 90%)',
                    }
                  }}
                >
                  Aproveitar Oferta Especial
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Featured Destinations */}
        <Typography 
          variant="h2" 
          component="h2" 
          align="center" 
          gutterBottom 
          sx={{ 
            mb: 6, 
            fontWeight: 700, 
            fontSize: { xs: '2rem', md: '3rem' },
            color: 'primary.main'
          }}
        >
          Destinos em Destaque - Adaptados para Idosos
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
                height: 'auto', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                borderRadius: 4,
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                }
              }}
            >
              <CardMedia
                component="img"
                height="220"
                image={destino.img}
                alt={destino.nome}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 3 }}>
                <Box>
                  <Typography 
                    variant="h5" 
                    component="h3" 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 600, 
                      fontSize: { xs: '1.3rem', md: '1.5rem' },
                      color: 'primary.main'
                    }}
                  >
                    {destino.nome}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    paragraph 
                    sx={{ 
                      fontSize: '1.125rem', 
                      mb: 2,
                      lineHeight: 1.6
                    }}
                  >
                    {destino.descricao}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                    <Chip 
                      label={destino.duracao} 
                      color="primary" 
                      variant="outlined"
                      sx={{ fontSize: '0.875rem' }}
                    />
                    <Chip 
                      label={destino.dificuldade} 
                      color="secondary" 
                      variant="outlined"
                      sx={{ fontSize: '0.875rem' }}
                    />
                  </Box>
                  
                  <Typography 
                    variant="h6" 
                    color="primary" 
                    sx={{ 
                      fontWeight: 600, 
                      mb: 2,
                      fontSize: '1.25rem'
                    }}
                  >
                    {destino.preco}
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => navigate('/pacotes')}
                  sx={{ 
                    fontSize: '1.125rem', 
                    py: 2,
                    minHeight: 56,
                    background: 'linear-gradient(45deg, #2E7D32 30%, #4CAF50 90%)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #1B5E20 30%, #388E3C 90%)',
                    }
                  }}
                >
                  Ver Pacotes Completos
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