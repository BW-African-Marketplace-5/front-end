import React, {useState, useEffect} from 'react';
import Carousel from "../Carousel/Carousel";
import Navbar from "../Navbar/LoggedinNav";
import MarketCard from './HomeCards/MarketCard';
import PostItemCard from './HomeCards/PostItemCard';
import {
    Wrapper,
    Heading,
    Title,
    CardWrapper
} from './Home_Styles'
import Footer from '../Footer/Footer';


const Home= (props) => {
 
    console.log('Props in Home',props);
    return (
        <>
       <Navbar home={true}/>
       <Wrapper>
        <Heading>
            <Title>WELCOME TO EVENDS</Title>
        </Heading>
        <CardWrapper>
            <MarketCard history={props.history}/>
            <PostItemCard history ={props.history}/>
        </CardWrapper>
      
       </Wrapper>
       {/* <Carousel/> */}
       <Footer/>
       </>
    );
}

export default Home;
