import React, { useState, useContext, useEffect } from 'react';
import { ContextState } from "../Context/Context";
import axios from "axios";
import { Link } from 'react-router-dom';

import Title from "../Components/Title";
import Navigation from "../Templates/Navigation";

const CalendarDefaultPage = () => {
    const context = useContext( ContextState )
    const [ data, setData ] = useState()
    
    useEffect(() => {
        if (context.isLoggedIn === true) {
            axios({
                url: `http://localhost:4000/api/v1/users/${context.userID}`,
                method: "GET",
                headers: {
                Authorization: `Bearer ${context.token}`
                },
            }).then(request => {
                setData(request.data) 
            })
        }
    }, [ context.isLoggedIn, context.token, context.userID ])

    console.log(data && data.activities);
    
    
    return ( 
        <main className="h-screen">
            <div  className="p-[20px]">
                <Title text="Kalender" />

                { context.isLoggedIn ? 
                <div>
                    {data && Object.values(data?.activities).map(({name, assetId, time, weekday}, i ) => {
                        <p>dsa</p>
                        return <Link key={ i } to={`/Activity/${assetId}`}>
                            <div className="h-[7rem] p-[20px] rounded-[11px] mt-[1rem] text-Dark bg-Secondary flex flex-col justify-around">
                                <h1 className="text-36 font-bold whitespace-nowrap overflow-ellipsis overflow-hidden">{name}</h1>
                                <p className="w-[20rem] space-x-4 text-18 font-medium"
                                    >{weekday} - {time}</p>
                            </div>
                        </Link>
                    })} 
                </div>

                : 
                <div className=" my-[40px]">
                    <h1 className="text-24">Du skal være logget ind for at se din kalender </h1>
                    <Link to="/Login">
                        <button className="w-full my-[20px] px-[100px] py-[15px] text-Dark bg-Secondary rounded-[10px] shadow-gray-600 shadow-md"
                            >Log ind
                        </button>
                    </Link>
                </div>
                }

            </div>
            <Navigation />
        </main>
     );
}
 
export default CalendarDefaultPage;