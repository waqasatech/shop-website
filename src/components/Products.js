import React from "react";
import Products from "./Products";
import data from "../data";

const Home = () => {
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

      {data.map((Shirts) => {
        return <Shirts {...Shirts} key={Shirts.id} />;
      })}
    </div>
  );
};

<div>
  {data.map((product) => (
    <Products
      key={product.id}
      name={product.name}
      url={product.url}
      price={product.price}
    />
  ))}
</div>;

export default Home;
