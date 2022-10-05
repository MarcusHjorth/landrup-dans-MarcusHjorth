import React, { useContext } from "react";
import Baggrund from "../Assets/LoginBaggrund.png"
import LoginForm from "../Components/Login/LoginForm";
import { ContextState } from "../Context/Context";
import LoadingScreen from "../Templates/LoadingScreen";

const LoginPage = () => {

    const context = useContext( ContextState )
    
    return ( 
        <main className="h-screen">
            {context.isLoading && <LoadingScreen /> }

            <figure className="relative h-full w-screen overflow-hidden">
                <img src={Baggrund} alt="" className="h-full w-full object-cover" />
{/*                 <div className="absolute top-[-150px] h-[1000px] rotate-[70deg] w-[550px] bg-Dark bg-opacity-40 overflow-hidden"></div> */}
            
                <LoginForm />
              
            </figure>
        </main>
     );
}
 
export default LoginPage;