import React, { useEffect, useState } from "react";
import Error from "./Error";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
        setLoading(true)
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setLoading(false)
    };
    try {
      getData();
    } catch (err) {
      setError(err.message);
      setLoading(false);
    } 
  }, [id]);

  return (
  <>
  {Loading ? (
      <h3>Loading...</h3>
    
  ) : error ? (
    <Error error={error} />
  ) : (
    <div className="product_Details">
      <h3 className="product_title">{product.title}</h3>
      <img src={product.image} alt={product.id} />
      <p className="product_description">{product.description}</p>
    </div>
  )
  }
  </>) 
};

export default ProductDetail;