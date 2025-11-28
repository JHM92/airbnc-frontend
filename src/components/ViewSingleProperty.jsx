import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { getPropertyById, getReviewsById, getPropertiesByHostId } from "../../api";
import PropertyDetails from "./PropertyDetails";
import ReviewHeader from "./ReviewHeader";
import Review from "./Review";
import PropertyGrid from "./PropertyGrid";

export default function ViewSingleProperty() {
  const [property, setProperty] = useState();

  const [reviews, setReviews] = useState();

  const [otherProperties, setOtherProperties] = useState();
  const [isLoading, setIsLoading] = useState(true);
  let dateString = "";

  const { property_id } = useParams();

  const fetchPropertyById = async () => {
    const retrievedProperty = await getPropertyById(property_id);
    setProperty(retrievedProperty);

    return retrievedProperty.host_id;
  };

  const fetchReviewsById = async () => {
    const retrievedReviews = await getReviewsById(property_id);
    setReviews(retrievedReviews);
  };

  const fetchHostsOtherProperties = async (host_id) => {
    const { properties: retrievedProperties } = await getPropertiesByHostId(host_id);
    const filteredProperties = retrievedProperties.filter((property) => {
      return property.property_id !== Number(property_id);
    });
    setOtherProperties(filteredProperties);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    Promise.all([fetchReviewsById(), fetchPropertyById()]).then(([_, host_id]) => {
      fetchHostsOtherProperties(host_id);
    });
  }, [property_id]);

  if (reviews?.average_rating !== "No Ratings") {
    dateString = new Date(reviews?.reviews[0].created_at).toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  }

  return (
    <div className="view-single-property-page-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <PropertyDetails property={property} reviews={reviews} isLoading={isLoading} />

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
            <div>Be the first to review this property!</div>
          )}

          <hr />
          <br />
          <br />

          <div className="view-host-other-properties">
            <div className="other-properties-heading">Other Properties From Host</div>
            <PropertyGrid properties={otherProperties} />
          </div>
        </>
      )}
    </div>
  );
}
