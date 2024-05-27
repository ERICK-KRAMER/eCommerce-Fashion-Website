import { useState } from "react";
import { ButtonPromotion } from "../components/promo/button";
import { Sidebar } from "../components/sidebar/sidebar";

const Testes = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Sidebar setIsOpen={setIsOpen} className={`${isOpen ? 'sidebarAnimationOpen' : 'hidden'}`} />
      <ButtonPromotion onClick={() => setIsOpen(prev => !prev)} />
    </>
  );
}

export { Testes };
