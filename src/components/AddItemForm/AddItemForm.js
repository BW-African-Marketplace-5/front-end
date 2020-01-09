import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  Wrapper,
  FormWrapper,
  Form,
  InputWrapper,
  Title,
  Submit,
  TopBar
} from "./Add_Item_Form_Styles";

import LoggedinNav from "../Navbar/LoggedinNav";
import Footer from "../Footer/Footer";
import { createProduct } from "../../actions/actions";
import axiosWithAuth from "../../utils/axiosWithAuth";

const initialValues = {
  category: "",
  market_area: "",
  name: "",
  description: "",
  price: ""
};

const AddItemForm = props => {
  const [newProduct, setNewProduct] = useState(initialValues);
  const [currentUser, setCurrentUser] = useState({
    currentUserId: null,
    currentUsername: ""
  });

  useEffect(() => {
    axiosWithAuth()
      .get("https://evendsapi.herokuapp.com/api/users/current")
      .then(res => {
        console.log(res.data);
        setCurrentUser(res.data);
      })
      .catch(err => console.log(err.messsage));
  }, []);

  const handleChanges = e => {
    e.preventDefault();
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    props.history.push("/item-list");
    props.createProduct(newProduct, currentUser.currentUserId);
  };

  console.log(newProduct);
  console.log(currentUser.currentUserId);

  return (
    <div>
      <LoggedinNav />
      <Wrapper>
        <FormWrapper>
          <TopBar>
            <Title>Add Product</Title>
          </TopBar>
          <Form onSubmit={handleSubmit}>
            <div>
              <InputWrapper>
                <label>Product:</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Beans"
                  value={newProduct.product}
                  onChange={handleChanges}
                />
              </InputWrapper>
              <InputWrapper>
                <label>Description: </label>
                <input
                  type="text"
                  name="description"
                  placeholder="5 pounds/Kidney"
                  value={newProduct.description}
                  onChange={handleChanges}
                />
              </InputWrapper>
              <InputWrapper>
                <label>Price: </label>
                <input
                  type="text"
                  name="price"
                  placeholder="300.00 RWF"
                  value={newProduct.price}
                  onChange={handleChanges}
                />
              </InputWrapper>
              <InputWrapper>
                <label>Category: </label>
                <select
                  name="category"
                  placeholder="Vegetables"
                  value={newProduct.category}
                  onChange={handleChanges}
                >
                  <option>Vegetables</option>
                  <option>Meats</option>
                  <option>Grains</option>
                  <option>Fruits</option>
                  <option>Other</option>
                </select>
              </InputWrapper>
              <InputWrapper>
                <label>Market Location: </label>
                <select
                  name="market_area"
                  placeholder="Rwanda"
                  value={newProduct.market_area}
                  onChange={handleChanges}
                >
                  <option>Rwanda</option>
                  <option>Kenya</option>
                  <option>Uganda</option>
                  <option>Ethiopia</option>
                </select>
              </InputWrapper>
              <Submit>Submit</Submit>
            </div>
          </Form>
        </FormWrapper>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default connect(
  state => {
    return {
      productData: state.productData,
      error: state.error,
      isFetching: state.isFetching
    };
  },
  { createProduct }
)(AddItemForm);
