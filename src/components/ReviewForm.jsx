import ReviewStars from "./ReviewStars";
import { useState } from "react";
import { postPropertyReview } from "../../api";

export default function ReviewForm({
  selectStarRating,
  stars,
  reviewMessage,
  updateReviewMessage,
  property_id,
  user,
}) {
  const handleReviewMessageChange = (e) => {
    updateReviewMessage(e.target.value);
  };

  const handleSubmitReview = async () => {
    if (stars.rating !== null && reviewMessage !== "") {
      const res = await postPropertyReview(user.user_id, stars.rating, reviewMessage, property_id);
      console.log(res);
      if (res.status === 201) {
        console.log("!!!");
        const successMessage = document.getElementById("successful-post-message");
        successMessage.style = "display: block;";
      }
    }

    if (stars.rating === null) {
      const ratingWarning = document.getElementById("rating-warning");
      ratingWarning.style = "display: block;";
    }

    if (reviewMessage === "") {
      const reviewMessageWarning = document.getElementById("review-message-warning");
      reviewMessageWarning.style = "display: block;";
    }
  };
  return (
    <div className="write-review-form">
      <div className="rating-prompt">How would you rate your visit?</div>
      <ReviewStars selectStarRating={selectStarRating} stars={stars} />

      <div>Write a review</div>
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

      <div id="rating-warning">Rating must be at least 1 star</div>
      <div id="review-message-warning">Review must not be empty</div>
      <div id="successful-post-message">Review posted successfully!</div>

      <button className="submit-review-button" type="button" onClick={handleSubmitReview}>
        Submit
      </button>
    </div>
  );
}
