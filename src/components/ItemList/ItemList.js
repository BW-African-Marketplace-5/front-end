import React, { useState, useEffect } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";

import ItemCard from "../ItemCard/ItemCard";
import Navbar from "../Navbar/Navbar";

const ItemList = props => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState();

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

  const handleChanges = () => {};

  return (
    <div>
      <Navbar />
      <h1>Product List</h1>
      <button onClick={() => props.history.push("/item-form")}>
        Add Product
      </button>
      <form>
        <input
          onChange={handleChanges}
          value={searchTerm}
          type="search"
          placeholder="Search Products"
          name="search"
        />
      </form>
      <div>
        {data.map(item => (
          <ItemCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
