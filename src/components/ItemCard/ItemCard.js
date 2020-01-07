import React from "react";

const ItemCard = props => {
  return (
    <div>
      <h3>{props.data.name}</h3>
      <p>Category: {props.data.category}</p>
      <p>Market Area: {props.data.market_area}</p>
      <p>Description: {props.data.description}</p>
      <p>Price: {props.data.price}</p>
    </div>
  );
};

export default ItemCard;
