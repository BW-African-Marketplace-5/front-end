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
  width: 33%;
  margin: 5%;
`
