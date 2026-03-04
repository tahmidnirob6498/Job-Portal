import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    const link=
    <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/jobs">Find Jobs</NavLink></li>
    <li><NavLink to="/blogs">Blogs</NavLink></li>
    </>
    return (
       <div className="navbar bg-base-100 shadow-sm max-w-11/12 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {link}
      </ul>
    </div>
    <div className=" font-semibold   sm:text-2xl hidden sm:flex justify-center items-center"><img className=' w-6 md:w-12 rounded-full  gap-1' src="/public/job-logo-symbol-vector-design-illustration-2BJTR67.jpg" alt="" />Job<span className='sm:text-2xl text-yellow-600'>Finder</span></div>
  </div>
  <div className=" font-semibold  sm:text-2xl flex sm:hidden justify-center items-center"><img className=' w-6 md:w-12 rounded-full  gap-1' src="/public/job-logo-symbol-vector-design-illustration-2BJTR67.jpg" alt="" />Job<span className='sm:text-2xl text-yellow-600'>Finder</span></div>
  <div className="navbar-center hidden md:flex">
    <ul className="menu menu-horizontal space-x-4 px-1">
      {link}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-amber-400 ">Login</a>
  </div>
</div>
    );
};

export default Navbar;