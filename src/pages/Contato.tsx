import { Container, Typography, Grid, TextField, Button, Box, Paper } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contato = () => {
  return (
    <Container maxWidth={false} sx={{ px: { xs: 1, md: 8 }, py: 4, pt: { xs: 10, md: 12 }, display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '1400px', mx: 'auto' }}>
      <Box sx={{ width: '100%', maxWidth: 900, mx: 'auto' }}>
        <Typography variant="h2" component="h1" align="center" gutterBottom sx={{ fontWeight: 700, fontSize: { xs: '2rem', md: '2.7rem' } }}>
          Entre em Contato
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
          Estamos aqui para ajudar você a planejar sua viagem dos sonhos
        </Typography>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          {/* Informações de Contato */}
          <Grid item xs={12} md={4}>
            <Box component={Paper} sx={{ p: 3, height: '100%', fontSize: '1.1rem' }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
                Informações de Contato
              </Typography>
              <Box sx={{ mt: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <PhoneIcon sx={{ fontSize: 32, color: 'primary.main', mr: 2 }} />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontSize: '1.1rem' }}>Telefone</Typography>
                    <Typography variant="body1">(11) 1234-5678</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <EmailIcon sx={{ fontSize: 32, color: 'primary.main', mr: 2 }} />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontSize: '1.1rem' }}>E-mail</Typography>
                    <Typography variant="body1">contato@viagensfelizes.com.br</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <LocationOnIcon sx={{ fontSize: 32, color: 'primary.main', mr: 2 }} />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontSize: '1.1rem' }}>Endereço</Typography>
                    <Typography variant="body1">
                      Av. Paulista, 1000 - Bela Vista
                      <br />
                      São Paulo - SP
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Formulário de Contato */}
          <Grid item xs={12} md={8}>
            <Box component={Paper} sx={{ p: 3, fontSize: '1.1rem' }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
                Envie sua Mensagem
              </Typography>
              <Box component="form" sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} md={3}>
                    <TextField
                      required
                      fullWidth
                      label="Nome Completo"
                      variant="outlined"
                      InputLabelProps={{ style: { fontSize: 18 } }}
                      inputProps={{ style: { fontSize: 18 } }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <TextField
                      required
                      fullWidth
                      label="Telefone"
                      variant="outlined"
                      InputLabelProps={{ style: { fontSize: 18 } }}
                      inputProps={{ style: { fontSize: 18 } }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <TextField
                      required
                      fullWidth
                      label="E-mail"
                      variant="outlined"
                      InputLabelProps={{ style: { fontSize: 18 } }}
                      inputProps={{ style: { fontSize: 18 } }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <TextField
                      required
                      fullWidth
                      label="Assunto"
                      variant="outlined"
                      InputLabelProps={{ style: { fontSize: 18 } }}
                      inputProps={{ style: { fontSize: 18 } }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Mensagem"
                      variant="outlined"
                      multiline
                      rows={4}
                      InputLabelProps={{ style: { fontSize: 18 } }}
                      inputProps={{ style: { fontSize: 18 } }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                      sx={{ mt: 2, py: 1.5, fontSize: '1.2rem' }}
                    >
                      Enviar Mensagem
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* Horário de Atendimento */}
      <Box sx={{ mt: 6, textAlign: 'center', width: '100%', maxWidth: 900 }}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, fontSize: { xs: '1.5rem', md: '2.2rem' } }}>
          Horário de Atendimento
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
          Segunda a Sexta: 9h às 18h
          <br />
          Sábado: 9h às 13h
        </Typography>
      </Box>
    </Container>
  );
};

export default Contato; 