import { useDispatch } from "react-redux"
import { Navigate } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"

const ProtectedRoute = ({children}) => {
    const {user} = UserAuth()
    const dispatch = useDispatch()

    if(!user) {
        return (
            <Navigate to='/' />
        )
    }

    return children;
}

export default ProtectedRoute;