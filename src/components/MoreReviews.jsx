import ReviewHeader from "./ReviewHeader";
import StarRating from "./StarRating";

export default function MoreReviews({ guest, guest_avatar, date, comment, rating }) {
  return (
    <div className="more-reviews-container">
      <ReviewHeader guest={guest} guest_avatar={guest_avatar} date={date} />

      <div className="review-comment">{comment}</div>

      <div className="more-reviews-rating">{<StarRating rating={rating} />}</div>
      <div className="review-divider">
        <hr className="review-divider-hr" />
      </div>
    </div>
  );
}
