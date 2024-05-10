import { NavLink } from "react-router-dom";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { useContext, useState, useEffect } from "react";
import { ShoppingCartContext } from "../../Context/MyContext";

const Navbar = () => {
  const context = useContext(ShoppingCartContext);
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setAuthenticatedUser(context.user);
    setIsAuthenticated(!!context.user);
  }, [context.user]);

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white shadow-lg">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink
            exact="True"
            to="/"
            className="text-gray-800 hover:text-gray-900"
          >
            Shopping
          </NavLink>
        </li>
        <li>
          <NavLink to="/clothes" className="text-gray-600 hover:text-gray-800">
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            className="text-gray-600 hover:text-gray-800"
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furnitures"
            className="text-gray-600 hover:text-gray-800"
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink to="/toys" className="text-gray-600 hover:text-gray-800">
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink to="/others" className="text-gray-600 hover:text-gray-800">
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        {authenticatedUser ? (
          <>
            <li className="text-gray-600">
              {authenticatedUser.displayName || authenticatedUser.email}
            </li>
            <li>
              <NavLink
                to="/my-orders"
                className="text-gray-600 hover:text-gray-800"
              >
                My Orders
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-account"
                className="text-gray-600 hover:text-gray-800"
              >
                My Account
              </NavLink>
            </li>
            <li>
              <button
                className="text-gray-600 hover:text-gray-800"
                onClick={() => context.signOutUser()}
              >
                Cerrar sesión
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink
                to="/my-orders"
                className="text-gray-600 hover:text-gray-800"
              >
                My Orders
              </NavLink>
            </li>
            {!isAuthenticated && (
              <>
                <li>
                  <NavLink
                    to="/Check-in"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Check in
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/sign-in"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Sign In
                  </NavLink>
                </li>
              </>
            )}
          </>
        )}
        <li className="flex items-center">
          <ShoppingBagIcon className="h-6 w-6 text-black"></ShoppingBagIcon>
          <div className="text-gray-600">{context.cartProducts.length}</div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
