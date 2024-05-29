import { createContext, useContext, useState } from "react";
import { ProductsProps } from "../api/products";

interface MethodsProps {
  item: number;
  getItem: ProductsProps | undefined;
  cartItem: () => void;
  GetItem: (data: ProductsProps) => void;
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

  const [getItem, setGetItem] = useState<ProductsProps>()
  
  const cartItem = () => {
    setItem(prev => prev + 1);
  }

  const GetItem = (data: ProductsProps) => {
    setGetItem(data)
  }

  const methods: MethodsProps = {
    item,
    getItem,
    cartItem,
    GetItem,
  }

  return <shopContext.Provider value={methods}>{children}</shopContext.Provider>;
}

export { useShopContext, ShopProvider };
