import React, { useState } from 'react';
import './FilterSection.css'

const FilterSection = ({ title, filters = [] }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterToggle = (filter) => {
    const updatedFilters = selectedFilters.includes(filter)
      ? selectedFilters.filter((f) => f !== filter)
      : [...selectedFilters, filter];
    setSelectedFilters(updatedFilters);
  };

  return (
    <section aria-label={title} className="filterSection">
      <h2>{title}</h2>
      <ul>
        {filters.map((filter, index) => (
          <ul key={index} className="filter-element">
            <label>
              <input
                type="checkbox"
                value={filter}
                checked={selectedFilters.includes(filter)}
                onChange={() => handleFilterToggle(filter)}
              />
              {filter}
            </label>
          </ul>
        ))}
      </ul>
    </section>
  );
};

export default FilterSection;

