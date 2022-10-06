import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";
import { ContextState } from "../Context/Context";
import { useNavigate, useParams } from 'react-router-dom';
import Title from '../Components/Title';
import Navigation from '../Templates/Navigation';

const CalendarAdmin = (props) => {
    const context = useContext( ContextState )
    const [ data, setData ] = useState()
    const navigate = useNavigate();
    const { id } = useParams()
    
    const URL = `http://localhost:4000/api/v1/users/${ context.userID }/roster/${ id }`

    useEffect(() => {
        if (context.userRole === "instructor") {
            axios({
                url: URL,
                method: "GET",
                headers: {
                Authorization: `Bearer ${context.token}`
                },
            }).then(request => {
                setData(request.data) 
            })
        } else {
            navigate('/Activities', { replace: true });
        }
    }, [ context.userID, context.userRole, context.token, navigate, id, URL ])
    
    console.log(props);
    console.log(URL);
    console.log(data);

    return ( 
        <main className="h-screen">
            <div className="p-[20px]">

                <Title text={props.name} />
                CalenderAdmin
            </div>
        <Navigation />
        </main>
     );
}
 
export default CalendarAdmin;