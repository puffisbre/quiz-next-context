"use client";

import { createContext, useState } from "react";

interface AdminLayout {
  question: string;
  answer: string;
}

export interface QuizContextType {
  questions: AdminLayout[];
  setQuestions: React.Dispatch<React.SetStateAction<AdminLayout[]>>;
}

export const QuizContext = createContext<QuizContextType | undefined>(
  undefined
);

export function QuizProvider({ children }: { children: React.ReactNode }) {
  const [questions, setQuestions] = useState<AdminLayout[]>([]);

  return (
    <QuizContext.Provider value={{ questions, setQuestions }}>
      {children}
    </QuizContext.Provider>
  );
}
