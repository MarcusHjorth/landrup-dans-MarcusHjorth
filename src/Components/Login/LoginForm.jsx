import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { ContextState } from "../../Context/Context";


const schema = yup.object({
    username: yup.string("Indsæt et gyldigt brugernavn").
        required("Indsæt et gyldigt brugernavn").
        max(16, "Indsæt et gyldigt brugernavn").
        matches(/^[aA-zZÅ-ÿ - 0-9]+$/, "Brugernavnet må kun indeholde bogstaver"),

    password: yup.string().required("Indsæt en gyldig adgangskode").
        min(4, "Indsæt en gyldig adgangskode" ).
        max(32, "Indsæt en gyldig adgangskode" ),
        /* matches("^(?=.*[aA-zZÅ-ÿ])(?=.*[0-9])",
            "Kodeordet skal indeholde mindst 1 stort og småt bogstag, og mindst 1 tal"
        ), */
}).required()

const LoginForm = () => {
    const { register, handleSubmit, reset, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    }); 
    const navigate = useNavigate();
    const context = useContext( ContextState )
    
    const [ loginError, setLoginError ] = useState(null)

    const onSubmit = data => {
        console.log(data)
        context.setUsername(data.username)
        context.setPassword(data.password)
        context.setIsLoading(true)
        
        fetch("http://localhost:4000/auth/token", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((result) => {
            reset()
            console.log(result);
            context.setToken(result.token)
            context.setUserID(result.userId)
            context.setIsLoggedIn(true)
            context.setIsLoading(false)

            console.log(context.token);
            console.log(context.isLoading);
            navigate('/Activities', { replace: true });
        })
        .catch((err) => {
            console.log('Error', err.message);
            setLoginError(true)
            context.setIsLoading(false)
        })
    }
    return ( 
        <section className="absolute top-[20vh] p-[40px] w-full">
            <h1 className="text-[48px]">Log ind</h1>
            {loginError && <p>Unauthorized user!</p>}

            <form className="flex flex-col items-center text-Dark"
                onSubmit={handleSubmit(onSubmit)}>

                <p className="text-white self-start"> {errors.username?.message} </p>
                <input 
                type="text" 
                placeholder="brugernavn" 
                className="outline-none bg-Secondary my-[10px] p-[12px] w-full"
                    {...register("username")}
                />

                <p className="text-white self-start"> {errors.password?.message} </p>
                <input 
                type="password" 
                placeholder="adgangskode" 
                className="outline-none bg-Secondary my-[10px] p-[12px] w-full"
                    {...register("password")}
                />
                
                <input 
                    type="submit" 
                    value="Log ind" 
                    className="my-[20px] px-[100px] py-[20px] text-Secondary bg-Primary rounded-[10px] shadow-gray-600 shadow-md"/>
            </form>
        </section>
     );
}
 
export default LoginForm;