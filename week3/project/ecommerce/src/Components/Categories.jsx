import React,{ useState } from "react";
import Error from "./Error";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading";

const Categories = ({ filterProducts }) => {
  const [selectCat, setSelectCat] = useState([]);
 const url="https://fakestoreapi.com/products/categories"
  const { data, error, loading } = useFetch(url);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  return (
    <nav>
      {data.map((cat, index) => {
        return (
          <button
            key={index}
            className={selectCat === index ? "active" : "non-active"}
            onClick={() => {
              filterProducts(cat);
              setSelectCat(index);
            }}
          >
            {cat}
          </button>
        );
      })}
    </nav>
  );
};

export default Categories;