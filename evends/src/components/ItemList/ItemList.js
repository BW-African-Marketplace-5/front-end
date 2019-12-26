import React from "react";
import Navbar from "../Navbar/Navbar";
import ItemCard from "../ItemCard/ItemCard";
import axios from 'axios';


const ItemList = () => {

    const url = ''

    axios.get(url)
    .then(
        //logic here
    )
    .catch((error)=>{
        console.log('The response did not receive data', error);
    })

    
    return(
        <div>
            <h1>Asuh, World</h1>
        </div>
    );
}

export default ItemList;