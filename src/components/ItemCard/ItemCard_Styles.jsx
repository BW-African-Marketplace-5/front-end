import styled from 'styled-components';
import {
    Card, CardText, CardBody,
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
  width: 25%;
  margin: 1%;
  border-radius: 0;
  border:none;
  background: #ffffffb3;
`
export const Title = styled(CardTitle)`
    color:white;
    background-color: #e33734;
    font-weight:bold;
    font-size: 2rem;
`
export const Price = styled(CardSubtitle)`
    color:white;
    background-color: black;
    font-weight:bold;
    font-size: 1rem;
    :hover{
        color:#e33734;
        background-color:white;
    }
`
export const SubTitle = styled(CardSubtitle)`
    color:#e33734
    font-weight:bold;
    font-size: 1rem;
    margin: 1%;
`
