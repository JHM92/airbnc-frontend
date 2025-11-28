import React from "react";

export default function CheckboxOption({ prompt, option, handlePropertyTypeChange }) {
  const optionName = prompt + "-" + option;

  const optionValue = option[0].toUpperCase() + option.slice(1).toLowerCase();

  return (
    <div className="checkbox-option">
      <input
        type="checkbox"
        name={optionName}
        id={optionName}
        value={optionValue}
        onChange={handlePropertyTypeChange}
      />
      <label htmlFor={optionName}>{optionValue}</label>
    </div>
  );
}
