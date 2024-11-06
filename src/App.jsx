import React from 'react';
import Checkout from './components/Checkout';
import { useSelector } from 'react-redux';

const App = () => {
  const orderConfirmation = useSelector(state => state.orderConfirmation);

  return (
    <div className="App">
      <header>
        <h1>Glam.</h1>
      </header>
      <main>
        {orderConfirmation ? (
          <div className="order-confirmation">
            {/* <h2>Order Confirmation</h2>
            <p>Thank you for your order!</p>
            <p>Order ID: {orderConfirmation.order_id}</p>
            <p>{orderConfirmation.message}</p> */}
          </div>
        ) : (
          <Checkout />
        )}
      </main>
      <footer>
        <p>&copy; 2024 Online Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;