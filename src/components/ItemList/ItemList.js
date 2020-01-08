import React, { useState, useEffect } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import { connect } from "react-redux";
import ItemCard from "../ItemCard/ItemCard";
import Navbar from "../Navbar/LoggedinNav";
import Carousel from '../Carousel/Carousel';
import {
  Wrapper, 
  ItemWrapper, 
  Title
} from './Item_List_Styles';
import {Input} from 'reactstrap';
import { fetchProducts } from "../../actions/actions";

const ItemList = props => {
  console.log('The props are:', props.productData);

  useEffect(() => {
    // axiosWithAuth()
    //   .get("https://evendsapi.herokuapp.com/api/products")
    //   .then(res => {
    //     console.log(res.data);
    //     setData(res.data);
    //   })
    //   .catch(error => {
    //     console.log(error.message);
    //   });

    props.fetchProducts();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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
  },[searchTerm]);

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
          <ItemCard key={item.id} data={item} />
        ))}
      </ItemWrapper>
    );
  } else {
    listRender = (
      <ItemWrapper>
        {searchResults.map(item => (
          <ItemCard key={item.id} data={item} />
        ))}
      </ItemWrapper>
    );
  }

  return (
    <>
      <Navbar />
      <Wrapper>
      <Title>Product List</Title>
      <Carousel/>
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
