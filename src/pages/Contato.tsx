import { Container, Typography, TextField, Button, Box, Paper, InputAdornment, Alert, Snackbar } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import SubjectIcon from '@mui/icons-material/Subject';
import MessageIcon from '@mui/icons-material/Message';
import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import Divider from '@mui/material/Divider';

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
        elevation={8}
        sx={{
          padding: { xs: 2, md: 10 },
          borderRadius: 8,
          maxWidth: 700,
          width: '100%',
          boxShadow: 8,
          background: 'white',
        }}
      >
        <Container maxWidth="xl" className="px-2 md:px-8 py-12 flex flex-col items-center">
          <Box className="w-full max-w-3xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20 items-stretch">
            {/* Informações de Contato */}
            <Box className="flex-1 flex flex-col justify-between bg-gradient-to-b from-green-50 to-white rounded-2xl shadow-none p-0">
              <Typography variant="h4" className="font-extrabold text-green-900 mb-6 text-center text-3xl md:text-4xl">Fale Conosco</Typography>
              <Box className="flex flex-col gap-8">
                <Box className="flex items-start gap-3">
                  <PhoneIcon className="text-3xl text-green-700" />
                  <Box>
                    <Typography variant="subtitle1" className="text-base font-bold text-green-900">Telefone</Typography>
                    <Typography variant="body1" className="text-base">
                      <a href="tel:1112345678" className="text-green-800 hover:underline">(11) 1234-5678</a>
                    </Typography>
                  </Box>
                </Box>
                <Box className="flex items-start gap-3">
                  <EmailIcon className="text-3xl text-green-700" />
                  <Box>
                    <Typography variant="subtitle1" className="text-base font-bold text-green-900">E-mail</Typography>
                    <Typography variant="body1" className="text-base">
                      <a href="mailto:contato@agenciasenior.com.br" className="text-green-800 hover:underline">contato@agenciasenior.com.br</a>
                    </Typography>
                  </Box>
                </Box>
                <Box className="flex items-start gap-3">
                  <LocationOnIcon className="text-3xl text-green-700" />
                  <Box>
                    <Typography variant="subtitle1" className="text-base font-bold text-green-900">Endereço</Typography>
                    <Typography variant="body1" className="text-base">
                      Av. Paulista, 1000 - Bela Vista<br />São Paulo - SP
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box className="mt-8 bg-green-50 rounded-xl p-4 text-center">
                <Typography variant="h6" className="font-bold text-green-900 mb-1">Horário de Atendimento</Typography>
                <Typography variant="body1" color="text.secondary" className="text-base">
                  Segunda a Sexta: 9h às 18h<br />Sábado: 9h às 13h
                </Typography>
              </Box>
            </Box>
            <Divider orientation="horizontal" flexItem />
            {/* Formulário de Contato */}
            <Box className="flex-1 flex items-center justify-center">
              <Box className="w-full">
                <Typography variant="h5" className="font-bold text-2xl mb-6 text-green-900 text-center md:text-3xl">
                  Envie sua Mensagem
                </Typography>
                <Typography variant="body1" color="text.secondary" className="text-base mb-6 text-center">
                  Preencha o formulário abaixo para enviar sua mensagem.
                </Typography>
                <Box component="form" className="flex flex-col gap-6" onSubmit={handleSubmit} autoComplete="off">
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
                    sx={{ mb: 1, borderRadius: 3, background: '#f8fafc', boxShadow: 1, '& .MuiOutlinedInput-root': { borderRadius: 3 }, '& .Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#16a34a', boxShadow: '0 0 0 2px #bbf7d0' } }}
                    InputLabelProps={{ className: "text-base" }}
                    inputProps={{ className: "text-base" }}
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
                    sx={{ mb: 1, borderRadius: 3, background: '#f8fafc', boxShadow: 1, '& .MuiOutlinedInput-root': { borderRadius: 3 }, '& .Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#16a34a', boxShadow: '0 0 0 2px #bbf7d0' } }}
                    InputLabelProps={{ className: "text-base" }}
                    inputProps={{ className: "text-base" }}
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
                    sx={{ mb: 1, borderRadius: 3, background: '#f8fafc', boxShadow: 1, '& .MuiOutlinedInput-root': { borderRadius: 3 }, '& .Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#16a34a', boxShadow: '0 0 0 2px #bbf7d0' } }}
                    InputLabelProps={{ className: "text-base" }}
                    inputProps={{ className: "text-base" }}
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
                    sx={{ mb: 1, borderRadius: 3, background: '#f8fafc', boxShadow: 1, '& .MuiOutlinedInput-root': { borderRadius: 3 }, '& .Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#16a34a', boxShadow: '0 0 0 2px #bbf7d0' } }}
                    InputLabelProps={{ className: "text-base" }}
                    inputProps={{ className: "text-base" }}
                    InputProps={{ startAdornment: <InputAdornment position="start"><SubjectIcon /></InputAdornment> }}
                  />
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
                    sx={{ mb: 2, borderRadius: 3, background: '#f8fafc', boxShadow: 1, '& .MuiOutlinedInput-root': { borderRadius: 3 }, '& .Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#16a34a', boxShadow: '0 0 0 2px #bbf7d0' } }}
                    InputLabelProps={{ className: "text-base" }}
                    inputProps={{ className: "text-base" }}
                    InputProps={{ startAdornment: <InputAdornment position="start"><MessageIcon /></InputAdornment> }}
                  />
                  <Button
                    variant="contained"
                    color="success"
                    size="large"
                    fullWidth
                    type="submit"
                    sx={{ py: 1.5, fontWeight: 'bold', fontSize: '1.1rem', borderRadius: 3, background: 'linear-gradient(90deg, #16a34a 0%, #4ade80 100%)' }}
                    disabled={sending}
                  >
                    {sending ? 'Enviando...' : 'Enviar Mensagem'}
                  </Button>
                </Box>
              </Box>
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