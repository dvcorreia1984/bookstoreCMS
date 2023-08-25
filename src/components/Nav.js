import React from 'react';

const Nav = () => (
  <nav>
    <ul className="flex flex-column gap-5 justify-evenly bg-white h-10">
      <li>
        <h1 className="font-montserrat text-3xl font-bold text-blue-500">Bookstore CMS</h1>
      </li>
      <li>
        <a href="/">BOOKS</a>
      </li>
      <li>
        <a href="/categories">AUTHOR</a>
      </li>
      <li>
        <a href="/categories">Login</a>
      </li>
    </ul>
  </nav>
);

export default Nav;
