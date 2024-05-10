import { useContext, useState } from "react";
import { Layout } from "../../Components/Layout";
import { NavLink, useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../../Context/MyContext";

export const SignIn = () => {
  const { signIn } = useContext(ShoppingCartContext);
  const { signInWithGoogle, signInWithFacebook } =
    useContext(ShoppingCartContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError({ email: "", password: "" });

    if (!email) {
      setError((prevError) => ({
        ...prevError,
        email: "Please enter the User",
      }));
    }

    if (!password) {
      setError((prevError) => ({
        ...prevError,
        password: "Please enter the Password",
      }));
    }

    if (email && password) {
      const success = await signIn(email, password);
      if (success) {
        // Redireccionar al home después de un inicio de sesión exitoso
        navigate("/");
      } else {
        // Mostrar alerta de usuario y contraseña incorrectos solo cuando las credenciales sean incorrectas
        alert("Usuario y/o contraseña incorrectos");
      }
    }
  };

  return (
    <Layout>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            User
          </label>
          {error.email && (
            <p className="text-red-500 text-xs italic mb-2">{error.email}</p>
          )}
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="User"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          {error.password && (
            <p className="text-red-500 text-xs italic mb-2">{error.password}</p>
          )}
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="**************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleLogin}
          >
            Log in
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            ¿Forgot your password?
          </a>
        </div>
        <NavLink
          className="inline-block align -baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          to="/Check-in"
        >
          ¿Don't have an account? Register here
        </NavLink>
        <NavLink
          className="inline-block align -baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          onClick={signInWithGoogle}
        >
          Sign in with Google
        </NavLink>

        <NavLink
          className="inline-block align -baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          onClick={signInWithFacebook}
        >
          Sign in with Facebook
        </NavLink>
      </div>
    </Layout>
  );
};
