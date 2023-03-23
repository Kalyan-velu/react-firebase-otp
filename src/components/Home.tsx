import React from 'react'
import {useUserAuth} from "../context/UserAuthContext";
import {useNavigate} from "react-router-dom";

const Home=()=>{
    // @ts-ignore
    const {logOut,user}=useUserAuth()

    const navigate=useNavigate()

    const handleLogOut = async ()=>{
        try {
            await logOut()
            navigate('/')
        }catch (e:any) {
            console.error(e.message)
        }
    }


    return(
     <>
        <div className="home-container">
            Hello Welcome <br/>
            {user &&
                // @ts-ignore
                user.email}
        </div>
         <div>
             <button onClick={handleLogOut}>Logout</button>
         </div>
     </>
 )
}

export default Home