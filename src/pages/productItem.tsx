import { Menu, ShoppingBag, User } from "lucide-react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/sidebar/sidebar";
import { useState } from "react";
import { Footer } from "../components/footer/footer";

const ProductItem = () => {

   const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <main onClick={() => setIsOpen(prev => !prev)}>
      
      <Sidebar setIsOpen={setIsOpen} className={`${isOpen ? 'sidebarAnimationOpen' : 'hidden'}`} />

      <Header.Root>
        <Header.NavItem>
          <Header.item item={"Home"} to="/"/>
          <Header.item item={"About"} to="/about"/>
          <Header.item item={"Contact Us"} to="/contact"/>
        </Header.NavItem>
        <Header.NavIcon>
          <User className="cursor-pointer"/>
          <ShoppingBag className="cursor-pointer"/>
          <Menu
            className="cursor-pointer "
            onClick={(e) => {
              e.stopPropagation()
              setIsOpen(prev => !prev)
            }} />
        </Header.NavIcon>
      </Header.Root>


      <section>

        
      </section>


      <Footer/>

    </main>
  )
}

export { ProductItem };