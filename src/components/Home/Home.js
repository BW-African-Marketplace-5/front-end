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
import axiosWithAuth from "../../utils/axiosWithAuth";

const Home= (props) => {
    const [user, setUser] = useState();
    console.log('Props in Home',props);
    useEffect(() => {
        axiosWithAuth()
          .get("https://evendsapi.herokuapp.com/api/users/current")
          .then(response => {
            console.log("Current User:", response);
            setUser(response.data.currentUsername);
          })
          .catch(error => {
            console.log("Username Get Error:", error);
            setUser("USERNAME NOT FOUND");
          });
      }, []); //Get Current User UseEffect
    return (
        <>
       <Navbar user={user} home={true}/>
       <Wrapper>
        <Heading>
            <Title>Welcome To Evends</Title>
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
