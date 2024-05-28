import { useState } from "react";
import { Menu, ShoppingBag, User } from "lucide-react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/sidebar/sidebar";
import { ContactUsBaner } from "../components/baner/contactUsBaner";
import { Footer } from "../components/footer/footer";

const ContactUs = () => {
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
            className="cursor-pointer "
            onClick={(e) => {
              e.stopPropagation()
              setIsOpen(prev => !prev)
            }} />
        </Header.NavIcon>
      </Header.Root>
      
      <ContactUsBaner />
      
      <section className="p-4">
        <h1 className="text-3xl font-semibold">We would love to hear from you.</h1>
        
        <p className="text-neutral-400">If you have any query or any type of suggestion, you can contact us here. We would love to hear from you.</p>
        
        <div className="flex justify-center items-start max-xl:flex-col gap-4">
          
          <form className="p-4 w-[80%] max-lg:w-full">

            <div className="flex gap-4 mb-4">

              <label htmlFor="name" className="flex flex-col">
                Name
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  className="border h-10 px-2 outline-none w-[350px] max-md:w-[200px]"
                />
              </label>

              <label htmlFor="email" className="flex flex-col">
                Email
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="border h-10 px-2 outline-none w-[350px] max-md:w-[200px]"
                />
              </label>
            </div>

            <div>
              <label htmlFor="message" className="flex flex-col">
                Message
                <textarea
                  name="message"
                  id="message"
                  cols={30}
                  rows={10}
                  placeholder="Enter your message"
                  className="border w-full outline-none px-2 resize-none"
                />
              </label>
            </div>

            <button
              type="submit"
              className="px-10 py-4 bg-sky-600 text-white hover:bg-sky-700 transition duration-500 shadow-lg my-2"
            >Submit
            </button>

          </form>
        
          <div className="max-xl:flex max-xl:gap-4 max-xl:justify-center w-full p-4">
            <span>
              <h1 className="text-3xl">Visit Us</h1>
              <p className="text-neutral-400 p-2">UET Lahore, Punjab,</p>
              <p className="text-neutral-400 p-2">PakistanPhone: +923039898987</p>
            </span>

            <span>
              <h1 className="text-3xl">Get In Touch</h1>
              <p className="text-neutral-400 p-2">You can get in touch with us on this provided email.</p>
              <p className="text-neutral-400 p-2">Email: hmjawad087@gmail.com</p>
            </span>
          </div>

        </div>
        

      </section>
      
      <Footer/>
    </main>
  )
}

export { ContactUs };