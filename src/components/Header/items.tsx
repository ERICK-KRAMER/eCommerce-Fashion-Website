const Items = ({item}:{item: string}) => {
  return(
    <li className="hover:underline cursor-pointer">{item}</li>
  )
}
export {Items};