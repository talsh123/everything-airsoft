// Calculate the product's average rating given a product document
function calcAvgRating(product) {
  let sumRatings = 0;
  const sumReducer = (previous, currentValue) => previous + currentValue;
  avg = product.ratings.reduce(sumReducer);
  return sumRatings / product.rating.length;
}

module.exports.calcAvgRating = calcAvgRating;
