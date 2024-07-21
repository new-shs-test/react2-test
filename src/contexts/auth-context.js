import {createContext, useContext, useEffect, useState} from "react";


export const LoggedInContext = createContext(undefined)


export function LoggedInProvider({children}) {
    const [user, setUser] = useState(undefined)

    useEffect(() => {
        setUser(JSON.parse(sessionStorage.getItem("user")))
        console.log(`AuthnContainer: ${user}` )
    }, []);


    return (
        <LoggedInContext.Provider value={{user, setUser}}>
            {children}
        </LoggedInContext.Provider>
    )
}

export function useLoggedIn() {
    return useContext(LoggedInContext)
}
