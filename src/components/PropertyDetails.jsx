import HostedBy from "./HostedBy";
import PropertyDetailsCardGrid from "./PropertyDetailsCardGrid";

export default function PropertyDetails({ property, reviews }) {
  return (
    <div className="view-single-property-grid">
      <img src={property?.images[0]} className="view-single-property-main-image" />
      <div className="view-single-property-header">
        <div className="view-single-property-name-location-wrapper">
          <h1 className="view-single-property-name">{property?.property_name}</h1>
          <span className="view-single-property-location">{property?.location}</span>
        </div>
        <HostedBy
          hostName={property?.host}
          hostAvatar={property?.host_avatar}
          host_id={property?.host_id}
        />
      </div>
      <div className="view-single-property-description">
        <hr /> {property?.description}
      </div>
      <PropertyDetailsCardGrid
        price={property?.price_per_night}
        rating={reviews?.average_rating}
        favouriteCount={property?.favourite_count}
        images={property?.images}
      />
    </div>
  );
}
