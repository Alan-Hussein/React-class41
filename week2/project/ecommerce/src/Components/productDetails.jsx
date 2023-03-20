import React from "react";
import Error from "./Error";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading";

const ProductDetail = () => {
  const { id } = useParams();

  const { data, error, loading } = useFetch(
    `https://fakestoreapi.com/products/${id}`
  );

  if (error) return <Error error={error} />;
  if (loading) return <Loading/>
  return (
  <>
  
    <div className="product_Details">
      <h3 className="product_title">{data.title}</h3>
      <img src={data.image} alt={data.id} />
      <p className="product_description">{data.description}</p>
    </div>
  
  
  </>) 
};

export default ProductDetail;