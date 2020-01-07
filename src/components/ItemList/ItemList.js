import React, { useState, useEffect } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";

import ItemCard from "../ItemCard/ItemCard";
import Navbar from '../Navbar/Navbar';

const ItemList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("https://evendsapi.herokuapp.com/api/products")
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, []);

  return (
    <div>
      <Navbar/>
      <h1>Product List</h1>
      <div>
        {data.map(item => (
          <ItemCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
