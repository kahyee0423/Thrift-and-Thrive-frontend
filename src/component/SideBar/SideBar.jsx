import React from 'react';
import FilterSection from './FilterSection';

const SideBar = ({ filters }) => {
  return (
    <aside className="sidebar" aria-label="Filters">
      {filters.map((filter, index) => (
        <FilterSection 
          key={index}
          title={filter.title}
          filters={filter.options} // Pass filter options to FilterSection
        />
      ))}
    </aside>
  );
};

export default SideBar;