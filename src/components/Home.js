import React from "react";
import Product from "./Products";
import { data } from "../data";
import "./pages.css";

const Home = () => {
  return (
    <div>
      <div className="grid-container">
        <div className="item1">1</div>
        <div className="item1">2</div>
        <div className="item1">3</div>
        {data.map((product) => (
          <Product
            key={product.id}
            Image={product.Image}
            price={product.price}
            id={product.id}
            name={product.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
