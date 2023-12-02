// payment.js
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import PaymentForm from './paymentForm'; 

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const Payment = () => {
  return (
    <div>
      <h2>Payment Page</h2>
      <div className='payment-container'>
          <Elements stripe={stripePromise}>
            <PaymentForm />
          </Elements>
      </div>

    </div>
  );
};

export default Payment;
