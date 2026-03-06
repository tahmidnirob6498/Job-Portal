import React from 'react';
import { Link } from 'react-router';

const Signup = () => {
    const handleSignUp=(e)=>{
  e.prevntDefault()
  const name=e.target.name.value
  const email=e.target.email.value
  const photo=e.target.photo.value
  const password=e.target.password.value
  console.log(name,password,email,photo)
    }
    return (
         <div className="card bg-base-100 w-full mt-15 mx-auto max-w-sm border shrink-0 border-amber-300 shadow-2xl">
     
      <div className="card-body">
        <h1 className='text-center text-2xl font-semibold'>Create Your Account</h1>
        <form onSubmit={handleSignUp} className="fieldset">
          <label className="label">Name</label>
          <input type="text" name='name' className="input" placeholder="Name" />
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Photo url</label>
          <input type="text" name='photo' className="input" placeholder=" Your photo url" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <button className="btn bg-amber-400 mt-4">Create account</button>
          <p className='text-center'>Already have an account?<Link className='text-amber-500' to='/login'>Login</Link></p>
        </form>
      </div>
    </div>
    );
};

export default Signup;