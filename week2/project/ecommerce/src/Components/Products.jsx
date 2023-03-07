import React, { useState, useEffect } from "react";
import Categories from "./Categories";
import Product from "./Product";
import Error from "./Error";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [categories, setCategories] = useState([]);
  const [selectCategories, setselect] = useState([]);
  const [isloading, setLoading] = useState(false);
  const [iserror, setError] = useState(null);

  useEffect(() => {
    try {
      setLoading(true);
      async function getCategories() {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );

        const data = await response.json();

        setCategories(data);
        setLoading(false);
      }
      getCategories();
    } catch (err) {
      setError(iserror.message);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    try {
      async function getProducts() {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        setData(data);
        setFilter(data);
        setLoading(false);
      }
      getProducts();
    } catch (err) {
      setError(iserror.message);
      setLoading(false);
    }
  }, []);

  const filterProducts = (category) => {
    const productList = data.filter((element) => element.category === category);
    setFilter(productList);
  };

  return isloading ? (
    <h2>Loading...</h2>
  ) : iserror ? (
    <Error error={iserror} />
  ) : (
    <>
      <h1 className="header">Products</h1>

      <Categories
        categories={categories}
        setCategories={setCategories}
        filterProducts={filterProducts}
        selectCategories={selectCategories}
        setselect={setselect}
      />
      <Product filter={filter} />
    </>
  );
};

export default Products;
