import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import { logout } from '../../store/AccessTokenStore';
import { useCartContext } from '../../contexts/CartContext'
import './Navbar.scss';

const Navbar = () => {
  const { user } = useAuthContext();
  const { cartItems } = useCartContext();

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/" className="navbar__link">Home</Link>
      </div>
      {!user ?
        (
          <div className="navbar__menu">
            <Link to="/register" className="navbar__link">Register</Link>
            <Link to="/login" className="navbar__link">Login</Link>
          </div>
        ) :
        (
          <div className="navbar__menu"> 
            <Link to="/plant/new" className="navbar__link">Create plant</Link>
            <Link to="/profile" className="navbar__link"><i class="fa fa-user-o" aria-hidden="true"></i></Link>
            <Link to="/shoppingCart" className="navbar__link">
              <div className="navbar__cart">
                <p className="navbar__cart-number">{cartItems.length}</p>
                <i class="fa fa-shopping-cart navbar__cart-icon" aria-hidden="true"></i>
              </div>
            </Link>
            

            <button onClick={logout}>Logout</button>
          </div>
        )   
      }
    </nav>
  )
}

export default Navbar;