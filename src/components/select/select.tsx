import { ChevronDown, ChevronUp } from "lucide-react";
import { FormEvent, useState } from "react";


const Select = () => {
  const [name, setName] = useState<string>('');
  const [toggle, setToggle] = useState<boolean>(false);

  const getname = (e:FormEvent) => {
    setName(e.currentTarget.textContent || '');
    toggleSelect();
  }

  const toggleSelect = () => {
    setToggle(prev => !prev);
  }
  
  return(
    <div className="relative">
      <button className="flex w-[150px] gap-2 rounded p-2 bg-sky-600 text-white justify-between" onClick={toggleSelect}>{ name ? name : 'Size' }{ toggle ? <ChevronUp/> : <ChevronDown /> }</button> 
      {toggle ? <div className="absolute flex flex-col bg-sky-600 text-white rounded border border-black w-[150px] mt-1">
        <span className="border-b border-black h-full w-full hover:bg-neutral-200 p-2 transition duration-300 cursor-pointer" onClick={getname}>SM Small</span>
        <span className="border-b border-black h-full w-full hover:bg-neutral-200 p-2 transition duration-300 cursor-pointer" onClick={getname}>MD Medium</span>
        <span className="border-b border-black h-full w-full hover:bg-neutral-200 p-2 transition duration-300 cursor-pointer" onClick={getname}>LG Large</span>
        <span className="h-full w-full hover:bg-neutral-200 p-2 transition duration-300 cursor-pointer" onClick={getname}>Xl Extra Large</span>
      </div> : null } 
    </div>
  )
}

export { Select };