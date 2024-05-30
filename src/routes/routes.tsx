import { BrowserRouter, Routes as Switch, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/home";
import { Testes } from "../pages/testes";
import { About } from "../pages/about";
import { ContactUs } from "../pages/contactUs";
import { ProductItem } from "../pages/productItem";
import { useShopContext } from "../context/useContext";
import { Cart } from "../pages/cart";

const Routes = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/teste" element={<Testes />} />
        <Route path="/cart" element={ <Cart/> } />
        <Route path={"/product/"} element={
          <PrivateRoute>
            <ProductItem />
          </PrivateRoute>
        } />
      </Switch>
    </BrowserRouter>
  )
}

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { getItem } = useShopContext();
  
  const isAuthorization = getItem ?  true : false;

  return isAuthorization ? children : <Navigate to={'/'}/>
}

export { Routes };
