import { useState } from "react";
import { Menu, ShoppingBag, User } from "lucide-react";
import { Header } from "../components/Header";
import { AboutBaner } from "../components/baner/aboutBaner";
import founder from "../../public/about/image.png";
import comment from "../../public/comment.png";
import { Quote } from "lucide-react";
import { Footer } from "../components/footer/footer";
import { Sidebar } from "../components/sidebar/sidebar";

const About = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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

      <AboutBaner />
      
      <div className="p-10 flex items-center justify-between max-sm:flex-col gap-10">
        
        <div className="bg-imageAbout w-[800px] h-[800px] max-lg:w-[500px]
        max-lg:h-[500px] max-md:w-72 max-md:h-72 bg-cover flex justify-center items-end p-10 bg-center">
          <button className=" max-md:py-1 max-md:px-6 rounded-xl text-sky-700 px-10 py-2 bg-white hover:text-white hover:bg-sky-700 transition duration-500">BUY NOW</button>
        </div>

        <div className="bg-imageAbout2 w-[800px] h-[800px] max-lg:w-[500px]
        max-lg:h-[500px] max-md:w-72 max-md:h-72 bg-cover flex justify-center items-end p-10 bg-center" >
          <button className=" max-md:py-1 max-md:px-6 rounded-xl text-sky-700 px-10 py-2 bg-white hover:text-white hover:bg-sky-700 transition duration-500">BUY NOW</button>
        </div>

      </div>

      <div className="flex justify-center items-center flex-col gap-16 p-10 bg-neutral-200">
        <h1 className="text-3xl font-medium">The Founders</h1>
        <div className="max-md:grid max-md:grid-cols-2 max-md:gap-4 flex justify-center items-center flex-wrap gap-10">
          <div className="flex justify-center items-center flex-col gap-3">
            <img src={founder} alt="ERICK KRAMER" className="w-80 " />
            <p>ERICK KRAMER</p>
          </div>
          <div className="flex justify-center items-center flex-col gap-3">
            <img src={founder} alt="ERICK KRAMER" className="w-80 " />
            <p>ERICK KRAMER</p>
          </div>
          <div className="flex justify-center items-center flex-col gap-3">
            <img src={founder} alt="ERICK KRAMER" className="w-80 " />
            <p>ERICK KRAMER</p>
          </div>
          <div className="flex justify-center items-center flex-col gap-3">
            <img src={founder} alt="ERICK KRAMER" className="w-80 " />
            <p>ERICK KRAMER</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 flex-col p-10">

        <h1 className="text-3xl font-medium">Testimonials</h1>

        <div className="flex p-16 items-center justify-around gap-32 max-xl:flex-col max-lg:gap-8 commentAnimationLeft">
          <img src={ comment } alt="Comentario" className="w-64 "/>
          <div className="flex flex-col gap-2">
            <Quote/>
            <p className="w-[700px] font-medium text-lg max-md:w-[500px] max-sm:w-[300px]">Once we ordered some accessories items and we got the products delivered in our doorstep, the customer support was super helpful and they answered all my queries.</p>
            <small className="text-base">Stacy</small>
          </div>
        </div>

        <hr className="w-full bg-neutral-300 h-[1px]"/>

        <div className="flex p-16 items-center justify-around gap-32 max-xl:flex-col max-lg:gap-8 commentAnimationRight">
          <img src={ comment } alt="Comentario" className="w-64 "/>
          <div className="flex flex-col gap-2">
            <Quote/>
            <p className="w-[700px] font-medium text-lg max-md:w-[500px] max-sm:w-[300px]">Once we ordered some accessories items and we got the products delivered in our doorstep, the customer support was super helpful and they answered all my queries.</p>
            <small className="text-base">Stacy</small>
          </div>
        </div>

        <hr className="w-full bg-neutral-300 h-[1px]"/>

        <div className="flex p-16 items-center justify-around gap-32 max-xl:flex-col max-lg:gap-8 commentAnimationLeft">
          <img src={ comment } alt="Comentario" className="w-64 "/>
          <div className="flex flex-col gap-2">
            <Quote/>
            <p className="w-[700px] font-medium text-lg max-md:w-[500px] max-sm:w-[300px]">Once we ordered some accessories items and we got the products delivered in our doorstep, the customer support was super helpful and they answered all my queries.</p>
            <small className="text-base">Stacy</small>
          </div>
        </div>

        <hr className="w-full bg-neutral-300 h-[1px]"/>

        <div className="flex p-16 items-center justify-around gap-32 max-xl:flex-col max-lg:gap-8 commentAnimationRight">
          <img src={ comment } alt="Comentario" className="w-64 "/>
          <div className="flex flex-col gap-2">
            <Quote/>
            <p className="w-[700px] font-medium text-lg max-md:w-[500px] max-sm:w-[300px]">Once we ordered some accessories items and we got the products delivered in our doorstep, the customer support was super helpful and they answered all my queries.</p>
            <small className="text-base">Stacy</small>
          </div>
        </div>

        <hr className="w-full bg-neutral-300 h-[1px]"/>

        <div className="flex p-16 items-center justify-around gap-32 max-xl:flex-col max-lg:gap-8 commentAnimationLeft">
          <img src={ comment } alt="Comentario" className="w-64 "/>
          <div className="flex flex-col gap-2">
            <Quote/>
            <p className="w-[700px] font-medium text-lg max-md:w-[500px] max-sm:w-[300px]">Once we ordered some accessories items and we got the products delivered in our doorstep, the customer support was super helpful and they answered all my queries.</p>
            <small className="text-base">Stacy</small>
          </div>
        </div>

      </div>

      <Footer/>
    </main>
  )
}

export { About };