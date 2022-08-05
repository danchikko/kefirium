import { useDispatch } from "react-redux"
import { Navigate } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"
import { modalSignIn } from "../store/registerSlice"

const ProtectedRoute = ({children}) => {
    const dispatch = useDispatch()
    const {user} = UserAuth()

    if(!user) {
      return {
        <Navigate
      }
    }

    return children;
}

export default ProtectedRoute;