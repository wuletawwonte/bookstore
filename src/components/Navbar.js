import React from 'react';
import { Link } from 'react-router-dom';
import links from '../routes';

const Navbar = () => (
  <div className="navbar">
    <h1>Bookstore CMS</h1>
    <nav>
      <ul className="menu-links">
        {links.map((link) => (
          <li key={link.id}>
            <Link to={link.path}>{link.text}</Link>
          </li>
        ))}

      </ul>
    </nav>
  </div>
);

export default Navbar;
