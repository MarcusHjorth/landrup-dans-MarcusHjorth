import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

import Navigation from "../Templates/Navigation";

const ActivityDetails = () => {
    const URL = "http://localhost:4000/api/v1/activities/"
    const [ item, setItem ] = useState()
    const { id } = useParams()

    useEffect(() => {
        axios({
            url: URL + id,
            method: "GET",
        }).then(request => { 
            setItem(request.data)
        })
    }, [ id ])

    console.log(item);
    return ( 
        item ?
        <main className="text-Secondary font-semibold">
            <figure className="relative">
                <img src={ item.asset.url } alt="" className="w-full h-[60vh] object-cover"/>
                <button className="absolute bottom-[10%] right-[10%] px-[75px] py-[15px] object-center bg-Primary rounded-[10px] shadow-lg">Tilmeld</button>
            </figure>

            <div className="p-[20px]">
                <h1 className="text-24">{ item.name }</h1>
                <p>{ item.minAge } - { item.maxAge } år</p>
                <br />
                <p>{ item.description }</p>
            </div>


            <Navigation />
        </main> : <p>Loading..</p>
     );
}
 
export default ActivityDetails;