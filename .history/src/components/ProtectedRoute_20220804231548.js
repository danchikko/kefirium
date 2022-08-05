import { Navigate } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"
import MainPage from "../pages/main-page"
import SignIn from "./signIn/SignIn"

const ProtectedRoute = ({children}) => {
    const {user} = UserAuth()

    if(!user) {
        return (
            <>
            <MainPage />
            <SignIn />
            </>
        )
    }

    return children;
}

export default ProtectedRoute;