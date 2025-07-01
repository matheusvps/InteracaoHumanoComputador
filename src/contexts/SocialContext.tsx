import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface Friend {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  status: 'online' | 'offline';
}

interface FriendRequest {
  id: string;
  from: Friend;
  to: string;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: string;
}

interface TravelInvite {
  id: string;
  from: Friend;
  to: string;
  travel: {
    id: string;
    destination: string;
    startDate: string;
    endDate: string;
    description: string;
  };
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: string;
}

interface TravelData {
  id: string;
  destination: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface SocialContextType {
  friends: Friend[];
  friendRequests: FriendRequest[];
  travelInvites: TravelInvite[];
  addFriend: (email: string) => Promise<boolean>;
  acceptFriendRequest: (requestId: string) => void;
  rejectFriendRequest: (requestId: string) => void;
  sendTravelInvite: (friendId: string, travelData: TravelData) => Promise<boolean>;
  acceptTravelInvite: (inviteId: string) => void;
  rejectTravelInvite: (inviteId: string) => void;
  removeFriend: (friendId: string) => void;
}

const SocialContext = createContext<SocialContextType | undefined>(undefined);

export const useSocial = () => {
  const context = useContext(SocialContext);
  if (!context) {
    throw new Error('useSocial deve ser usado dentro de um SocialProvider');
  }
  return context;
};

interface SocialProviderProps {
  children: ReactNode;
}

export const SocialProvider: React.FC<SocialProviderProps> = ({ children }) => {
  const [friends, setFriends] = useState<Friend[]>([
    {
      id: '1',
      name: 'João Silva',
      email: 'joao@email.com',
      avatar: '/social/joaoSilva.png',
      status: 'online'
    },
    {
      id: '2',
      name: 'Maria Santos',
      email: 'maria@email.com',
      avatar: '/social/mariaSantos.png',
      status: 'offline'
    },
    {
      id: '3',
      name: 'Pedro Costa',
      email: 'pedro@email.com',
      avatar: '/social/pedroCosta.png',
      status: 'online'
    }
  ]);

  const [friendRequests, setFriendRequests] = useState<FriendRequest[]>([
    {
      id: '1',
      from: {
        id: '4',
        name: 'Ana Oliveira',
        email: 'ana@email.com',
        avatar: '/social/anaOliveira.png',
        status: 'online'
      },
      to: 'current-user',
      status: 'pending',
      createdAt: new Date().toISOString()
    }
  ]);

  const [travelInvites, setTravelInvites] = useState<TravelInvite[]>([
    {
      id: '1',
      from: friends[0],
      to: 'current-user',
      travel: {
        id: '1',
        destination: 'Fernando de Noronha',
        startDate: '2024-06-15',
        endDate: '2024-06-22',
        description: 'Viagem para Fernando de Noronha - 7 dias de praia e aventura!'
      },
      status: 'pending',
      createdAt: new Date().toISOString()
    }
  ]);

  const addFriend = async (email: string): Promise<boolean> => {
    // Simulação de adição de amigo
    const newFriend: Friend = {
      id: Date.now().toString(),
      name: email.split('@')[0],
      email: email,
      avatar: 'https://via.placeholder.com/150',
      status: 'offline'
    };

    const newRequest: FriendRequest = {
      id: Date.now().toString(),
      from: newFriend,
      to: 'current-user',
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    setFriendRequests(prev => [...prev, newRequest]);
    return true;
  };

  const acceptFriendRequest = (requestId: string) => {
    setFriendRequests(prev => 
      prev.map(request => 
        request.id === requestId 
          ? { ...request, status: 'accepted' as const }
          : request
      )
    );

    const request = friendRequests.find(r => r.id === requestId);
    if (request) {
      setFriends(prev => [...prev, request.from]);
    }
  };

  const rejectFriendRequest = (requestId: string) => {
    setFriendRequests(prev => 
      prev.map(request => 
        request.id === requestId 
          ? { ...request, status: 'rejected' as const }
          : request
      )
    );
  };

  const sendTravelInvite = async (friendId: string, travelData: TravelData): Promise<boolean> => {
    const friend = friends.find(f => f.id === friendId);
    if (!friend) return false;

    const newInvite: TravelInvite = {
      id: Date.now().toString(),
      from: friend,
      to: friendId,
      travel: travelData,
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    setTravelInvites(prev => [...prev, newInvite]);
    return true;
  };

  const acceptTravelInvite = (inviteId: string) => {
    setTravelInvites(prev => 
      prev.map(invite => 
        invite.id === inviteId 
          ? { ...invite, status: 'accepted' as const }
          : invite
      )
    );
  };

  const rejectTravelInvite = (inviteId: string) => {
    setTravelInvites(prev => 
      prev.map(invite => 
        invite.id === inviteId 
          ? { ...invite, status: 'rejected' as const }
          : invite
      )
    );
  };

  const removeFriend = (friendId: string) => {
    setFriends(prev => prev.filter(friend => friend.id !== friendId));
  };

  const value: SocialContextType = {
    friends,
    friendRequests,
    travelInvites,
    addFriend,
    acceptFriendRequest,
    rejectFriendRequest,
    sendTravelInvite,
    acceptTravelInvite,
    rejectTravelInvite,
    removeFriend
  };

  return (
    <SocialContext.Provider value={value}>
      {children}
    </SocialContext.Provider>
  );
}; 