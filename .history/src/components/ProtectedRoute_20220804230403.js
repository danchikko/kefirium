import { useDispatch } from "react-redux"
import { Navigate } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"
import { modalSignIn } from "../store/registerSlice"

const ProtectedRoute = ({children}) => {
    const {user} = UserAuth()
    const dispatch = useDispatch()


    if(!user) {
        dispatch={modalSignIn}

        <Navigate to="/" />
    }

    return children;
}

export default ProtectedRoute;