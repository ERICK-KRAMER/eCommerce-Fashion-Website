import { BrowserRouter, Routes as Switch, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/home";
import { Testes } from "../pages/testes";
import { About } from "../pages/about";
import { ContactUs } from "../pages/contactUs";
import { ProductItem } from "../pages/productItem";

const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="teste" element={<Testes />} />
        <Route path="/product" element={<ProductItem/>} />
      </Switch>
    </BrowserRouter>
  )
}

 export const privateRoute = ({children}: { children : React.ReactNode }) => {
  const isAuthorization = true;

  return isAuthorization ? children : <Navigate to={'/'}/>
}


export { Routes };