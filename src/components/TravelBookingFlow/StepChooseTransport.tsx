import React, { useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import type { TravelData } from './TravelBookingFlow';

type Props = {
  travelData: TravelData;
  setTravelData: Dispatch<SetStateAction<TravelData>>;
  nextStep: () => void;
  prevStep: () => void;
};

const StepChooseTransport: React.FC<Props> = ({ travelData, setTravelData, nextStep, prevStep }) => {
  const [transporte, setTransporte] = useState(travelData.transporte || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTravelData((prev) => ({ ...prev, transporte }));
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Você quer viajar de que forma?</h2>
      <div>
        <button type="button" onClick={() => setTransporte('Trem')}>Trem</button>
        <button type="button" onClick={() => setTransporte('Ônibus')}>Ônibus</button>
        <button type="button" onClick={() => setTransporte('Avião')}>Avião</button>
      </div>
      <div>
        <button type="button" onClick={prevStep}>Voltar</button>
        <button type="submit" disabled={!transporte}>Próximo</button>
      </div>
    </form>
  );
};

export default StepChooseTransport; 