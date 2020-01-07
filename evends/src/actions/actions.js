import axiosWithAuth from "../utils/axiosWithAuth";

export const FETCH_PRODUCTS_LOADING = "FETCH_PRODUCTS_LOADING";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

export const fetchProducts = () => dispatch => {
  dispatch({ type: FETCH_PRODUCTS_LOADING });
  axiosWithAuth()
    .get("")
    .then(res => dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: res.data }))
    .catch(error => dispatch({ type: FETCH_PRODUCTS_LOADING, payload: error }));
};
