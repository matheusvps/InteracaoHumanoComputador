import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Divider, Paper } from '@mui/material';

const Pagamento = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const viagem = location.state;

  if (!viagem) {
    return (
      <Box className="flex justify-center items-center min-h-screen pt-16">
        <Typography variant="h5" className="text-xl">Nenhuma viagem selecionada.</Typography>
      </Box>
    );
  }

  return (
    <Box className="flex justify-center items-center min-h-screen pt-16">
      <Box className="max-w-md mx-auto">
        <Paper elevation={4} className="p-8 rounded-lg">
          <Typography variant="h4" className="mb-4 font-bold text-2xl">Pagamento</Typography>
          <Divider className="mb-4" />
          <Typography className="text-lg mb-2"><b>Origem:</b> {viagem.origem}</Typography>
          <Typography className="text-lg mb-2"><b>Destino:</b> {viagem.destino}</Typography>
          <Typography className="text-lg mb-2"><b>Ida:</b> {viagem.dataIda}</Typography>
          <Typography className="text-lg mb-2"><b>Volta:</b> {viagem.dataVolta}</Typography>
          <Typography className="mt-4 text-xl font-semibold"><b>Valor total:</b> {viagem.valor}</Typography>
          <Divider className="my-6" />
          <Typography variant="h6" className="mb-4 text-lg">Escolha a forma de pagamento:</Typography>
          <Button 
            variant="contained" 
            color="primary" 
            fullWidth 
            className="mb-4 py-3 text-lg" 
            onClick={() => alert('Pagamento fictício realizado!')}
          >
            Pagar com Cartão
          </Button>
          <Button 
            variant="outlined" 
            color="secondary" 
            fullWidth 
            className="py-3 text-lg"
            onClick={() => navigate('/')}
          >
            Voltar para o início
          </Button>
        </Paper>
      </Box>
    </Box>
  );
};

export default Pagamento; 