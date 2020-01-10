import styled from 'styled-components';
import {
    Card, CardImgOverlay, CardText,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

export const ItemWrapper = styled.div`
    display:flex;
    justify-content: center;
    flex-wrap:wrap;
    align-items:center;
    width:100%;
`
export const ProductCard = styled(Card)`
  width: 50%;
  background: black;
  border: none;
`
export const Title = styled(CardTitle)`
    color:white;
    background-color: #e33734;
    font-weight:bold;
    font-size: 1.5rem;
    padding: 2.5%;
    margin-bottom:0;
    z-index:1;
`
export const Price = styled(CardSubtitle)`
    color:white;
    background-color: black;
    font-weight:bold;
    font-size: 1rem;
    padding: 2%;
    z-index:1;
`
export const SubTitle = styled(CardSubtitle)`
    color:#e33734;
    font-weight:bold;
    font-size: 1rem;
    margin: 1%;
`
export const ProductImg = styled.img`
   opacity: 0.7;
`
export const CardOverlay = styled (CardImgOverlay)`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    z-index: 0;
`
export const OverlayText = styled (CardText)`
  color:white;
  font-weight: 600;
  text-transform: uppercase;
  background: #000000b8;
  padding: 5%;
`
export const DescriptionButton = styled (Button)`
  background:white;
  color:#e33734;
  width:100%;
  border: 0;
  border-radius: 0;
  font-weight: 600;
  z-index: 1;
  &:hover{
      background:white;
      color: #e33734;
  }

`