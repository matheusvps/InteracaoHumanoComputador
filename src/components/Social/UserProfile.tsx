import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useSocial } from '../../contexts/SocialContext';
import { toast } from 'react-toastify';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  Avatar,
  Card,
  Container,
  Chip,
  IconButton
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import PeopleIcon from '@mui/icons-material/People';
import MailIcon from '@mui/icons-material/Mail';
import FlightIcon from '@mui/icons-material/Flight';
import ScheduleIcon from '@mui/icons-material/Schedule';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';

const UserProfile: React.FC = () => {
  const { user, updateProfile } = useAuth();
  const { friends, friendRequests, travelInvites } = useSocial();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    bio: 'Viajante apaixonado por descobrir novos lugares e culturas.',
    location: 'São Paulo, SP',
    phone: '(11) 99999-9999'
  });

  const handleSave = async () => {
    try {
      const success = await updateProfile({
        name: profileData.name,
        email: profileData.email
      });
      
      if (success) {
        toast.success('Perfil atualizado com sucesso!');
        setIsEditing(false);
      } else {
        toast.error('Erro ao atualizar perfil');
      }
    } catch {
      toast.error('Erro ao atualizar perfil');
    }
  };

  const handleCancel = () => {
    setProfileData({
      name: user?.name || '',
      email: user?.email || '',
      bio: 'Viajante apaixonado por descobrir novos lugares e culturas.',
      location: 'São Paulo, SP',
      phone: '(11) 99999-9999'
    });
    setIsEditing(false);
  };

  const stats = [
    { 
      label: 'Amigos', 
      value: friends.length, 
      icon: <PeopleIcon />, 
      color: 'primary' 
    },
    { 
      label: 'Convites Pendentes', 
      value: friendRequests.filter(r => r.status === 'pending').length, 
      icon: <MailIcon />, 
      color: 'warning' 
    },
    { 
      label: 'Viagens Aceitas', 
      value: travelInvites.filter(t => t.status === 'accepted').length, 
      icon: <FlightIcon />, 
      color: 'success' 
    },
    { 
      label: 'Viagens Pendentes', 
      value: travelInvites.filter(t => t.status === 'pending').length, 
      icon: <ScheduleIcon />, 
      color: 'info' 
    }
  ];

  return (
    <Container maxWidth="lg">
      <Stack spacing={4}>
        {/* Header do Perfil */}
        <Paper elevation={0} sx={{ p: 4, borderRadius: 2 }}>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} alignItems={{ xs: 'center', md: 'flex-start' }}>
            <Avatar
              src={user?.avatar || '/social/usuarioTeste.png'}
              alt="Avatar"
              sx={{ width: 120, height: 120, border: 3, borderColor: 'primary.main' }}
            />
            <Box flex={1} textAlign={{ xs: 'center', md: 'left' }}>
              <Typography variant="h4" fontWeight={700} color="text.primary" gutterBottom>
                {user?.name}
              </Typography>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                {user?.email}
              </Typography>
              <Chip 
                label={`Membro desde ${new Date().toLocaleDateString('pt-BR')}`}
                variant="outlined"
                size="small"
                sx={{ mt: 1 }}
              />
            </Box>
            <IconButton
              onClick={() => setIsEditing(!isEditing)}
              sx={{
                bgcolor: isEditing ? 'error.50' : 'primary.50',
                color: isEditing ? 'error.main' : 'primary.main',
                '&:hover': {
                  bgcolor: isEditing ? 'error.100' : 'primary.100',
                }
              }}
            >
              {isEditing ? <CancelIcon /> : <EditIcon />}
            </IconButton>
          </Stack>
        </Paper>

        {/* Estatísticas */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 3 }}>
          {stats.map((stat) => (
            <Card key={stat.label} elevation={0} sx={{ 
              bgcolor: `${stat.color}.50`, 
              border: '1px solid',
              borderColor: `${stat.color}.200`,
              textAlign: 'center',
              p: 3
            }}>
              <Box sx={{ color: `${stat.color}.main`, mb: 1 }}>
                {stat.icon}
              </Box>
              <Typography variant="h4" fontWeight={700} color="text.primary" gutterBottom>
                {stat.value}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {stat.label}
              </Typography>
            </Card>
          ))}
        </Box>

        {/* Informações do Perfil */}
        <Paper elevation={0} sx={{ p: 4, borderRadius: 2 }}>
          <Typography variant="h5" fontWeight={600} color="text.primary" gutterBottom>
            Informações do Perfil
          </Typography>
          
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 3, mt: 2 }}>
            <Stack spacing={2}>
              <Box>
                <Typography variant="body2" fontWeight={600} color="text.secondary" gutterBottom>
                  Nome completo
                </Typography>
                {isEditing ? (
                  <TextField
                    fullWidth
                    value={profileData.name}
                    onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                    variant="outlined"
                    size="small"
                    InputProps={{
                      startAdornment: <PersonIcon sx={{ mr: 1, color: 'text.secondary' }} />
                    }}
                  />
                ) : (
                  <Typography variant="body1" color="text.primary">
                    {profileData.name}
                  </Typography>
                )}
              </Box>

              <Box>
                <Typography variant="body2" fontWeight={600} color="text.secondary" gutterBottom>
                  Email
                </Typography>
                {isEditing ? (
                  <TextField
                    fullWidth
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                    variant="outlined"
                    size="small"
                    InputProps={{
                      startAdornment: <MailIcon sx={{ mr: 1, color: 'text.secondary' }} />
                    }}
                  />
                ) : (
                  <Typography variant="body1" color="text.primary">
                    {profileData.email}
                  </Typography>
                )}
              </Box>
            </Stack>

            <Stack spacing={2}>
              <Box>
                <Typography variant="body2" fontWeight={600} color="text.secondary" gutterBottom>
                  Localização
                </Typography>
                {isEditing ? (
                  <TextField
                    fullWidth
                    value={profileData.location}
                    onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                    variant="outlined"
                    size="small"
                    InputProps={{
                      startAdornment: <LocationOnIcon sx={{ mr: 1, color: 'text.secondary' }} />
                    }}
                  />
                ) : (
                  <Typography variant="body1" color="text.primary">
                    {profileData.location}
                  </Typography>
                )}
              </Box>

              <Box>
                <Typography variant="body2" fontWeight={600} color="text.secondary" gutterBottom>
                  Telefone
                </Typography>
                {isEditing ? (
                  <TextField
                    fullWidth
                    value={profileData.phone}
                    onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                    variant="outlined"
                    size="small"
                    InputProps={{
                      startAdornment: <PhoneIcon sx={{ mr: 1, color: 'text.secondary' }} />
                    }}
                  />
                ) : (
                  <Typography variant="body1" color="text.primary">
                    {profileData.phone}
                  </Typography>
                )}
              </Box>
            </Stack>
          </Box>

          <Box sx={{ mt: 3 }}>
            <Typography variant="body2" fontWeight={600} color="text.secondary" gutterBottom>
              Biografia
            </Typography>
            {isEditing ? (
              <TextField
                fullWidth
                multiline
                rows={3}
                value={profileData.bio}
                onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                variant="outlined"
                placeholder="Conte um pouco sobre você..."
              />
            ) : (
              <Typography variant="body1" color="text.primary">
                {profileData.bio}
              </Typography>
            )}
          </Box>

          {isEditing && (
            <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
              <Button
                onClick={handleSave}
                variant="contained"
                startIcon={<SaveIcon />}
                sx={{ textTransform: 'none', fontWeight: 600 }}
              >
                Salvar Alterações
              </Button>
              <Button
                onClick={handleCancel}
                variant="outlined"
                startIcon={<CancelIcon />}
                sx={{ textTransform: 'none', fontWeight: 600 }}
              >
                Cancelar
              </Button>
            </Stack>
          )}
        </Paper>
      </Stack>
    </Container>
  );
};

export default UserProfile; 