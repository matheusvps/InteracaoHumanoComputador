import { Container, Typography, Box, Paper, Divider, Button, Card, CardContent, Avatar } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TimelineIcon from '@mui/icons-material/Timeline';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SecurityIcon from '@mui/icons-material/Security';
import PersonIcon from '@mui/icons-material/Person';

const depoimentos = [
  {
    nome: 'Maria Oliveira',
    texto: 'A viagem foi incrível! Me senti segura e muito bem cuidada durante todo o passeio.',
  },
  {
    nome: 'João Silva',
    texto: 'Equipe atenciosa e pacotes realmente pensados para a melhor idade. Recomendo!',
  },
];

const marcos = [
  { ano: '2008', evento: 'Fundação da Agência Senior' },
  { ano: '2012', evento: 'Primeira viagem internacional' },
  { ano: '2018', evento: '10.000 clientes atendidos' },
  { ano: '2023', evento: 'Prêmio de Excelência em Turismo Sênior' },
];

const Sobre = () => {
  const valores = [
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 60, color: 'success.main' }} />,
      titulo: 'Excelência',
      descricao: 'Comprometimento com a qualidade em todos os serviços oferecidos.',
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 60, color: 'success.main' }} />,
      titulo: 'Respeito',
      descricao: 'Valorização das necessidades e particularidades de cada cliente.',
    },
    {
      icon: <FavoriteIcon sx={{ fontSize: 60, color: 'success.main' }} />,
      titulo: 'Cuidado',
      descricao: 'Atenção especial à segurança e bem-estar dos nossos clientes.',
    },
  ];

  return (
    <div style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3e6cb 100%)', minHeight: '100vh' }}>
      {/* Imagem de capa */}
      <Box sx={{ width: '100%', height: { xs: 180, md: 300 }, backgroundImage: 'url(/public/fozDoIguacu.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: 0, mb: 4 }} aria-label="Imagem de capa da agência" />
      <Container maxWidth="xl" sx={{ px: { xs: 1, md: 8 }, py: 4, pt: { xs: 2, md: 4 }, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ width: '100%', maxWidth: 900, mx: 'auto' }}>
          <Typography variant="h2" component="h1" align="center" gutterBottom sx={{ fontWeight: 700, fontSize: { xs: '2rem', md: '2.7rem' } }}>
            Sobre a Agência Senior
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
            Especialistas em viagens para a melhor idade
          </Typography>

          {/* Missão e Visão */}
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 4, mb: 4 }}>
            <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>Missão</Typography>
              <Typography variant="body1">Proporcionar experiências de viagem seguras, confortáveis e inesquecíveis para pessoas da melhor idade.</Typography>
            </Paper>
            <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>Visão</Typography>
              <Typography variant="body1">Ser referência nacional em turismo sênior, reconhecida pela excelência e cuidado com nossos clientes.</Typography>
            </Paper>
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* História */}
          <Box component={Paper} sx={{ p: 4, mb: 6, fontSize: '1.1rem', background: '#f8fff8' }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, fontSize: { xs: '1.2rem', md: '1.7rem' } }}>
              Nossa História
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
              A Agência Senior nasceu da paixão por proporcionar experiências únicas e memoráveis
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

          {/* Linha do tempo */}
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
            Nossa Trajetória
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 6 }}>
            {marcos.map((marco, idx) => (
              <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <TimelineIcon color="success" sx={{ mr: 1 }} />
                <Typography variant="body1" sx={{ fontWeight: 500, minWidth: 70 }}>{marco.ano}</Typography>
                <Typography variant="body1" sx={{ ml: 2 }}>{marco.evento}</Typography>
              </Box>
            ))}
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* Valores em cards */}
          <Typography variant="h3" align="center" gutterBottom sx={{ mb: 4, fontWeight: 700, fontSize: { xs: '1.5rem', md: '2.2rem' } }}>
            Nossos Valores
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 4, mb: 6, justifyContent: 'center' }}>
            {valores.map((valor, index) => (
              <Box key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Card elevation={4} sx={{ transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.04)' }, height: '100%', minWidth: 260, maxWidth: 320 }}>
                  <CardContent sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {valor.icon}
                    <Typography variant="h5" sx={{ mt: 2, mb: 1, fontWeight: 600, fontSize: { xs: '1.1rem', md: '1.5rem' } }}>
                      {valor.titulo}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                      {valor.descricao}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* Diferenciais */}
          <Box component={Paper} sx={{ p: 4, mb: 6 }}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, fontSize: { xs: '1.5rem', md: '2.2rem' } }}>
              Por que escolher a Agência Senior?
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 3 }}>
              <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
                <SupportAgentIcon color="success" sx={{ mr: 1 }} />
                <Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, fontSize: { xs: '1.1rem', md: '1.3rem' } }}>
                    Equipe Especializada
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                    Profissionais treinados para atender às necessidades específicas de cada cliente.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
                <GroupsIcon color="success" sx={{ mr: 1 }} />
                <Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, fontSize: { xs: '1.1rem', md: '1.3rem' } }}>
                    Pacotes Personalizados
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                    Viagens adaptadas às preferências e necessidades de cada grupo.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
                <SupportAgentIcon color="success" sx={{ mr: 1 }} />
                <Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, fontSize: { xs: '1.1rem', md: '1.3rem' } }}>
                    Suporte 24h
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                    Assistência completa durante toda a viagem, 24 horas por dia.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
                <SecurityIcon color="success" sx={{ mr: 1 }} />
                <Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, fontSize: { xs: '1.1rem', md: '1.3rem' } }}>
                    Segurança Garantida
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                    Parcerias com as melhores empresas do setor para garantir sua tranquilidade.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Depoimentos */}
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
            Depoimentos de Clientes
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 4, mb: 6 }}>
            {depoimentos.map((dep, idx) => (
              <Card key={idx} elevation={2} sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar sx={{ bgcolor: 'success.main', width: 56, height: 56, mr: 2 }}>
                  <PersonIcon />
                </Avatar>
                <Box>
                  <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                    "{dep.texto}"
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mt: 1 }}>
                    {dep.nome}
                  </Typography>
                </Box>
              </Card>
            ))}
          </Box>

          {/* Botões de ação */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mb: 4 }}>
            <Button variant="contained" color="success" href="/pacotes" aria-label="Veja nossos pacotes">
              Veja nossos pacotes
            </Button>
            <Button variant="outlined" color="success" href="/contato" aria-label="Fale conosco">
              Fale conosco
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Sobre; 