import axios from 'axios';

export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';

export const fetchProducts = () => {
  return async dispatch => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      const products = response.data;
      console.log(products);
      dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
};
