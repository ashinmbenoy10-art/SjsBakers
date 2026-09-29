"use client";

import React, { createContext, useContext, useState } from "react";

interface OrderContextType {
  isOpen: boolean;
  selectedCake: string;
  openOrderModal: (cakeName?: string) => void;
  closeOrderModal: () => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export function OrderProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCake, setSelectedCake] = useState("Custom Cake");

  const openOrderModal = (cakeName?: string) => {
    if (cakeName) {
      setSelectedCake(cakeName);
    } else {
      setSelectedCake("Custom Cake");
    }
    setIsOpen(true);
  };

  const closeOrderModal = () => {
    setIsOpen(false);
  };

  return (
    <OrderContext.Provider
      value={{ isOpen, selectedCake, openOrderModal, closeOrderModal }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrderModal() {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrderModal must be used within an OrderProvider");
  }
  return context;
}
