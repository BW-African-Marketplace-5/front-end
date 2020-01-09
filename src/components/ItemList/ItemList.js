import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ItemCard from "../ItemCard/ItemCard";
import Navbar from "../Navbar/LoggedinNav";
import Footer from "../Footer/Footer";
import { Wrapper, ItemWrapper, Title, SearchBar, Heading, SearchInput } from "./Item_List_Styles";
import { InputGroupAddon, InputGroupText, Spinner } from "reactstrap";
import {FaSearch} from 'react-icons/fa';
import { fetchProducts } from "../../actions/actions";
import axiosWithAuth from "../../utils/axiosWithAuth";

const ItemList = props => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [user, setUser] = useState();
  const [Loaded, setLoading] = useState(false);
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
    if(listRender){
      setLoading(true)
    }else{
      setLoading(false);
    } 
    console.log('Fetching Products....')
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

  console.log(props);

  return (
    <>
      <Navbar market={true} user={user} />
      <Wrapper>
      <Heading>
        <Title>MARKET PLACE</Title>
        <SearchBar>
        <InputGroupAddon addonType="prepend">
          <InputGroupText><FaSearch/></InputGroupText>
        </InputGroupAddon>
        <SearchInput
            onChange={handleChanges}
            value={searchTerm}
            type="search"
            placeholder="Search Products"
            name="search"
          />
      </SearchBar>
      </Heading>
        <button onClick={() => props.history.push("/item-form")}>
          Add Product
        </button>
        {/* <Spinner type="grow" color="warning" /> */}
      {(!Loaded) ? (<section><Spinner color="danger" /><br/>Loading...</section>) : (<section>{listRender}</section>)}
        {(!Loaded) ? <div></div> : <Footer />}
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
