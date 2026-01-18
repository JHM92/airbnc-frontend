import React from "react";
import { useState } from "react";
import PropertyCard from "./PropertyCard";
import { Link } from "react-router";

export default function PropertyGrid({ properties }) {
  console.log(properties);
  return (
    <div className="properties-grid">
      {typeof properties !== "undefined" &&
        properties.map((property) => {
          const propertyPath = "/properties/" + property.property_id;
          return (
            <Link to={propertyPath}>
              <PropertyCard
                name={property.property_name}
                location={property.location}
                price={property.price_per_night}
                image={property.image_url}
              />
            </Link>
          );
        })}
    </div>
  );
}
