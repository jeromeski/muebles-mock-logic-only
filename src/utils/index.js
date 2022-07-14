export const getAvgRatings = (ratings) => {
  // const ratingsArr = ratings.map((r) => r.rating);
  const averageRating = ratings.reduce((total, r) => {
    return r.rating + total / ratings.length;
  }, 0);
  return averageRating;
};
