import React, { useState } from "react";
import categories from "./fake-data/all-categories";
import products from "./fake-data/all-products";
import Product from "./components/products";
import Categories from "./components/categories";
import "./App.css";

function App() {
  const [allProducts, setProducts] = useState(products);
  const [selectCategory, setSelect] = useState();

  const filtre = (category) => {
    const filterProducts = products.filter(
      (item) => `FAKE: ${item.category}` === category
    );
    setProducts(filterProducts);
  };
  return (
    <div className="App">
      <h1 className="header">Products</h1>
      <Categories
        categories={categories}
        filtre={filtre}
        selectCategory={selectCategory}
        setSelect={setSelect}
      />
      <Product allPro={allProducts} />;
    </div>
  );
}

export default App;
