import React from "react";
import FilterBar from "./FilterBar";
import PropertyGrid from "./PropertyGrid";
import axios from "axios";
import { useState, useEffect } from "react";
import { getProperties } from "../../api";

export default function ViewProperties() {
  const [properties, setProperties] = useState();

  const fetchProperties = async () => {
    const properties = await getProperties();
    setProperties(properties);
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <div className="view-properties-container">
      <FilterBar />
      <PropertyGrid properties={properties} />
    </div>
  );
}
