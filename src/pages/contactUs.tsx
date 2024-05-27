import { Menu, ShoppingBag, User } from "lucide-react";
import { Header } from "../components/Header";

const ContactUs = () => {
  return (
    <>
      <Header.Root>
        <Header.NavItem>
          <Header.item item={"Home"} to="/"/>
          <Header.item item={"About"} to="/about"/>
          <Header.item item={"Contact Us"} to="/contact"/>
        </Header.NavItem>
        <Header.NavIcon>
          <User className="cursor-pointer"/>
          <ShoppingBag className="cursor-pointer"/>
          <Menu className="cursor-pointer"/>
        </Header.NavIcon>
      </Header.Root>
      
     <h1 className="text-5xl font-bold">Contact us</h1>
    </>
  )
}

export { ContactUs };