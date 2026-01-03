import Review from "./Review";

export default function Reviews({ reviews }) {
  const displayedReviews = [];

  const formattedReviews = reviews.reviews.map((review) => {
    const dateString = new Date(review.created_at).toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
    review["dateString"] = dateString;
    return review;
  });

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
        <button className="review-button">
          <img className="write-review-icon" src="../src/assets/write-review.png" alt="" />
        </button>
      </div>
    </>
  );
}
