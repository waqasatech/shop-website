import React from "react";
import Product from "./Products";
import "./pages.css";
import { data } from "../data";

const Shoes = () => {
  return (
    <div>
      <div className="grid-container">
        {data.map((shoe) => (
          <Product {...shoe} key={shoe.id} />
        ))}
      </div>
    </div>
  );
};

export default Shoes;
