import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
import { NavLink } from 'react-router';

const Footer = () => {
    return (
       <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
  <nav className="grid grid-flow-col gap-6">
      <NavLink className='p-1 px-2 rounded-xl' to="/">Home</NavLink>
    <NavLink className='p-1 px-2 rounded-xl' to="/jobs">Find Jobs</NavLink>
    <NavLink className='p-1 px-2 rounded-xl' to="/candidate">Candidate</NavLink>
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a href='https://www.instagram.com/tahmidnirob75?igsh=Nm1oN3BuOTlsdDMy'>
  <AiFillInstagram size={26} />
      </a>
      <a href='https://github.com/tahmidnirob6498'>
        <FaGithub size={26}/>
      </a>
      <a href='https://www.facebook.com/tahmid.hasan.nirob.2024'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>
  </nav>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by JobFinder</p>
  </aside>
</footer>
    );
};

export default Footer;