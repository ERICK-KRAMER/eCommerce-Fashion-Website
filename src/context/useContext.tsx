import React, { createContext, useContext } from "react";

interface MethodsProps {
  cartItem: () => void;
}

export const shopContext = createContext<MethodsProps>({} as MethodsProps);

// Hook para acessar o contexto
const useShopContext = (): MethodsProps => {
  const context = useContext(shopContext);
  if (!context) {
    throw new Error("useShopContext deve ser usado dentro de um ShopProvider");
  }
  return context;
}

const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  
  const cartItem = () => {
    console.log('cartItem');
  }

  const methods: MethodsProps = {
    cartItem,
  }

  return <shopContext.Provider value={methods}>{children}</shopContext.Provider>;
}

export { useShopContext, ShopProvider };
