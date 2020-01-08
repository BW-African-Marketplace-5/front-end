import React from "react";
import {ItemWrapper, ProductCard} from './ItemCard_Styles';
import {
   CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
const ItemCard = props => {
  return (
    <ProductCard>
      <CardBody>            
        <CardTitle>{props.data.name}</CardTitle>
        <CardSubtitle>Category: {props.data.category}</CardSubtitle>
        <CardSubtitle>Market Area: {props.data.market_area}</CardSubtitle>
        <CardSubtitle>Description: {props.data.description}</CardSubtitle>
        <CardSubtitle>Price: {props.data.price}</CardSubtitle>
        <CardText></CardText>
      </CardBody>
    </ProductCard>
  );
};

export default ItemCard;
