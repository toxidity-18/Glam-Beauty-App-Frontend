import axios from 'axios';

export const submitOrder = (orderData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:5000/api/checkout', orderData);
      dispatch({ type: 'ORDER_SUBMITTED', payload: response.data });
    } catch (error) {
      console.error('Error submitting order:', error);
    }
  };
};