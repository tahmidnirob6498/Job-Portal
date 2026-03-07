import React, { use, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, Navigate, useLocation, useNavigate } from 'react-router';
import { AuthContext } from './CreateContext';

const Signup = () => {
  const routelocation=useLocation()
  const location=routelocation.state
  // console.log(location)
  // const {signUp,signWithGoogle,updateUserProfile,handleEmailVerification,user,setUser}=use(AuthContext)
  const {signUp,signWithGoogle,updateUserProfile,setUser}=use(AuthContext)
  const navigate=useNavigate()
  const [err,setErr]=useState('')
    const handleSignUp=(e)=>{
  e.preventDefault()
  setErr('')
  setUser(null)
  const name=e.target.name.value
  const email=e.target.email.value
  const photo=e.target.photo.value
  const password=e.target.password.value
  
  const obj={
    displayName:name,
    photoURL:photo
  }

   if(password.length<8){
  setErr('Password should be 8 character')
  return
 }
 signUp(email,password)
 .then(()=>{
  // handleEmailVerification().then(()=>alert('Email sent on your account for veification.Please verified your account')).catch(err=>setErr(err.code))
   updateUserProfile(obj)
   
  navigate(location.pathname ? location.pathname : '/')
  
  
 })
 .catch(err=>setErr(err.code))

    }

    const handleGoogle=()=>{
      setErr('')
      signWithGoogle()
      .then(()=>{
      navigate(location.pathname ? location.pathname : '/')
      })
      .catch(err=>setErr(err.code))
    }
    return (
        <div className='px-3'>
             <div className="card bg-base-100  mt-15 mx-auto max-w-sm border shrink-0 border-amber-300 shadow-2xl">
     
      <div className="card-body ">
        <h1 className='text-center text-2xl font-semibold'>Create Your Account</h1>
        <form onSubmit={handleSignUp} className="fieldset">
          <label className="label">Name</label>
          <input type="text" name='name' required className="input" placeholder="Name" />
          <label className="label">Email</label>
          <input type="email" name='email' required className="input" placeholder="Email" />
          <label className="label">Photo url</label>
          <input type="text" name='photo' className="input" placeholder=" Your photo url" />
          <label className="label">Password</label>
          <input type="password" name='password' required className="input" placeholder="Password" />
          <button type='submit' className="btn bg-amber-400 mt-4">Create account</button>
          <p className='text-center'>Already have an account?<Link className='text-amber-500' to='/login'>Login</Link></p>
        </form>
      </div>
    </div>
    <p className='text-red-600 text-center mt-2'>{err}</p>
    <div className='divider w-1/3 mx-auto'>Or</div>
        <button onClick={handleGoogle} className="btn flex btn-outline btn-secondary 
         mx-auto max-w-2/3  items-center"> <FcGoogle size={24} />
     Continue with google</button>
     
        </div>
    );
};

export default Signup;