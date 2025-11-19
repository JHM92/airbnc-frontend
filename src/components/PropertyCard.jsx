import React from "react";

export default function PropertyCard({ name, location, price, image }) {
  const altText = "Image showing property " + name;

  return (
    <div className="property-card">
      <img className="property-card-image" src={image} alt={altText} />

      <div className="property-card-name">{name}</div>
      <div className="property-card-details-wrapper">
        <div className="property-card-location">{location}</div>
        <div className="property-card-price">£{price} per night</div>
      </div>
    </div>
  );
}
