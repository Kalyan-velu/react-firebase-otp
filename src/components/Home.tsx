import React from 'react'
import {useUserAuth} from "../context/UserAuthContext";
import {useNavigate} from "react-router-dom";

const Home=()=>{
    // @ts-ignore
    const {logOut,user}=useUserAuth()

    const navigate=useNavigate()
    console.log(user)

    const handleLogOut = async ()=>{
        try {
            await logOut()
            navigate('/')
        }catch (e:any) {
            console.error(e.message)
        }
    }


    return(
        <div className="home-container">
            Hello Welcome 
            <strong>{user &&
                // @ts-ignore
                user.phoneNumber}</strong>
            <div>
             <button type="button" className="btn btn-warning" onClick={handleLogOut}>Logout</button>
            </div>
        </div>
 )
}

export default Home