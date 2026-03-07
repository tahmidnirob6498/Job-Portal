import React, { use, useRef, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, Navigate, useLocation, useNavigate } from 'react-router';
import { AuthContext } from './CreateContext';

const Login = () => {
  const routelocation=useLocation()
 const location=routelocation.state
 console.log(location)
  const [err,setErr]=useState('')
  const navigate=useNavigate()
  const {login,signWithGoogle,handlePass}=use(AuthContext)
  const inputRef=useRef()
  const handleLogin=(e)=>{
 e.preventDefault()
 setErr('')
 const email=e.target.email.value
 const password=e.target.password.value




 login(email,password)
 .then(()=>{
  //  if(user.emailVerified){
  //   navigate('/')
  //  }
 navigate(location.pathname ? location.pathname : '/')
// else{
//   setErr("Your Email is not Verified")
//   return
// }
 })
 .catch(err=>setErr(err))

  }
    const handleGoogle=()=>{
      setErr('')
      signWithGoogle()
      .then(()=>{
      navigate(location.pathname ? location.pathname : '/')
      })
      .catch(err=>setErr(err.code))
    }
    const handlePassword=()=>{
      const email=inputRef.current.value
      handlePass(email)
      .then(()=>alert('Check your email to reset password'))
      .catch((err)=>setErr(err.code))
    }

    return (
      <div className=' px-3 place-items-center'>
          <div className="card bg-base-100 w-full mt-20  sm:mt-15 max-w-sm mx-auto border shrink-0 border-amber-300 shadow-2xl">
     
      <div className="card-body">
        <h1 className='text-center text-2xl font-semibold'>Login</h1>
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input type="email" ref={inputRef} name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <a onClick={handlePassword} className="link link-hover">Forgot password?</a>
          <button className="btn bg-amber-400 mt-4">Login</button>
          <p className='text-center'>Don't have an account?<Link state={location.state} className='text-amber-500' to='/signup'>Create account</Link></p>
        </form>
      </div>
    </div>
    <p className='text-red-600 text-center mt-2'>{err}</p>
    <div className='divider w-1/3 mx-auto'>Or</div>
    <button onClick={handleGoogle} className="btn flex btn-outline btn-secondary mx-auto max-w-2/3  items-center"> <FcGoogle size={24} />
 Continue with google</button>
      </div>
    );
};

export default Login;