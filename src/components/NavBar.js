import React from "react";

import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-red-600">
      <div className="container mx-auto justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest "
          >
            AH Naeem
          </NavLink>
          <NavLink
            to="/blog"
            activeClassName="text-red-100 bg-red-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
          >
            Blog posts
          </NavLink>
          <NavLink
             activeClassName="text-red-100 bg-red-700"
            to="/project"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
          >
            Projects
          </NavLink>
          <NavLink
             activeClassName="text-red-100 bg-red-700"
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
          >
            About me!
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
