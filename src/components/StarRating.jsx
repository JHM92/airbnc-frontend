export default function StarRating({ rating }) {
  let stars = "";
  for (let i = 0; i < rating; i++) {
    stars += "*";
  }
  return <div className="star-rating">{stars}</div>;
}
