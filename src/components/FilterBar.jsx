import React from "react";
import CheckboxOption from "./CheckboxOption";

export default function FilterBar() {
  return (
    <form className="filter-bar">
      <div className="property-types-wrapper">
        <div>Property Types</div>
        <div className="property-type-options">
          <CheckboxOption prompt="property-type" option="house" />
          <CheckboxOption prompt="property-type" option="apartment" />
          <CheckboxOption prompt="property-type" option="studio" />
        </div>
      </div>

      <div className="sort-by-wrapper">
        <label htmlFor="sort-by">Sort By</label>
        <select name="sort-by" id="sort-by">
          <option value="popularity-descending">Popularity: High to Low</option>
          <option value="popularity-ascending">Popularity: Low to High</option>
          <option value="price-descending">Price: High to Low</option>
          <option value="price-ascending">Price: Low to High</option>
        </select>
      </div>

      <div className="price-range-wrapper">
        <div className="filter-min-price">
          <label htmlFor="min-price">Minimum Price:</label>
          <input className="price-input" type="text" id="min-price" name="min-price" />
        </div>
        <div className="filter-max-price">
          <label htmlFor="max-price">Maximum Price:</label>
          <input className="price-input" type="text" id="max-price" name="max-price" />
        </div>
      </div>

      <div className="filter-search-wrapper">
        <button className="filter-bar-button" type="button">
          <img src="src/assets/search-logo.png" alt="" />
        </button>
      </div>
    </form>
  );
}
