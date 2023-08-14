import React from "react";
import data from "./data";

const product = ({ data }) => {
  return (
    <>
      {data.map((data) => {
        const { id, name, age, image } = data;
        return (
          <article key={id} className="image">
            <img src={imageUrl} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
