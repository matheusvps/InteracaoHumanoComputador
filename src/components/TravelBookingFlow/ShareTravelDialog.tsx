import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
  IconButton,
  Snackbar,
  Alert,
  Chip
} from '@mui/material';
import { ContentCopy, Share, CheckCircle } from '@mui/icons-material';
import { useTravel } from '../../contexts/TravelContext';

interface ShareTravelDialogProps {
  open: boolean;
  onClose: () => void;
  travelData: {
    type: 'package' | 'custom';
    destination: string;
    startDate: string;
    endDate: string;
    description: string;
    packageDetails?: {
      preco: string;
      duracao: string;
      inclusos: string[];
    };
    customDetails?: {
      origem: string;
      valor: string;
    };
  };
}

const ShareTravelDialog: React.FC<ShareTravelDialogProps> = ({ open, onClose, travelData }) => {
  const { createSharedTravel } = useTravel();
  const [travelCode, setTravelCode] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleShare = () => {
    const newTravel = createSharedTravel({
      ...travelData,
      participants: ['current-user'],
      createdBy: 'current-user'
    });
    
    setTravelCode(newTravel.code);
    setShowSuccess(true);
  };

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(travelCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Erro ao copiar código:', err);
    }
  };

  const handleClose = () => {
    setTravelCode('');
    setCopied(false);
    setShowSuccess(false);
    onClose();
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ fontSize: '1.5rem', fontWeight: 600 }}>
          Compartilhar Viagem
        </DialogTitle>
        <DialogContent>
          <Box className="w-full max-w-md mx-auto p-4">
            {!travelCode ? (
              <Box>
                <Typography variant="h6" className="mb-4 font-bold text-lg">
                  Detalhes da Viagem
                </Typography>
                <Box className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <Typography className="text-lg mb-2">
                    <b>Destino:</b> {travelData.destination}
                  </Typography>
                  <Typography className="text-lg mb-2">
                    <b>Data de ida:</b> {travelData.startDate}
                  </Typography>
                  <Typography className="text-lg mb-2">
                    <b>Data de volta:</b> {travelData.endDate}
                  </Typography>
                  {travelData.type === 'package' && travelData.packageDetails && (
                    <>
                      <Typography className="text-lg mb-2">
                        <b>Preço:</b> {travelData.packageDetails.preco}
                      </Typography>
                      <Typography className="text-lg mb-2">
                        <b>Duração:</b> {travelData.packageDetails.duracao}
                      </Typography>
                      <Typography className="text-lg mb-2">
                        <b>Incluso:</b>
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                        {travelData.packageDetails.inclusos.map((item, index) => (
                          <Chip key={index} label={item} color="primary" variant="outlined" size="small" />
                        ))}
                      </Box>
                    </>
                  )}
                  {travelData.type === 'custom' && travelData.customDetails && (
                    <>
                      <Typography className="text-lg mb-2">
                        <b>Origem:</b> {travelData.customDetails.origem}
                      </Typography>
                      <Typography className="text-lg mb-2">
                        <b>Valor:</b> {travelData.customDetails.valor}
                      </Typography>
                    </>
                  )}
                </Box>
                <Typography variant="body2" color="text.secondary" className="mb-4">
                  Ao compartilhar esta viagem, um código único será gerado que outros usuários podem usar para se juntar à sua viagem.
                </Typography>
              </Box>
            ) : (
              <Box sx={{ textAlign: 'center' }}>
                <CheckCircle color="success" sx={{ fontSize: 64, mb: 2 }} />
                <Typography variant="h6" className="mb-4 font-bold text-lg">
                  Viagem Compartilhada!
                </Typography>
                <Typography variant="body1" className="mb-4">
                  Sua viagem foi criada e está pronta para ser compartilhada.
                </Typography>
                
                <Box className="mb-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <Typography variant="body2" color="text.secondary" className="mb-2">
                    Código da viagem:
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                    <Typography variant="h4" className="font-mono font-bold text-blue-600">
                      {travelCode}
                    </Typography>
                    <IconButton 
                      onClick={handleCopyCode}
                      color={copied ? "success" : "primary"}
                      size="small"
                    >
                      {copied ? <CheckCircle /> : <ContentCopy />}
                    </IconButton>
                  </Box>
                </Box>

                <Typography variant="body2" color="text.secondary">
                  Compartilhe este código com seus amigos para que eles possam se juntar à viagem!
                </Typography>
              </Box>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="inherit">
            {travelCode ? 'Fechar' : 'Cancelar'}
          </Button>
          {!travelCode && (
            <Button 
              onClick={handleShare} 
              variant="contained" 
              startIcon={<Share />}
              color="primary"
            >
              Compartilhar Viagem
            </Button>
          )}
        </DialogActions>
      </Dialog>

      <Snackbar
        open={showSuccess}
        autoHideDuration={3000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={() => setShowSuccess(false)} severity="success">
          Viagem compartilhada com sucesso!
        </Alert>
      </Snackbar>
    </>
  );
};

export default ShareTravelDialog; 