import React, { useState } from "react";
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

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const initialValues = {
  product: "",
  category: "",
  market_location: "",
  description: "",
  price: ""
};

const AddItemForm = props => {
  const [newProduct, setNewProduct] = useState(initialValues);

  const handleChanges = e => {
    e.preventDefault();
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    props.history.push("/item-list");
  };

  console.log(newProduct);

  return (
    <div>
      <Navbar />
      <Wrapper>
        <FormWrapper>
          <TopBar>
            <Title>Add Product</Title>
          </TopBar>
          <Form>
            <div>
              <InputWrapper>
                <label>Product:</label>
                <input
                  type="text"
                  name="product"
                  placeholder="Beans"
                  value={newProduct.product}
                  onChange={handleChanges}
                />
              </InputWrapper>
              <InputWrapper>
                <label>Category:</label>
                <input
                  type="text"
                  name="category"
                  placeholder="Vegetables"
                  value={newProduct.category}
                  onChange={handleChanges}
                />
              </InputWrapper>
              <InputWrapper>
                <label>Market Location: </label>
                <input
                  type="text"
                  name="market_location"
                  placeholder="Rwanda"
                  value={newProduct.market_location}
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
              <Submit>Submit</Submit>
            </div>
          </Form>
        </FormWrapper>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default connect(state => {
  return {
    productData: state.productData,
    error: state.error,
    isFetching: state.isFetching
  };
}, {})(AddItemForm);
