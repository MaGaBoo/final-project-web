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
    <div className="wrapper main-checkout">
      <div className="product-headline">
        <div className="product-left">
          <h3>Product</h3>
        </div>

        <div className="product-right">
          <h3>Price</h3>
        </div>
      </div>

      <div>
        {cartItems &&
          cartItems.map((cartItem) => {
            return (
              <div className="checkout-product" key={cartItem.id}>
                <div className="checkout-product-capture">
                  <img
                    className="checkout-product-image"
                    src={cartItem.image}
                    alt={cartItem.commonName}
                  />
                </div>

                <div className="checkout-product-text">
                  <p>
                    <strong>{cartItem.commonName}</strong>
                  </p>
                  <p
                    onClick={() => deleteProduct(cartItem.id)}
                    className="remove"
                  >
                    Remove
                  </p>
                </div>

                <div className="checkout-product-price">
                  <p>{cartItem.price}€</p>
                </div>
              </div>
            );
          })}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="total">
          <div>Total</div>
          <div className="total-cart">{totalCart()}€</div>
        </div>
        <br />
        <br />
        <br />
        <div className="product-headline">
          <h3>Payment Method</h3>
        </div>
        <br />
        <CardElement className="card" />

        <div className="move-button">
          <button
            className="checkout"
            type="submit"
            disabled={!stripe || !elements}
          >
            Checkout
          </button>
        </div>
      </form>
      <br />
    </div>
  );
};

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const CheckoutForm = () => (
  <div>
    <Elements stripe={stripePromise}>
      <StripeForm />
    </Elements>
  </div>
);

export default CheckoutForm;
