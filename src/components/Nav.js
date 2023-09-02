import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="panel-bg">
    <ul className="flex flex-column gap-5 justify-evenly bg-white h-10">
      <li>
        <h1 className="font-montserrat text-3xl font-bold text-bs-azure">Bookstore CMS</h1>
      </li>
      <li>
        <Link to="/">BOOKS</Link>
      </li>
      <li>
        <Link to="/categories">CATEGORIES</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
