import { useEffect, useState } from "react";
import RatingStars from "../RatingStars/MyRatingStars";
import { useLocation } from "react-router-dom";

const ProductRatingsSection = ({ product }) => {
  const [rating, setRating] = useState(product?.rating || 0);
  const [newComment, setNewComment] = useState("");
  const location = useLocation();
  const productFromLocation = location.state?.product;
  const defaultImageUrl =
    "https://images.pexels.com/photos/14470153/pexels-photo-14470153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  useEffect(() => {
    setRating(productFromLocation?.rating || 0);
  }, [productFromLocation]);

  const handleSubmitComment = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el comentario al servidor
    // Luego, puedes limpiar el estado newComment
    setNewComment("");
  };

  return (
    <div>
      <div>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={productFromLocation?.images?.[0] || defaultImageUrl}
          alt={productFromLocation?.title}
          onError={(e) => {
            e.currentTarget.src = defaultImageUrl;
          }}
        />
        <h2>{product?.name || "Nombre del producto"}</h2>
        <p>{product?.description || "Descripción del producto"}</p>
        <RatingStars rating={rating} setRating={setRating} />
      </div>
      <div>
        <h3>Calificaciones</h3>
        <div>
          <span>Excelente: {productFromLocation?.ratings?.excellent || 0}</span>
          <span>Muy bueno: {productFromLocation?.ratings?.veryGood || 0}</span>
          <span>Bueno: {productFromLocation?.ratings?.good || 0}</span>
          <span>Malo: {productFromLocation?.ratings?.bad || 0}</span>
          <span>Muy malo: {productFromLocation?.ratings?.veryBad || 0}</span>
        </div>
      </div>
      <div>
        <h3>Comentarios</h3>
        {productFromLocation?.comments?.map((comment) => (
          <div key={comment.id}>
            <p>{comment.text}</p>
            <span>{comment.user}</span>
          </div>
        ))}
        <form onSubmit={handleSubmitComment}>
          <textarea
            placeholder="Escribe tu comentario..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default ProductRatingsSection;
