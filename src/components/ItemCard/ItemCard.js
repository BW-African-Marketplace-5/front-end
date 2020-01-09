import React, { useState, useEffect } from "react";
import {
  ProductImg,
  ProductCard,
  Title,
  SubTitle,
  Price
} from "./ItemCard_Styles";
import { CardText, CardBody, CardImg, Collapse, Button } from "reactstrap";
import { GiGrain, GiMeat, GiFruitBowl, GiFruiting } from "react-icons/gi";
import axios from "axios";

const ItemCard = props => {
  const [iconState, setIcon] = useState();
  const [imgURL, setImgURL] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // console.log('ItemCard Props:', props)

  //PIXAYBAY API
  useEffect(() => {
    const searchTerm = props.data.name;
    searchTerm.replace(/\s+/g, "");
    // console.log("Deleted Space In Object Name:", searchTerm);
    axios
      .get(
        `https://pixabay.com/api/?key=13098636-bcd07a2dc6bf83f56dd84d630&q=${props.data.name}&image_type=photo&category=food`
      )
      .then(response => {
        const random = () => {
          return Math.floor(Math.random() * 20 + 1);
        };
        // console.log('Search Term:', props.data.name)
        // console.log('PixaBay API Response:', response.data.hits[random()]);
        setImgURL(response.data.hits[random()].webformatURL);
      })
      .catch(error => {
        // console.log("PixaBay API Error:", error);
      });
  }, [props.data.name]);

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
      <ProductImg top width="100%" src={imgURL} alt={props.data.name} />
      <Button onClick={toggle}>Description</Button>
      <Collapse isOpen={isOpen}>
      <CardBody>
        {/* <SubTitle>Vendor: {props.data.username}</SubTitle> */}
        <SubTitle>
          <img src={props.data.image_url}/>
        </SubTitle>
        <SubTitle>
          Category: {iconState} {props.data.category}
        </SubTitle>
        <SubTitle>Market Area: {props.data.market_area}</SubTitle>
          <SubTitle>Description: {props.data.description}</SubTitle>
        <CardText></CardText>
      </CardBody>
      </Collapse>
      <Price>Price: {props.data.price}</Price>
    </ProductCard>
  );
};

export default ItemCard;
