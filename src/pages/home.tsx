import { useState } from "react";
import { Menu, ShoppingBag, Truck, User, Fingerprint, RotateCcw, Headset } from "lucide-react";
import { Header } from "../components/Header";
import { Card } from "../components/Card-Item";
import { Information } from "../components/information";
import { Promo } from "../components/promo";
import { Footer } from "../components/footer/footer";
import { Baner } from "../components/baner/baner";
import { Sidebar } from "../components/sidebar/sidebar";
import { SectionComponent } from "../components/home/sectionComponent";
import { Products } from "../api/products";
import { Link } from "react-router-dom";

const Home = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const firstEightProducts = Products.slice(0, 8); // pega os primeiro 8 produtos do array; ps: array com 12 produtos;

  const lastFourProducts = Products.slice(8, 12); // pega os ultimos 4 produtos do array; ps: array com 12 produtos;

  return(
    <main onClick={() => setIsOpen(false)}>
      
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
            className="cursor-pointer"
            onClick={(e) => {
              e.stopPropagation()
              setIsOpen(prev => !prev)
            }} />
        </Header.NavIcon>
      </Header.Root>


      <Baner />
      
      <SectionComponent
        title="Discover NEW Arrivals"
        description="Recently added shirts!"
      >

        {firstEightProducts.map(item => (
          <Link to={'/product'}>
            <Card.Root key={item.id}>
              <Card.Image src={item.image} alt={item.name} />
              <Card.Data name={item.name} value={item.price} />
              {/* <Card.Button/> */}
            </Card.Root>
          </Link>
        ))}
          
      </SectionComponent>

        <Information.Root>
          <Information.Item description="Enjoy free shipping on all orders above $100">
            <Information.Icon icon={Truck} name="Free Shipping"/>
          </Information.Item>
          <Information.Item description="Our support team is there to help you for queries">
            <Information.Icon icon={Headset} name="SUPPORT 24/7"/>
          </Information.Item>
          <Information.Item description="Simply return it within 30 days for an exchange.">
            <Information.Icon icon={RotateCcw} name="30 DAYS RETURN"/>
          </Information.Item>
          <Information.Item description="Our payments are secured with 256 bit encryption">
            <Information.Icon icon={Fingerprint} name="100% PAYMENT SECURE"/>
          </Information.Item>
        </Information.Root>
      
      <section className="p-16 flex max-sm:flex-col gap-4">

        <Promo.Root style={{ flex: '1 1 60%' }}
          className="translateLeft"  
          title="Peace of mind" 
          description="A one-stop platform for all your fashion needs, hassle-free. Buy with a peace of mind.">
          <Promo.Button/>
        </Promo.Root>

        <Promo.Root style={{ flex: '1 1 40%' }}
          className="translateRight"  
          title="Buy 2 Get 1 Free" 
          description="End of season sale. Buy any 2 items of your choice and get 1 free.">
          <Promo.Button/>
        </Promo.Root>

      </section>

      <SectionComponent
        title="Top Sellers"
        description="Browse our top-selling products"
      >
        {lastFourProducts.map(item => (
          <Link to={'/product'}>
            <Card.Root key={item.id}>
              <Card.Image src={item.image} alt={item.name} />
              <Card.Data name={item.name} value={item.price} />
              {/* <Card.Button/> */}
            </Card.Root>
          </Link>
        ))}

      </SectionComponent>
        
        <div className=" flex justify-center items-center mb-10">
          <button
            className="px-10 p-4 bg-sky-700 text-white font-medium outline-none transition duration-500 hover:bg-sky-800">
            SHOP NOW
          </button>
        </div>

      <Footer/>

    </main>
  )
}

export { Home };