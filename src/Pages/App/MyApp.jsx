import { BrowserRouter, Routes } from "react-router-dom";
import { ShoppingCartProvider } from "../../Context/MyContext";
import Navbar from "../../Components/Navbar/MyNavbar";
import { AppRoutes } from "../../Routers/AppRoutes";
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu";
import "./App.css";

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;
