import { Menu, ShoppingBag, Truck, User, Fingerprint, RotateCcw, Headset } from "lucide-react";
import { Header } from "../components/Header";
import { Card } from "../components/Card-Item";
import { Information } from "../components/information";
import { Promo } from "../components/promo";
import { Footer } from "../components/footer/footer";
import { Baner } from "../components/baner/baner";


const Home = () => {
  return(
    <>

      <Header.Root>
        <Header.NavItem>
          <Header.item item={"Home"}/>
          <Header.item item={"About"}/>
          <Header.item item={"Contact Us"}/>
        </Header.NavItem>
        <Header.NavIcon>
          <User className="cursor-pointer"/>
          <ShoppingBag className="cursor-pointer"/>
          <Menu className="cursor-pointer"/>
        </Header.NavIcon>
      </Header.Root>

      <Baner/>

      <section className="p-10">
        
        <div className="flex justify-center items-center flex-col gap-3">
          <h1 className="text-5xl max-sm:text-3xl max-md:text-4xl font-medium">Discover NEW Arrivals</h1>
          <small className="text-neutral-400 text-base">Recently added shirts!</small>
        </div>

        <div className="grid grid-cols-4 my-10 place-items-center max-sm:grid-cols-2 max-md:grid-cols-3 max-lg:grid-cols-4 gap-10">
          <Card.Root>
            <Card.Image />
            <Card.Data/>
          </Card.Root>
          
          <Card.Root>
            <Card.Image />
            <Card.Data/>
          </Card.Root>
          
          <Card.Root>
            <Card.Image />
            <Card.Data/>
          </Card.Root>
          
          <Card.Root>
            <Card.Image />
            <Card.Data/>
          </Card.Root>
          
          <Card.Root>
            <Card.Image />
            <Card.Data/>
          </Card.Root>
          
          <Card.Root>
            <Card.Image />
            <Card.Data/>
          </Card.Root>
          
          <Card.Root>
            <Card.Image />
            <Card.Data/>
          </Card.Root>
          
          <Card.Root>
            <Card.Image />
            <Card.Data/>
          </Card.Root>

        </div>

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

      </section>
      
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

      <section className="p-10">
        
        <div className="flex justify-center items-center flex-col gap-3">
          <h1 className="text-5xl max-sm:text-3xl max-md:text-4xl font-medium">Top Sellers</h1>
          <small className="text-neutral-400 text-base">Browse our top-selling products</small>
        </div>

        <div className="grid grid-cols-4 my-10 place-items-center max-sm:grid-cols-2 max-md:grid-cols-3 max-lg:grid-cols-4 gap-10">
          
          <Card.Root>
            <Card.Image />
            <Card.Data/>
          </Card.Root>
          
          <Card.Root>
            <Card.Image />
            <Card.Data/>
          </Card.Root>
          
          <Card.Root>
            <Card.Image />
            <Card.Data/>
          </Card.Root>
          
          <Card.Root>
            <Card.Image />
            <Card.Data/>
          </Card.Root>

        </div>

        <div className=" flex justify-center items-center">
          <button
            className="px-10 p-4 bg-sky-700 text-white font-medium outline-none transition duration-500 hover:bg-sky-800">
            SHOP NOW
          </button>
        </div>

      </section>

      <Footer/>

    </>
  )
}

export { Home };