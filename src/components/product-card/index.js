import { getAvgRatings } from "utils";
import { useNavigate } from "react-router-dom";
import "./product-card-style.css";

const ProductCard = ({ title, price, ratings, salePrice, image, slug }) => {
  const navigate = useNavigate();
  return (
    <div className="card-container">
      <div className="card-media">
        <img className="card-thumb" src={image} alt={title} />
      </div>
      <div className="card-content">
        <pre>{title.substring(0, 25)}</pre>
        {salePrice !== 0 && (
          <pre>
            ${salePrice}&nbsp;
            <del>${price}</del>
          </pre>
        )}
        {!salePrice && <pre>${price}</pre>}
        <pre>
          rating: {Math.floor(getAvgRatings(ratings))} stars ({ratings.length})
        </pre>
        <div className="card-action">
          <button>add to cart</button>
          <button
            className="ml-1"
            type="button"
            onClick={() => navigate(`/${slug}`)}
          >
            view details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
