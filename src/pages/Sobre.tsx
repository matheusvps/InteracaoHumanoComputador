import { Container, Typography, Grid, Box, Paper } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Sobre = () => {
  const valores = [
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      titulo: 'Excelência',
      descricao: 'Comprometimento com a qualidade em todos os serviços oferecidos.',
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      titulo: 'Respeito',
      descricao: 'Valorização das necessidades e particularidades de cada cliente.',
    },
    {
      icon: <FavoriteIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      titulo: 'Cuidado',
      descricao: 'Atenção especial à segurança e bem-estar dos nossos clientes.',
    },
  ];

  return (
    <Container maxWidth={false} sx={{ px: { xs: 1, md: 8 }, py: 4, pt: { xs: 10, md: 12 }, display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '1400px', mx: 'auto' }}>
      <Box sx={{ width: '100%', maxWidth: 900, mx: 'auto' }}>
        <Typography variant="h2" component="h1" align="center" gutterBottom sx={{ fontWeight: 700, fontSize: { xs: '2rem', md: '2.7rem' } }}>
          Sobre a Viagens Felizes
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
          Especialistas em viagens para a melhor idade
        </Typography>

        {/* História */}
        <Box component={Paper} sx={{ p: 4, mb: 6, fontSize: '1.1rem' }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, fontSize: { xs: '1.2rem', md: '1.7rem' } }}>
            Nossa História
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
            A Viagens Felizes nasceu da paixão por proporcionar experiências únicas e memoráveis
            para pessoas da melhor idade. Com mais de 15 anos de experiência no mercado,
            nos especializamos em criar pacotes de viagem que atendem às necessidades
            específicas dos nossos clientes.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
            Nossa equipe é formada por profissionais experientes e capacitados para
            oferecer o melhor atendimento, garantindo conforto, segurança e diversão
            em todas as viagens.
          </Typography>
        </Box>

        {/* Valores */}
        <Typography variant="h3" align="center" gutterBottom sx={{ mb: 4, fontWeight: 700, fontSize: { xs: '1.5rem', md: '2.2rem' } }}>
          Nossos Valores
        </Typography>
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {valores.map((valor, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box
                sx={{
                  textAlign: 'center',
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                {valor.icon}
                <Typography variant="h5" sx={{ mt: 2, mb: 1, fontWeight: 600, fontSize: { xs: '1.1rem', md: '1.5rem' } }}>
                  {valor.titulo}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                  {valor.descricao}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Diferenciais */}
        <Box component={Paper} sx={{ p: 4 }}>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, fontSize: { xs: '1.5rem', md: '2.2rem' } }}>
            Por que escolher a Viagens Felizes?
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, fontSize: { xs: '1.1rem', md: '1.3rem' } }}>
                  ✓ Equipe Especializada
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                  Profissionais treinados para atender às necessidades específicas
                  de cada cliente.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, fontSize: { xs: '1.1rem', md: '1.3rem' } }}>
                  ✓ Pacotes Personalizados
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                  Viagens adaptadas às preferências e necessidades de cada grupo.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, fontSize: { xs: '1.1rem', md: '1.3rem' } }}>
                  ✓ Suporte 24h
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                  Assistência completa durante toda a viagem, 24 horas por dia.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, fontSize: { xs: '1.1rem', md: '1.3rem' } }}>
                  ✓ Segurança Garantida
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                  Parcerias com as melhores empresas do setor para garantir sua tranquilidade.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Sobre; 