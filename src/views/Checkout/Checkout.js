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
import { useCartContext } from "../../contexts/CartContext";
import "./Checkout.scss";

const StripeForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [user, setUser] = useState();
  const { userId } = useParams();
  const navigate = useNavigate();
  const { cartItems, deleteProduct } = useCartContext();

  useEffect(() => {
    getCurrentUser(userId).then((user) => setUser(user));
  }, [userId]); // en onlyhacks esto está vacío

  const totalCart = () => {
    return cartItems.reduce((acc, product) => {
      return acc + product.price;
    }, 0);
  };

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
      payment({
        amount: totalCart(),
        paymentId: id,
        user: user.id,
        items: cartItems,
        paymentType: "card",
      }).then((result) => {
        localStorage.setItem("cart", JSON.stringify([]));
        navigate("/profile");
      });
    }
  };

  return (
    <>
    <div className="product-headline">
      <h3>Product</h3>
      <h3>Price</h3>
      </div>
      <form onSubmit={handleSubmit}>
        {cartItems &&
          cartItems.map((cartItem) => {
            return (
              <div className="product" key={cartItem.id}>
              <img className="product-image" src={cartItem.image} alt={cartItem.commonName} />
                <p>
                  <strong>{cartItem.commonName}</strong>
                </p>
                <p>{cartItem.price}€</p>
                <i
                  onClick={() => deleteProduct(cartItem.id)}
                  className="fa-solid fa-trash"
                ></i>
              </div>
            );
          })}
        <h2 className="total">Total: {totalCart()}€</h2>
        <CardElement />
        <button className="order" type="submit" disabled={!stripe || !elements}>
          Confirm order
        </button>
      </form>
    </>
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
