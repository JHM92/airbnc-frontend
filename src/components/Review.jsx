import ReviewHeader from "./ReviewHeader";
import StarRating from "./StarRating";
export default function Review({ guest, guest_avatar, date, comment, rating }) {
  return (
    <div className="review-container">
      <ReviewHeader guest={guest} guest_avatar={guest_avatar} date={date} />

      <div className="review-comment">
        <span className="quote-marks-opening">“</span>
        {comment}
        <span className="quote-marks-closing">”</span>
      </div>

      <div className="review-rating">{<StarRating rating={rating} />}</div>
    </div>
  );
}
