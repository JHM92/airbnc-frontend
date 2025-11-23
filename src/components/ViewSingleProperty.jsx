import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { getPropertyById, getReviewsById } from "../../api";
import PropertyDetails from "./PropertyDetails";

export default function ViewSingleProperty() {
  const [property, setProperty] = useState();
  const [reviews, setReviews] = useState();
  const [isLoading, setIsLoading] = useState(true);

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

      <div className="view-single-property-reviews">Reviews</div>
      <div className="view-single-property-other-properties">Other Properties from Host</div>
    </div>
  );
}

// <div className="view-single-property-detail-card-container">
//               <div className="detail-card">
//                 <div className="view-single-property-detail-card-emphasis">£120</div>
//                 <div className="view-single-property-card-text">Per Night</div>
//               </div>
//               <div className="detail-card">
//                 <div className="view-single-property-card-text">Rating</div>
//                 <div className="view-single-property-detail-card-emphasis">4.50 / 5</div>
//               </div>
//               <div className="detail-card">
//                 <div className="view-single-property-card-text">Favourited</div>
//                 <div className="view-single-property-detail-card-emphasis">3</div>
//                 <div className="view-single-property-card-text">Times</div>
//               </div>
//             </div>
