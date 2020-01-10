import React, {useState} from 'react';
import {
    ProductImg,
    ProductCard,
    Title,
    SubTitle,
    Price,
    CardOverlay,
    DescriptionButton,
    OverlayText
  } from './Card_Styles';
import { CardText, CardBody, Collapse, Button } from "reactstrap";
import Meats from '../../../imgs/meats.jpg';

const PostItemCard= () => {
const [isOpen, setIsOpen] = useState(false);
const toggle = () => setIsOpen(!isOpen);

    return (
    
        <ProductCard>
        <ProductImg top width="100%" src={Meats} alt='Market' />
        <CardOverlay>
            <OverlayText>Description</OverlayText>
            <CardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardOverlay>
      </ProductCard>
     
    );
}

export default PostItemCard;
