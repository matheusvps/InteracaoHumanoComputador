import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Divider, Paper, TextField } from '@mui/material';
import { useState } from 'react';

const formasPagamento = [
  {
    nome: 'Cartão de Crédito',
    key: 'cartao',
    imagens: [
      '/pgtos/visa.png',
      '/pgtos/mastercard.png',
      '/pgtos/elo.png',
    ],
  },
  {
    nome: 'Pix',
    key: 'pix',
    imagens: ['/pgtos/pix.svg'],
  },
  {
    nome: 'Boleto Bancário',
    key: 'boleto',
    imagens: ['/pgtos/boleto.png'],
  },
];

const FormCartao = ({ onPagar }: { onPagar: () => void }) => (
  <Box className="flex flex-col gap-4 mt-6 items-center w-full" sx={{ maxWidth: 400, mx: 'auto' }}>
    <TextField label="Nome no Cartão" fullWidth required sx={{ maxWidth: 400 }} />
    <TextField label="Número do Cartão" fullWidth required inputProps={{ maxLength: 19 }} sx={{ maxWidth: 400 }} />
    <Box className="flex gap-4 w-full" sx={{ maxWidth: 400 }}>
      <TextField label="Validade (MM/AA)" required sx={{ flex: 1 }} />
      <TextField label="CVV" required inputProps={{ maxLength: 4 }} sx={{ flex: 1 }} />
    </Box>
    <Button variant="contained" color="primary" onClick={onPagar} sx={{ width: '100%', maxWidth: 400 }}>Pagar</Button>
  </Box>
);

const FormPix = ({ onPagar }: { onPagar: () => void }) => (
  <Box className="flex flex-col gap-4 mt-6 items-center">
    <Typography>Chave Pix:</Typography>
    <Typography variant="h6" className="bg-gray-100 px-4 py-2 rounded">agencia.senior@pagamentos.com</Typography>
    <Button variant="contained" color="success" onClick={onPagar}>Confirmar Pagamento</Button>
  </Box>
);

const FormBoleto = ({ onPagar }: { onPagar: () => void }) => (
  <Box className="flex flex-col gap-4 mt-6 items-center">
    <Typography variant="body1">Clique para gerar o boleto bancário:</Typography>
    <Button variant="contained" color="secondary" onClick={onPagar}>Gerar Boleto</Button>
  </Box>
);

const Pagamento = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const viagem = location.state;
  const [formaSelecionada, setFormaSelecionada] = useState<string | null>(null);
  const [pagamentoRealizado, setPagamentoRealizado] = useState(false);

  if (!viagem) {
    return (
      <Box className="flex justify-center items-center min-h-screen pt-16">
        <Typography variant="h5" className="text-xl">Nenhuma viagem selecionada.</Typography>
      </Box>
    );
  }

  const handlePagamento = () => {
    setPagamentoRealizado(true);
    setTimeout(() => {
      setPagamentoRealizado(false);
      navigate('/');
    }, 2000);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#f7f7f7' }}>
      <Box sx={{ maxWidth: 660, mx: 'auto', width: '100%' }}>
        <Paper elevation={6} className="p-10 rounded-2xl shadow-lg flex flex-col items-center">
          <Typography variant="h4" className="mb-6 font-bold text-3xl text-center text-green-800">Pagamento da Viagem</Typography>
          <Divider className="mb-6" />
          <Box className="mb-6 text-center">
            <Typography className="text-lg mb-1"><b>Origem:</b> {viagem.origem}</Typography>
            <Typography className="text-lg mb-1"><b>Destino:</b> {viagem.destino}</Typography>
            <Typography className="text-lg mb-1"><b>Data de Ida:</b> {viagem.dataIda}</Typography>
            <Typography className="text-lg mb-1"><b>Data de Volta:</b> {viagem.dataVolta}</Typography>
            <Typography className="text-lg mb-1"><b>Passageiro:</b> {viagem.nome || '---'}</Typography>
            <Typography className="mt-2 text-2xl font-bold text-green-700"><b>Valor total:</b> {viagem.valor}</Typography>
          </Box>
          <Divider className="my-6" />
          <Typography variant="h6" className="mb-6 text-lg text-center">Escolha a forma de pagamento:</Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' }, gap: 4, mb: 6 }}>
            {formasPagamento.map((forma) => (
              <Box key={forma.key} className="flex flex-col items-center">
                <Box
                  className={`cursor-pointer flex flex-col items-center border-2 rounded-lg p-2 transition ${formaSelecionada === forma.key ? 'border-green-600 bg-green-50' : 'border-transparent'}`}
                  onClick={() => setFormaSelecionada(forma.key)}
                >
                  <Box className="flex justify-center gap-2 mb-2">
                    {forma.imagens.map((img, i) => (
                      <img src={img} alt={forma.nome} key={i} style={{ height: 36, margin: '0 4px' }} />
                    ))}
                  </Box>
                  <span className="text-base font-semibold text-center">{forma.nome}</span>
                </Box>
              </Box>
            ))}
          </Box>
          {formaSelecionada === 'cartao' && <FormCartao onPagar={handlePagamento} />}
          {formaSelecionada === 'pix' && <FormPix onPagar={handlePagamento} />}
          {formaSelecionada === 'boleto' && <FormBoleto onPagar={handlePagamento} />}
          {pagamentoRealizado && (
            <Typography className="mt-6 text-green-700 font-bold text-lg">Pagamento realizado com sucesso! Redirecionando...</Typography>
          )}
          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            className="py-3 text-lg mt-8"
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