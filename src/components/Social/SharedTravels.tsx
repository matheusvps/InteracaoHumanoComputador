import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
  Divider,
  IconButton
} from '@mui/material';
import {
  Flight,
  Group,
  CalendarToday,
  LocationOn,
  AttachMoney,
  ContentCopy
} from '@mui/icons-material';
import { useTravel } from '../../contexts/TravelContext';

const SharedTravels: React.FC = () => {
  const { sharedTravels } = useTravel();

  const handleCopyCode = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      // Aqui você poderia mostrar um toast de sucesso
    } catch (err) {
      console.error('Erro ao copiar código:', err);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  if (sharedTravels.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', py: 8 }}>
        <Flight sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Nenhuma viagem compartilhada
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Você ainda não compartilhou nenhuma viagem. Crie uma viagem no planejamento ou reserva de pacotes para começar!
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 600 }}>
        Minhas Viagens Compartilhadas
      </Typography>
      
      <Stack spacing={3}>
        {sharedTravels.map((travel) => (
          <Card key={travel.id} elevation={2} sx={{ borderRadius: 2 }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                <Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    {travel.destination}
                  </Typography>
                  <Chip 
                    label={travel.type === 'package' ? 'Pacote' : 'Viagem Personalizada'} 
                    color={travel.type === 'package' ? 'primary' : 'secondary'}
                    size="small"
                    sx={{ mb: 1 }}
                  />
                </Box>
                <Box sx={{ textAlign: 'right' }}>
                  <Typography variant="caption" color="text.secondary">
                    Código
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="h6" sx={{ fontFamily: 'monospace', fontWeight: 'bold' }}>
                      {travel.code}
                    </Typography>
                    <IconButton 
                      size="small" 
                      onClick={() => handleCopyCode(travel.code)}
                      sx={{ p: 0.5 }}
                    >
                      <ContentCopy fontSize="small" />
                    </IconButton>
                  </Box>
                </Box>
              </Box>

              <Stack direction="row" spacing={3} sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CalendarToday fontSize="small" color="action" />
                  <Typography variant="body2">
                    {formatDate(travel.startDate)} - {formatDate(travel.endDate)}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Group fontSize="small" color="action" />
                  <Typography variant="body2">
                    {travel.participants.length} participante(s)
                  </Typography>
                </Box>
              </Stack>

              {travel.type === 'package' && travel.packageDetails && (
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <AttachMoney fontSize="small" color="action" />
                    <Typography variant="body2" fontWeight={600}>
                      {travel.packageDetails.preco}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    Duração: {travel.packageDetails.duracao}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1 }}>
                    {travel.packageDetails.inclusos.map((item, index) => (
                      <Chip 
                        key={index} 
                        label={item} 
                        size="small" 
                        variant="outlined"
                        sx={{ fontSize: '0.7rem' }}
                      />
                    ))}
                  </Box>
                </Box>
              )}

              {travel.type === 'custom' && travel.customDetails && (
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <LocationOn fontSize="small" color="action" />
                    <Typography variant="body2">
                      Origem: {travel.customDetails.origem}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <AttachMoney fontSize="small" color="action" />
                    <Typography variant="body2" fontWeight={600}>
                      {travel.customDetails.valor}
                    </Typography>
                  </Box>
                </Box>
              )}

              <Divider sx={{ my: 2 }} />
              
              <Typography variant="body2" color="text.secondary">
                Criada em: {formatDate(travel.createdAt)}
              </Typography>
            </CardContent>
            
            <CardActions sx={{ px: 2, pb: 2 }}>
              <Button 
                variant="outlined" 
                size="small"
                startIcon={<ContentCopy />}
                onClick={() => handleCopyCode(travel.code)}
              >
                Copiar Código
              </Button>
            </CardActions>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default SharedTravels; 