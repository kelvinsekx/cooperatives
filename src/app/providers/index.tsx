"use client";
import React, { createContext, useState } from "react";

export type TType = {
  message: number | string | null;
  setMessage: (num: string) => void;
};
export const MessageContext = createContext<TType | null>(null);

export function Provider({ children }: { children: React.ReactNode }) {
  const [message, setM] = useState<string | number | null>(null);

  const setMessage = (num: string | number) => setM(num);

  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      {children}
    </MessageContext.Provider>
  );
}
