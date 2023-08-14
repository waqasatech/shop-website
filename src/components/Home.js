import React from "react";
import Products from "./Products";
import data from "../data";

const Home = () => {
  return (
    <div>
      {data.map((product) => {
        return (
          <Products
            name={product.name}
            url={product.url}
            price={product.price}
          />
        );
      })}
    </div>
  );
};

export default Home;
