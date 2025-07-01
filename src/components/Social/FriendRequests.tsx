import React from 'react';
import { useSocial } from '../../contexts/SocialContext';
import { toast } from 'react-toastify';
import {
  Box,
  Paper,
  Typography,
  Button,
  Stack,
  Avatar,
  Card,
  CardContent,
  Chip,
  Container
} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const FriendRequests: React.FC = () => {
  const { friendRequests, acceptFriendRequest, rejectFriendRequest } = useSocial();

  const pendingRequests = friendRequests.filter(request => request.status === 'pending');
  const acceptedRequests = friendRequests.filter(request => request.status === 'accepted');
  const rejectedRequests = friendRequests.filter(request => request.status === 'rejected');

  const handleAccept = (requestId: string, friendName: string) => {
    acceptFriendRequest(requestId);
    toast.success(`${friendName} adicionado aos seus amigos!`);
  };

  const handleReject = (requestId: string, friendName: string) => {
    rejectFriendRequest(requestId);
    toast.success(`Solicitação de ${friendName} rejeitada`);
  };

  const getAvatarSrc = (friendName: string) => {
    switch (friendName) {
      case 'Ana Oliveira':
        return '/social/anaOliveira.png';
      case 'João Silva':
        return '/social/joaoSilva.png';
      case 'Maria Santos':
        return '/social/mariaSantos.png';
      case 'Pedro Costa':
        return '/social/pedroCosta.png';
      default:
        return '/social/usuarioTeste.png';
    }
  };

  if (friendRequests.length === 0) {
    return (
      <Container maxWidth="md">
        <Paper elevation={0} sx={{ p: 6, textAlign: 'center', borderRadius: 2 }}>
          <Box sx={{ color: 'text.secondary', mb: 2 }}>
            <MailIcon sx={{ fontSize: 60 }} />
          </Box>
          <Typography variant="h5" fontWeight={600} color="text.primary" gutterBottom>
            Nenhuma solicitação
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Você não tem solicitações de amizade pendentes
          </Typography>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Stack spacing={4}>
        {/* Solicitações Pendentes */}
        {pendingRequests.length > 0 && (
          <Box>
            <Typography variant="h5" fontWeight={600} color="text.primary" gutterBottom>
              Solicitações Pendentes ({pendingRequests.length})
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 3 }}>
              {pendingRequests.map((request) => (
                <Card key={request.id} elevation={0} sx={{ borderRadius: 2, border: '1px solid', borderColor: 'divider' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
                      <Avatar
                        src={getAvatarSrc(request.from.name)}
                        alt={request.from.name}
                        sx={{ width: 48, height: 48 }}
                      />
                      <Box flex={1}>
                        <Typography variant="h6" fontWeight={600} color="text.primary">
                          {request.from.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          {request.from.email}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {new Date(request.createdAt).toLocaleDateString('pt-BR')}
                        </Typography>
                      </Box>
                    </Stack>

                    <Stack direction="row" spacing={2}>
                      <Button
                        onClick={() => handleAccept(request.id, request.from.name)}
                        variant="contained"
                        color="success"
                        startIcon={<CheckCircleIcon />}
                        fullWidth
                        sx={{ textTransform: 'none', fontWeight: 600 }}
                      >
                        Aceitar
                      </Button>
                      <Button
                        onClick={() => handleReject(request.id, request.from.name)}
                        variant="outlined"
                        color="inherit"
                        startIcon={<CancelIcon />}
                        fullWidth
                        sx={{ textTransform: 'none', fontWeight: 600 }}
                      >
                        Rejeitar
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>
        )}

        {/* Solicitações Aceitas */}
        {acceptedRequests.length > 0 && (
          <Box>
            <Typography variant="h5" fontWeight={600} color="text.primary" gutterBottom>
              Solicitações Aceitas ({acceptedRequests.length})
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 3 }}>
              {acceptedRequests.map((request) => (
                <Card key={request.id} elevation={0} sx={{ borderRadius: 2, border: '1px solid', borderColor: 'divider' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
                      <Avatar
                        src={getAvatarSrc(request.from.name)}
                        alt={request.from.name}
                        sx={{ width: 48, height: 48 }}
                      />
                      <Box flex={1}>
                        <Typography variant="h6" fontWeight={600} color="text.primary">
                          {request.from.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          {request.from.email}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Aceito em {new Date(request.createdAt).toLocaleDateString('pt-BR')}
                        </Typography>
                      </Box>
                    </Stack>
                    <Box textAlign="center">
                      <Chip
                        icon={<CheckCircleIcon />}
                        label="Aceito"
                        color="success"
                        variant="filled"
                        sx={{ fontWeight: 600 }}
                      />
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>
        )}

        {/* Solicitações Rejeitadas */}
        {rejectedRequests.length > 0 && (
          <Box>
            <Typography variant="h5" fontWeight={600} color="text.primary" gutterBottom>
              Solicitações Rejeitadas ({rejectedRequests.length})
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 3 }}>
              {rejectedRequests.map((request) => (
                <Card key={request.id} elevation={0} sx={{ borderRadius: 2, border: '1px solid', borderColor: 'divider' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
                      <Avatar
                        src={getAvatarSrc(request.from.name)}
                        alt={request.from.name}
                        sx={{ width: 48, height: 48 }}
                      />
                      <Box flex={1}>
                        <Typography variant="h6" fontWeight={600} color="text.primary">
                          {request.from.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          {request.from.email}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Rejeitado em {new Date(request.createdAt).toLocaleDateString('pt-BR')}
                        </Typography>
                      </Box>
                    </Stack>
                    <Box textAlign="center">
                      <Chip
                        icon={<CancelIcon />}
                        label="Rejeitado"
                        color="error"
                        variant="filled"
                        sx={{ fontWeight: 600 }}
                      />
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>
        )}
      </Stack>
    </Container>
  );
};

export default FriendRequests; 