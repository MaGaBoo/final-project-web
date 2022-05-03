import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import { logout } from '../../store/AccessTokenStore';
import './Navbar.scss';

const Navbar = () => {
  const { user } = useAuthContext();

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
          <>
          
            <Link to="/profile" className="navbar__link">Profile</Link>
            <Link to="/plant/new" className="navbar__link">Create plant</Link>
{/*             <Link to="/orders">Orders</Link> */}
            <Link to="/shoppingCart" className="navbar__link">Checkout</Link>
            <button onClick={logout}>Logout</button>
          </>
        )   
      }
    </nav>
  )
}

export default Navbar;