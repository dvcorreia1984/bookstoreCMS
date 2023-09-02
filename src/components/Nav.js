import React from 'react';
import { Link } from 'react-router-dom';
import user from '../images/user.png';

const Nav = () => (
  <nav className="panel-bg">
    <div>
      <ul className="ml-8 flex flex-column text-sm gap-5 justify-start items-center bg-white h-10">
        <li>
          <h1 className="font-montserrat text-3xl font-bold text-bs-azure">Bookstore CMS</h1>
        </li>
        <li>
          <Link to="/">BOOKS</Link>
        </li>
        <li id="categories">
          <Link to="/categories">CATEGORIES</Link>
        </li>
        <li
          className="flex flex-grow"
        />
        <li>
          <Link to="/login">
            <div className="mr-8 w-10 h-10 border-2 border-gray-100-500 rounded-full flex items-center justify-center">
              <div><img src={user} alt="user" /></div>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
