import { Link } from "react-router-dom";

const Items = ({ item, to }: { item: string, to?: string }) => {
  return(
    <li className="hover:text-sky-700 cursor-pointer">
      <Link to={`${to}`}>{item}</Link>
    </li>
  )
}
export {Items};