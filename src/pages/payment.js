// payment.js
import React, { useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./paymentForm";
import {useAuth} from './auth'
import { useNavigate } from "react-router-dom"

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_KEY}`);

const Payment = () => {
  const user = useAuth().user;
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  });
  
  return (
    <div>
      <h2>Payment Page</h2>
      <div className="payment-container">
        <Elements stripe={stripePromise}>
          <PaymentForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
