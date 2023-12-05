// PaymentForm.js
import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import styles from "./payment.css";
import { useCart } from "./CartContext";
import { supabase } from "./supabase";
import {useAuth} from './auth'



const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const user = useAuth().user;
  const [name, setName] = useState("");
  const [email, setEmail] = useState(user.email);
  const [errorMessage, setErrorMessage] = useState(null);
  const { state, dispatch } = useCart();


  async function logOrder (order) {
    const {data, error} = await supabase.from('orders').insert(order).select();
    if (error) {
      console.log(error);
      console.log("error logging order");
      return;
    }

    return data[0];
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      console.log("Stripe.js has not loaded yet.");
      return;
    }

    // Additional validation for name and email
    if (!name || !email) {
      setErrorMessage("Please enter name and email.");
      return;
    }

    // Clear previous error messages
    setErrorMessage(null);

    // Create a payment method using the card element
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details: {
        name: name,
        email: email,
      },
    });

    if (error) {
      console.error(error);
      setErrorMessage(error.message);
      return;
    }

    // Now you have a payment method, you can send it to your backend
    // to create a PaymentIntent and confirm the payment

    // For demonstration purposes, you can log the paymentMethod id
    console.log("PaymentMethod:", paymentMethod.id);

    // You may want to send the paymentMethod.id to your server
    // and handle the payment confirmation and order processing there

    const order = await logOrder({user_id: user.id, total_cost: state.cartItems
      .reduce((total, item) => total + item.price, 0)
      .toFixed(2), payment_method_id: 'weee'});

    var bookOrderLogs = [];
    for (var i = 0; i < state.cartItems.length; i++) {
      bookOrderLogs.push({order_id: order.id, book_id: state.cartItems[i].id});
    }

    await supabase.from('books_in_order').insert(bookOrderLogs);
  };

  return (
    <div className={styles.container}>
      <form className={styles.paymentContainer} onSubmit={handleSubmit}>
        <label>
          Name on Card:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <CardElement style={{ base: { fontSize: "16px" } }} />
        {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
        <button
          type="submit"
          style={{ width: "200px", margin: "auto", marginTop: "20px" }}
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
