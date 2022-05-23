import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from './services/api';

//import { TransationContext } from './TransationContext';

interface Transation {
  id: number;
  title: string;
  amount: number;
  category: string;
  type: string;
  createdAt: string;
}

interface TransationProviderProps {
  children: ReactNode;
}

/*interface TransationInput {
  title: string;
  amount: number;
  category: string;
  type: string;
}*/

type TransationInput = Omit<Transation, 'id' | 'createdAt'>;

interface TransatioContextData {
  transations: Transation[];
  createTransation: (transation: TransationInput) => Promise<void>;
}

export const TransationContext = createContext<TransatioContextData>(
  {} as TransatioContextData
);

export function TransationProvider({children}: TransationProviderProps) {
  
    const [transations, setTransations] = useState<Transation[]>([])
  
    useEffect(() => {
      api.get('transations')
        .then(response => setTransations(response.data.transations))
    }, []);

    async function createTransation(transation: TransationInput) {
  
      await api.post('/transation', transation);

    }

    return (
      <TransationContext.Provider value={{transations, createTransation}}>
        {children}
      </TransationContext.Provider>
    );
}
