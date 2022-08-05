import { UserAuth } from "../context/AuthContext"

const ProtectedRoute = ({children}) => {
    const {user} = UserAuth()

    if(!user) {
        return 
    }

    return 
}