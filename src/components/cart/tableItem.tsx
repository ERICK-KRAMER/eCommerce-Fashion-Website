interface CartItemProps {
  name: string,
  price: string,
  quantity: number,
  total: string,
  img: string,
}
  
const CartItem = ({ img ,name, price, quantity, total }: CartItemProps) => {
  return (
    <tr>
      <td><img src={ img } alt={ name } className="w-12 h-12"/></td>
      <td className="px-6 py-4 whitespace-nowrap">{ name }</td>
      <td className="px-6 py-4 whitespace-nowrap">{ price }</td>
      <td className="px-6 py-4 whitespace-nowrap">{ quantity }</td>
      <td className="px-6 py-4 whitespace-nowrap">{ total }</td>
    </tr>
  )
}

export { CartItem };