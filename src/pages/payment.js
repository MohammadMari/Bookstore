// payment.js
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import PaymentForm from './paymentForm'; 

const stripePromise = loadStripe("pk_test_51OHzwvFlmAFIfUyW8pgAo3zYT0pwqCA9YBPp8jOn4iNVElIxU877lv3jqKHI2HiduwoSa0QRx1sn8gZMB9VDJ4Xl00a6R5dVNX");

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
