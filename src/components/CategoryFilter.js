import React, { useState } from 'react';

function CategoryFilter({ categories, onSelectCategory }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryClick(category) {
    setSelectedCategory(category);
    onSelectCategory(category);
  }

  return (
    <div className="categories">
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? "selected" : ""}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
