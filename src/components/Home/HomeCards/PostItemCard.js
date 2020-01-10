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
            <OverlayButton><Title><MdFileUpload size='2em'/> POST ITEMS</Title></OverlayButton>
            {/* <CardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardText> */}
          </CardOverlay>
      </ProductCard>
     
    );
}

export default PostItemCard;
