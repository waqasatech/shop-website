import React from "react";
import Products from "./Products";
import data from "../data";

const Home = () => {
  return (
    <div className="grid-container">
      <div className="item1">1</div>
      <div className="item1">2</div>
      <div className="item1">3</div>
      <div>
        {data.map((product) => (
          <Products
            key={product.id} // Assuming each product has a unique ID
            name={product.name}
            url={product.url}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
