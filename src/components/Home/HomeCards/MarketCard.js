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
import {FaStore} from 'react-icons/fa'
import Market from '../../../imgs/market.jpeg'

const MarketCard = (props) => {
const [isOpen, setIsOpen] = useState(false);
const toggle = () => setIsOpen(!isOpen);

    return (
    
        <ProductCard>
        <ProductImg top width="100%" src={Market} alt='Market' />
        <CardOverlay>
            <OverlayButton><Title><FaStore size='2em'/> VISIT MARKET</Title></OverlayButton>
            {/* <CardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardText> */}
          </CardOverlay>
      </ProductCard>
     
    );
}

export default MarketCard;
