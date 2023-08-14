import React from "react";
import Products from "./Products";
import data from "../data";
import "./pages.css";
const Pants = () => {
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

export default Pants;
document.write("hello world");
