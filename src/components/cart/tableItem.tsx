import { useCount } from "../../hooks/useCount";

interface CartItemProps {
  name: string,
  price: string,
  total: string,
  img: string,
}
  
const CartItem = ({ img, name, price, total }: CartItemProps) => {
  const { decrement, increment, count } = useCount();
  
  return (
    <tr>
      <td><img src={ img } alt={ name } className="w-12 h-12"/></td>
      <td className="px-6 py-4 whitespace-nowrap">{ name }</td>
      <td className="px-6 py-4 whitespace-nowrap">{ price }</td>
      <td className="px-6 py-4 whitespace-nowrap flex gap-1 items-center">
        <span className="p-2 cursor-pointer py-1 active:shadow-lg active:scale-95 bg-neutral-200 rounded-md" onClick={decrement}>-</span>{ count }<span className="p-2 cursor-pointer py-1 active:shadow-lg active:scale-95 bg-neutral-200 rounded-md" onClick={increment}>+</span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">{ total }</td>
    </tr>
  )
}

export { CartItem };