import React, { useState } from 'react';

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
          <li key={index}>
            <label>
              <input
                type="checkbox"
                value={filter}
                checked={selectedFilters.includes(filter)}
                onChange={() => handleFilterToggle(filter)}
              />
              {filter}
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FilterSection;

