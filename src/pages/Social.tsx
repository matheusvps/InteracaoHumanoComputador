import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useSocial } from '../contexts/SocialContext';
import FriendsList from '../components/Social/FriendsList';
import FriendRequests from '../components/Social/FriendRequests';
import TravelInvites from '../components/Social/TravelInvites';
import AddFriend from '../components/Social/AddFriend';
import UserProfile from '../components/Social/UserProfile';
import AuthContainer from '../components/Social/AuthContainer';
import { 
  Tabs, 
  Tab, 
  Badge, 
  Avatar, 
  Box, 
  Stack, 
  AppBar, 
  Toolbar, 
  Typography,
  Container,
  Paper,
  Divider
} from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import MailIcon from '@mui/icons-material/Mail';
import FlightIcon from '@mui/icons-material/Flight';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

type TabType = {
  id: string;
  label: string;
  icon: React.ReactNode;
  count?: number;
};

const Social: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { user, logout, isAuthenticated } = useAuth();
  const { friends, friendRequests, travelInvites } = useSocial();

  const handleLogout = () => {
    logout();
  };

  // Se não estiver autenticado, mostrar o componente de autenticação
  if (!isAuthenticated) {
    return <AuthContainer />;
  }

  const tabs: TabType[] = [
    { id: 'friends', label: 'Amigos', icon: <GroupIcon />, count: friends.length },
    { id: 'requests', label: 'Convites', icon: <MailIcon />, count: friendRequests.filter(r => r.status === 'pending').length },
    { id: 'travels', label: 'Viagens', icon: <FlightIcon />, count: travelInvites.filter(t => t.status === 'pending').length },
    { id: 'add', label: 'Adicionar', icon: <PersonAddIcon /> },
    { id: 'profile', label: 'Perfil', icon: <AccountCircleIcon /> }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <FriendsList />;
      case 1:
        return <FriendRequests />;
      case 2:
        return <TravelInvites />;
      case 3:
        return <AddFriend />;
      case 4:
        return <UserProfile />;
      default:
        return <FriendsList />;
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5', pt: { xs: '56px', md: '95px' } }}>
      {/* Header */}
      <AppBar position="static" elevation={0} sx={{ bgcolor: 'white', borderBottom: 1, borderColor: 'divider' }}>
        <Toolbar>
          <Container maxWidth="lg">
            <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
              <Stack direction="row" alignItems="center" spacing={2}>
                <Typography variant="h5" fontWeight={700} color="primary.main">
                  Social
                </Typography>
                <Divider orientation="vertical" flexItem />
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Avatar 
                    src={user?.avatar || '/social/usuarioTeste.png'} 
                    alt="Avatar" 
                    sx={{ width: 36, height: 36 }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    {user?.name}
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>

      {/* Tabs */}
      <Paper elevation={0} sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Container maxWidth="lg">
          <Tabs
            value={activeTab}
            onChange={(_, v) => setActiveTab(v)}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="Tabs Social"
            sx={{
              '& .MuiTab-root': {
                minHeight: 64,
                fontWeight: 600,
                fontSize: '0.875rem',
                textTransform: 'none',
                color: 'text.secondary',
                '&.Mui-selected': {
                  color: 'primary.main',
                },
                '& .MuiSvgIcon-root': {
                  fontSize: '1.25rem',
                }
              },
              '& .MuiTabs-indicator': {
                height: 3,
                borderRadius: '3px 3px 0 0'
              }
            }}
          >
            {tabs.map((tab) => (
              <Tab
                key={tab.id}
                icon={tab.count && tab.count > 0
                  ? <Badge badgeContent={tab.count} color="primary" sx={{ '& .MuiBadge-badge': { fontSize: '0.75rem' } }}>
                      {tab.icon as React.ReactElement}
                    </Badge>
                  : (tab.icon as React.ReactElement)
                }
                iconPosition="start"
                label={tab.label}
                sx={{ 
                  minHeight: 64,
                  px: 3,
                  '& .MuiTab-iconWrapper': {
                    mr: 1
                  }
                }}
              />
            ))}
          </Tabs>
        </Container>
      </Paper>

      {/* Content */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Paper elevation={0} sx={{ bgcolor: 'transparent' }}>
          {renderTabContent()}
        </Paper>
      </Container>
    </Box>
  );
};

export default Social; 