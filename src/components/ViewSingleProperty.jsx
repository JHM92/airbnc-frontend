import { useParams } from "react-router";
import DetailCard from "./DetailCard";
import HostedBy from "./HostedBy";

export default function ViewSingleProperty() {
  const { property_id } = useParams();

  return (
    <>
      <div className="view-single-property-page-container">
        <div className="view-single-property-grid">
          <img
            src="https://images.unsplash.com/photo-1727706572437-4fcda0cbd66f?q=80&w=3200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="view-single-property-main-image"
          />
          <div className="gap"></div>

          <div className="view-single-property-header">
            <div className="view-single-property-name-location-wrapper">
              <h1 className="view-single-property-name">Modern Apartment in City Center</h1>
              <span className="view-single-property-location">London, UK</span>
            </div>
            <HostedBy />
          </div>

          <div className="view-single-property-description">
            <hr />A sleek apartment with all modern amenities.
          </div>

          <div className="view-single-property-detail-card-container">
            <div className="detail-card-row">
              <DetailCard label="Per Night" emphasis="£120" labelAlignment="bottom" />
              <img
                className="image-card"
                src="https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <DetailCard label="Favourited@@@Times" emphasis="3" labelAlignment="split" />
            </div>
            <div className="detail-card-row">
              <img
                className="image-card"
                src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <DetailCard label="Rating" emphasis="4.50/5" />
              <img
                className="image-card"
                src="https://images.unsplash.com/photo-1613545325268-9265e1609167?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
        </div>
        <br />
        <br />
        <hr />

        <div className="view-single-property-reviews">Reviews</div>
        <div className="view-single-property-other-properties">Other Properties from Host</div>
      </div>
    </>
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
