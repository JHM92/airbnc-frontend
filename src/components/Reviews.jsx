import Review from "./Review";
import Modal from "./Modal";
import { useState } from "react";
import ReviewStars from "./ReviewStars";

export default function Reviews({ reviews }) {
  const displayedReviews = [];

  const [writeReviewModalIsOpen, setWriteReviewModalIsOpen] = useState(false);
  const [writeReviewRating, setWriteReviewRating] = useState(0);

  const stars = document.getElementsByClassName("star");

  const formattedReviews = reviews.reviews.map((review) => {
    const dateString = new Date(review.created_at).toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
    review["dateString"] = dateString;
    return review;
  });

  const selectStarRating = (rating) => {
    setWriteReviewRating(rating);

    const oneStar = document.getElementById("one-star");
    const twoStar = document.getElementById("two-star");
    const threeStar = document.getElementById("three-star");
    const fourStar = document.getElementById("four-star");
    const fiveStar = document.getElementById("five-star");

    switch (rating) {
      case 1:
        oneStar.className = "star-filled";
        twoStar.className = "star";
        threeStar.className = "star";
        fourStar.className = "star";
        fiveStar.className = "star";
        break;
      case 2:
        oneStar.className = "star-filled";
        twoStar.className = "star-filled";
        threeStar.className = "star";
        fourStar.className = "star";
        fiveStar.className = "star";
        break;
      case 3:
        oneStar.className = "star-filled";
        twoStar.className = "star-filled";
        threeStar.className = "star-filled";
        fourStar.className = "star";
        fiveStar.className = "star";
        break;
      case 4:
        oneStar.className = "star-filled";
        twoStar.className = "star-filled";
        threeStar.className = "star-filled";
        fourStar.className = "star-filled";
        fiveStar.className = "star";
        break;
      case 5:
        oneStar.className = "star-filled";
        twoStar.className = "star-filled";
        threeStar.className = "star-filled";
        fourStar.className = "star-filled";
        fiveStar.className = "star-filled";
        break;
    }
  };

  if (formattedReviews.length > 1) {
    displayedReviews.push(formattedReviews[0]);
    displayedReviews.push(formattedReviews[1]);
  } else if (formattedReviews.length === 1) {
    displayedReviews.push(formattedReviews[0]);
  }

  return (
    <>
      <div className="view-single-property-reviews-container">
        {displayedReviews.length > 0 ? (
          displayedReviews.map((review) => {
            return (
              <Review
                guest={review.guest}
                guest_avatar={review.guest_avatar}
                date={review.dateString}
                comment={review.comment}
                rating={review.rating}
              />
            );
          })
        ) : (
          <div className="no-reviews">Be the first to review this property!</div>
        )}
      </div>
      <div className="add-review-container">
        Add a Review?
        <button
          className="review-button"
          onClick={(e) => {
            setWriteReviewModalIsOpen(true);
            e.stopPropagation();
          }}
        >
          <img className="write-review-icon" src="../src/assets/write-review.png" alt="" />
        </button>
        <Modal
          open={writeReviewModalIsOpen}
          onClose={() => {
            setWriteReviewModalIsOpen(false);
          }}
        >
          <div className="write-review-form">
            <ReviewStars selectStarRating={selectStarRating} test={() => console.log("!!!")} />
            {writeReviewRating}
            <br />
            <br />

            <textarea id="write-review-text" name="write-review-text" rows="8" cols="50"></textarea>
          </div>
        </Modal>
      </div>
    </>
  );
}
