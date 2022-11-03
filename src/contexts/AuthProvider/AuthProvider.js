import React, { createContext, useEffect, useState } from 'react';
import { getAuth , createUserWithEmailAndPassword , onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth';
import app from '../../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    const [loader , setLoader] = useState(true);

    const createUser = (email , password) =>{
        setLoader(true);
        return createUserWithEmailAndPassword(auth , email , password);
    }

    const login = (email , password) =>{
        setLoader(true);
        return signInWithEmailAndPassword(auth , email , password);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , currentUser =>{
            console.log(currentUser);
            setUser(currentUser);
            setLoader(false);
        });

        return () =>{
            return unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        loader,
        createUser,
        login
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;