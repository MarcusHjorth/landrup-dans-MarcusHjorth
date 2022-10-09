import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom"

import { ReactComponent as SearchBarIcon } from "../../Assets/SVG/SearchBarIcon.svg"

const SearchBar = () => {

    const [ data, setData ] = useState()
    const [ filteredData, setFilteredData ] = useState([])
    const [ noData, setNoData ] = useState(false)

      useEffect(() => {
          axios({
              url: "http://localhost:4000/api/v1/activities",
              method: "GET",
          }).then(request => { 
              setData(request.data)
            })
        },[])

         const handleFilter = (event) => {
            const search = event.target.value
            const newFilter = data.filter((value) => 
                value.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            )
            if ( search === "" ) {
                setFilteredData([])
                setNoData(false)

            } 
            /* else if ( newFilter.length === 0 ) {
                setNoData(true)

            }  */
            else {
                setFilteredData(newFilter)
                setNoData(false)
            }
        }


    return ( 
        <section className="my-[2rem]">
            <div className="realative flex flex-row items-center">
                <input type="text" placeholder="" className="outline-none bg-Secondary bg-opacity-30 w-full p-[10px]"
                    onChange={handleFilter}
                />
                <SearchBarIcon className="absolute right-[40px]" />
            </div>

            {filteredData.length !== 0 && (
                <div className="bg-Secondary bg-opacity-30 p-[10px] my-[5px]">
                    {noData && <p>
                            Det blev ikke fundet nogle aktiviteter. Prøv at søge efter noget andet
                        </p>}
                    {filteredData && filteredData.map((item, i) => (
                        <Link key={ i } to={`/Activity/${item.id}`}>
                            <li className="list-none flex flex-row items-center my-[5px]">
                                <img src={item.asset.url} alt="" className="w-[4rem] h-[4rem] mr-[10px] object-cover"/>
                                <p>{ item.name }</p>
                            </li>
                        </Link>
                    ))}
                </div>
                )}
        </section>
     );
}
 
export default SearchBar;