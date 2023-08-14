import React from "react";
import ProductsData from "./Products"; // Make sure the path is correct
import "./pages.css"; // Make sure the path is correct
import Products from "./Products";

const Shirts = () => {
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

      <div className="product-container">
        <div className="product-grid">
          {ProductsData.map((product, index) => (
            <Products
              key={index}
              name={product.name}
              url={product.url}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shirts;
