import { createContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

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