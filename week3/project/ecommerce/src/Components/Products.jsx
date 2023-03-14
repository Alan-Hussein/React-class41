import React, { useState, useEffect } from "react";
import Categories from "./Categories";
import Product from "./Product";
import Error from "./Error";
import Header from "./Header";
import Loading from "./Loading";
import useFetch from "../hooks/useFetch";

const Products = () => {
  const { data, error, loading } = useFetch(
    "https://fakestoreapi.com/products"
  );
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    setFilter(data);
  }, [data]);
  console.log(filter);
  const filterProducts = (cat) => {
    const productList = data.filter((element) => element.category === cat);
    setFilter(productList);
  };

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  return (
    <>
      <h1>Products</h1>
      <Header />
      <Categories filterProducts={filterProducts} />
      <Product filter={filter} />
    </>
  );
};

export default Products;