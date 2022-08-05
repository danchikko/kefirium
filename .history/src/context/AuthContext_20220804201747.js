import { createContext } from "react";
import {}

const UserContext = createContext()

export const AuthContextProvider = ({children}) => {
    return (
        <UserContext.Provider value={}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return UserContext(UserContext)
}