import { useDispatch } from "react-redux"
import { Navigate } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"
import MainPage from "../pages/main-page"
import { modalSignIn } from "../store/registerSlice"

const ProtectedRoute = ({children}) => {
    const {user} = UserAuth()
    const dispatch = useDispatch()

    if(!user) {
        return (
            <Navigate />
        )
    }

    return children;
}

export default ProtectedRoute;