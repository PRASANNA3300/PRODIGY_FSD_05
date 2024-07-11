import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../actions/authActions';

const Navbar = () => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const authLinks = (
    <ul>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <a onClick={() => dispatch(logout())} href="#!">
          Logout
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <nav>
      <h1>
        <Link to="/">SocialApp</Link>
      </h1>
      {auth.isAuthenticated ? authLinks : guestLinks}
    </nav>
  );
};

export default Navbar;
