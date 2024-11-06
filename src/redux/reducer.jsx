// reducer.js
const initialState = {
    cart: {
      items: [], // Initialize items as an empty array
    },
    orderConfirmation: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          cart: {
            ...state.cart,
            items: [...state.cart.items, action.payload], // Add new item to the cart
          },
        };
      case 'ORDER_SUBMITTED':
        return { ...state, orderConfirmation: action.payload };
      // Add other cases as needed
      default:
        return state;
    }
  };
  
  export default reducer;