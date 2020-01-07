import {
  FETCH_PRODUCTS_LOADING,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE
} from "../actions/actions";

const initialState = {
  productData: [],
  error: null,
  isFetching: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_LOADING:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        productData: action.payload,
        error: null
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        productData: [],
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
