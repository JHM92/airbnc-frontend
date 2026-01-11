import ReviewStars from "./ReviewStars";
import { useState } from "react";

export default function ReviewForm({
  selectStarRating,
  stars,
  reviewMessage,
  updateReviewMessage,
}) {
  const handleReviewMessageChange = (e) => {
    updateReviewMessage(e.target.value);
  };
  return (
    <div className="write-review-form">
      <div className="rating-prompt">How would you rate your visit?</div>
      <ReviewStars selectStarRating={selectStarRating} stars={stars} />
      <div>Write a review? (optional)</div>
      <div className="review-textarea">
        <textarea
          id="write-review-text"
          name="write-review-text"
          value={reviewMessage}
          rows="8"
          cols="59"
          onChange={handleReviewMessageChange}
        ></textarea>
      </div>
    </div>
  );
}
