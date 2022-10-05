import { createContext, useState, useMemo } from "react";

const ContextState = createContext()

const StateProvider = ({children}) => {

    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ isLoggedIn, setIsLoggedIn ] = useState(false)
    const [ isLoading, setIsLoading ] = useState(false)
    const [ token, setToken ] = useState("")
    const [ userID, setUserID ] = useState(null)


    //values
    const value = useMemo(() => ({
            username,
            password,
            isLoggedIn,
            isLoading,
            token,
            userID,

            setUsername,
            setPassword,
            setIsLoggedIn,
            setIsLoading,
            setToken,
            setUserID,
        }), [username, password, isLoggedIn, isLoading, token, userID]
    );

    return (
        <ContextState.Provider value={value}>
            {children}
        </ContextState.Provider>
    )
}


export { ContextState, StateProvider }
