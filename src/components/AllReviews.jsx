import MoreReviews from "./MoreReviews";

export default function AllReviews({ reviews }) {
  return (
    <div className="all-reviews-container">
      {reviews.map((review) => {
        return (
          <MoreReviews
            guest={review.guest}
            guest_avatar={review.guest_avatar}
            date={review.dateString}
            comment={review.comment}
            rating={review.rating}
          />
        );
      })}
    </div>
  );
}
