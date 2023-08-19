import React from "react";

const Product = ({ Image, price, id, name }) => {
  return (
    <div>
      <img src={Image} alt={name} />
      <p>{name}</p>
      <p>Price: ${price}</p>
      <p>ID: {id}</p>
    </div>
  );
};

export default Product;
