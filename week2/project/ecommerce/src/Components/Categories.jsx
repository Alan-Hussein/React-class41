import React from "react";

const Categories = ({
  filterProducts,
  selectCategories,
  categories,
  setselect,
}) => {
  const categoryNav = categories.map((category, index) => {
    return (
      <button
        key={index}
        className={selectCategories === index ? "active" : "inactive"}
        onClick={() => {
          filterProducts(category);
          setselect(index);
        }}
      >
        {category}
      </button>
    );
  });
  return <nav>{categoryNav}</nav>;
};

export default Categories;
