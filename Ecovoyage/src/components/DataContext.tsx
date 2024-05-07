// DataContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface DataContextType {
  id: string | null;
  setId: (id: string | null) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [id, setId] = useState<string | null>(null);

  return (
    <DataContext.Provider value={{ id, setId }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = (): DataContextType => {
  const context = useContext(DataContext);

  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }

  return context;
};
