import React, { useState } from "react";
import { useSearchParams } from "react-router";
import CheckboxOption from "./CheckboxOption";
import { getProperties } from "../../api";

export default function FilterBar({ updateFilter }) {
  const [propertyTypeInput, setPropertyTypeInput] = useState({
    house: false,
    apartment: false,
    studio: false,
  });

  const [sortByInput, setSortByInput] = useState("popularity-descending");
  const [minPriceInput, setMinPriceInput] = useState();
  const [maxPriceInput, setMaxPriceInput] = useState();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFilterSubmit = () => {
    const filters = [];

    let filter = "";

    // Property Types filter
    for (const propertyType in propertyTypeInput) {
      if (propertyTypeInput[propertyType]) {
        filters.push([
          "property_type",
          propertyType[0].toUpperCase() + propertyType.slice(1).toLocaleLowerCase(),
        ]);
      }
    }

    // Sort & Order filter
    switch (sortByInput) {
      case "popularity-descending":
        filters.push(["sort", "popularity"]);
        filters.push(["order", "descending"]);
        break;

      case "popularity-ascending":
        filters.push(["sort", "popularity"]);
        filters.push(["order", "ascending"]);
        break;

      case "price-descending":
        filters.push(["sort", "cost_per_night"]);
        filters.push(["order", "descending"]);
        break;

      case "price-ascending":
        filters.push(["sort", "cost_per_night"]);
        filters.push(["order", "ascending"]);
        break;
    }

    // Max & Min Price filters
    if (minPriceInput) {
      filters.push(["minprice", minPriceInput]);
    }

    if (maxPriceInput) {
      filters.push(["maxprice", maxPriceInput]);
    }

    if (filters.length > 0) {
      const filterStrings = filters.map((filter) => {
        return filter.join("=");
      });

      filter = "?" + filterStrings.join("&");
      setSearchParams(filter);
    }

    updateFilter(filter);
  };

  const handlePropertyTypeChange = (e) => {
    if (e.target.id === "property-type-house") {
      setPropertyTypeInput({
        house: !propertyTypeInput.house,
        apartment: propertyTypeInput.apartment,
        studio: propertyTypeInput.studio,
      });
    } else if (e.target.id === "property-type-apartment") {
      setPropertyTypeInput({
        house: propertyTypeInput.house,
        apartment: !propertyTypeInput.apartment,
        studio: propertyTypeInput.studio,
      });
    } else if (e.target.id === "property-type-studio") {
      setPropertyTypeInput({
        house: propertyTypeInput.house,
        apartment: propertyTypeInput.apartment,
        studio: !propertyTypeInput.studio,
      });
    }
  };

  const handleSortByChange = (e) => {
    setSortByInput(e.target.value);
  };

  const handleMinPriceChange = (e) => {
    setMinPriceInput(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPriceInput(e.target.value);
  };

  return (
    <form className="filter-bar">
      <div className="property-types-wrapper">
        <div>Property Types</div>
        <div className="property-type-options">
          <CheckboxOption
            prompt="property-type"
            option="house"
            handlePropertyTypeChange={handlePropertyTypeChange}
          />
          <CheckboxOption
            prompt="property-type"
            option="apartment"
            handlePropertyTypeChange={handlePropertyTypeChange}
          />
          <CheckboxOption
            prompt="property-type"
            option="studio"
            handlePropertyTypeChange={handlePropertyTypeChange}
          />
        </div>
      </div>

      <div className="sort-by-wrapper">
        <label htmlFor="sort-by">Sort By</label>
        <select name="sort-by" id="sort-by" onChange={handleSortByChange}>
          <option value="popularity-descending">Popularity: High to Low</option>
          <option value="popularity-ascending">Popularity: Low to High</option>
          <option value="price-descending">Price: High to Low</option>
          <option value="price-ascending">Price: Low to High</option>
        </select>
      </div>

      <div className="price-range-wrapper">
        <div className="filter-min-price">
          <label htmlFor="min-price">Minimum Price: £</label>
          <input
            className="price-input"
            type="text"
            id="min-price"
            name="min-price"
            onChange={handleMinPriceChange}
          />
        </div>
        <div className="filter-max-price">
          <label htmlFor="max-price">Maximum Price: £</label>
          <input
            className="price-input"
            type="text"
            id="max-price"
            name="max-price"
            onChange={handleMaxPriceChange}
          />
        </div>
      </div>

      <div className="filter-search-wrapper">
        <button className="filter-bar-button" type="button" onClick={handleFilterSubmit}>
          <img src="src/assets/search-logo-blue.png" alt="" />
        </button>
      </div>
    </form>
  );
}
