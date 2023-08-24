import React from "react";

function Nav() {
  return (
    <nav className="flex flex-row">
      <ul>
        <li>
          <img src="/images/logo.png" alt="Bookstore CMS" />
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/categories">Categories</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
