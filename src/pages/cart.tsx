import { FormEvent, useEffect, useState } from "react";
import { Sidebar } from "../components/sidebar/sidebar";
import { Header } from "../components/Header";
import { Menu, ShoppingBag, User } from "lucide-react";
import { useShopContext } from "../context/useContext";
import { Footer } from "../components/footer/footer";
import { useNavigate } from "react-router-dom";
import { Table } from "../components/cart";

const Cart = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { item, cart } = useShopContext();
  const navigate = useNavigate();

  const [price, setPrice] = useState<number>(0);

  const handleSidebarToggle = (e:FormEvent) => {
    e.stopPropagation();
    setIsOpen(prev => !prev);
  };

  useEffect(() => {
    let total = 0;
    
    cart.forEach(item => {
      total += Number(item.price);
    })
    
    setPrice(total);
  }, [cart]);

  return (
    <main onClick={() => setIsOpen(false)} className="relative">
      <Sidebar setIsOpen={setIsOpen} className={`${isOpen ? 'sidebarAnimationOpen' : 'hidden'}`} />

      <Header.Root>
        <Header.NavItem>
          <Header.item item={"Home"} to="/" />
          <Header.item item={"About"} to="/about" />
          <Header.item item={"Contact Us"} to="/contact" />
        </Header.NavItem>
        <Header.NavIcon>
          <User className="cursor-pointer" />
          <span className="relative" onClick={() => navigate('/cart')}>
            {item ? (
              <span className="bg-sky-600 text-white rounded-full w-5 h-5 absolute -right-2 -top-2 flex justify-center items-center">
                {item}
              </span>
            ) : null}
            <ShoppingBag className="cursor-pointer" />
          </span>
          <Menu className="cursor-pointer" onClick={handleSidebarToggle} />
        </Header.NavIcon>
      </Header.Root>

      <section className="px-2 min-h-[525px]">
        
        <Table.Root>
          {cart.length > 0 && cart.map((cartItem, index) => (
            <Table.Item
              img={cartItem.image}
              key={index}
              name={cartItem.name}
              price={`$${cartItem.price.toFixed(2)}`}
              quantity={1}
              total={`$${(cartItem.price * 1).toFixed(2)}`}
            />
          ))}
        </Table.Root>

        {cart.length > 0 && (
          <div className="py-4 px-2 w-[500px] flex flex-col gap-1 mt-10">
            <h1 className="font-bold text-4xl">Cart Totals</h1>
            <span className="flex justify-between border-b py-2">
              <p className="text-neutral-500">Subtotal</p>
              <p className="font-semibold">{`$${price.toFixed(2)}`}</p>
            </span>
            <span className="flex justify-between border-b py-2">
              <p className="text-neutral-500">Shipping Free</p>
              <p className="font-semibold">FREE!!!</p>
            </span>
            <span className="flex justify-between border-b py-2">
              <p className="text-neutral-500">Total</p>
              <p className="font-semibold">{`$${price.toFixed(2)}`}</p>
            </span>
            <button className="px-8 py-4 text-white bg-yellow-600 hover:bg-yellow-700 transition duration-300">Proceed to Checkout</button>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
};

export { Cart };
