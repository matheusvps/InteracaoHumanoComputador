import React from 'react';
import type { TravelData } from './TravelBookingFlow';

type Props = {
  travelData: TravelData;
  prevStep: () => void;
};

const StepParticipate: React.FC<Props> = ({ travelData, prevStep }) => {
  const handleParticipate = () => {
    alert('Participação confirmada!');
  };

  return (
    <div>
      <h2>Resumo da Viagem</h2>
      <p><strong>Origem:</strong> {travelData.origem}</p>
      <p><strong>Destino:</strong> {travelData.destino}</p>
      <p><strong>Ida:</strong> {travelData.dataIda}</p>
      <p><strong>Volta:</strong> {travelData.dataVolta}</p>
      <p><strong>Transporte:</strong> {travelData.transporte}</p>
      <button onClick={prevStep}>Voltar</button>
      <button onClick={handleParticipate}>Confirmar Participação</button>
    </div>
  );
};

export default StepParticipate; 