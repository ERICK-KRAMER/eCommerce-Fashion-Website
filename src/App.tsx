import { ShopProvider } from "./context/useContext";
import { Routes } from "./routes/routes";

export default function App() {
  return(
    <>
      <ShopProvider>
        <Routes/>
      </ShopProvider>
    </>
  )
}

