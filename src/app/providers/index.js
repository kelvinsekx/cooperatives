"use client";
import { createContext, useState } from "react";

export const MessageContext = createContext(null);

export function Provider({ children }) {
  const [message, setMessage] = useState(null);
  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      {children}
    </MessageContext.Provider>
  );
}
