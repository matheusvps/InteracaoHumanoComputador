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
import FlightIcon from '@mui/icons-material/Flight';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const TravelInvites: React.FC = () => {
  const { travelInvites, acceptTravelInvite, rejectTravelInvite } = useSocial();

  const pendingInvites = travelInvites.filter(invite => invite.status === 'pending');
  const acceptedInvites = travelInvites.filter(invite => invite.status === 'accepted');
  const rejectedInvites = travelInvites.filter(invite => invite.status === 'rejected');

  const handleAccept = (inviteId: string, friendName: string, destination: string) => {
    acceptTravelInvite(inviteId);
    toast.success(`Convite de ${friendName} para ${destination} aceito!`);
  };

  const handleReject = (inviteId: string, friendName: string, destination: string) => {
    rejectTravelInvite(inviteId);
    toast.success(`Convite de ${friendName} para ${destination} rejeitado`);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
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

  if (travelInvites.length === 0) {
    return (
      <Container maxWidth="md">
        <Paper elevation={0} sx={{ p: 6, textAlign: 'center', borderRadius: 2 }}>
          <Box sx={{ color: 'text.secondary', mb: 2 }}>
            <FlightIcon sx={{ fontSize: 60 }} />
          </Box>
          <Typography variant="h5" fontWeight={600} color="text.primary" gutterBottom>
            Nenhum convite de viagem
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Você não tem convites de viagem pendentes
          </Typography>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Stack spacing={4}>
        {/* Convites Pendentes */}
        {pendingInvites.length > 0 && (
          <Box>
            <Typography variant="h5" fontWeight={600} color="text.primary" gutterBottom>
              Convites Pendentes ({pendingInvites.length})
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 3 }}>
              {pendingInvites.map((invite) => (
                <Card key={invite.id} elevation={0} sx={{ borderRadius: 2, border: '1px solid', borderColor: 'divider' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
                      <Avatar
                        src={getAvatarSrc(invite.from.name)}
                        alt={invite.from.name}
                        sx={{ width: 48, height: 48 }}
                      />
                      <Box flex={1}>
                        <Typography variant="h6" fontWeight={600} color="text.primary">
                          {invite.from.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Convidou você para uma viagem
                        </Typography>
                      </Box>
                    </Stack>

                    <Paper elevation={0} sx={{ bgcolor: 'primary.50', p: 2, mb: 3, borderRadius: 1 }}>
                      <Typography variant="h6" fontWeight={600} color="primary.main" gutterBottom>
                        {invite.travel.destination}
                      </Typography>
                      <Stack spacing={1}>
                        <Typography variant="body2" color="primary.700">
                          <strong>Data:</strong> {formatDate(invite.travel.startDate)} - {formatDate(invite.travel.endDate)}
                        </Typography>
                        {invite.travel.description && (
                          <Typography variant="body2" color="primary.700">
                            <strong>Descrição:</strong> {invite.travel.description}
                          </Typography>
                        )}
                      </Stack>
                    </Paper>

                    <Stack direction="row" spacing={2}>
                      <Button
                        onClick={() => handleAccept(invite.id, invite.from.name, invite.travel.destination)}
                        variant="contained"
                        color="success"
                        startIcon={<CheckCircleIcon />}
                        fullWidth
                        sx={{ textTransform: 'none', fontWeight: 600 }}
                      >
                        Aceitar
                      </Button>
                      <Button
                        onClick={() => handleReject(invite.id, invite.from.name, invite.travel.destination)}
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

        {/* Convites Aceitos */}
        {acceptedInvites.length > 0 && (
          <Box>
            <Typography variant="h5" fontWeight={600} color="text.primary" gutterBottom>
              Convites Aceitos ({acceptedInvites.length})
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 3 }}>
              {acceptedInvites.map((invite) => (
                <Card key={invite.id} elevation={0} sx={{ borderRadius: 2, border: '1px solid', borderColor: 'divider' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
                      <Avatar
                        src={getAvatarSrc(invite.from.name)}
                        alt={invite.from.name}
                        sx={{ width: 48, height: 48 }}
                      />
                      <Box flex={1}>
                        <Typography variant="h6" fontWeight={600} color="text.primary">
                          {invite.from.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Convite aceito
                        </Typography>
                      </Box>
                    </Stack>

                    <Paper elevation={0} sx={{ bgcolor: 'success.50', p: 2, mb: 3, borderRadius: 1 }}>
                      <Typography variant="h6" fontWeight={600} color="success.main" gutterBottom>
                        {invite.travel.destination}
                      </Typography>
                      <Stack spacing={1}>
                        <Typography variant="body2" color="success.700">
                          <strong>Data:</strong> {formatDate(invite.travel.startDate)} - {formatDate(invite.travel.endDate)}
                        </Typography>
                        {invite.travel.description && (
                          <Typography variant="body2" color="success.700">
                            <strong>Descrição:</strong> {invite.travel.description}
                          </Typography>
                        )}
                      </Stack>
                    </Paper>

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

        {/* Convites Rejeitados */}
        {rejectedInvites.length > 0 && (
          <Box>
            <Typography variant="h5" fontWeight={600} color="text.primary" gutterBottom>
              Convites Rejeitados ({rejectedInvites.length})
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 3 }}>
              {rejectedInvites.map((invite) => (
                <Card key={invite.id} elevation={0} sx={{ borderRadius: 2, border: '1px solid', borderColor: 'divider' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
                      <Avatar
                        src={getAvatarSrc(invite.from.name)}
                        alt={invite.from.name}
                        sx={{ width: 48, height: 48 }}
                      />
                      <Box flex={1}>
                        <Typography variant="h6" fontWeight={600} color="text.primary">
                          {invite.from.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Convite rejeitado
                        </Typography>
                      </Box>
                    </Stack>

                    <Paper elevation={0} sx={{ bgcolor: 'error.50', p: 2, mb: 3, borderRadius: 1 }}>
                      <Typography variant="h6" fontWeight={600} color="error.main" gutterBottom>
                        {invite.travel.destination}
                      </Typography>
                      <Stack spacing={1}>
                        <Typography variant="body2" color="error.700">
                          <strong>Data:</strong> {formatDate(invite.travel.startDate)} - {formatDate(invite.travel.endDate)}
                        </Typography>
                        {invite.travel.description && (
                          <Typography variant="body2" color="error.700">
                            <strong>Descrição:</strong> {invite.travel.description}
                          </Typography>
                        )}
                      </Stack>
                    </Paper>

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

export default TravelInvites; 