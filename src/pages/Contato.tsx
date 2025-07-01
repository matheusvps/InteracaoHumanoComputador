import { Container, Typography, TextField, Button, Box, Paper, InputAdornment, Alert, Snackbar } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import SubjectIcon from '@mui/icons-material/Subject';
import MessageIcon from '@mui/icons-material/Message';
import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

const Contato = () => {
  const [form, setForm] = useState({ nome: '', telefone: '', email: '', assunto: '', mensagem: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.nome) newErrors.nome = 'Nome obrigatório';
    if (!form.telefone) newErrors.telefone = 'Telefone obrigatório';
    if (!form.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) newErrors.email = 'E-mail inválido';
    if (!form.assunto) newErrors.assunto = 'Assunto obrigatório';
    if (!form.mensagem) newErrors.mensagem = 'Mensagem obrigatória';
    return newErrors;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length === 0) {
      setSending(true);
      setTimeout(() => {
        setSending(false);
        setSuccess(true);
        setForm({ nome: '', telefone: '', email: '', assunto: '', mensagem: '' });
      }, 1200);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f7fa',
      }}
    >
      <Paper
        elevation={10}
        sx={{
          padding: { xs: 2, md: 6 },
          borderRadius: 4,
          maxWidth: 1200,
          width: '100%',
          boxShadow: 8,
        }}
      >
        <Container maxWidth="xl" className="px-2 md:px-8 py-8 flex flex-col items-center">
          <Box className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Informações de Contato */}
            <Paper elevation={8} className="p-8 h-full flex flex-col gap-10 bg-gradient-to-b from-green-50 to-white justify-between shadow-lg border border-green-100">
              <Typography variant="h5" className="font-bold text-green-900 mb-4 text-center border-b pb-2 border-green-200">Fale Conosco</Typography>
              <Box className="flex flex-col gap-8">
                <Box className="flex items-start gap-4">
                  <PhoneIcon className="text-5xl text-green-700" />
                  <Box>
                    <Typography variant="subtitle1" className="text-lg font-bold text-green-900">Telefone</Typography>
                    <Typography variant="body1" className="text-lg">
                      <a href="tel:1112345678" className="text-green-800 hover:underline">(11) 1234-5678</a>
                    </Typography>
                  </Box>
                </Box>
                <Box className="flex items-start gap-4">
                  <EmailIcon className="text-5xl text-green-700" />
                  <Box>
                    <Typography variant="subtitle1" className="text-lg font-bold text-green-900">E-mail</Typography>
                    <Typography variant="body1" className="text-lg">
                      <a href="mailto:contato@agenciasenior.com.br" className="text-green-800 hover:underline">contato@agenciasenior.com.br</a>
                    </Typography>
                  </Box>
                </Box>
                <Box className="flex items-start gap-4">
                  <LocationOnIcon className="text-5xl text-green-700" />
                  <Box>
                    <Typography variant="subtitle1" className="text-lg font-bold text-green-900">Endereço</Typography>
                    <Typography variant="body1" className="text-lg">
                      Av. Paulista, 1000 - Bela Vista<br />São Paulo - SP
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Paper elevation={2} className="p-4 bg-green-50 mt-6 border border-green-100">
                <Typography variant="h6" className="font-bold text-green-900 mb-2 text-center">Horário de Atendimento</Typography>
                <Typography variant="body1" color="text.secondary" className="text-lg text-center">
                  Segunda a Sexta: 9h às 18h<br />Sábado: 9h às 13h
                </Typography>
              </Paper>
            </Paper>

            {/* Formulário de Contato */}
            <Box className="md:col-span-2 flex items-center justify-center">
              <Paper elevation={8} className="w-full p-12 text-lg bg-white shadow-2xl flex flex-col gap-10 border border-green-100">
                <Typography variant="h4" className="font-bold text-2xl mb-2 text-green-900 text-center">
                  Envie sua Mensagem
                </Typography>
                <Box component="form" className="flex flex-col gap-10" onSubmit={handleSubmit} autoComplete="off">
                  <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    <TextField
                      required
                      fullWidth
                      label="Nome Completo"
                      name="nome"
                      value={form.nome}
                      onChange={handleChange}
                      error={!!errors.nome}
                      helperText={errors.nome}
                      variant="outlined"
                      className="text-lg"
                      InputLabelProps={{ className: "text-lg" }}
                      inputProps={{ className: "text-lg" }}
                      InputProps={{ startAdornment: <InputAdornment position="start"><PersonIcon /></InputAdornment> }}
                    />
                    <TextField
                      required
                      fullWidth
                      label="Telefone"
                      name="telefone"
                      value={form.telefone}
                      onChange={handleChange}
                      error={!!errors.telefone}
                      helperText={errors.telefone}
                      variant="outlined"
                      className="text-lg"
                      InputLabelProps={{ className: "text-lg" }}
                      inputProps={{ className: "text-lg" }}
                      InputProps={{ startAdornment: <InputAdornment position="start"><PhoneIcon /></InputAdornment> }}
                    />
                    <TextField
                      required
                      fullWidth
                      label="E-mail"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      error={!!errors.email}
                      helperText={errors.email}
                      variant="outlined"
                      className="text-lg"
                      InputLabelProps={{ className: "text-lg" }}
                      inputProps={{ className: "text-lg" }}
                      InputProps={{ startAdornment: <InputAdornment position="start"><EmailIcon /></InputAdornment> }}
                    />
                    <TextField
                      required
                      fullWidth
                      label="Assunto"
                      name="assunto"
                      value={form.assunto}
                      onChange={handleChange}
                      error={!!errors.assunto}
                      helperText={errors.assunto}
                      variant="outlined"
                      className="text-lg"
                      InputLabelProps={{ className: "text-lg" }}
                      inputProps={{ className: "text-lg" }}
                      InputProps={{ startAdornment: <InputAdornment position="start"><SubjectIcon /></InputAdornment> }}
                    />
                  </Box>
                  <TextField
                    required
                    fullWidth
                    label="Mensagem"
                    name="mensagem"
                    value={form.mensagem}
                    onChange={handleChange}
                    error={!!errors.mensagem}
                    helperText={errors.mensagem}
                    variant="outlined"
                    multiline
                    rows={4}
                    className="text-lg"
                    InputLabelProps={{ className: "text-lg" }}
                    inputProps={{ className: "text-lg" }}
                    InputProps={{ startAdornment: <InputAdornment position="start"><MessageIcon /></InputAdornment> }}
                  />
                  <Button
                    variant="contained"
                    color="success"
                    size="large"
                    fullWidth
                    type="submit"
                    className="py-3 text-lg font-bold"
                    disabled={sending}
                  >
                    {sending ? 'Enviando...' : 'Enviar Mensagem'}
                  </Button>
                </Box>
              </Paper>
            </Box>
          </Box>
        </Container>
        <Snackbar open={success} autoHideDuration={4000} onClose={() => setSuccess(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
          <Alert onClose={() => setSuccess(false)} severity="success" sx={{ width: '100%' }}>
            Mensagem enviada com sucesso!
          </Alert>
        </Snackbar>
      </Paper>
    </Box>
  );
};

export default Contato; 