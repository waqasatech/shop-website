import React from "react";
import { data } from "../data";
import "./pages.css"; // Make sure the path is correct
import Product from "./Products";

const Shirts = () => {
  return (
    <div>
      <div className="grid-container">
        {data.map((shirt) => {
          return <Product {...shirt} key={shirt.id} />;
        })}
      </div>
    </div>
  );
};

export default Shirts;
