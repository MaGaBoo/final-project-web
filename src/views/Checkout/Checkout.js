import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { payment, getCurrentUser } from "../../services/UsersService";
import { useParams, useNavigate } from "react-router-dom";

const StripeForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [user, setUser] = useState();
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getCurrentUser(userId).then((user) => setUser(user));
<<<<<<< HEAD
  }, [userId]);
=======
  }, []);
>>>>>>> 95595a257508ef3a58dc36b187f1305cd8714349

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
    } else if (paymentMethod) {
      const { id } = paymentMethod;
      payment({ amount: 1, subUserId: userId, payment: id }).then((result) => {
        navigate("/orderConfirmation");
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="my-4"></div>
      <CardElement />
      <button type="submit" disabled={!stripe || !elements}>
        Shopping cart
      </button>
    </form>
  );
};

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const CheckoutForm = () => (
    <div className="d-flex text-center align-items-center flex-column justify-content-center">
    <Elements stripe={stripePromise}>
      <StripeForm />
    </Elements>
  </div>
);

export default CheckoutForm;
