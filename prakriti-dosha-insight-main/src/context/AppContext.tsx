import React, { createContext, useContext, useState, ReactNode } from 'react';

export type DoshaType = 'vata' | 'pitta' | 'kapha';

export interface QuizAnswer {
  questionId: number;
  selectedOption: number;
}

export interface QuizResult {
  dominantDosha: DoshaType;
  vataScore: number;
  pittaScore: number;
  kaphaScore: number;
}

export interface User {
  email: string;
  name: string;
  isEmailVerified: boolean;
}

interface AppContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  quizAnswers: QuizAnswer[];
  setQuizAnswers: (answers: QuizAnswer[]) => void;
  quizResult: QuizResult | null;
  setQuizResult: (result: QuizResult | null) => void;
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  signup: (email: string, password: string, name: string) => void;
  logout: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswer[]>([]);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);

  const login = (email: string, password: string) => {
    // Mock login
    setUser({
      email,
      name: email.split('@')[0],
      isEmailVerified: true
    });
  };

  const signup = (email: string, password: string, name: string) => {
    // Mock signup
    setUser({
      email,
      name,
      isEmailVerified: false
    });
  };

  const logout = () => {
    setUser(null);
    setQuizAnswers([]);
    setQuizResult(null);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        quizAnswers,
        setQuizAnswers,
        quizResult,
        setQuizResult,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
