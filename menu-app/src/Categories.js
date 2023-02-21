import React from "react";

export const Categories = ({ categories, filterItems }) => {
  return (
    <div className="buttons">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            className="button"
            onClick={() => filterItems(category)}
          >
            {category.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
};
