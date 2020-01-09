import React, { useState, useEffect } from "react";
import {
  ItemWrapper,
  ProductCard,
  Title,
  SubTitle,
  Price
} from "./ItemCard_Styles";
import { CardText, CardBody, Button } from "reactstrap";
import { GiGrain, GiMeat, GiFruitBowl, GiFruiting } from "react-icons/gi";
const ItemCard = props => {
  const [iconState, setIcon] = useState();

  useEffect(() => {
    if (props.data.category === "Grains") {
      setIcon(<GiGrain />);
    }
    if (props.data.category === "Meats") {
      setIcon(<GiMeat />);
    }
    if (props.data.category === "Vegetables") {
      setIcon(<GiFruiting />);
    }
    if (props.data.category === "Fruits") {
      setIcon(<GiFruitBowl />);
    }
  }, [props.data.category]);

  return (
    <ProductCard>
      <Title>{props.data.name}</Title>
      <CardBody>
        {/* <SubTitle>Vendor: {props.data.username}</SubTitle> */}
        <SubTitle>
          Category: {iconState} {props.data.category}
        </SubTitle>
        <SubTitle>Market Area: {props.data.market_area}</SubTitle>
        <SubTitle>Description: {props.data.description}</SubTitle>
        <CardText></CardText>
      </CardBody>
      <Price>Price: {props.data.price}</Price>
    </ProductCard>
  );
};

export default ItemCard;
