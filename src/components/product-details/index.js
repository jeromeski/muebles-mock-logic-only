import "./product-details-style.css";
import { getAvgRatings } from "utils";

const ProductDetails = (props) => {
  const {
    id,
    title,
    slug,
    unit,
    price,
    salePrice,
    description,
    image,
    gallery,
    categories,
    ratings
  } = props;
  return (
    <div className="product-details">
      <div className="product-details__media">
        <img src={image} alt={title} />
      </div>
      <div className="product-details__content">
        <h2 className="title">{title}</h2>
        <p>${price}.00</p>
        <p>{unit}</p>
        <p>{description}</p>
        <p>
          Rating:{" "}
          {ratings && Math.round(getAvgRatings(ratings)) >= 5
            ? 5
            : Math.round(getAvgRatings(ratings))}
          &nbsp;stars&nbsp;({ratings.length})
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
