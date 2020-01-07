import React from "react";
import {
  Wrapper,
  FormWrapper,
  Form,
  InputWrapper,
  Title,
  Submit
} from "./Add_Item_Form_Styles";

import Navbar from "../Navbar/Navbar";

const AddItemForm = () => {
  const handleChanges = () => {};

  return (
    <div>
      <Navbar />
      <Wrapper>
        <FormWrapper>
          <Title>Add Product</Title>
          <Form>
            <div>
              <InputWrapper>
                <label>Product:</label>
                <input
                  type="text"
                  name="product"
                  placeholder="Beans"
                  value={null}
                  onChange={handleChanges}
                />
              </InputWrapper>
              <InputWrapper>
                <label>Category:</label>
                <input
                  type="text"
                  name="category"
                  placeholder="Vegetables"
                  value={null}
                  onChange={handleChanges}
                />
              </InputWrapper>
              <InputWrapper>
                <label>Market Location: </label>
                <input
                  type="text"
                  name="market_location"
                  placeholder="Rwanda"
                  value={null}
                  onChange={handleChanges}
                />
              </InputWrapper>
              <InputWrapper>
                <label>Description: </label>
                <input
                  type="text"
                  name="description"
                  placeholder="5 pounds/Kidney"
                  value={null}
                  onChange={handleChanges}
                />
              </InputWrapper>
              <InputWrapper>
                <label>Price: </label>
                <input
                  type="text"
                  name="price"
                  placeholder="300.00 RWF"
                  value={null}
                  onChange={handleChanges}
                />
              </InputWrapper>
              <Submit>Submit</Submit>
            </div>
          </Form>
        </FormWrapper>
      </Wrapper>
    </div>
  );
};

export default AddItemForm;
