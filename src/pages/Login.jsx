import React from 'react';
import { Link } from 'react-router';

const Login = () => {
  const handleLogin=(e)=>{
 e.preventDefault()
 const email=e.target.email.value
 const password=e.target.password.value
 console.log(email,password)

  }

    return (
        <div className="card bg-base-100 w-full mt-15 mx-auto max-w-sm border shrink-0 border-amber-300 shadow-2xl">
     
      <div className="card-body">
        <h1 className='text-center text-2xl font-semibold'>Login</h1>
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn bg-amber-400 mt-4">Login</button>
          <p className='text-center'>Don't have an account?<Link className='text-amber-500' to='/signup'>Create account</Link></p>
        </form>
      </div>
    </div>
    );
};

export default Login;