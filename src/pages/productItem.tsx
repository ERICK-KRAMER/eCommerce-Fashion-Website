import { Menu, ShoppingBag, User } from "lucide-react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/sidebar/sidebar";
import { useState } from "react";
import { Footer } from "../components/footer/footer";
import { useShopContext } from "../context/useContext";

const ProductItem = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  const { getItem, item, cartItem } = useShopContext();

  return (
    <main onClick={() => setIsOpen(false)}>
      
      <Sidebar setIsOpen={setIsOpen} className={`${isOpen ? 'sidebarAnimationOpen' : 'hidden'}`} />

      <Header.Root>
        <Header.NavItem>
          <Header.item item={"Home"} to="/"/>
          <Header.item item={"About"} to="/about"/>
          <Header.item item={"Contact Us"} to="/contact"/>
        </Header.NavItem>
        <Header.NavIcon>
          <User className="cursor-pointer" />
          <span className=" relative">
            {item ? (<span className="bg-sky-600 text-white rounded-full w-5 h-5 absolute -right-2 -top-2 flex justify-center items-center">{ item }</span>) : null}
            <ShoppingBag className="cursor-pointer"/>
          </span>
          <Menu
            className="cursor-pointer"
            onClick={(e) => {
              e.stopPropagation()
              setIsOpen(prev => !prev)
            }} />
        </Header.NavIcon>
      </Header.Root>

      <section>
        <div className="flex gap-40 p-10">
          <div className="bg-red-300 h-[500px] w-[400px] border">
            <img src={ getItem?.image } alt={ getItem?.name } className="w-full h-full bg-cover"/>
          </div>
          <div className="flex flex-col p-4 gap-3">
            <h1 className="text-3xl font-bold italic">{ getItem?.name }</h1>
            
            <span className="text-sky-700 text-lg"> U$: { getItem?.price }.00</span>
            
            <span className="w-[600px] font-medium"><p>A classic t-shirt never goes out of style. This is our most premium collection of shirt. This plain white shirt is made up of pure cotton and has a premium finish.</p></span>

            <select name="size-item" className="w-[300px] outline-none border p-2">
              <option value="s">small</option>
              <option value="m">Medium</option>
              <option value="l">Large</option>
              <option value="xl">Extra Large</option>
            </select>
            <button className="px-10 py-3 bg-sky-600 text-white" onClick={ ()=> cartItem() }>Add to Cart</button>
          </div>
        </div>
        
      </section>


      <Footer/>

    </main>
  )
}

export { ProductItem };