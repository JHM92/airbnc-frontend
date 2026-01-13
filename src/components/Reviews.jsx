import Review from "./Review";
import Modal from "./Modal";
import { useState } from "react";
import ReviewForm from "./ReviewForm";
import AllReviews from "./AllReviews";

export default function Reviews({ reviews, user, property_id }) {
  const displayedReviews = [];

  const [writeReviewModalIsOpen, setWriteReviewModalIsOpen] = useState(false);
  const [viewMoreReviewsModalIsOpen, setViewMoreReviewsModalIsOpen] = useState(false);

  const [stars, setStars] = useState({
    one: "star",
    two: "star",
    three: "star",
    four: "star",
    five: "star",
    rating: null,
  });

  const [reviewMessage, setReviewMessage] = useState("");

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
    const oneStar = document.getElementById("one-star");
    const twoStar = document.getElementById("two-star");
    const threeStar = document.getElementById("three-star");
    const fourStar = document.getElementById("four-star");
    const fiveStar = document.getElementById("five-star");

    switch (rating) {
      case 1:
        setStars({
          one: "star-filled",
          two: "star",
          three: "star",
          four: "star",
          five: "star",
          rating: 1,
        });
        oneStar.className = "star-filled";
        twoStar.className = "star";
        threeStar.className = "star";
        fourStar.className = "star";
        fiveStar.className = "star";
        break;
      case 2:
        setStars({
          one: "star-filled",
          two: "star-filled",
          three: "star",
          four: "star",
          five: "star",
          rating: 2,
        });
        oneStar.className = "star-filled";
        twoStar.className = "star-filled";
        threeStar.className = "star";
        fourStar.className = "star";
        fiveStar.className = "star";
        break;
      case 3:
        setStars({
          one: "star-filled",
          two: "star-filled",
          three: "star-filled",
          four: "star",
          five: "star",
          rating: 3,
        });
        oneStar.className = "star-filled";
        twoStar.className = "star-filled";
        threeStar.className = "star-filled";
        fourStar.className = "star";
        fiveStar.className = "star";
        break;
      case 4:
        setStars({
          one: "star-filled",
          two: "star-filled",
          three: "star-filled",
          four: "star-filled",
          five: "star",
          rating: 4,
        });
        oneStar.className = "star-filled";
        twoStar.className = "star-filled";
        threeStar.className = "star-filled";
        fourStar.className = "star-filled";
        fiveStar.className = "star";
        break;
      case 5:
        setStars({
          one: "star-filled",
          two: "star-filled",
          three: "star-filled",
          four: "star-filled",
          five: "star-filled",
          rating: 5,
        });
        oneStar.className = "star-filled";
        twoStar.className = "star-filled";
        threeStar.className = "star-filled";
        fourStar.className = "star-filled";
        fiveStar.className = "star-filled";
        break;
    }
  };

  const updateReviewMessage = (message) => {
    setReviewMessage(message);
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
        {displayedReviews.length === 0 ? (
          <div className="no-reviews">Be the first to review this property!</div>
        ) : (
          displayedReviews.map((review) => {
            return (
              <Review
                guest={review.guest}
                guest_avatar={review.guest_avatar}
                date={review.dateString}
                comment={review.comment}
                rating={review.rating}
                user={user}
              />
            );
          })
        )}
      </div>

      {formattedReviews.length > 2 ? (
        <div className="view-more-reviews-container">
          <button
            className="view-more-reviews"
            onClick={(e) => {
              setViewMoreReviewsModalIsOpen(true);
              e.stopPropagation();
            }}
          >
            More reviews
          </button>
          <Modal
            open={viewMoreReviewsModalIsOpen}
            onClose={() => {
              setViewMoreReviewsModalIsOpen(false);
            }}
          >
            <AllReviews reviews={formattedReviews} />
          </Modal>
        </div>
      ) : (
        <></>
      )}

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
          <ReviewForm
            selectStarRating={selectStarRating}
            stars={stars}
            reviewMessage={reviewMessage}
            updateReviewMessage={updateReviewMessage}
            user={user}
            property_id={property_id}
            onClose={() => {
              setWriteReviewModalIsOpen(false);
            }}
          />
        </Modal>
      </div>
    </>
  );
}
