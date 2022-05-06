import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import { logout } from '../../store/AccessTokenStore';
import { useCartContext } from '../../contexts/CartContext';
import Isotipo from '../../assets/images/logo-isotipo.png'
import './Navbar.scss';

const Navbar = () => {
  const { user } = useAuthContext();
  const { cartItems } = useCartContext();

  const totalCart = () => {
    return cartItems.reduce((acc, product) => {
      return acc + product.price
    }, 0)
  };


  return (
   <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/" className="navbar__link navbar__link--logo">
          <div className="navbar__myplants">
            <img src={Isotipo} alt="" className="navbar__isotipo" />
            <span className="navbar__logotipo">Oh My Plants</span>
          </div>
        </Link>
      </div>
      {!user ?
        (
          <div className="navbar__menu">
            <Link to="/shop" className="navbar__link">Shop</Link>
            <Link to="/register" className="navbar__link">Register</Link>
            <Link to="/login" className="navbar__link">Login</Link>
          </div>
        ) :
        (
          <div className="navbar__menu">
            <Link to="/shop" className="navbar__link">Shop</Link>
            <Link to="/plant/new" className="navbar__link">Create plant</Link>
            <Link to="/profile" className="navbar__link">
              <i className="fa fa-user-o navbar__user" aria-hidden="true"></i>
            </Link>
            <Link to="/shoppingCart" className="navbar__link">
              <div className="navbar__cart">
                <p className="navbar__cart-number">{cartItems.length}</p>
                <div className="dropdown">
                  <button
                    className="btn btn-outline dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                  {<i className="fa fa-shopping-cart navbar__cart-icon" aria-hidden="true"></i>}
                  <span className="caret"></span>
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">       
                    {cartItems.map((item) => (
                      <div className="dropdown-products">
                      <div>{item.commonName}</div>
                      <div className="dropdown-price">{item.price}€</div>
                      </div>
                      )
                    )}
                    <div className="dropdown-products">
                      <div>Total</div>
                      <div>{totalCart()}€</div>
                    </div>  
                    <button className="dropdown-button" >Ver cesta</button>
                  </ul>
                </div>
              </div>
            </Link>
            <button onClick={logout} className="navbar__logout">Logout</button>
          </div>
        )   
      }
    </nav>
  );
};

export default Navbar;
