import { StarIcon as SolidStarIcon } from "@heroicons/react/24/solid";
import { StarIcon as OutlineStarIcon } from "@heroicons/react/24/outline";

const RatingStars = ({ rating, setRating }) => {
  const handleClick = (newRating) => {
    setRating(newRating); // Ejecuta la función setRating pasada como prop
  };

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className="cursor-pointer"
          onClick={() => handleClick(star)}
        >
          {star <= rating ? (
            <SolidStarIcon className="h-5 w-5 text-yellow-500" />
          ) : (
            <OutlineStarIcon className="h-5 w-5 text-gray-300" />
          )}
        </span>
      ))}
    </div>
  );
};

export default RatingStars;
