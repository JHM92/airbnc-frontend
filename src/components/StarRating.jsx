import starLogo from "../assets/star.png";
export default function StarRating({ rating }) {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push("*");
  }

  return (
    <div className="star-rating">
      {stars.map(() => {
        return <img className="star-filled" height="50" width="50" src={starLogo} alt="" />;
      })}
    </div>
  );
}
