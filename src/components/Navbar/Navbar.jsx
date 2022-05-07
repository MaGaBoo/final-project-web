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
<nav className="navbar navbar-expand-lg navbar-light bg-main" aria-label="Third navbar example">
  <div>
    <button
      className="navbar-toggler collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarsExample03"
      aria-controls="navbarsExample03"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="navbar-collapse collapse" id="navbarsExample03">
    <ul className="navbar-nav">
      <div className="navbar__logo">
        <li className="nav-item">
          <Link to="/" className="navbar__link navbar__link--logo">
            <div className="navbar__myplants">
              <img src={Isotipo} alt="" className="navbar__isotipo" />
              <span className="navbar__logotipo">Oh My Plants</span>
            </div>
          </Link>
        </li>
      </div>

        {!user ?
          (
        <div className="navbar__menu">
          <li className="nav-item">
            <Link to="/shop" className="navbar__link">Shop</Link>
          </li>

          <li className="nav-item">
            <Link to="/register" className="navbar__link">Register</Link>
          </li>

          <li className="nav-item">
            <Link to="/login" className="navbar__link">Login</Link>
          </li>

        </div>

        ) :
        (
          <div className="navbar__menu">

            <li className="nav-item">
              <Link to="/shop" className="navbar__link">Shop</Link>
            </li>

            <li className="nav-item">
              <Link to="/plant/new" className="navbar__link">Create plant</Link>
            </li>

            <li className="nav-item">
              <Link to="/profile" className="navbar__link">
                <i className="fa fa-user-o navbar__user" aria-hidden="true"></i>
              </Link>
            </li>

            <li className="nav-item">
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
                      <div className="dropdown-total">Total</div>
                      <div className="dropdown-total-number">{totalCart()}€</div>
                    </div>  
                    <div className="button-container">
                    <button className="dropdown-button" >View cart</button>
                    </div>
                  </ul>
                </div>
              </div>
            </Link>
            </li>

            <li className="nav-item">
              <button onClick={logout} className="navbar__logout">Logout</button>
            </li>

          </div>
        )
      }

      </ul>
    </div>
  </div>
</nav>
  );
};

export default Navbar;
