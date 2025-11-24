import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { getPropertyById, getReviewsById } from "../../api";
import PropertyDetails from "./PropertyDetails";
import ReviewHeader from "./ReviewHeader";
import Review from "./Review";

export default function ViewSingleProperty() {
  const [property, setProperty] = useState();
  const [reviews, setReviews] = useState();
  const [isLoading, setIsLoading] = useState(true);
  let dateString = "";

  const { property_id } = useParams();
  const fetchPropertyById = async () => {
    const retrievedProperty = await getPropertyById(property_id);
    setProperty(retrievedProperty);
  };

  const fetchReviewsById = async () => {
    const retrievedReviews = await getReviewsById(property_id);
    setReviews(retrievedReviews);
  };

  useEffect(() => {
    fetchPropertyById();
    fetchReviewsById();
    setIsLoading(false);
  }, []);

  if (reviews?.average_rating !== "No Ratings") {
    dateString = new Date(reviews?.reviews[0].created_at).toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  }

  console.log(dateString);

  return (
    <div className="view-single-property-page-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <PropertyDetails property={property} reviews={reviews} isLoading={isLoading} />
      )}
      <br />
      <br />
      <hr />

      {reviews?.reviews.length > 0 ? (
        <div className="view-single-property-reviews-container">
          <div className="review-container">
            <ReviewHeader
              guest={reviews?.reviews[0].guest}
              guest_avatar={reviews?.reviews[0].guest_avatar}
              date={dateString}
            />
            <div className="review-comment">
              <span className="quote-marks-opening">“</span>
              {reviews?.reviews[0].comment}
              <span className="quote-marks-closing">”</span>
            </div>

            <div className="review-rating">*****</div>
          </div>

          <Review
            guest={reviews?.reviews[0].guest}
            guest_avatar={reviews?.reviews[0].guest_avatar}
            date={dateString}
            comment={reviews?.reviews[0].comment}
            rating={reviews?.reviews[0].rating}
          />
        </div>
      ) : (
        <>Be the first to review this property!</>
      )}
      <div className="view-single-property-other-properties">Other Properties from Host</div>
    </div>
  );
}
