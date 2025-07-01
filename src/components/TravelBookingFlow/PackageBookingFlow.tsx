import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Divider, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ptBR } from 'date-fns/locale/pt-BR';
import { useNavigate } from 'react-router-dom';
import Chip from '@mui/material/Chip';

interface Pacote {
  destino: string;
  imagem: string;
  preco: string;
  duracao: string;
  inclusos: string[];
  descricao: string;
}

interface PackageBookingFlowProps {
  pacote: Pacote;
  open: boolean;
  onClose: () => void;
}

function formatarData(data: Date | null) {
  if (!data) return '';
  return data.toLocaleDateString('pt-BR');
}

const PackageBookingFlow: React.FC<PackageBookingFlowProps> = ({ pacote, open, onClose }) => {
  const [step, setStep] = useState(0);
  const [dataIda, setDataIda] = useState<Date | null>(null);
  const [nomePassageiro, setNomePassageiro] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [quantidadePessoas, setQuantidadePessoas] = useState(1);
  const navigate = useNavigate();

  const avancar = () => setStep((s) => s + 1);
  const voltar = () => setStep((s) => s - 1);

  const handleClose = () => {
    setStep(0);
    setDataIda(null);
    setNomePassageiro('');
    setEmail('');
    setTelefone('');
    setQuantidadePessoas(1);
    onClose();
  };

  const calcularValorTotal = () => {
    const valorBase = parseInt(pacote.preco.replace('R$ ', '').replace('.', ''));
    return (valorBase * quantidadePessoas).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const calcularDataVolta = () => {
    if (!dataIda) return null;
    const duracaoDias = parseInt(pacote.duracao.split(' ')[0]);
    const dataVolta = new Date(dataIda);
    dataVolta.setDate(dataVolta.getDate() + duracaoDias);
    return dataVolta;
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ fontSize: '1.5rem', fontWeight: 600 }}>
          Reservar Pacote: {pacote.destino}
        </DialogTitle>
        <DialogContent>
          <Box className="w-full max-w-md mx-auto p-4" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {step === 0 && (
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h6" className="mb-4 font-bold text-lg">Informações do Pacote</Typography>
                <Box className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <Typography className="text-lg mb-2"><b>Destino:</b> {pacote.destino}</Typography>
                  <Typography className="text-lg mb-2"><b>Preço:</b> {pacote.preco}</Typography>
                  <Typography className="text-lg mb-2"><b>Duração:</b> {pacote.duracao}</Typography>
                  <Typography className="text-lg mb-2"><b>Incluso:</b></Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center', mt: 1 }}>
                    {pacote.inclusos.map((item, index) => (
                      <Chip key={index} label={item} color="primary" variant="outlined" />
                    ))}
                  </Box>
                </Box>
                <Box className="flex flex-row justify-between pt-4">
                  <span />
                  <Button variant="contained" onClick={avancar} className="py-3 text-lg">Próximo</Button>
                </Box>
              </Box>
            )}

            {step === 1 && (
              <Box>
                <Typography variant="h6" className="mb-4 font-bold text-lg">Escolha a data de partida</Typography>
                <DatePicker
                  label="Data de Partida"
                  value={dataIda || undefined}
                  onChange={setDataIda}
                  slotProps={{ textField: { fullWidth: true, autoFocus: true } }}
                  disablePast
                />
                <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                  Data de retorno: {dataIda ? formatarData(calcularDataVolta()) : 'Será calculada automaticamente'}
                </Typography>
                <Box className="flex flex-row justify-between mt-6">
                  <Button variant="outlined" onClick={voltar} className="py-3 text-lg">Voltar</Button>
                  <Button variant="contained" disabled={!dataIda} onClick={avancar} className="py-3 text-lg">Próximo</Button>
                </Box>
              </Box>
            )}

            {step === 2 && (
              <Box>
                <Typography variant="h6" className="mb-4 font-bold text-lg">Quantidade de pessoas</Typography>
                <TextField
                  type="number"
                  label="Número de pessoas"
                  value={quantidadePessoas}
                  onChange={(e) => setQuantidadePessoas(Math.max(1, parseInt(e.target.value) || 1))}
                  fullWidth
                  inputProps={{ min: 1, max: 10 }}
                  autoFocus
                />
                <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                  Valor por pessoa: {pacote.preco}
                </Typography>
                <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
                  Valor total: {calcularValorTotal()}
                </Typography>
                <Box className="flex flex-row justify-between mt-6">
                  <Button variant="outlined" onClick={voltar} className="py-3 text-lg">Voltar</Button>
                  <Button variant="contained" onClick={avancar} className="py-3 text-lg">Próximo</Button>
                </Box>
              </Box>
            )}

            {step === 3 && (
              <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                <Typography variant="h6" className="mb-4 font-bold text-lg" sx={{ textAlign: 'center' }}>Dados do passageiro principal</Typography>
                <TextField
                  label="Nome completo"
                  value={nomePassageiro}
                  onChange={(e) => setNomePassageiro(e.target.value)}
                  fullWidth
                  autoFocus
                  sx={{ mb: 2 }}
                />
                <TextField
                  label="E-mail"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                  sx={{ mb: 2 }}
                />
                <TextField
                  label="Telefone"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  fullWidth
                  sx={{ mb: 2 }}
                />
                <Box className="flex flex-row justify-between mt-6" sx={{ width: '100%' }}>
                  <Button variant="outlined" onClick={voltar} className="py-3 text-lg">Voltar</Button>
                  <Button 
                    variant="contained" 
                    disabled={!nomePassageiro || !email || !telefone} 
                    onClick={avancar} 
                    className="py-3 text-lg"
                  >
                    Próximo
                  </Button>
                </Box>
              </Box>
            )}

            {step === 4 && (
              <Box>
                <Typography variant="h6" className="mb-4 font-bold text-lg">Resumo da Reserva</Typography>
                <Divider className="mb-4" />
                <Typography className="text-lg mb-2"><b>Destino:</b> {pacote.destino}</Typography>
                <Typography className="text-lg mb-2"><b>Data de partida:</b> {formatarData(dataIda)}</Typography>
                <Typography className="text-lg mb-2"><b>Data de retorno:</b> {formatarData(calcularDataVolta())}</Typography>
                <Typography className="text-lg mb-2"><b>Quantidade de pessoas:</b> {quantidadePessoas}</Typography>
                <Typography className="text-lg mb-2"><b>Passageiro principal:</b> {nomePassageiro}</Typography>
                <Typography className="text-lg mb-2"><b>E-mail:</b> {email}</Typography>
                <Typography className="text-lg mb-2"><b>Telefone:</b> {telefone}</Typography>
                <Typography className="mt-4 text-xl font-semibold text-green-700">
                  <b>Valor total:</b> {calcularValorTotal()}
                </Typography>
                <Box className="flex flex-row justify-between mt-6">
                  <Button variant="outlined" onClick={voltar} className="py-3 text-lg">Voltar</Button>
                  <Button 
                    variant="contained" 
                    color="success" 
                    className="py-3 text-lg"
                    onClick={() => {
                      navigate('/pagamento', {
                        state: {
                          origem: 'Cidade de origem',
                          destino: pacote.destino,
                          dataIda: formatarData(dataIda),
                          dataVolta: formatarData(calcularDataVolta()),
                          valor: calcularValorTotal(),
                          nome: nomePassageiro,
                          email: email,
                          telefone: telefone,
                          quantidadePessoas: quantidadePessoas,
                          tipo: 'pacote'
                        }
                      });
                      handleClose();
                    }}
                  >
                    Confirmar e Pagar
                  </Button>
                </Box>
              </Box>
            )}
          </Box>
        </DialogContent>
      </Dialog>
    </LocalizationProvider>
  );
};

export default PackageBookingFlow; 