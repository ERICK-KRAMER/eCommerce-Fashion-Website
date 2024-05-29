import { createContext, useContext, useState } from "react";

interface MethodsProps {
  item: number;
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
  
  const [item, setItem] = useState<number>(0);
  
  const cartItem = () => {
    console.log('clicou')
    setItem(prev => prev + 1);
  }

  const methods: MethodsProps = {
    item,
    cartItem,
  }

  return <shopContext.Provider value={methods}>{children}</shopContext.Provider>;
}

export { useShopContext, ShopProvider };
