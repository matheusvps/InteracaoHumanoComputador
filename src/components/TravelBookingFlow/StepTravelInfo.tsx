import React from 'react';
import type { TravelData } from './TravelBookingFlow';

type Props = {
  travelData: TravelData;
  nextStep: () => void;
  prevStep: () => void;
};

const StepTravelInfo: React.FC<Props> = ({ travelData, nextStep, prevStep }) => {
  return (
    <div>
      <h2>Informações da Viagem</h2>
      <p><strong>Origem:</strong> {travelData.origem}</p>
      <p><strong>Destino:</strong> {travelData.destino}</p>
      <p><strong>Ida:</strong> {travelData.dataIda}</p>
      <p><strong>Volta:</strong> {travelData.dataVolta}</p>
      <p><strong>Transporte:</strong> {travelData.transporte}</p>
      {/* Aqui pode-se adicionar lógica para exibir a rota */}
      <div>
        <button onClick={prevStep}>Voltar</button>
        <button onClick={nextStep}>Quero Participar</button>
      </div>
    </div>
  );
};

export default StepTravelInfo; 