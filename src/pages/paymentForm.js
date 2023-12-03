// PaymentForm.js
import React from 'react';
import { PaymentElement,CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    console.log('hello');
    e.preventDefault();

    if (!stripe || !elements) {
        console.log('biaaatch');
      return;
    }

    // When checking out, you want to make sure a user has an account, redirect them to the login/signup page if necessary.
    // After the user completes their payment
    // under the books table, for each book provided make sure to mark them as purchased (there is already a column for it just mark it as true)
    // afterwards, create a new order in the orders table. It takes total_cost and user_ordered (FK to user id). (dont worry about date ordered because it autogens that)
    // once the order id is created, we start mapping the books ordered to that id
    // to do so, for each book in the order, we create a entry in the books_in_order table (takes a FK for book id and order id).
    // I'm not sure if stripe provided like a confirmation number or anything but if it does please create a column in the orders table and save it there.

    // Your payment processing logic here
    // For example, create a payment intent and confirm the payment

    // const { token, error } = await stripe.createToken(elements.getElement(CardElement));
    // Handle the token or error

    // OR use confirmCardPayment for PaymentIntents
    // const result = await stripe.confirmCardPayment(clientSecret, {
    //   payment_method: {
    //     card: elements.getElement(CardElement),
    //   },
    // });

    // Handle the result
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" style={{width: '200px', align: 'center', display: 'block', justifyContent: 'center', margin: 'auto'}}>Pay</button>
        </form>
    </div>
    
  );
};

export default PaymentForm;
