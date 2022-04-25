import { useAuthContext } from "../../contexts/AuthContext";
import { useCartContext } from "../../contexts/CartContext";
import './Cart.scss'


const Cart = () => {
  const { cartItems } = useCartContext();
  const { user } = useAuthContext();

  const totalCart = () => {
    return cartItems.reduce((acc, product) => {
      return acc + product.price
    }, 0)
  }


  return (

    (user && (
      <div className="cart-item">
      {cartItems && cartItems.map(cartItem => {
        return (
          <div key={cartItem.id} className="cart-item__wrapper">
            <p className="cart-item__title"><strong>{cartItem.commonName}</strong></p>
            <p className="cart-item__price">{cartItem.price}€</p>
          </div>
        )
      })}
      <h2 className="cart-item__total">Total: {totalCart()}€</h2>

    </div>
    ) )
    
  )
}

export default Cart;