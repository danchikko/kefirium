import { Navigate } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"
import SignIn from "./signIn/SignIn"

const ProtectedRoute = ({children}) => {
    const {user} = UserAuth()

    if(!user) {
        return (
            <>
            <Navigate to="/" />
            <SignIn /></>
        )
    }

    return children;
}

export default ProtectedRoute;