
import { useEffect, useState } from 'react';
import firebaseInitilize from './../Components/firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";

firebaseInitilize();

const useFirebase=()=>{
    const [user,setUser]=useState({});
    const auth = getAuth();

  //log in with google
    const logInWithGoogle=()=>{
        const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
      // .then((result) => {
      //   setUser(result.user);
        
      //   })
    }
  
    //logout
    const logOut=()=>{
        signOut(auth).then(() => {
            setUser({});
        })
    }

   //manage user
   useEffect(()=>{
       onAuthStateChanged(auth, (user) => {
  if (user) {
    setUser(user);
  } 
});
   },[])

    //return
    return{
        user,
        logInWithGoogle,
        logOut,

    }
}

export default useFirebase;