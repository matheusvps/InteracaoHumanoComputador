import React, { useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import type { TravelData } from './TravelBookingFlow';

type Props = {
  travelData: TravelData;
  setTravelData: Dispatch<SetStateAction<TravelData>>;
  nextStep: () => void;
};

const destinosFrequentes = ['Curitiba', 'Aparecida', 'Rio de Janeiro'];

const StepChooseDestination: React.FC<Props> = ({ travelData, setTravelData, nextStep }) => {
  const [origem, setOrigem] = useState(travelData.origem || '');
  const [destino, setDestino] = useState(travelData.destino || '');
  const [dataIda, setDataIda] = useState(travelData.dataIda || '');
  const [dataVolta, setDataVolta] = useState(travelData.dataVolta || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTravelData((prev) => ({ ...prev, origem, destino, dataIda, dataVolta }));
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Para onde?</h2>
      <div>
        <label>Origem:</label>
        <input value={origem} onChange={e => setOrigem(e.target.value)} required />
      </div>
      <div>
        <label>Destino:</label>
        <input value={destino} onChange={e => setDestino(e.target.value)} required />
      </div>
      <div>
        <label>Ida:</label>
        <input type="date" value={dataIda} onChange={e => setDataIda(e.target.value)} required />
      </div>
      <div>
        <label>Volta:</label>
        <input type="date" value={dataVolta} onChange={e => setDataVolta(e.target.value)} />
      </div>
      <div>
        <h3>Destinos Frequentes</h3>
        {destinosFrequentes.map((d) => (
          <button type="button" key={d} onClick={() => setDestino(d)}>{d}</button>
        ))}
      </div>
      <button type="submit">Buscar</button>
    </form>
  );
};

export default StepChooseDestination; 