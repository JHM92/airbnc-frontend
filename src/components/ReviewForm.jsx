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
  onClose,
}) {
  const [reviewIsPosted, setReviewIsPosted] = useState(false);

  const handleReviewMessageChange = (e) => {
    updateReviewMessage(e.target.value);
  };

  const handleSubmitReview = async () => {
    const submitButton = document.getElementById("submit-review-button");
    const loader = document.getElementById("post-review-loader");
    let ratingWarning = document.getElementById("rating-warning");
    let reviewMessageWarning = document.getElementById("review-message-warning");

    if (ratingWarning) {
      ratingWarning.style = "display: none";
    }

    if (reviewMessageWarning) {
      reviewMessageWarning.style = "display: none";
    }

    submitButton.className = "submit-review-button disabled";
    if (stars.rating !== null && reviewMessage !== "") {
      loader.className = "loader";
      const res = await postPropertyReview(user.user_id, stars.rating, reviewMessage, property_id);

      if (res.status === 201) {
        const successMessage = document.getElementById("successful-post-message");
        successMessage.style = "display: block;";
        loader.className = "loader hidden";
        setReviewIsPosted(true);
      }
    }

    if (stars.rating === null) {
      ratingWarning = document.getElementById("rating-warning");
      ratingWarning.style = "display: block;";
      submitButton.className = "submit-review-button";
    }

    if (reviewMessage === "") {
      reviewMessageWarning = document.getElementById("review-message-warning");
      reviewMessageWarning.style = "display: block;";
      submitButton.className = "submit-review-button";
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
      <div className="loader-container">
        <div id="post-review-loader" className="loader hidden"></div>
      </div>

      {reviewIsPosted ? (
        <button className="close-review-button" onClick={onClose}>
          Close
        </button>
      ) : (
        <button
          id="submit-review-button"
          className="submit-review-button"
          type="button"
          onClick={handleSubmitReview}
        >
          Submit
        </button>
      )}
    </div>
  );
}
