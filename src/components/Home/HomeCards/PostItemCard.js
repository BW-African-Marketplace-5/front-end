import React, {useState} from 'react';
import {
    ProductImg,
    ProductCard,
    Title,
    SubTitle,
    Price,
    CardOverlay,
    DescriptionButton,
    OverlayButton
  } from './Home_Card_Styles';
import { CardText, CardBody, Collapse, Button } from "reactstrap";
import {MdFileUpload} from 'react-icons/md'
import Form from '../../../imgs/form.jpg'

const PostItemCard = (props) => {
const [isOpen, setIsOpen] = useState(false);
const toggle = () => setIsOpen(!isOpen);

    return (
    
        <ProductCard>
        <ProductImg top width="100%" src={Form} alt='Market' />
        <CardOverlay>
            <OverlayButton href='/item-form'><Title><MdFileUpload size='2em'/> VISIT MARKET</Title></OverlayButton>
          </CardOverlay>
      </ProductCard>
     
    );
}

export default PostItemCard;
