import { createContext, useContext, useState, ReactNode } from 'react';
import { RegistrationForm } from '../components/RegistrationForm';

interface RegistrationContextType {
  openRegistration: () => void;
  closeRegistration: () => void;
  isOpen: boolean;
}

const RegistrationContext = createContext<RegistrationContextType | undefined>(undefined);

export function RegistrationProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openRegistration = () => setIsOpen(true);
  const closeRegistration = () => setIsOpen(false);

  return (
    <RegistrationContext.Provider value={{ openRegistration, closeRegistration, isOpen }}>
      {children}
      <RegistrationForm isOpen={isOpen} onClose={closeRegistration} />
    </RegistrationContext.Provider>
  );
}

export function useRegistration() {
  const context = useContext(RegistrationContext);
  if (context === undefined) {
    throw new Error('useRegistration must be used within a RegistrationProvider');
  }
  return context;
}

