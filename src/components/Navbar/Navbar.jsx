import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/plant/new">Create plant</Link>
    </>
  )
}

export default Navbar;