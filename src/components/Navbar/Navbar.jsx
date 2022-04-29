import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import { logout } from '../../store/AccessTokenStore';
import './Navbar.scss';

const Navbar = () => {
  const { user } = useAuthContext();

  return (
    <>
      <Link to="/">Home</Link>
      {!user ?
        (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        ) :
        (
          <>
          
            <Link to="/profile">Profile</Link>
            <Link to="/plant/new">Create plant</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/shoppingCart">Checkout</Link>
            <button onClick={logout}>Logout</button>
          </>
        )   
      }
    </>
  )
}

export default Navbar;