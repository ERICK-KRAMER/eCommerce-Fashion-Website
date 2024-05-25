const Items = ({item}:{item: string}) => {
  return(
    <li className="hover:text-sky-700 cursor-pointer">{item}</li>
  )
}
export {Items};