import React, { useState, useContext, useEffect } from 'react';
import { ContextState } from "../../Context/Context";
import axios from "axios";
/* import { Link } from 'react-router-dom'; */

const AddToActivity = (props) => {
    const context = useContext( ContextState )
    const URL = `http://localhost:4000/api/v1/users/${context.userID}`

    const [ data, setData ] = useState()
    const [ checkSingedUp, setCheckSingedUp ] = useState(false)
    const [ isWrongtAge, setIsWrongAge ] = useState(null)

    const isSignedUp = data && data.activities.some(activities => activities.id === props.id)

    /* Check if the user is signed in */
    useEffect(() => {
        axios({
            url: URL,
            method: "GET",
            headers: {
                Authorization: `Bearer ${context.token}`
            },
        }).then(request => { 
            setData(request.data)
        })
    }, [ checkSingedUp, URL, context.token ])

    /* Post the class workout to the user on click */
    const SignUp = () => {        
        if ( data.age >= props.minAge  && data.age <= props.maxAge) {
            fetch(`${URL}/activities/${props.id}`, {
                method:  isSignedUp ?  "DELETE" : "POST",
                headers: {
                    Authorization: `Bearer ${context.token}`
                },
                body: "",
            })
            .then((response) => isSignedUp ? response.text() : response.json())
            .then(() => {
                setCheckSingedUp(!checkSingedUp)
            })
            .catch((err) => {
                console.log('Error', err.message);
            })
        } else {
            setIsWrongAge(true)
        }
    }

    return ( 
        <div className="absolute bottom-[10%] right-[10%]">
            { isWrongtAge && 
                <p className="w-[210px] right-[10%] mb-[5px] py-[15px] object-center text-center bg-Primary rounded-[10px] shadow-lg">Du er ikke i rette aldersgruppe</p>
            }
            <button onClick={SignUp} className="w-[210px] px-[75px] py-[15px] object-center bg-Primary rounded-[10px] shadow-lg"> 
                {isSignedUp ? "Forlad" : "Tilmeld"}
            </button>
        </div>
     );
}
 
export default AddToActivity;