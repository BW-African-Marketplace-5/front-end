import { FormGroup, Button } from "reactstrap";
import styled from "styled-components";

export const Form = styled.form`
  background: #ffffffb5;
  padding: 10%;
`;
export const Submit = styled(Button)`
  padding: 1.5%;
  width: 25%;
  font-weight: bold;
  border-radius: 0;
  background-color: #e33734;
  border: solid 2px #ffffff47;
  :hover {
    background-color: #000000db;
    border: solid 2px #ffffff47;
  }
`;
export const FormWrapper = styled.div`
    width:50%
    padding: 5% 0;

`;
export const InputWrapper = styled(FormGroup)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Title = styled.h1`
  color: #e33734;
  font-weight: bold;
  font-size: 2rem;
  padding-bottom: 5%;
`;
