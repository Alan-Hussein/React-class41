import React from "react"
import { Link } from "react-router-dom";
import FavoriteIcon from "./FavoriteIcon";

const ChildProduct = ({ product }) => {
  const { title, image, id }=product
  return (
    <div className="product" >
      <div className="fav-icon-img">
        <Link key={id} to={`/product/${id}`}>
          <img src={image} alt={title} />
          <p>{title}</p>
        </Link>
        <FavoriteIcon product={product} />
      </div>
    </div>
  );
};

export default ChildProduct;