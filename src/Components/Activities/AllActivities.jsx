import { Link } from "react-router-dom"
import React, { useState, useEffect } from "react"
import axios from "axios"

const AllActivities = () => {
    const URL = "http://localhost:4000/api/v1/activities"
    const [ items, setItems ] = useState()
    
      useEffect(() => {
          axios({
              url: URL,
              method: "GET",
          }).then(request => { 
              setItems(request.data)
          })
      }, [ ])

      console.log(items && items);
    return ( 
        <section className="mb-[80px]">
            {items && Object.values(items).map((item, i, id) => (
                <Link to={`/Activity/${item.id}`}>
                    <article key={ i } className="text-white mb-[2rem] flex flex-col justify-center items-center w-full ">
                        <figure className="max-w-[22rem] max-h-[22rem] rounded-[30px] rounded-br-none relative overflow-hidden">
                            <img src={item.asset.url} alt="" className="object-top" />
                            <div className="absolute bottom-0 rounded-tr-[30px] p-[20px] text-Dark bg-Theme bg-opacity-80 w-full h-[30%]">
                                <h1>{item.name}</h1>
                                <p>{ item.minAge } - { item.maxAge } år</p>
                            </div>
                        </figure>
                    </article>
                </Link>
                ))} 
        </section>
     );
}
 
export default AllActivities;