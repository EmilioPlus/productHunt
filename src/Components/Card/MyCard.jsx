import { useContext, useState } from "react";
import {
  CheckIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context/MyContext";
import RatingStars from "./RatingStars/MyRatingStars";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Card = (data) => {
  const context = useContext(ShoppingCartContext);
  const { user } = context;
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();
  const [showAddToCartButton, setShowAddToCartButton] = useState(false);
  const defaultImageUrl =
    "https://images.pexels.com/photos/14470153/pexels-photo-14470153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);
  };

  const addProductsToCart = (event, productData) => {
    event.stopPropagation();
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, productData]);
    context.openCheckoutSideMenu();
    context.closeProductDetail();
  };

  const handleRatingClick = (product) => {
    navigate(`/product/${product.id}`);
  };

  const handleLike = () => {
    setLiked(!liked);
    // Aquí puedes enviar una solicitud al servidor para actualizar el recuento de "Me gusta"
  };

  const renderIcon = (id) => {
    if (!user) {
      return null; // No renderizar el botón si no hay usuario autenticado
    }
    const isInCart =
      context.cartProducts.filter((product) => product.id === id).length > 0;
    if (isInCart) {
      return (
        <div className="absolute top-2 right-2 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1">
          <CheckIcon className="h-6 w-6 text-white" />
        </div>
      );
    } else {
      return (
        <div
          className="absolute top-2 right-2 cursor-pointer flex justify-center items-center bg-white rounded-full w-8 h-8 border-2 border-black"
          onClick={(e) => {
            e.stopPropagation();
            handleLike();
          }}
        >
          <HeartIcon
            className={`h-5 w-5 ${liked ? "text-red-500" : "text-black"}`}
          />
        </div>
      );
    }
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg relative"
      onClick={() => showProduct(data.data)}
      onMouseEnter={() => setShowAddToCartButton(true)}
      onMouseLeave={() => setShowAddToCartButton(false)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.data.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.data.images || defaultImageUrl}
          alt={data.data.title}
          onError={(e) => {
            e.currentTarget.src = defaultImageUrl;
          }}
        />
        {renderIcon(data.data.id)}
        {showAddToCartButton && user && (
          <button
            className="absolute bottom-2 left-2 flex items-center bg-black hover:bg-black text-white font-bold py-1 px-2 rounded"
            onClick={(event) => addProductsToCart(event, data.data)}
          >
            <ShoppingCartIcon className="h-4 w-4 mr-1" />
            Agregar
          </button>
        )}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.data.title}</span>
        <span className="text-lg font-medium">${data.data.price}</span>
      </p>
      <Link
        to={{
          pathname: `/product/${data.data.id}`,
          state: { product: data.data },
        }}
      >
        <RatingStars rating={data.data.rating} setRating={() => {}} />
      </Link>
    </div>
  );
};

export default Card;
