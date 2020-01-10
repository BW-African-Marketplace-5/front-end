import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  Wrapper,
  FormWrapper,
  Form,
  InputWrapper,
  Title,
  Submit,
  TopBar,
  Heading
} from "./Add_Item_Form_Styles";
import {Input, Label} from 'reactstrap';

import LoggedinNav from "../Navbar/LoggedinNav";
import Footer from "../Footer/Footer";
import { createProduct } from "../../actions/actions";
import axiosWithAuth from "../../utils/axiosWithAuth";
import ImageUpload from "../ImageUpload/ImageUpload";

const initialValues = {
  category: "",
  market_area: "",
  name: "",
  description: "",
  price: "",
  image_url: ""
};

const AddItemForm = props => {
  const [newProduct, setNewProduct] = useState(initialValues);
  const [currentUser, setCurrentUser] = useState({
    currentUserId: null,
    currentUsername: ""
  });
  const [image, setImage] = useState("");

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
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
      image_url: image
    });
  };

  const handleSubmit = () => {
    props.history.push("/item-list");
    props.createProduct(newProduct, currentUser.currentUserId);
  };

  console.log(newProduct);
  console.log(currentUser.currentUserId);
  console.group(`image: ${image}`);

  return (
    <div>
      <LoggedinNav postItems={true} />
      <Wrapper>
        <Heading>
            <Title>POST PRODUCTS</Title>
        </Heading>
        <FormWrapper>
          <TopBar>
            <Title>Fill Out The Form</Title>
          </TopBar>
          <Form onSubmit={handleSubmit}>
            <div>
              <InputWrapper>
                <Label>Product:</Label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Beans"
                  value={newProduct.product}
                  onChange={handleChanges}
                />
              </InputWrapper>
              <InputWrapper>
                <Label>Description: </Label>
                <Input
                  type="text"
                  name="description"
                  placeholder="5 pounds/Kidney"
                  value={newProduct.description}
                  onChange={handleChanges}
                />
              </InputWrapper>
              <InputWrapper>
                <Label>Price: </Label>
                <Input
                  type="text"
                  name="price"
                  placeholder="300.00 RWF"
                  value={newProduct.price}
                  onChange={handleChanges}
                />
              </InputWrapper>
              <InputWrapper>
              <Label>Category: </Label>
                <Input
                  type="select"
                  name="category"
                  placeholder="Vegetables"
                  value={newProduct.category}
                  onChange={handleChanges}
                >
                  <option>Choose Category</option>
                  <option>Vegetables</option>
                  <option>Meats</option>
                  <option>Grains</option>
                  <option>Fruits</option>
                  <option>Other</option>
                </Input>
              </InputWrapper>
              <InputWrapper>
              <Label>Market Area:</Label>
                <Input
                  type="select"
                  name="market_area"
                  placeholder="Rwanda"
                  value={newProduct.market_area}
                  onChange={handleChanges}
                >
                  <option>Choose Location</option>
                  <option>Rwanda</option>
                  <option>Kenya</option>
                  <option>Uganda</option>
                  <option>Ethiopia</option>
                </Input>
              </InputWrapper>
              <InputWrapper style={{textAlign:"center"}}>
                <ImageUpload setImage={setImage} />
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
