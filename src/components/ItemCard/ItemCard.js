import React, {useState, useEffect} from "react";
import {ItemWrapper, ProductCard} from './ItemCard_Styles';
import {
   CardText, 
   CardBody,
   CardTitle, 
   CardSubtitle, 
   Button
} from 'reactstrap';
import {
   GiGrain,
   GiMeat,
   GiFruitBowl,
   GiFruiting,

} from "react-icons/gi";
const ItemCard = props => {
  const [iconState, setIcon] = useState();
  console.log('The Category Is:', props.data.category)
  console.log('The Icons are:',iconState);

  useEffect(() =>{
    if(props.data.category === 'Grains'){
      setIcon(<GiGrain/>)
    }
    if(props.data.category === 'Meats'){
      setIcon(<GiMeat/>)
    }
    if(props.data.category === 'Vegetables'){
      setIcon(<GiFruiting/>)
    }
    if(props.data.category === 'Fruits'){
      setIcon(<GiFruitBowl/>)
    }
  },[])
  
 

  return (
    <ProductCard>
      <CardBody>            
        <CardTitle>{props.data.name}</CardTitle>
        <CardSubtitle>Category: {iconState} {props.data.category}</CardSubtitle>
        <CardSubtitle>Market Area: {props.data.market_area}</CardSubtitle>
        <CardSubtitle>Description: {props.data.description}</CardSubtitle>
        <CardSubtitle>Price: {props.data.price}</CardSubtitle>
        <CardText></CardText>
      </CardBody>
    </ProductCard>
  );
};

export default ItemCard;
