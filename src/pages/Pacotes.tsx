import { Container, Typography, Card, CardContent, CardMedia, Button, Box, Chip, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { useState } from 'react';

const Pacotes = () => {
  const [open, setOpen] = useState(false);
  const [nomeGrupo, setNomeGrupo] = useState('');
  const [openReserva, setOpenReserva] = useState(false);

  const pacotes = [
    {
      destino: 'Aparecida',
      imagem: '/aparecida.jpg',
      preco: 'R$ 1.299',
      duracao: '3 dias / 2 noites',
      inclusos: ['Hospedagem 4 estrelas', 'Café da manhã completo', 'Passeios guiados', 'Transporte adaptado', 'Assistência médica'],
      descricao: 'Peregrinação especial à Basílica de Aparecida com suporte completo. Acomodações próximas ao santuário com acessibilidade total.',
      dificuldade: 'Fácil',
      acessibilidade: ['Rampas de acesso', 'Banheiros adaptados', 'Guia especializado', 'Transporte com elevador']
    },
    {
      destino: 'Curitiba',
      imagem: '/curitiba.webp',
      preco: 'R$ 2.199',
      duracao: '4 dias / 3 noites',
      inclusos: ['Hospedagem 4 estrelas', 'Café da manhã completo', 'Passeios adaptados', 'Transporte público adaptado', 'Seguro viagem'],
      descricao: 'Conheça a capital ecológica do Brasil com passeios adaptados. Cidade modelo em acessibilidade urbana.',
      dificuldade: 'Fácil',
      acessibilidade: ['Ônibus adaptados', 'Parques acessíveis', 'Museus com rampas', 'Restaurantes adaptados']
    },
    {
      destino: 'Fernando de Noronha',
      imagem: '/fernandoNoronha.jpg',
      preco: 'R$ 5.999',
      duracao: '6 dias / 5 noites',
      inclusos: ['Hospedagem premium', 'Café da manhã completo', 'Passeios exclusivos', 'Transporte adaptado', 'Assistência médica 24h'],
      descricao: 'Paraíso natural com acessibilidade completa e passeios exclusivos. Roteiro especial para idosos.',
      dificuldade: 'Médio',
      acessibilidade: ['Trilhas adaptadas', 'Veículos 4x4 adaptados', 'Passeios de barco seguros', 'Hospedagem na praia']
    },
    {
      destino: 'Florianópolis',
      imagem: '/florianopolis.webp',
      preco: 'R$ 3.499',
      duracao: '7 dias / 6 noites',
      inclusos: ['Hospedagem 4 estrelas', 'Café da manhã completo', 'Passeios pela ilha', 'Transporte adaptado', 'Seguro viagem'],
      descricao: 'Conheça as praias mais bonitas de Florianópolis com todo conforto. Hospedagem tranquila e acessível.',
      dificuldade: 'Fácil',
      acessibilidade: ['Praias com acesso adaptado', 'Centro histórico acessível', 'Transporte público adaptado', 'Restaurantes na praia']
    },
    {
      destino: 'Foz do Iguaçu',
      imagem: '/fozDoIguacu.jpg',
      preco: 'R$ 2.899',
      duracao: '5 dias / 4 noites',
      inclusos: ['Hospedagem 4 estrelas', 'Café da manhã completo', 'Passeios às Cataratas', 'Transporte adaptado', 'Guia especializado'],
      descricao: 'Maravilha natural das Cataratas do Iguaçu com acessibilidade total. Trilhas adaptadas e mirantes seguros.',
      dificuldade: 'Fácil',
      acessibilidade: ['Trilhas com rampas', 'Mirantes adaptados', 'Trem panorâmico', 'Banheiros adaptados']
    },
    {
      destino: 'Maceió',
      imagem: '/maceio.jpg',
      preco: 'R$ 3.799',
      duracao: '6 dias / 5 noites',
      inclusos: ['Hospedagem 4 estrelas', 'Café da manhã completo', 'Passeios às praias', 'Transporte adaptado', 'Assistência médica'],
      descricao: 'Praias paradisíacas de Maceió com suporte especializado. Piscinas naturais com acesso facilitado.',
      dificuldade: 'Fácil',
      acessibilidade: ['Praias com rampas', 'Piscinas naturais acessíveis', 'Hotéis na praia', 'Restaurantes adaptados']
    },
    {
      destino: 'Porto Alegre',
      imagem: '/portoAlegre.jpg',
      preco: 'R$ 2.399',
      duracao: '4 dias / 3 noites',
      inclusos: ['Hospedagem 4 estrelas', 'Café da manhã completo', 'Passeios culturais', 'Transporte adaptado', 'Seguro viagem'],
      descricao: 'Capital gaúcha com cultura, gastronomia e acessibilidade. Roteiro cultural especial para idosos.',
      dificuldade: 'Fácil',
      acessibilidade: ['Centro histórico acessível', 'Museus adaptados', 'Gastronomia tradicional', 'Parques urbanos']
    },
    {
      destino: 'Rio de Janeiro',
      imagem: '/rioDeJaneiro.jpg',
      preco: 'R$ 4.299',
      duracao: '7 dias / 6 noites',
      inclusos: ['Hospedagem 4 estrelas', 'Café da manhã completo', 'Passeios aos principais pontos', 'Transporte adaptado', 'Guia especializado'],
      descricao: 'Cidade Maravilhosa com passeios adaptados aos principais pontos. Cristo Redentor e Pão de Açúcar acessíveis.',
      dificuldade: 'Fácil',
      acessibilidade: ['Cristo Redentor acessível', 'Pão de Açúcar adaptado', 'Praias com acesso', 'Metrô adaptado']
    },
    {
      destino: 'Salvador',
      imagem: '/salvador.webp',
      preco: 'R$ 3.199',
      duracao: '5 dias / 4 noites',
      inclusos: ['Hospedagem 4 estrelas', 'Café da manhã completo', 'Passeios históricos', 'Transporte adaptado', 'Seguro viagem'],
      descricao: 'Capital da Bahia com história, cultura e acessibilidade completa. Pelourinho adaptado para idosos.',
      dificuldade: 'Fácil',
      acessibilidade: ['Pelourinho acessível', 'Elevador Lacerda adaptado', 'Igrejas com rampas', 'Gastronomia local']
    },
    {
      destino: 'São Paulo',
      imagem: '/saoPaulo.jpg',
      preco: 'R$ 2.599',
      duracao: '4 dias / 3 noites',
      inclusos: ['Hospedagem 4 estrelas', 'Café da manhã completo', 'Passeios culturais', 'Transporte adaptado', 'Guia especializado'],
      descricao: 'Metrópole paulistana com cultura, gastronomia e lazer adaptado. Museus e teatros acessíveis.',
      dificuldade: 'Fácil',
      acessibilidade: ['Metrô adaptado', 'Museus acessíveis', 'Teatros com rampas', 'Shopping centers adaptados']
    },
  ];

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCriarGrupo = () => {
    setOpen(false);
    setNomeGrupo('');
    alert('Grupo criado com sucesso! Em breve entraremos em contato para organizar sua viagem.');
  };

  const handleReservarPacote = () => {
    setOpenReserva(true);
  };

  const handleCloseReserva = () => {
    setOpenReserva(false);
  };

  return (
    <div className="centralizado">
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 }, py: 0, pt: { xs: 2, md: 4 } }}>
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h1" 
            component="h1" 
            gutterBottom 
            sx={{ 
              fontWeight: 700, 
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              color: 'primary.main',
              mb: 3
            }}
          >
            Pacotes de Viagem Especiais
          </Typography>
          <Typography 
            variant="h4" 
            align="center" 
            color="text.secondary" 
            paragraph 
            sx={{ 
              fontSize: { xs: '1.3rem', md: '1.8rem' },
              mb: 4,
              lineHeight: 1.6
            }}
          >
            Escolha seu destino preferido e embarque em uma viagem inesquecível com conforto e segurança
          </Typography>
          
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
            Criar Grupo de Viagem
          </Button>
        </Box>

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

        {/* Pacotes Grid */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 4 }}>
          {pacotes.map((pacote, index) => (
            <Box key={index}>
              <Card 
                sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between',
                  height: '100%',
                  borderRadius: 4,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={pacote.imagem}
                  alt={pacote.destino}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography 
                    variant="h4" 
                    component="h2" 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 600, 
                      fontSize: { xs: '1.4rem', md: '1.8rem' },
                      color: 'primary.main',
                      mb: 2
                    }}
                  >
                    {pacote.destino}
                  </Typography>
                  
                  <Typography 
                    variant="h5" 
                    color="primary" 
                    gutterBottom 
                    sx={{ 
                      fontSize: { xs: '1.3rem', md: '1.6rem' },
                      fontWeight: 700,
                      mb: 2
                    }}
                  >
                    {pacote.preco}
                  </Typography>
                  
                  <Typography 
                    variant="subtitle1" 
                    color="text.secondary" 
                    gutterBottom 
                    sx={{ 
                      fontSize: '1.125rem',
                      mb: 2
                    }}
                  >
                    <strong>Duração:</strong> {pacote.duracao}
                  </Typography>

                  <Typography 
                    variant="subtitle1" 
                    color="text.secondary" 
                    gutterBottom 
                    sx={{ 
                      fontSize: '1.125rem',
                      mb: 2
                    }}
                  >
                    <strong>Dificuldade:</strong> {pacote.dificuldade}
                  </Typography>
                  
                  <Typography 
                    variant="body1" 
                    paragraph 
                    sx={{ 
                      fontSize: '1.125rem',
                      lineHeight: 1.6,
                      mb: 3
                    }}
                  >
                    {pacote.descricao}
                  </Typography>

                  <Box sx={{ mb: 3 }}>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontSize: '1.125rem',
                        fontWeight: 600,
                        mb: 1,
                        color: 'primary.main'
                      }}
                    >
                      Incluso no Pacote:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {pacote.inclusos.map((item, idx) => (
                        <Chip
                          key={idx}
                          label={item}
                          sx={{ 
                            fontSize: '0.875rem', 
                            height: 32,
                            backgroundColor: 'primary.light',
                            color: 'white'
                          }}
                          size="small"
                        />
                      ))}
                    </Box>
                  </Box>

                  <Box sx={{ mb: 3 }}>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontSize: '1.125rem',
                        fontWeight: 600,
                        mb: 1,
                        color: 'secondary.main'
                      }}
                    >
                      Acessibilidade:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {pacote.acessibilidade.map((item, idx) => (
                        <Chip
                          key={idx}
                          label={item}
                          sx={{ 
                            fontSize: '0.875rem', 
                            height: 32,
                            backgroundColor: 'secondary.light',
                            color: 'white'
                          }}
                          size="small"
                        />
                      ))}
                    </Box>
                  </Box>
                  
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                    onClick={handleReservarPacote}
                    sx={{ 
                      fontSize: '1.125rem', 
                      py: 2,
                      minHeight: 56,
                      fontWeight: 600,
                      background: 'linear-gradient(45deg, #2E7D32 30%, #4CAF50 90%)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #1B5E20 30%, #388E3C 90%)',
                      }
                    }}
                  >
                    Reservar Agora
                  </Button>
                </CardContent>
                              </Card>
              </Box>
            ))}
          </Box>

        {/* Modal Reserva */}
        <Dialog 
          open={openReserva} 
          onClose={handleCloseReserva}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: 4,
              boxShadow: 8,
              background: '#f9f9f9',
            }
          }}
        >
          <DialogContent sx={{ p: { xs: 2, sm: 4 } }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Typography variant="h4" sx={{ mb: 2, color: 'primary.main', fontWeight: 700 }}>
                Reserva realizada com sucesso!
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.125rem' }}>
                Em breve nossa equipe entrará em contato para finalizar os detalhes da sua viagem.
              </Typography>
              <Button onClick={handleCloseReserva} variant="contained" color="primary" sx={{ mt: 2, fontSize: '1.125rem', minHeight: 56 }}>
                Fechar
              </Button>
            </Box>
          </DialogContent>
        </Dialog>
      </Container>
    </div>
  );
};

export default Pacotes; 