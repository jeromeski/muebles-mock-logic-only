import "./product-details-style.css";
import { getAvgRatings } from "utils";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductDetails = (props) => {
  const [avgRating, setAvgRating] = useState(0);
  const [qty, setQty] = useState(0);
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

  useEffect(() => {
    if (ratings?.length) {
      setAvgRating(getAvgRatings(ratings));
    }
  }, [ratings?.length]);

  useEffect(() => {}, [props.id]);
  return (
    <div className="pdp-details">
      <div className="pdp-media">
        <img src={image} alt={title} />
      </div>
      <div className="pdp-content clearfix">
        <div className="pdp-product-title-wrap">
          <h1 className="title">{title}</h1>
        </div>
        <div className="pdp-product-review-summary">
          <p className="ratings">
            {ratings && Math.round(avgRating) >= 5 ? 5 : Math.round(avgRating)}
            &nbsp;stars&nbsp;({ratings && ratings.length}) ratings
          </p>
        </div>
        <div className="pdp-price">
          <div>
            <h6>Price</h6>
          </div>
          {salePrice ? (
            <div>
              <p>${salePrice}.00</p>
            </div>
          ) : (
            <div>
              <p>${price}.00</p>
            </div>
          )}
        </div>
        {/* <div className="pdp-description-short">
          <div>
            <h6>Description</h6>
          </div>
          <div>
            <p>{description}</p>
          </div>
        </div> */}

        <div className="pdp-counter">
          <div>
            <h6>Quantity</h6>
          </div>
          <div>
            <button className="button">+</button>
            <input className="pdp-count" type="text" readOnly value={qty} />
            <button className="button">-</button>
          </div>
        </div>
        <div className="pdp-action-two">
          <button className="button">Buy Now</button>
          <button className="button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

/* 
<div className="product-details__content">
        <h2 className="title">{title}</h2>
        <p className="ratings">
          {ratings && Math.round(avgRating) >= 5 ? 5 : Math.round(avgRating)}
          &nbsp;stars&nbsp;({ratings && ratings.length}) ratings
        </p>
        <p className="product-details__price">${price}.00</p>
        <p>{unit}</p> *
        <p>
          <b>Description:</b> {description}
        </p>
      </div>
      <div className="product-details__action-container">
        <div className="product-details__action-one">
          <span>Quantity : </span> &nbsp;
          <button className="button">+</button>
          <input
            className="product-details__count"
            type="text"
            readonly
            value={qty}
          />
          <button className="button">-</button>
        </div>
        <div className="product-details__action-two">
          <button className="button">Buy Now</button>
          <button className="button">Add to Cart</button>
        </div>
      </div>

*/
