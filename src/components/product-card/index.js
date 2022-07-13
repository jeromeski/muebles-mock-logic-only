const ProductCard = ({ title, price, ratings, salePrice }) => {
  const getAvgRatings = () => {
    const ratingsArr = ratings.map((r) => r.rating);
    const averageRating = ratingsArr.reduce((total, r) => {
      return r + total / ratings.length;
    });
    return averageRating;
  };
  return (
    <div className="bg-card">
      <pre>{title}</pre>
      {salePrice !== 0 && (
        <pre>
          ${salePrice}&nbsp;
          <del>${price}</del>
        </pre>
      )}
      {!salePrice && <pre>${price}</pre>}
      <pre>rating: {Math.floor(getAvgRatings())} stars</pre>
      <button>add to cart</button>
      <button className="ml-1">view details</button>
    </div>
  );
};

export default ProductCard;
