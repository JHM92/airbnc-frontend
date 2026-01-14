import ReviewHeader from "./ReviewHeader";
import StarRating from "./StarRating";
import deleteIcon from "../assets/delete.png";

export default function MoreReviews({
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
    <div className="more-reviews-container">
      <div className="more-reviews-header">
        <ReviewHeader
          guest={guest}
          guest_avatar={guest_avatar}
          guest_id={guest_id}
          date={date}
          user={user}
          review_id={review_id}
          trackDeletedReviews={trackDeletedReviews}
        />
      </div>

      <div className="review-comment">
        {comment}
        <br />
        {review_id}
      </div>

      <div className="more-reviews-rating">{<StarRating rating={rating} />}</div>
      <div className="review-divider">
        <hr className="review-divider-hr" />
      </div>
    </div>
  );
}
