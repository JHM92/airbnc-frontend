import React from "react";
import FilterBar from "./FilterBar";
import PropertyGrid from "./PropertyGrid";
import axios from "axios";
import { useState, useEffect } from "react";
import { getProperties } from "../../api";

export default function ViewProperties() {
  const [properties, setProperties] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [hasErrored, setHasErrored] = useState(null);

  const fetchProperties = async () => {
    try {
      const properties = await getProperties();
      setProperties(properties);
      setIsLoading(false);
    } catch (err) {
      setHasErrored(err);
      console.log({ errorType: err });
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <div className="view-properties-container">
      <FilterBar />
      {isLoading ? <p>Loading...</p> : <PropertyGrid properties={properties} />}
      {hasErrored ? <p>Error: {hasErrored.message}</p> : <></>}
    </div>
  );
}
