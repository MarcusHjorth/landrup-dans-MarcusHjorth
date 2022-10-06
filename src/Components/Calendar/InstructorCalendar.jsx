import React, { useState, useContext, useEffect } from 'react';
import { ContextState } from "../../Context/Context";
import axios from "axios";
import { Link } from 'react-router-dom';

const InstructorCalendar = () => {
    const context = useContext( ContextState )
    const [ data, setData ] = useState()
    
    useEffect(() => {
        axios({
            url: `http://localhost:4000/api/v1/activities`,
            method: "GET",
        }).then(request => { 
            setData(request.data)
        })
    }, [ ])

    return ( 
        <div>
            {data && data.filter(instructor => instructor.instructorId === context.userID).map(({name, assetId, time, weekday}, i ) => {
                return <Link name={name}  key={ i } to={`/CalenderAdmin/${assetId}`}>
                    <div className="h-[7rem] p-[20px] rounded-[11px] mt-[1rem] text-Dark bg-Secondary flex flex-col justify-around">
                        <h1 className="text-36 font-bold whitespace-nowrap overflow-ellipsis overflow-hidden">{name}</h1>
                        <p className="w-[20rem] space-x-4 text-18 font-medium"
                            >{weekday} - {time}
                        </p>
                    </div>
                </Link>
            })} 
        </div> 
     );
}
 
export default InstructorCalendar;