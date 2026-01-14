import ReviewHeader from "./ReviewHeader";
import StarRating from "./StarRating";
export default function Review({
  guest,
  guest_avatar,
  guest_id,
  date,
  comment,
  rating,
  user,
  review_id,
  trackDeletedReviews,
}) {
  return (
    <div className="review-container">
      <ReviewHeader
        guest={guest}
        guest_avatar={guest_avatar}
        guest_id={guest_id}
        date={date}
        user={user}
        review_id={review_id}
        trackDeletedReviews={trackDeletedReviews}
      />

      <div className="review-comment">
        <span className="quote-marks-opening">“</span>
        {comment}
        <span className="quote-marks-closing">”</span>
      </div>

      <div className="review-rating">{<StarRating rating={rating} />}</div>
    </div>
  );
}
