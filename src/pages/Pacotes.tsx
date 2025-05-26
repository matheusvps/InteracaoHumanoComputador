import { Container, Typography, Card, CardContent, CardMedia, Button, Box, Chip, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import AccessibleIcon from '@mui/icons-material/Accessible';
import HotelIcon from '@mui/icons-material/Hotel';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { useState } from 'react';
import Grid from '@mui/material/Grid';

const Pacotes = () => {
  const [open, setOpen] = useState(false);
  const [nomeGrupo, setNomeGrupo] = useState('');

  const pacotes = [
    {
      destino: 'Gramado',
      imagem: 'https://source.unsplash.com/800x600/?gramado',
      preco: 'R$ 2.999',
      duracao: '5 dias',
      inclusos: ['Hospedagem', 'Café da manhã', 'Passeios', 'Transporte'],
      descricao: 'Pacote especial para Gramado com passeios pelos principais pontos turísticos.',
    },
    {
      destino: 'Florianópolis',
      imagem: 'https://source.unsplash.com/800x600/?florianopolis',
      preco: 'R$ 3.499',
      duracao: '7 dias',
      inclusos: ['Hospedagem', 'Café da manhã', 'Passeios', 'Transporte'],
      descricao: 'Conheça as praias mais bonitas de Florianópolis com todo conforto.',
    },
    {
      destino: 'Porto Seguro',
      imagem: 'https://source.unsplash.com/800x600/?porto-seguro',
      preco: 'R$ 3.999',
      duracao: '6 dias',
      inclusos: ['Hospedagem', 'Café da manhã', 'Passeios', 'Transporte'],
      descricao: 'Aproveite o melhor de Porto Seguro com passeios adaptados.',
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
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4, mt: 2 }}>
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
      <Typography variant="h2" component="h1" align="center" gutterBottom sx={{ fontWeight: 700, fontSize: { xs: '2rem', md: '2.7rem' } }}>
        Pacotes de Viagem
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" paragraph sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
        Escolha seu destino preferido e embarque em uma viagem inesquecível
      </Typography>
      <Grid container spacing={4} sx={{ mt: 2 }}>
        {pacotes.map((pacote, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ height: 480, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <CardMedia
                component="img"
                height="200"
                image={pacote.imagem}
                alt={pacote.destino}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600, fontSize: { xs: '1.3rem', md: '2rem' } }}>
                  {pacote.destino}
                </Typography>
                <Typography variant="h5" color="primary" gutterBottom sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
                  {pacote.preco}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom sx={{ fontSize: '1.1rem' }}>
                  Duração: {pacote.duracao}
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
                  {pacote.descricao}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  {pacote.inclusos.map((item, idx) => (
                    <Chip
                      key={idx}
                      label={item}
                      sx={{ m: 0.5, fontSize: '1.1rem', height: 32 }}
                      color="primary"
                      variant="outlined"
                    />
                  ))}
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  sx={{ mt: 2, fontSize: '1.2rem', py: 1.5 }}
                >
                  Reservar Agora
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, fontSize: { xs: '1.5rem', md: '2.2rem' } }}>
          O que está incluído em todos os pacotes?
        </Typography>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center', p: 2 }}>
              <AccessibleIcon sx={{ fontSize: 70, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" sx={{ fontWeight: 600, fontSize: { xs: '1.1rem', md: '1.5rem' } }}>Acessibilidade</Typography>
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                Suporte especializado e adaptações conforme necessidade
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center', p: 2 }}>
              <HotelIcon sx={{ fontSize: 70, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" sx={{ fontWeight: 600, fontSize: { xs: '1.1rem', md: '1.5rem' } }}>Hospedagem</Typography>
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                Hotéis selecionados com acessibilidade
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center', p: 2 }}>
              <DirectionsBusIcon sx={{ fontSize: 70, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" sx={{ fontWeight: 600, fontSize: { xs: '1.1rem', md: '1.5rem' } }}>Transporte</Typography>
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                Veículos adaptados e motoristas treinados
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Pacotes; 