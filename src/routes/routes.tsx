import { BrowserRouter, Routes as Switch, Route, Navigate } from "react-router-dom"
import { Home } from "../pages/home"

const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home/>}/>
      </Switch>
    </BrowserRouter>
  )
}

 export const privateRoute = ({children}: { children : React.ReactNode }) => {
  const isAuthorization = true;

  return isAuthorization ? children : <Navigate to={'/'}/>
}


export { Routes };