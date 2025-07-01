import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

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

interface TravelContextType {
  sharedTravels: SharedTravel[];
  createSharedTravel: (travelData: Omit<SharedTravel, 'id' | 'code' | 'createdAt'>) => SharedTravel;
  joinTravelByCode: (code: string, userId: string) => SharedTravel | null;
  getTravelByCode: (code: string) => SharedTravel | null;
  leaveTravel: (travelId: string, userId: string) => void;
}

const TravelContext = createContext<TravelContextType | undefined>(undefined);

export const useTravel = () => {
  const context = useContext(TravelContext);
  if (!context) {
    throw new Error('useTravel deve ser usado dentro de um TravelProvider');
  }
  return context;
};

interface TravelProviderProps {
  children: ReactNode;
}

const generateTravelCode = (): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

export const TravelProvider: React.FC<TravelProviderProps> = ({ children }) => {
  const [sharedTravels, setSharedTravels] = useState<SharedTravel[]>([]);

  const createSharedTravel = (travelData: Omit<SharedTravel, 'id' | 'code' | 'createdAt'>): SharedTravel => {
    const newTravel: SharedTravel = {
      ...travelData,
      id: Date.now().toString(),
      code: generateTravelCode(),
      createdAt: new Date().toISOString(),
    };

    setSharedTravels(prev => [...prev, newTravel]);
    return newTravel;
  };

  const joinTravelByCode = (code: string, userId: string): SharedTravel | null => {
    const travel = sharedTravels.find(t => t.code === code);
    if (!travel) return null;

    if (!travel.participants.includes(userId)) {
      setSharedTravels(prev => 
        prev.map(t => 
          t.id === travel.id 
            ? { ...t, participants: [...t.participants, userId] }
            : t
        )
      );
    }

    return travel;
  };

  const getTravelByCode = (code: string): SharedTravel | null => {
    return sharedTravels.find(t => t.code === code) || null;
  };

  const leaveTravel = (travelId: string, userId: string) => {
    setSharedTravels(prev => 
      prev.map(t => 
        t.id === travelId 
          ? { ...t, participants: t.participants.filter(p => p !== userId) }
          : t
      )
    );
  };

  const value: TravelContextType = {
    sharedTravels,
    createSharedTravel,
    joinTravelByCode,
    getTravelByCode,
    leaveTravel
  };

  return (
    <TravelContext.Provider value={value}>
      {children}
    </TravelContext.Provider>
  );
}; 