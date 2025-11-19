import React from "react";
import PropertyCard from "./PropertyCard";
const propertyObjects = [
  {
    name: "Cosy Loft in the Heart of the City",
    location: "Manchester, UK",
    price: "130",
    image: "",
  },
];
export default function PropertyGrid() {
  return (
    <div className="properties-grid">
      {propertyObjects.map((property) => {
        return (
          <PropertyCard
            name={property.name}
            location={property.location}
            price={property.price}
            image={property.image}
          />
        );
      })}
    </div>
  );
}
