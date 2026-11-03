import { createContext, useContext, useState, type ReactNode } from 'react';

interface AnimationContextType {
  introComplete: boolean;
  setIntroComplete: (complete: boolean) => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export function AnimationProvider({ children }: { children: ReactNode }) {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <AnimationContext.Provider value={{ introComplete, setIntroComplete }}>
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimation() {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error('useAnimation must be used within an AnimationProvider');
  }
  return context;
}

export default AnimationContext;
