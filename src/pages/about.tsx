import { useState } from "react";
import { Menu, ShoppingBag, User } from "lucide-react";
import { Header } from "../components/Header";
import { AboutBaner } from "../components/baner/aboutBaner";
import HMJawad from "../../public/founders/HM Jawad.png";
import FurqanAbid from "../../public/founders/Furqan Abid.png";
import AbrarKhan from "../../public/founders/Abrar Khan.png";
import AbdullahAh from "../../public/founders/Abdullah Ah.png";
import James from "../../public/Testimonials/James.png";
import Tiffany from "../../public/Testimonials/Tiffany.png";
import Stacy from "../../public/Testimonials/Stacy.png";
import { Quote } from "lucide-react";
import { Footer } from "../components/footer/footer";
import { Sidebar } from "../components/sidebar/sidebar";
import { useShopContext } from "../context/useContext";

const About = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { item } = useShopContext();

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

      <AboutBaner />
      
      <div className="p-10 flex items-center justify-between max-sm:flex-col gap-10 w-full">
        
        <div className="bg-imageAbout w-[800px] h-[800px] max-lg:w-[500px]
        max-lg:h-[500px] max-md:w-72 max-md:h-72 bg-cover flex justify-center items-end p-10 bg-center">
          <button className=" max-md:py-1 max-md:px-6 rounded-xl text-sky-700 px-10 py-2 bg-white hover:text-white hover:bg-sky-700 transition duration-500">BUY NOW</button>
        </div>

        <div className="bg-imageAbout2 w-[800px] h-[800px] max-lg:w-[500px]
        max-lg:h-[500px] max-md:w-72 max-md:h-72 bg-cover flex justify-center items-end p-10 bg-center" >
          <button className=" max-md:py-1 max-md:px-6 rounded-xl text-sky-700 px-10 py-2 bg-white hover:text-white hover:bg-sky-700 transition duration-500">BUY NOW</button>
        </div>

      </div>

      <div className="flex justify-center items-center flex-col gap-16 p-10 bg-neutral-200 w-full">
        <h1 className="text-3xl font-medium">The Founders</h1>
        <div className="max-md:grid max-md:grid-cols-2 max-md:gap-4 flex justify-center items-center flex-wrap gap-10">
          <div className="flex items-center flex-col gap-3">
            <img src={ HMJawad } alt="ERICK KRAMER" className="w-80 " />
            <span className=" w-full px-4 text-lg font-medium">
              <p>HM Jawad</p>
            </span>
          </div>
          <div className="flex justify-center items-center flex-col gap-3">
            <img src={FurqanAbid} alt="ERICK KRAMER" className="w-80 " />
            <span className="w-full px-4 text-lg font-medium">
              <p>Furqan Abid</p>
            </span>
          </div>
          <div className="flex justify-center items-center flex-col gap-3">
            <img src={AbdullahAh} alt="ERICK KRAMER" className="w-80 " />
            <span className="w-full px-4 text-lg font-medium">
              <p>Abdullah Ah</p>
            </span>
          </div>
          <div className="flex justify-center items-center flex-col gap-3">
            <img src={AbrarKhan} alt="ERICK KRAMER" className="w-80 " />
            <span className="w-full px-4 text-lg font-medium">
              <p>Abrar Khan</p>
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 flex-col p-10 w-full">

        <h1 className="text-3xl font-medium">Testimonials</h1>

        <div className="flex p-16 items-center justify-around gap-32 max-xl:flex-col max-lg:gap-8 commentAnimationLeft">
          <img src={ Stacy } alt="Comentario" className="w-64 "/>
          <div className="flex flex-col gap-2">
            <Quote/>
            <p className="w-[700px] font-medium text-lg max-md:w-[500px] max-sm:w-[300px] text-neutral-500">Once we ordered some accessories items and we got the products delivered in our doorstep, the customer support was super helpful and they answered all my queries.</p>
            <small className="text-base">Stacy</small>
          </div>
        </div>

        <hr className="w-full bg-neutral-300 h-[1px]"/>

        <div className="flex p-16 items-center justify-around gap-32 max-xl:flex-col max-lg:gap-8 commentAnimationRight">
          <img src={ Tiffany } alt="Comentario" className="w-64 "/>
          <div className="flex flex-col gap-2">
            <Quote/>
            <p className="w-[700px] font-medium text-lg max-md:w-[500px] max-sm:w-[300px] text-neutral-500">I ordered 5 shirts from them and received them in no time. The customer support was awesome!</p>
            <small className="text-base">Tiffany</small>
          </div>
        </div>

        <hr className="w-full bg-neutral-300 h-[1px]"/>

        <div className="flex p-16 items-center justify-around gap-32 max-xl:flex-col max-lg:gap-8 commentAnimationLeft">
          <img src={ James } alt="Comentario" className="w-64 "/>
          <div className="flex flex-col gap-2">
            <Quote/>
            <p className="w-[700px] font-medium text-lg max-md:w-[500px] max-sm:w-[300px] text-neutral-500">I got a wrong shirt so I contacted them and they happily offered me a refund. I will surely shop from them again.</p>
            <small className="text-base">James</small>
          </div>
        </div>

      </div>

      <Footer/>
    </main>
  )
}

export { About };