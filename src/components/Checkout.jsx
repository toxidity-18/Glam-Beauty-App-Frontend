import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitOrder } from '../redux/actions';

const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [shippingInfo, setShippingInfo] = useState({ address: '', city: '', zip: '' });
  const [paymentInfo, setPaymentInfo] = useState({ cardNumber: '', expiry: '', cvv: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitOrder({ shippingInfo, paymentInfo, cartItems }));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Shipping Information</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Address"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
          onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="City"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
          onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="ZIP Code"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
          onChange={(e) => setShippingInfo({ ...shippingInfo, zip: e.target.value })}
          required
        />

        <h2 className="text-2xl font-bold mt-6 mb-4 text-center">Payment Information</h2>
        <input
          type="text"
          placeholder="Card Number"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
          onChange={(e) => setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Expiry Date (MM/YY)"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
          onChange={(e) => setPaymentInfo({ ...paymentInfo, expiry: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="CVV"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
          onChange={(e) => setPaymentInfo({ ...paymentInfo, cvv: e.target.value })}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Checkout
        </button>
      </form>
    </div>
  );
};

export default Checkout;