import React, {useState, useEffect} from 'react';
import Carousel from "../Carousel/Carousel";
import Navbar from "../Navbar/LoggedinNav";
import Footer from '../Footer/Footer';
import axiosWithAuth from "../../utils/axiosWithAuth";

const Home= () => {
    const [user, setUser] = useState();

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
       <Carousel/>
       <Footer/>
       </>
    );
}

export default Home;
