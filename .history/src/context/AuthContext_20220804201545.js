import { createContext } from "react";

const UserContext = createContext()

export const AuthContextProvider = ({children}) => {
    return (
        <UserContext.Provider value={}>
            
        </UserContext.Provider>
    )
}