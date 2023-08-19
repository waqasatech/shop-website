import React from "react";
import Product from "./Products";
import { data } from "../data";
import "./pages.css";

const Pants = () => {
  return (
    <div className="pants-container">
      <div className="grid-container">
        {data.map((Pants) => (
          <Product key={Pants.id} {...Pants} />
        ))}
      </div>
    </div>
  );
};

export default Pants;
