interface SidebarProps {
  children?: React.ReactNode;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string
}

const Sidebar = ({ className ,children, setIsOpen }: SidebarProps) => {
  return (
    <aside className={`right-0 w-[400px] h-screen fixed bg-neutral-200 p-4 z-20 ${className}`}>
      <button onClick={() => setIsOpen(false)} className="text-black">Close</button>
      {children}
    </aside>
  );
}

export { Sidebar };
