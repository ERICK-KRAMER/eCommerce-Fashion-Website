import { X } from "lucide-react";
import { Link } from "react-router-dom";

interface SidebarProps {
  children?: React.ReactNode;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string
}

const Sidebar = ({ className, setIsOpen }: SidebarProps) => {
  return (
    <aside className={`right-0 w-[414px] h-screen fixed bg-transparent p-4 z-20 flex felx-col gap-4 justify-center items-center ${className}`} onClick={(e) => { e.stopPropagation() }}>
      <div className="absolute w-full h-full bg-neutral-200 opacity-70 z-0"></div>
      <button onClick={() => setIsOpen(false)} className="text-black absolute top-7 left-5"><X/></button>
      <nav className="z-10">
        <ul className="flex flex-col gap-4">
          <li className="text-2xl font-semibold"><Link to={'/'}>Home</Link></li>
          <li className="text-2xl font-semibold"><Link to={'/about'}>About</Link></li>
          <li className="text-2xl font-semibold"><Link to={'/contact'}>Contact us</Link></li>
        </ul>
      </nav>
    </aside>
  );
}

export { Sidebar };
