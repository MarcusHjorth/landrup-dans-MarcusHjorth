import React, { useState, useContext, useEffect } from 'react';
import { ContextState } from "../Context/Context";
import axios from "axios";
import { Link } from 'react-router-dom';

import Title from "../Components/Title";
import Navigation from "../Templates/Navigation";
import SignOut from '../Components/Login/SignOut';
import InstructorCalendar from '../Components/Calendar/InstructorCalendar';
import UserCalendar from '../Components/Calendar/UserCalendar';

const CalendarDefaultPage = () => {
    const context = useContext( ContextState )
    
    return ( 
        <main className="h-screen">
            <div  className="p-[20px]">
                <Title text="Kalender" />

                {context.userRole === "instructor" ?  
                    //Er brugeren logget ind som en instructor
                    <InstructorCalendar />

                    : 
                    
                    // er brugeren logget ind ? 
                    context.isLoggedIn === true ?
                    <UserCalendar />
                    : 
                    
                    // Hvis brugeren ikke er logget ind...
                    <div className=" my-[40px]">
                        <h1 className="text-24">Du skal være logget ind for at se din kalender </h1>
                        <Link to="/Login">
                            <button className="w-full my-[20px] px-[100px] py-[15px] text-Dark bg-Secondary rounded-[10px] shadow-gray-600 shadow-md"
                                >Log ind
                            </button>
                        </Link>
                    </div>
                    
                    }

                <SignOut />

            </div>
            <Navigation />
        </main>
     );
}
 
export default CalendarDefaultPage;