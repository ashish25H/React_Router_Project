import React from "react";
import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="">
        <ul className="flex justify-around items-center bg-slate-700 text-[#fff] p-3">
          <Link to="/Home">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
      <Outlet></Outlet>
    </>
  );
};
export default NavBar;
