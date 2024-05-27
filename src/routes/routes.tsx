import { BrowserRouter, Routes as Switch, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/home";
import { Testes } from "../pages/testes";
import { About } from "../pages/about";
import { ContactUs } from "../pages/contactUs";

const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="teste" element={<Testes />} />
      </Switch>
    </BrowserRouter>
  )
}

 export const privateRoute = ({children}: { children : React.ReactNode }) => {
  const isAuthorization = true;

  return isAuthorization ? children : <Navigate to={'/'}/>
}


export { Routes };