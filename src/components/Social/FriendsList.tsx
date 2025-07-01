import React, { useState } from 'react';
import { useSocial } from '../../contexts/SocialContext';
import { toast } from 'react-toastify';
import { 
  Card, 
  CardContent, 
  CardActions, 
  Avatar, 
  Button, 
  Typography, 
  Box, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  TextField, 
  Chip, 
  Stack,
  Container,
  IconButton
} from '@mui/material';
import FlightIcon from '@mui/icons-material/Flight';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';

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

type Friend = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  status: string;
};

const FriendsList: React.FC = () => {
  const { friends, removeFriend, sendTravelInvite } = useSocial();
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);
  const [showTravelForm, setShowTravelForm] = useState(false);
  const [travelData, setTravelData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    description: ''
  });

  const handleRemoveFriend = (friendId: string, friendName: string) => {
    if (window.confirm(`Tem certeza que deseja remover ${friendName} dos seus amigos?`)) {
      removeFriend(friendId);
      toast.success(`${friendName} removido dos amigos!`);
    }
  };

  const handleSendTravelInvite = async (friendId: string) => {
    if (!travelData.destination || !travelData.startDate || !travelData.endDate) {
      toast.error('Preencha todos os campos obrigatórios!');
      return;
    }
    const success = await sendTravelInvite(friendId, {
      id: Date.now().toString(),
      ...travelData
    });
    if (success) {
      toast.success('Convite para viagem enviado com sucesso!');
      setShowTravelForm(false);
      setTravelData({ destination: '', startDate: '', endDate: '', description: '' });
    } else {
      toast.error('Erro ao enviar convite para viagem');
    }
  };

  if (friends.length === 0) {
    return (
      <Container maxWidth="md">
        <Box textAlign="center" py={8}>
          <Box sx={{ color: 'text.secondary', mb: 2 }}>
            <FlightIcon sx={{ fontSize: 60 }} />
          </Box>
          <Typography variant="h5" fontWeight={600} color="text.primary" gutterBottom>
            Nenhum amigo encontrado
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Adicione amigos para começar a compartilhar viagens!
          </Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h4" fontWeight={700} color="text.primary">
          Seus Amigos
        </Typography>
        <Chip 
          label={`${friends.length} amigos`} 
          color="primary" 
          variant="filled"
          sx={{ fontWeight: 600 }}
        />
      </Stack>
      
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 3 }}>
        {friends.map((friend) => (
          <Card key={friend.id} elevation={0} sx={{ borderRadius: 3, border: '1px solid', borderColor: 'divider' }}>
            <CardContent sx={{ p: 3 }}>
              <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                <Avatar
                  src={getAvatarSrc(friend.name)}
                  alt={friend.name}
                  sx={{ width: 64, height: 64, border: 2, borderColor: 'primary.main' }}
                />
                <Box flex={1}>
                  <Typography variant="h6" fontWeight={600} color="text.primary">
                    {friend.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {friend.email}
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Box 
                      sx={{ 
                        width: 12, 
                        height: 12, 
                        borderRadius: '50%', 
                        bgcolor: friend.status === 'online' ? 'success.main' : 'grey.400',
                        border: 2,
                        borderColor: 'white',
                        boxShadow: 1
                      }} 
                    />
                    <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'capitalize' }}>
                      {friend.status}
                    </Typography>
                  </Stack>
                </Box>
              </Stack>
            </CardContent>
            <CardActions sx={{ p: 3, pt: 0, gap: 1 }}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<FlightIcon />}
                onClick={() => {
                  setSelectedFriend(friend);
                  setShowTravelForm(true);
                }}
                fullWidth
                sx={{ textTransform: 'none', fontWeight: 600 }}
              >
                Convidar para viagem
              </Button>
              <IconButton
                color="error"
                onClick={() => handleRemoveFriend(friend.id, friend.name)}
                sx={{ 
                  bgcolor: 'error.50',
                  '&:hover': { bgcolor: 'error.100' }
                }}
              >
                <PersonRemoveIcon />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </Box>

      {/* Dialog para convite de viagem */}
      <Dialog 
        open={showTravelForm && !!selectedFriend} 
        onClose={() => setShowTravelForm(false)} 
        maxWidth="sm" 
        fullWidth
        PaperProps={{
          sx: { borderRadius: 2 }
        }}
      >
        <DialogTitle sx={{ pb: 1 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" fontWeight={600}>
              Convidar {selectedFriend?.name} para viagem
            </Typography>
            <IconButton onClick={() => setShowTravelForm(false)} size="small">
              <CloseIcon />
            </IconButton>
          </Stack>
        </DialogTitle>
        <DialogContent dividers>
          <Stack spacing={3} sx={{ pt: 1 }}>
            <TextField
              label="Destino *"
              value={travelData.destination}
              onChange={e => setTravelData({ ...travelData, destination: e.target.value })}
              placeholder="Ex: Fernando de Noronha"
              fullWidth
              required
              variant="outlined"
            />
            <Stack direction="row" spacing={2}>
              <TextField
                label="Data início *"
                type="date"
                value={travelData.startDate}
                onChange={e => setTravelData({ ...travelData, startDate: e.target.value })}
                InputLabelProps={{ shrink: true }}
                fullWidth
                required
                variant="outlined"
              />
              <TextField
                label="Data fim *"
                type="date"
                value={travelData.endDate}
                onChange={e => setTravelData({ ...travelData, endDate: e.target.value })}
                InputLabelProps={{ shrink: true }}
                fullWidth
                required
                variant="outlined"
              />
            </Stack>
            <TextField
              label="Descrição"
              value={travelData.description}
              onChange={e => setTravelData({ ...travelData, description: e.target.value })}
              multiline
              minRows={3}
              maxRows={5}
              placeholder="Descreva a viagem..."
              fullWidth
              variant="outlined"
            />
          </Stack>
        </DialogContent>
        <DialogActions sx={{ p: 3, gap: 1 }}>
          <Button
            onClick={() => {
              setShowTravelForm(false);
              setSelectedFriend(null);
              setTravelData({ destination: '', startDate: '', endDate: '', description: '' });
            }}
            variant="outlined"
            color="inherit"
            sx={{ textTransform: 'none', fontWeight: 600 }}
          >
            Cancelar
          </Button>
          <Button
            onClick={() => selectedFriend && handleSendTravelInvite(selectedFriend.id)}
            variant="contained"
            color="primary"
            startIcon={<SendIcon />}
            disabled={!selectedFriend}
            sx={{ textTransform: 'none', fontWeight: 600 }}
          >
            Enviar convite
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default FriendsList; 