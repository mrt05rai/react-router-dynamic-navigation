import React from "react";
import { useParams } from "react-router-dom";

const product = ({ data }) => {
  const { productId } = useParams();
  const product = data.find((p) => p.id === Number(productId));
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <h4>{product.status}</h4>
    </div>
  );
};

export default product;
