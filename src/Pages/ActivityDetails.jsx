import React, { useState, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import { ContextState } from "../Context/Context";

import Navigation from "../Templates/Navigation";
import AddToActivity from '../Components/ActivityDetails/AddToActivity';

const ActivityDetails = () => {
    const context = useContext( ContextState )
    const URL = "http://localhost:4000/api/v1/activities/"
    const [ data, setData ] = useState()
    const { id } = useParams()

    useEffect(() => {
        axios({
            url: URL + id,
            method: "GET",
        }).then(request => { 
            setData(request.data)
        })
    }, [ id ])

    console.log(data);
    return ( 
        data ?
        <main className="text-Secondary font-semibold">
            <figure className="relative">
                <img src={ data.asset.url } alt="" className="w-full h-[60vh] object-cover"/>
                { context.isLoggedIn && 
                    <AddToActivity id={ data.id}/>
                }
            </figure>

            <div className="p-[20px]">
                <h1 className="text-24">{ data.name }</h1>
                <p>{ data.minAge } - { data.maxAge } år</p>
                <br />
                <p>{ data.weekday } { data.time }</p>
                <br />
                <p>{ data.description }</p>
            </div>

            <Navigation />
        </main> : <p>Loading..</p>
     );
}
 
export default ActivityDetails;