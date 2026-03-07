import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../pages/CreateContext';
import image from '../assets/836b95d0af5de480b75f294fe00e3c8f.jpg'

const Navbar = () => {
  const {user,logOut}=useContext(AuthContext)
    const link=
    <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/jobs">Find Jobs</NavLink></li>
    <li><NavLink to="/candidate">Candidate</NavLink></li>
    </>
    const handleLogout=()=>{
      logOut()
    }
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
  <div className=" pr-7 font-semibold text-xl sm:text-2xl flex sm:hidden justify-center items-center"><img className=' w-6 md:w-12 rounded-full  gap-1' src="/public/job-logo-symbol-vector-design-illustration-2BJTR67.jpg" alt="" />Job<span className='sm:text-2xl text-yellow-600'>Finder</span></div>
  <div className="navbar-center hidden md:flex">
    <ul className="menu menu-horizontal space-x-4 px-1">
      {link}
    </ul>
  </div>
  {/* Modal */}

<dialog id="my_modal_5" className="modal  modal-middle">
  <div className="modal-box p-3 md:p-4 max-w-2/3">
<div className=' max-w-1/7 text-center md:pl-5 mx-auto'>
     {user?.photoURL ? <img className='w-15 rounded-full' src={user.photoURL} alt="" /> : <img className='w-15 rounded-full text-amber-600' src={image} alt="" /> }
  
  </div> 
    <h3 className="font-bold text-xl md:text-2xl text-center max-w-2/7 mx-auto">{user?.displayName}</h3>
    <p className="py-4 pr-5 flex items-center sm:gap-1"><span className='md:text-xl font-semibold'>Email:</span> {user?.email}</p>
   <div className='flex justify-between items-center'>
    <div>
      <form method="dialog">
        <button onClick={handleLogout} className=' modal-action btn bg-amber-300 mt-6'>Logout</button>
      </form>
    </div>
     <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
   </div>
  </div>
</dialog>






  <div className="navbar-end">
    
    {
      user ? <div className='flex items-center gap-1'> {user.photoURL ? <img className='w-9 rounded-full' onClick={()=>document.getElementById('my_modal_5').showModal()} src={user.photoURL} alt="" /> : <img className='w-8 md:w-10 rounded-full' onClick={()=>document.getElementById('my_modal_5').showModal()} src={image} alt="" /> }   <p className='md:text-xl font-semibold'>{user.displayName}</p> </div>: <Link to='/login' className="btn bg-amber-400 ">Login</Link>
    }
  </div>
</div>
    );
};

export default Navbar;