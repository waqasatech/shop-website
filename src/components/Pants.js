import React from "react";
import Products from "./Products"; // Assuming this is the correct import path
import Productsdata from "../data"; // Assuming this is the correct import path
import "./pages.css";

const Pants = () => {
  return (
    <div>
      <div className="grid-container">
        <div className="item1">1</div>
        <div className="item1">2</div>
        <div className="item1">3</div>
        <div className="item1">4</div>
        <div className="item1">5</div>
        <div className="item1">6</div>
        <div className="item1">7</div>
        <div className="item1">8</div>
        <div className="item1">9</div>
        <div className="item1">10</div>
        <div className="item1">11</div>
        <div className="item1">12</div>
      </div>
      <div className="grid-container">
        {Productsdata.map((product, index) => (
          <Products
            key={product.id} // Assuming there's a unique identifier like 'id'
            name={product.name}
            url={product.url}
            price={product.price}
            className={`item${index + 1}`} // Apply different classes for grid items
          />
        ))}
      </div>
    </div>
  );
};

export default Pants;
