import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
  TextField,
  IconButton,
  Snackbar,
  Alert,
  Chip,
  Divider
} from '@mui/material';
import { Search, CheckCircle } from '@mui/icons-material';
import { useTravel } from '../../contexts/TravelContext';

interface SharedTravel {
  id: string;
  code: string;
  type: 'package' | 'custom';
  destination: string;
  startDate: string;
  endDate: string;
  description: string;
  participants: string[];
  createdBy: string;
  createdAt: string;
  packageDetails?: {
    preco: string;
    duracao: string;
    inclusos: string[];
  };
  customDetails?: {
    origem: string;
    valor: string;
  };
}

interface JoinTravelByCodeProps {
  open: boolean;
  onClose: () => void;
}

const JoinTravelByCode: React.FC<JoinTravelByCodeProps> = ({ open, onClose }) => {
  const { getTravelByCode, joinTravelByCode } = useTravel();
  const [code, setCode] = useState('');
  const [foundTravel, setFoundTravel] = useState<SharedTravel | null>(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSearch = () => {
    if (!code.trim()) {
      setError('Por favor, insira um código válido');
      return;
    }

    const travel = getTravelByCode(code.toUpperCase());
    if (travel) {
      setFoundTravel(travel);
      setError('');
    } else {
      setFoundTravel(null);
      setError('Código não encontrado. Verifique se o código está correto.');
    }
  };

  const handleJoin = () => {
    if (foundTravel) {
      joinTravelByCode(foundTravel.code, 'current-user');
      setSuccess(true);
      setTimeout(() => {
        handleClose();
      }, 2000);
    }
  };

  const handleClose = () => {
    setCode('');
    setFoundTravel(null);
    setError('');
    setSuccess(false);
    onClose();
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ fontSize: '1.5rem', fontWeight: 600 }}>
          Entrar em uma Viagem
        </DialogTitle>
        <DialogContent>
          <Box className="w-full max-w-md mx-auto p-4">
            <Typography variant="body1" className="mb-4">
              Digite o código da viagem que você recebeu para se juntar ao grupo de viagem.
            </Typography>

            <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
              <TextField
                label="Código da viagem"
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase())}
                onKeyPress={handleKeyPress}
                fullWidth
                autoFocus
                placeholder="Ex: ABC123"
                inputProps={{ 
                  maxLength: 6,
                  style: { textTransform: 'uppercase', fontFamily: 'monospace' }
                }}
              />
              <IconButton 
                onClick={handleSearch}
                color="primary"
                sx={{ minWidth: 56 }}
              >
                <Search />
              </IconButton>
            </Box>

            {error && (
              <Alert severity="error" className="mb-4">
                {error}
              </Alert>
            )}

            {foundTravel && (
              <Box className="p-4 bg-green-50 rounded-lg border border-green-200">
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                  <CheckCircle color="success" />
                  <Typography variant="h6" color="success.main">
                    Viagem Encontrada!
                  </Typography>
                </Box>
                
                <Divider className="mb-3" />
                
                <Typography className="text-lg mb-2">
                  <b>Destino:</b> {foundTravel.destination}
                </Typography>
                <Typography className="text-lg mb-2">
                  <b>Data de ida:</b> {foundTravel.startDate}
                </Typography>
                <Typography className="text-lg mb-2">
                  <b>Data de volta:</b> {foundTravel.endDate}
                </Typography>
                <Typography className="text-lg mb-2">
                  <b>Participantes:</b> {foundTravel.participants.length} pessoa(s)
                </Typography>
                
                {foundTravel.type === 'package' && foundTravel.packageDetails && (
                  <>
                    <Typography className="text-lg mb-2">
                      <b>Preço:</b> {foundTravel.packageDetails.preco}
                    </Typography>
                    <Typography className="text-lg mb-2">
                      <b>Duração:</b> {foundTravel.packageDetails.duracao}
                    </Typography>
                    <Typography className="text-lg mb-2">
                      <b>Incluso:</b>
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                      {foundTravel.packageDetails.inclusos.map((item: string, index: number) => (
                        <Chip key={index} label={item} color="primary" variant="outlined" size="small" />
                      ))}
                    </Box>
                  </>
                )}
                
                {foundTravel.type === 'custom' && foundTravel.customDetails && (
                  <>
                    <Typography className="text-lg mb-2">
                      <b>Origem:</b> {foundTravel.customDetails.origem}
                    </Typography>
                    <Typography className="text-lg mb-2">
                      <b>Valor:</b> {foundTravel.customDetails.valor}
                    </Typography>
                  </>
                )}
              </Box>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="inherit">
            Cancelar
          </Button>
          {foundTravel && (
            <Button 
              onClick={handleJoin} 
              variant="contained" 
              color="success"
              startIcon={<CheckCircle />}
            >
              Entrar na Viagem
            </Button>
          )}
        </DialogActions>
      </Dialog>

      <Snackbar
        open={success}
        autoHideDuration={3000}
        onClose={() => setSuccess(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={() => setSuccess(false)} severity="success">
          Você entrou na viagem com sucesso!
        </Alert>
      </Snackbar>
    </>
  );
};

export default JoinTravelByCode; 