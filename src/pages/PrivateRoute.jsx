import React, { use } from 'react';
import { AuthContext } from './CreateContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../component/Loading';

const PrivateRoute = ({children}) => {
     const location=useLocation()
      
    const {user,loading}=use(AuthContext)
    if(loading){
      return <Loading></Loading>
    }

 if(user){
  return  children
 }
 else{
    return <Navigate state={location} to='/login'></Navigate>
 }
};

export default PrivateRoute;