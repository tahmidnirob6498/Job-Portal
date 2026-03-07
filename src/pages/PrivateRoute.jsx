import React, { use } from 'react';
import { AuthContext } from './CreateContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
     const location=useLocation()
      console.log(location)
    const {user}=use(AuthContext)
 if(user){
  return  children
 }
 else{
    return <Navigate state={location} to='/login'></Navigate>
 }
};

export default PrivateRoute;