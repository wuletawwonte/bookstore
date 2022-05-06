import React from 'react';
import { FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import links from '../routes';
import './Navbar.css';

const Navbar = () => (
  <div className="navbar">
    <div className="name-menu">
      <h1>Bookstore CMS</h1>
      <nav>
        <ul className="menu-links">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink className={({ isActive }) => (isActive ? 'menu-item active' : 'menu-item inactive')} to={link.path}>{link.text}</NavLink>
            </li>
          ))}

        </ul>
      </nav>
    </div>

    <FaUser className="user-icon" />

  </div>
);

export default Navbar;
