import React, { useState } from "react";
import { useSearchParams } from "react-router";
import CheckboxOption from "./CheckboxOption";
import { getProperties } from "../../api";
import searchIcon from "../assets/search-logo.png";
import FloatingLabelInput from "./FloatingLabelInput";

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
    <>
      <hr className="filter-bar-divider" />
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
          Price Range
          <div className="min-max-price-inputs">
            <FloatingLabelInput
              label="Minimum Price (£)"
              width="130"
              onChange={handleMinPriceChange}
              field={minPriceInput}
            />
            <FloatingLabelInput
              label="Maximum Price (£)"
              width="130"
              onChange={handleMaxPriceChange}
              field={maxPriceInput}
            />
          </div>
        </div>

        <div className="filter-search-wrapper">
          <button className="filter-bar-button" type="button" onClick={handleFilterSubmit}>
            <img src={searchIcon} alt="" />
          </button>
        </div>
      </form>
      <hr className="filter-bar-divider" />
    </>
  );
}
