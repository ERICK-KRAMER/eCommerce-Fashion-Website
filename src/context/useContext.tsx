import React, { createContext, useContext, useState, ReactNode } from "react";
import { ProductsProps } from "../api/products";

interface MethodsProps {
  item: number;
  getItem: ProductsProps | undefined;
  cart: ProductsProps[];
  cartItem: (data: ProductsProps) => void;
  GetItem: (data: ProductsProps) => void;
}

export const ShopContext = createContext<MethodsProps>({} as MethodsProps);

// Hook para acessar o contexto
export const useShopContext = (): MethodsProps => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShopContext must be used within a ShopProvider");
  }
  return context;
}

export const ShopProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [item, setItem] = useState<number>(0);
  const [getItem, setGetItem] = useState<ProductsProps | undefined>(undefined);
  const [cart, setCart] = useState<ProductsProps[]>([]);

  const cartItem = (data: ProductsProps) => {
    setItem(prev => prev + 1);
    setCart(prevCart => [...prevCart, data]);
  }

  const GetItem = (data: ProductsProps) => {
    setGetItem(data);
  }

  const methods: MethodsProps = {
    item,
    getItem,
    cart,
    cartItem,
    GetItem,
  }

  return (
    <ShopContext.Provider value={methods}>
      {children}
    </ShopContext.Provider>
  );
}
