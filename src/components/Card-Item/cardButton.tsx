import { ShoppingCart } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

interface CardButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const CardButton: React.FC<CardButtonProps> = ({ className, ...rest}) => {
  return (
    <span className="bg-sky-600 max-md:px-4 max-md:py-1 px-20 max-xl:px-10 py-2 rounded text-white hover:bg-sky-700 flex gap-3 transition duration-500">
      <button className={`${className}`} {...rest}>Adicionar</button>
      <ShoppingCart/>
    </span>
  )
}

export { CardButton };