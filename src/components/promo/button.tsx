import { ButtonHTMLAttributes } from "react";

interface ButtonPromotionProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonPromotion: React.FC<ButtonPromotionProps> = ({ ...rest }) => {
  return <button
    className="bg-white border-4 border-transparent text-blue-500 outline-none p-4 px-10 transition duration-500 hover:bg-sky-700 hover:text-white hover:border-4 hover:border-white " {...rest}>
    BUY NOW
  </button>
}

export { ButtonPromotion };