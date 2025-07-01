import React, { useState } from 'react';
import { useSocial } from '../../contexts/SocialContext';
import { toast } from 'react-toastify';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  Card,
  CardContent,
  Divider,
  Container,
  CircularProgress
} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import InfoIcon from '@mui/icons-material/Info';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const AddFriend: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { addFriend } = useSocial();

  const handleAddFriend = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Digite um email válido');
      return;
    }

    if (!email.includes('@')) {
      toast.error('Digite um email válido');
      return;
    }

    setIsLoading(true);
    
    try {
      const success = await addFriend(email);
      if (success) {
        toast.success('Solicitação de amizade enviada!');
        setEmail('');
      } else {
        toast.error('Erro ao enviar solicitação de amizade');
      }
    } catch {
      toast.error('Erro ao enviar solicitação de amizade');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={0} sx={{ p: 4, borderRadius: 2 }}>
        <Box textAlign="center" mb={4}>
          <Box 
            sx={{ 
              display: 'inline-flex',
              p: 2,
              borderRadius: '50%',
              bgcolor: 'primary.50',
              color: 'primary.main',
              mb: 2
            }}
          >
            <PersonAddIcon sx={{ fontSize: 40 }} />
          </Box>
          <Typography variant="h4" fontWeight={700} color="text.primary" gutterBottom>
            Adicionar Amigo
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Envie uma solicitação de amizade para conectar com outros viajantes
          </Typography>
        </Box>

        <Box component="form" onSubmit={handleAddFriend} sx={{ mb: 4 }}>
          <Stack spacing={3}>
            <TextField
              fullWidth
              label="Email do amigo"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite o email da pessoa que deseja adicionar"
              required
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                }
              }}
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={isLoading}
              startIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : null}
              sx={{
                py: 1.5,
                borderRadius: 2,
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 600
              }}
            >
              {isLoading ? 'Enviando...' : 'Enviar Solicitação de Amizade'}
            </Button>
          </Stack>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Stack spacing={3}>
          <Card elevation={0} sx={{ bgcolor: 'primary.50', border: '1px solid', borderColor: 'primary.200' }}>
            <CardContent>
              <Stack direction="row" spacing={2} alignItems="flex-start">
                <InfoIcon color="primary" sx={{ mt: 0.5 }} />
                <Box>
                  <Typography variant="h6" fontWeight={600} color="primary.main" gutterBottom>
                    Como funciona?
                  </Typography>
                  <Stack spacing={1}>
                    <Typography variant="body2" color="primary.700">
                      • Digite o email da pessoa que deseja adicionar
                    </Typography>
                    <Typography variant="body2" color="primary.700">
                      • Uma solicitação de amizade será enviada
                    </Typography>
                    <Typography variant="body2" color="primary.700">
                      • A pessoa receberá uma notificação
                    </Typography>
                    <Typography variant="body2" color="primary.700">
                      • Após aceitar, vocês poderão compartilhar viagens
                    </Typography>
                  </Stack>
                </Box>
              </Stack>
            </CardContent>
          </Card>

          <Card elevation={0} sx={{ bgcolor: 'grey.50', border: '1px solid', borderColor: 'grey.200' }}>
            <CardContent>
              <Stack direction="row" spacing={2} alignItems="flex-start">
                <LightbulbIcon color="action" sx={{ mt: 0.5 }} />
                <Box>
                  <Typography variant="h6" fontWeight={600} color="text.primary" gutterBottom>
                    Dicas
                  </Typography>
                  <Stack spacing={1}>
                    <Typography variant="body2" color="text.secondary">
                      • Certifique-se de que o email está correto
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      • A pessoa deve ter uma conta na plataforma
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      • Você pode enviar convites para viagens após a amizade ser aceita
                    </Typography>
                  </Stack>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Paper>
    </Container>
  );
};

export default AddFriend; 