import React, { useEffect, useState } from 'react';
import { AuthContext } from './CreateContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from './firebase-config';

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)

    const signUp=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signWithGoogle=()=>{
        const provider=new GoogleAuthProvider()
        return signInWithPopup(auth,provider)
    }

    const updateUserProfile=(obj)=>{
        return updateProfile(auth.currentUser,obj)
    }
    const handleEmailVerification=()=>{
        return sendEmailVerification(auth.currentUser) 
    }
    const handlePass=(email)=>{
        return sendPasswordResetEmail(auth,email)
    }
    const logOut=()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
            console.log(currentUser)
            setUser(currentUser)

        })
        return ()=>{
            unSubscribe()
        }
    })
   const data={
      signUp,
      login,
      signWithGoogle,
      updateUserProfile,
      handleEmailVerification,
      handlePass,
      user,
      setUser,
      logOut
   }
    return(
         <AuthContext value={data}>
            {children}
         </AuthContext>
    )
    
};

export default AuthProvider;