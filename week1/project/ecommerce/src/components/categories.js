import React from "react";

const Categories = ({ setSelect, filter, selectedCategory, categories }) => {
  const categoryNav = categories.map((category, index) => {
    return (
      <button
        key={index}
        className={selectedCategory === index ? "active" : "inactive"}
        onClick={() => {
          filter(category);
          setSelect(index);
        }}
      >
        {category}
      </button>
    );
  });
  return <nav>{categoryNav}</nav>;
};

export default Categories;
