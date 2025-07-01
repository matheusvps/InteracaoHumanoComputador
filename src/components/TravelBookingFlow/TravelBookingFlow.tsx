import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Autocomplete, Divider } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ptBR } from 'date-fns/locale/pt-BR';
import { useNavigate } from 'react-router-dom';
import ShareTravelDialog from './ShareTravelDialog';

const cidadesRecomendadas = [
  'Curitiba',
  'Aparecida',
  'Rio de Janeiro',
  'Porto Alegre',
  'Salvador',
  'São Paulo',
  'Florianópolis',
  'Maceió',
  'Foz do Iguaçu',
  'Fernando de Noronha',
];

const gerarValorFicticio = () => {
  // Valor fictício entre 350 e 1200
  return (Math.floor(Math.random() * 850) + 350).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

function formatarData(data: Date | null) {
  if (!data) return '';
  return data.toLocaleDateString('pt-BR');
}

const TravelBookingFlow: React.FC = () => {
  const [step, setStep] = useState(0);
  const [origem, setOrigem] = useState('');
  const [destino, setDestino] = useState('');
  const [dataIda, setDataIda] = useState<Date | null>(null);
  const [dataVolta, setDataVolta] = useState<Date | null>(null);
  const [valor, setValor] = useState('');
  const [showShareDialog, setShowShareDialog] = useState(false);
  const navigate = useNavigate();

  const avancar = () => setStep((s) => s + 1);
  const voltar = () => setStep((s) => s - 1);

  // Gera valor fictício ao chegar no resumo
  React.useEffect(() => {
    if (step === 4) setValor(gerarValorFicticio());
  }, [step]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
      <Box className="w-full max-w-md mx-auto p-4">
        {step === 0 && (
          <Box>
            <Typography variant="h5" className="mb-4 font-bold text-xl">Escolha a origem</Typography>
            <Autocomplete
              options={cidadesRecomendadas}
              value={origem}
              onChange={(_, v) => setOrigem(v || '')}
              renderInput={(params) => (
                <TextField {...params} label="Origem" variant="outlined" fullWidth autoFocus />
              )}
              className="mb-4"
            />
            <Box className="flex flex-wrap mb-8" style={{ gap: 16 }}>
              {cidadesRecomendadas.map((cidade) => (
                <Button key={cidade} variant="outlined" onClick={() => setOrigem(cidade)}>{cidade}</Button>
              ))}
            </Box>
            <Box className="flex flex-row justify-between">
              <span />
              <Button variant="contained" disabled={!origem} onClick={avancar} className="py-3 text-lg">Próximo</Button>
            </Box>
          </Box>
        )}
        {step === 1 && (
          <Box>
            <Typography variant="h5" className="mb-4 font-bold text-xl">Escolha o destino</Typography>
            <Autocomplete
              options={cidadesRecomendadas.filter(c => c !== origem)}
              value={destino}
              onChange={(_, v) => setDestino(v || '')}
              renderInput={(params) => (
                <TextField {...params} label="Destino" variant="outlined" fullWidth autoFocus />
              )}
              className="mb-4"
            />
            <Box className="flex flex-wrap mb-8" style={{ gap: 16 }}>
              {cidadesRecomendadas.filter(c => c !== origem).map((cidade) => (
                <Button key={cidade} variant="outlined" onClick={() => setDestino(cidade)}>{cidade}</Button>
              ))}
            </Box>
            <Box className="flex flex-row justify-between">
              <Button variant="outlined" onClick={voltar} className="py-3 text-lg">Voltar</Button>
              <Button variant="contained" disabled={!destino} onClick={avancar} className="py-3 text-lg">Próximo</Button>
            </Box>
          </Box>
        )}
        {step === 2 && (
          <Box>
            <Typography variant="h5" className="mb-4 font-bold text-xl">Escolha a data de ida</Typography>
            <DatePicker
              label="Data de Ida"
              value={dataIda || undefined}
              onChange={setDataIda}
              slotProps={{ textField: { fullWidth: true, autoFocus: true } }}
              disablePast
            />
            <Box className="flex flex-row justify-between mt-6">
              <Button variant="outlined" onClick={voltar} className="py-3 text-lg">Voltar</Button>
              <Button variant="contained" disabled={!dataIda} onClick={avancar} className="py-3 text-lg">Próximo</Button>
            </Box>
          </Box>
        )}
        {step === 3 && (
          <Box>
            <Typography variant="h5" className="mb-4 font-bold text-xl">Escolha a data de volta</Typography>
            <DatePicker
              label="Data de Volta"
              value={dataVolta || undefined}
              onChange={setDataVolta}
              slotProps={{ textField: { fullWidth: true, autoFocus: true } }}
              minDate={dataIda || undefined}
              disablePast
            />
            <Box className="flex flex-row justify-between mt-6">
              <Button variant="outlined" onClick={voltar} className="py-3 text-lg">Voltar</Button>
              <Button variant="contained" onClick={avancar} className="py-3 text-lg">Próximo</Button>
            </Box>
          </Box>
        )}
        {step === 4 && (
          <Box>
            <Typography variant="h5" className="mb-4 font-bold text-xl">Resumo da Viagem</Typography>
            <Divider className="mb-4" />
            <Typography className="text-lg mb-2"><b>Origem:</b> {origem}</Typography>
            <Typography className="text-lg mb-2"><b>Destino:</b> {destino}</Typography>
            <Typography className="text-lg mb-2"><b>Ida:</b> {formatarData(dataIda)}</Typography>
            <Typography className="text-lg mb-2"><b>Volta:</b> {formatarData(dataVolta)}</Typography>
            <Typography className="mt-4 text-xl font-semibold"><b>Valor total:</b> {valor}</Typography>
            <Box className="flex flex-col gap-3 mt-6">
              <Box className="flex flex-row justify-between">
                <Button variant="outlined" onClick={voltar} className="py-3 text-lg">Voltar</Button>
                <Button variant="contained" color="success" className="py-3 text-lg"
                  onClick={() => navigate('/pagamento', {
                    state: {
                      origem,
                      destino,
                      dataIda: formatarData(dataIda),
                      dataVolta: formatarData(dataVolta),
                      valor
                    }
                  })}
                >
                  Confirmar e Buscar
                </Button>
              </Box>
              <Button 
                variant="outlined" 
                color="primary" 
                className="py-3 text-lg"
                onClick={() => setShowShareDialog(true)}
              >
                Compartilhar Viagem
              </Button>
            </Box>
          </Box>
        )}
      </Box>
      
      <ShareTravelDialog
        open={showShareDialog}
        onClose={() => setShowShareDialog(false)}
        travelData={{
          type: 'custom',
          destination: destino,
          startDate: dataIda ? dataIda.toISOString().split('T')[0] : '',
          endDate: dataVolta ? dataVolta.toISOString().split('T')[0] : '',
          description: `Viagem de ${origem} para ${destino}`,
          customDetails: {
            origem,
            valor
          }
        }}
      />
    </LocalizationProvider>
  );
};

export default TravelBookingFlow; 