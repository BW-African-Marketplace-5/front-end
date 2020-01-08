import axiosWithAuth from "../utils/axiosWithAuth";

export const FETCH_PRODUCTS_LOADING = "FETCH_PRODUCTS_LOADING";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";
export const CREATE_PRODUCT_START = "CREATE_PRODUCT_START";
export const CREATE_PRODUCT_SUCCESS = "CREATE_PRODUCT_SUCCESS";
export const CREATE_PRODUCT_FAILURE = "CREATE_PRODUCT_FAILURE";

export const fetchProducts = () => dispatch => {
  dispatch({ type: FETCH_PRODUCTS_LOADING });
  axiosWithAuth()
    .get("https://evendsapi.herokuapp.com/api/products")
    .then(res => dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: res.data }))
    .catch(error => dispatch({ type: FETCH_PRODUCTS_LOADING, payload: error }));
};

export const createProduct = (newProduct, id) => dispatch => {
  dispatch({ type: CREATE_PRODUCT_START });
  axiosWithAuth()
    .post(`https://evendsapi.herokuapp.com/api/${id}/products`, newProduct)
    .then(res => dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: CREATE_PRODUCT_FAILURE, payload: err }));
};
