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
