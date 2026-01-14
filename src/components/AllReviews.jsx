import MoreReviews from "./MoreReviews";

export default function AllReviews({ reviews, user, trackDeletedReviews }) {
  return (
    <div className="all-reviews-container">
      {reviews.map((review) => {
        return (
          <MoreReviews
            guest={review.guest}
            guest_avatar={review.guest_avatar}
            guest_id={review.guest_id}
            date={review.dateString}
            comment={review.comment}
            rating={review.rating}
            user={user}
            review_id={review.review_id}
            trackDeletedReviews={trackDeletedReviews}
          />
        );
      })}
    </div>
  );
}
