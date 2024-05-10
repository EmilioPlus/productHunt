import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../Pages/Home";
import { MyAccount } from "../Pages/Account";
import { MyOrder } from "../Pages/Order";
import { MyOrders } from "../Pages/Orders";
import { SignIn } from "../Pages/SignIn";
import { NotFound } from "../Pages/NotFound";
import { MyRecord } from "../Pages/Record";
import { useContext } from "react";
import { ShoppingCartContext } from "../Context";
import ProductRatingsSection from "../Components/Card/ProductRatingsSection/MyProductRatingsSection";

export const AppRoutes = () => {
  const { isAuthenticated } = useContext(ShoppingCartContext);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/clothes" element={<Home />} />
      <Route path="/electronics" element={<Home />} />
      <Route path="/furnitures" element={<Home />} />
      <Route path="/toys" element={<Home />} />
      <Route path="/others" element={<Home />} />
      <Route path="/my-account" element={<MyAccount />} />
      <Route path="/my-order" element={<MyOrder />} />
      <Route path="/my-orders" element={<MyOrders />} />
      <Route path="/my-orders/last" element={<MyOrder />} />
      <Route path="/my-orders/:id" element={<MyOrder />} />
      <Route path="/Check-in" element={<MyRecord />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/product/:id" element={<ProductRatingsSection />} />
      <Route
        path="/my-account"
        element={
          isAuthenticated ? (
            <MyAccount />
          ) : (
            <Navigate to="/sign-in" replace={true} />
          )
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
