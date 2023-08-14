import React from "react";
import Products from "./Products";
import "./pages.css";
import data from "../data";
const Shoes = () => {
  return (
    <div>
      {data.map((product) => {
        return <Products name={product.name} url="" price=" " />;
      })}
    </div>
  );
};

export default Shoes;
