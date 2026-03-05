import React from 'react';

const Login = () => {
    return (
        <div className="card bg-base-100 w-full mt-15 mx-auto max-w-sm shrink-0 border shadow-2xl">
     
      <div className="card-body">
        <h1 className='text-center text-3xl font-bold'>Login</h1>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn bg-amber-400 mt-4">Login</button>
        </fieldset>
      </div>
    </div>
    );
};

export default Login;