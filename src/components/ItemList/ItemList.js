import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ItemCard from "../ItemCard/ItemCard";
import Navbar from "../Navbar/LoggedinNav";
import Footer from "../Footer/Footer";
import { Wrapper, ItemWrapper, Title } from "./Item_List_Styles";
import { Input, Alert } from "reactstrap";
import { fetchProducts } from "../../actions/actions";
import axiosWithAuth from "../../utils/axiosWithAuth";

const ItemList = props => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [user, setUser] = useState();
  // let products = props.productData;
  // console.log(
  //   "The props are:",
  //   products.forEach(item => {
  //     console.log(item.category);
  //   })
  // );
  //Get Current User From Backend
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

  useEffect(() => {
    props.fetchProducts();
  }, []); //Get Product Data Use Effect
  //SearchBar Functionality
  useEffect(() => {
    const results = props.productData.filter(
      descriptions =>
        descriptions.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        descriptions.category
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        descriptions.market_area
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, props.productData]);

  const handleChanges = event => {
    event.preventDefault();
    setSearchTerm(event.target.value);
    // console.log(event.target.value);
  };

  var listRender;
  if (searchTerm.length === 0) {
    listRender = (
      <ItemWrapper>
        {props.productData.map(item => (
          <ItemCard
            key={item.id}
            data={item}
            allData={props.productData}
            username={props.productData.username}
          />
        ))}
      </ItemWrapper>
    );
  } else {
    listRender = (
      <ItemWrapper>
        {searchResults.map(item => (
          <ItemCard
            key={item.id}
            data={item}
            allData={props.productData}
            username={props.productData.username}
          />
        ))}
      </ItemWrapper>
    );
  }

  console.log(props.productData);

  return (
    <>
      <Navbar market={true} user={user} />
      <Wrapper>
        <Title>MARKET PLACE</Title>
        <form>
          <Input
            onChange={handleChanges}
            value={searchTerm}
            type="search"
            placeholder="Search Products"
            name="search"
          />
        </form>
        <button onClick={() => props.history.push("/item-form")}>
          Add Product
        </button>
        <section>{listRender}</section>
        <Footer />
      </Wrapper>
    </>
  );
};

export default connect(
  state => {
    return {
      productData: state.productData,
      isFetching: state.isFetching,
      error: state.error
    };
  },
  { fetchProducts }
)(ItemList);
