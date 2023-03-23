import React, {createContext, useContext} from "react";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    RecaptchaVerifier,
    signInWithEmailAndPassword,
    signInWithPhoneNumber,
    signOut
} from 'firebase/auth'
import {auth} from '../config/Firebase'


// @ts-ignore
const UserAuthContext=createContext()
export function UserAuthContextProvider({children}:any){
    const [user,setUser]=React.useState<{}|null>(null);

    function logIn(email:string,password:string){
        return signInWithEmailAndPassword(auth,email, password);
    }
    function signUp(email:string,password:string){
        return createUserWithEmailAndPassword(auth,email, password)
    }
    function logOut(){
       return signOut(auth)
    }

    function setUpRecaptcha(number:string) {
        const recaptchaVerifier = new RecaptchaVerifier(
            "recaptcha-container",
            {},
            auth
        );
        recaptchaVerifier.render();
        return signInWithPhoneNumber(auth, number, recaptchaVerifier);
    }
    React.useEffect(()=>{
        onAuthStateChanged(auth,(currentUser)=>{
            setUser (currentUser);
        });
    },[])
    // @ts-ignore
    return <UserAuthContext.Provider value={{user,setUpRecaptcha,logIn,signUp,logOut}}>
        {children}
    </UserAuthContext.Provider>
}

export function useUserAuth(){
    return useContext(UserAuthContext)
}