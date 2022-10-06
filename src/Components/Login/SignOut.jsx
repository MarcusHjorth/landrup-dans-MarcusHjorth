import React, { useContext } from "react";
import { ContextState } from "../../Context/Context";
/* import { useNavigate } from "react-router-dom"; */

const SignOut = () => {
    /* const navigate = useNavigate(); */
    const context = useContext( ContextState )
    
    const SignOut = () => {
        context.setIsLoggedIn(false)
        context.setToken(null)
        context.setUserID("")
        context.setUsername("")
        context.setPassword("")
        context.setUserRole("")
        /* navigate('/Activities', { replace: true }); */
    }
    
    return ( 
        <>
        { context.isLoggedIn && 
            <button onClick={ SignOut } className="w-full mb-[80px] my-[20px] px-[100px] py-[15px] text-Dark bg-Secondary rounded-[10px] shadow-gray-600 shadow-md">
                Sign out
            </button>
        }
        </>
     );
}
 
export default SignOut;