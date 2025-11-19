import React from "react";
import { useState } from "react";
import PropertyCard from "./PropertyCard";

export default function PropertyGrid({ properties }) {
  return (
    <div className="properties-grid">
      {typeof properties !== "undefined" &&
        properties.map((property) => {
          return (
            <PropertyCard
              name={property.property_name}
              location={property.location}
              price={property.price_per_night}
              image={property.image_url}
            />
          );
        })}
    </div>
  );
}
